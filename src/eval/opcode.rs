//! Module defining opcodes for evaluating an expression.

use super::{EvalContext, EvalState, GlobalRuntimeState};
use crate::ast::{BinaryExpr, Expr, FnCallExpr, Ident, OpAssignment};
use crate::engine::{KEYWORD_FN_PTR_CALL, KEYWORD_THIS, OP_CONCAT};
use crate::{Dynamic, Engine, Module, Position, RhaiResult, Scope, StaticVec, ERR};
#[cfg(feature = "no_std")]
use std::prelude::v1::*;
use std::{fmt, mem};

pub const MAX_INLINE: usize = 8;

pub enum OpCode<'a> {
    Do(&'a Expr),
    And(&'a BinaryExpr),
    Or(&'a BinaryExpr),
    FnCall(&'a Expr, bool),
    #[cfg(not(feature = "no_index"))]
    Array(&'a Expr),
    #[cfg(not(feature = "no_object"))]
    Map(&'a Expr),
    InterpolateString(&'a Expr),
    MustBeBool(Position),
}

impl fmt::Debug for OpCode<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Do(_) => f.debug_tuple("Do").finish(),
            Self::And(_) => f.debug_tuple("And").finish(),
            Self::Or(_) => f.debug_tuple("Or").finish(),
            Self::FnCall(_, _) => f.debug_tuple("FnCall").finish(),
            #[cfg(not(feature = "no_index"))]
            Self::Array(_) => f.debug_tuple("Array").finish(),
            #[cfg(not(feature = "no_object"))]
            Self::Map(_) => f.debug_tuple("Map").finish(),
            Self::InterpolateString(_) => f.debug_tuple("InterpolateString").finish(),
            Self::MustBeBool(pos) => f.debug_tuple("MustBeBool").field(pos).finish(),
        }
    }
}

pub struct ExprOpCodeEngine<'a> {
    current_expr: &'a Expr,
    opcodes: smallvec::SmallVec<[OpCode<'a>; MAX_INLINE]>,
    stack: smallvec::SmallVec<[Dynamic; MAX_INLINE]>,
}

impl<'a> ExprOpCodeEngine<'a> {
    #[inline(always)]
    pub const fn new(root: &'a Expr) -> Self {
        Self {
            current_expr: root,
            opcodes: smallvec::SmallVec::new_const(),
            stack: smallvec::SmallVec::new_const(),
        }
    }

    #[inline]
    pub fn run(
        &mut self,
        engine: &Engine,
        scope: &mut Scope,
        global: &mut GlobalRuntimeState,
        state: &mut EvalState,
        lib: &[&Module],
        this_ptr: &mut Option<&mut Dynamic>,
        level: usize,
    ) -> RhaiResult {
        loop {
            let expr = self.current_expr;

            // Coded this way for better branch prediction.
            // Popular branches are lifted out of the `match` statement into their own branches.
            if let Expr::FnCall(x, pos) = expr {
                // Function calls should account for a relatively larger portion of expressions because
                // binary operators are also function calls.

                if x.args.is_empty() || x.is_qualified() || x.name == KEYWORD_FN_PTR_CALL {
                    let value = engine
                        .eval_fn_call_expr(scope, global, state, lib, this_ptr, x, *pos, level)?;
                    self.stack.push(value);
                } else {
                    let skip_first = x.args.len() > 0 && x.args[0].is_variable_access(false);
                    let skip = if skip_first { 2 } else { 1 };

                    self.opcodes.push(OpCode::FnCall(expr, skip_first));
                    x.args
                        .iter()
                        .skip(skip)
                        .rev()
                        .for_each(|e| self.opcodes.push(OpCode::Do(e)));
                    self.current_expr = &x.args[skip - 1];
                    continue;
                }
            } else if let Expr::Variable(index, var_pos, x) = expr {
                // Then variable access.
                // We shouldn't do this for too many variants because, soon or later, the added comparisons
                // will cost more than the mis-predicted `match` branch.

                let value = if index.is_none() && x.0.is_none() && x.2 == KEYWORD_THIS {
                    this_ptr
                        .as_deref()
                        .cloned()
                        .ok_or_else(|| Box::new(ERR::ErrorUnboundThis(*var_pos)))?
                } else {
                    engine
                        .search_namespace(scope, global, state, lib, this_ptr, expr)
                        .map(|(val, _)| val.take_or_clone())?
                };
                self.stack.push(value);
            } else {
                match expr {
                    Expr::DynamicConstant(x, _) => self.stack.push(x.as_ref().clone()),
                    Expr::IntegerConstant(x, _) => self.stack.push((*x).into()),
                    #[cfg(not(feature = "no_float"))]
                    Expr::FloatConstant(x, _) => self.stack.push((*x).into()),
                    Expr::StringConstant(x, _) => self.stack.push(x.clone().into()),
                    Expr::CharConstant(x, _) => self.stack.push((*x).into()),
                    Expr::BoolConstant(x, _) => self.stack.push((*x).into()),
                    Expr::Unit(_) | Expr::Stack(_, _) => self.stack.push(Dynamic::UNIT),

                    Expr::And(x, _) => {
                        self.opcodes.push(OpCode::And(x));
                        self.current_expr = &x.lhs;
                        continue;
                    }
                    Expr::Or(x, _) => {
                        self.opcodes.push(OpCode::Or(x));
                        self.current_expr = &x.lhs;
                        continue;
                    }

                    #[cfg(not(feature = "no_index"))]
                    Expr::Array(x, _) if x.is_empty() => {
                        self.stack.push(Dynamic::from_array(crate::Array::new()));
                    }
                    #[cfg(not(feature = "no_index"))]
                    Expr::Array(x, _) => {
                        self.opcodes.push(OpCode::Array(expr));
                        x.iter()
                            .skip(1)
                            .rev()
                            .for_each(|e| self.opcodes.push(OpCode::Do(e)));
                        self.current_expr = &x[0];
                        continue;
                    }

                    #[cfg(not(feature = "no_index"))]
                    Expr::Map(x, _) if x.0.is_empty() => {
                        self.stack.push(Dynamic::from_map(x.1.clone()));
                    }
                    #[cfg(not(feature = "no_object"))]
                    Expr::Map(x, _) => {
                        self.opcodes.push(OpCode::Map(expr));
                        x.0.iter()
                            .skip(1)
                            .rev()
                            .for_each(|(_, e)| self.opcodes.push(OpCode::Do(e)));
                        self.current_expr = &x.0[0].1;
                        continue;
                    }

                    // `... ${...} ...`
                    Expr::InterpolatedString(x, _) => {
                        self.opcodes.push(OpCode::InterpolateString(expr));
                        x.iter()
                            .skip(1)
                            .rev()
                            .for_each(|e| self.opcodes.push(OpCode::Do(e)));
                        self.current_expr = &x[0];
                        continue;
                    }

                    Expr::Custom(custom, _) => {
                        let expressions: StaticVec<_> =
                            custom.inputs.iter().map(Into::into).collect();
                        let key_token = custom.tokens.first().unwrap();
                        let custom_def = engine.custom_syntax.get(key_token).unwrap();
                        let mut context = EvalContext {
                            engine,
                            scope,
                            global,
                            state,
                            lib,
                            this_ptr,
                            level,
                        };

                        let result = (custom_def.func)(&mut context, &expressions);

                        let result = engine.check_return_value(result, expr.position())?;

                        self.stack.push(result);
                    }

                    Expr::Stmt(x) if x.is_empty() => self.stack.push(Dynamic::UNIT),
                    Expr::Stmt(x) => {
                        let value = engine
                            .eval_stmt_block(scope, global, state, lib, this_ptr, x, true, level)?;
                        self.stack.push(value);
                    }

                    #[cfg(not(feature = "no_index"))]
                    Expr::Index(_, _, _) => {
                        let value = engine.eval_dot_index_chain(
                            scope, global, state, lib, this_ptr, expr, level, None,
                        )?;
                        self.stack.push(value);
                    }

                    #[cfg(not(feature = "no_object"))]
                    Expr::Dot(_, _, _) => {
                        let value = engine.eval_dot_index_chain(
                            scope, global, state, lib, this_ptr, expr, level, None,
                        )?;
                        self.stack.push(value);
                    }

                    _ => todo!(),
                }
            }

            // Get the next opcode
            self.current_expr = loop {
                // If no more opcodes, then return the final result
                if self.opcodes.is_empty() {
                    assert_eq!(self.stack.len(), 1);
                    return Ok(self.stack.pop().unwrap());
                }

                let next_opcode = self.opcodes.last().unwrap();

                // Coded this way for better branch prediction.
                // Popular branches are lifted out of the `match` statement into their own branches.

                if let OpCode::Do(_) = next_opcode {
                    match self.opcodes.pop().unwrap() {
                        OpCode::Do(e) => break e,
                        op => unreachable!("`ExprOpCode::Do` expected but gets {:?}", op),
                    }
                } else if let OpCode::FnCall(_, _) = next_opcode {
                    // We shouldn't do this for too many variants because, soon or later, the added comparisons
                    // will cost more than the mis-predicted `match` branch.

                    let (
                        FnCallExpr {
                            name,
                            capture_parent_scope: capture,
                            hashes,
                            args,
                            constants,
                            ..
                        },
                        pos,
                        skip_first,
                    ) = match self.opcodes.pop().unwrap() {
                        OpCode::FnCall(Expr::FnCall(x, pos), skip_first) => {
                            (x.as_ref(), *pos, skip_first)
                        }
                        op => unreachable!("`ExprOpCode::FnCall` expected but gets {:?}", op),
                    };

                    let offset = self.stack.len() - (args.len() - if skip_first { 1 } else { 0 });
                    let stack = &mut self.stack[offset..];

                    let first_expr;
                    let first = if skip_first {
                        args.get(0)
                    } else {
                        first_expr =
                            Expr::from_dynamic(mem::take(&mut stack[0]), args[0].position());
                        Some(&first_expr)
                    };

                    let arg_exprs: StaticVec<_> = args
                        .iter()
                        .skip(1)
                        .zip(stack.iter_mut().skip(if skip_first { 0 } else { 1 }))
                        .map(|(arg, value)| match arg {
                            e @ Expr::Stack(_, _) => e.clone(),
                            _ => Expr::from_dynamic(mem::take(value), arg.position()),
                        })
                        .collect();

                    // Normal function call
                    let result = engine.make_function_call(
                        scope, global, state, lib, this_ptr, name, first, &arg_exprs, constants,
                        *hashes, pos, *capture, level,
                    )?;

                    self.stack.truncate(offset);
                    self.stack.push(result);
                } else {
                    match self.opcodes.pop().unwrap() {
                        OpCode::And(e) => {
                            let lhs = self.stack.pop().unwrap().as_bool().map_err(|typ| {
                                engine.make_type_mismatch_err::<bool>(typ, e.lhs.position())
                            })?;

                            if !lhs {
                                self.stack.push(Dynamic::FALSE);
                            } else {
                                self.opcodes.push(OpCode::MustBeBool(e.rhs.position()));
                                break &e.rhs;
                            }
                        }
                        OpCode::Or(e) => {
                            let lhs = self.stack.pop().unwrap().as_bool().map_err(|typ| {
                                engine.make_type_mismatch_err::<bool>(typ, e.lhs.position())
                            })?;

                            if lhs {
                                self.stack.push(Dynamic::TRUE);
                            } else {
                                self.opcodes.push(OpCode::MustBeBool(e.rhs.position()));
                                break &e.rhs;
                            }
                        }
                        #[cfg(not(feature = "no_index"))]
                        OpCode::Array(e) => {
                            let items = match e {
                                Expr::Array(x, _) => x.as_ref(),
                                _ => unreachable!("`Expr::Array` expected but gets {:?}", e),
                            };
                            let offset = self.stack.len() - items.len();
                            let stack = &mut self.stack[offset..];
                            let mut arr =
                                Dynamic::from_array(crate::Array::with_capacity(items.len()));

                            #[cfg(not(feature = "unchecked"))]
                            let mut sizes = (0, 0, 0);

                            for (_x, item) in stack.iter_mut().enumerate() {
                                let value = mem::take(item);

                                #[cfg(not(feature = "unchecked"))]
                                let val_sizes = Engine::calc_data_sizes(&value, true);

                                arr.write_lock::<crate::Array>()
                                    .expect("`Array`")
                                    .push(value);

                                #[cfg(not(feature = "unchecked"))]
                                if engine.has_data_size_limit() {
                                    sizes = (
                                        sizes.0 + val_sizes.0,
                                        sizes.1 + val_sizes.1,
                                        sizes.2 + val_sizes.2,
                                    );
                                    engine.raise_err_if_over_data_size_limit(
                                        sizes,
                                        items[_x].position(),
                                    )?;
                                }
                            }

                            self.stack.truncate(offset);
                            self.stack.push(arr);
                        }
                        #[cfg(not(feature = "no_object"))]
                        OpCode::Map(e) => {
                            let (items, mut map) = match e {
                                Expr::Map(x, _) => (x.0.as_ref(), Dynamic::from_map(x.1.clone())),
                                _ => unreachable!("`Expr::Map` expected but gets {:?}", e),
                            };
                            let offset = self.stack.len() - items.len();
                            let stack = &mut self.stack[offset..];

                            #[cfg(not(feature = "unchecked"))]
                            let mut sizes = (0, 0, 0);

                            for (_x, ((Ident { name, .. }, _), item)) in
                                items.iter().zip(stack.iter_mut()).enumerate()
                            {
                                let key = name.clone();
                                let value = mem::take(item);

                                #[cfg(not(feature = "unchecked"))]
                                let val_sizes = Engine::calc_data_sizes(&value, true);

                                map.write_lock::<crate::Map>()
                                    .expect("`Map`")
                                    .insert(key, value);

                                #[cfg(not(feature = "unchecked"))]
                                if engine.has_data_size_limit() {
                                    sizes = (
                                        sizes.0 + val_sizes.0,
                                        sizes.1 + val_sizes.1,
                                        sizes.2 + val_sizes.2,
                                    );
                                    engine.raise_err_if_over_data_size_limit(
                                        sizes,
                                        items[_x].1.position(),
                                    )?;
                                }
                            }

                            self.stack.truncate(offset);
                            self.stack.push(map);
                        }
                        OpCode::InterpolateString(e) => {
                            let (segments, mut pos) = match e {
                                Expr::InterpolatedString(x, pos) => (x.as_ref(), *pos),
                                _ => unreachable!(
                                    "`Expr::InterpolatedString` expected but gets {:?}",
                                    e
                                ),
                            };
                            let offset = self.stack.len() - segments.len();
                            let stack = &mut self.stack[offset..];
                            let mut result: Dynamic = engine.const_empty_string().into();

                            for (x, item) in stack.iter_mut().enumerate() {
                                let item = mem::take(item);

                                engine
                                    .eval_op_assignment(
                                        global,
                                        state,
                                        lib,
                                        Some(OpAssignment::new(OP_CONCAT)),
                                        pos,
                                        &mut (&mut result).into(),
                                        ("", Position::NONE),
                                        item,
                                    )
                                    .map_err(|err| err.fill_position(segments[x].position()))?;

                                pos = segments[x].position();
                            }

                            self.stack.truncate(offset);
                            self.stack.push(result);
                        }
                        OpCode::MustBeBool(pos) => {
                            let _ =
                                self.stack.last().unwrap().as_bool().map_err(|typ| {
                                    engine.make_type_mismatch_err::<bool>(typ, pos)
                                })?;
                        }
                        _ => unreachable!(""),
                    }
                }
            };
        }
    }
}
