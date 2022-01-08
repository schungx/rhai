//! Module defining opcodes for evaluating an expression.

use super::{EvalContext, EvalState, GlobalRuntimeState};
use crate::ast::{BinaryExpr, Expr, FnCallExpr, OpAssignment};
use crate::engine::{KEYWORD_FN_PTR_CALL, KEYWORD_THIS, OP_CONCAT};
use crate::{Dynamic, Engine, Module, Position, RhaiResult, Scope, StaticVec, ERR};
#[cfg(feature = "no_std")]
use std::prelude::v1::*;
use std::{fmt, mem};

/// Maximum number of expression opcodes to keep inline.
pub const MAX_EXPR_INLINE: usize = 4;

/// Opcodes for [`AST`][crate::AST] evaluation.
pub enum OpCode<'a> {
    /// Evaluate an [`Expr`].
    Eval(&'a Expr),
    /// Evaluate the RHS of an [`Expr::And`][Expr::And].
    /// Result of the LHS is on the stack.
    And(&'a BinaryExpr),
    /// Evaluate the RHS of an [`Expr::Or`][Expr::Or].
    /// Result of the LHS is on the stack.
    Or(&'a BinaryExpr),
    /// Evaluate an [`Expr::FnCall`][Expr::FnCall].
    /// All argument values (possibly except the first one) are on the stack.
    ///
    /// If the boolean is `true`, then the first argument is not evaluated.
    FnCall(&'a Expr, bool),
    #[cfg(not(feature = "no_index"))]
    /// Build an [`Array`] via [`Expr::Array`][Expr::Array].
    /// All array items are on the stack.
    Array(&'a Expr),
    #[cfg(not(feature = "no_object"))]
    /// Build a [`Map`] via [`Expr::Map`][Expr::Map].
    /// All object map items are on the stack.
    Map(&'a Expr),
    /// Build a string via [`Expr::InterpolatedString`][Expr::InterpolatedString].
    /// All string segments are on the stack.
    InterpolateString(&'a Expr),
    /// Raise an error if the value on top of the stack is not `bool`.
    /// This is mainly used for conditionals.
    MustBeBool(Position),
}

impl fmt::Debug for OpCode<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Eval(_) => f.debug_tuple("Eval").finish(),
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

/// Engine to evaluate [opcodes][`OpCode`] for an [`Expr`].
pub struct ExprOpCodeEngine<'a> {
    /// Current expression being evaluated.
    current_expr: &'a Expr,
    /// Stack of [opcodes][`OpCode`] to be evaluated.
    opcodes: smallvec::SmallVec<[OpCode<'a>; MAX_EXPR_INLINE]>,
    /// Results stack.
    stack: smallvec::SmallVec<[Dynamic; MAX_EXPR_INLINE]>,
}

impl<'a> ExprOpCodeEngine<'a> {
    /// Create an [`ExprOpCodeEngine`] from the [`Expr`] to be evaluated.
    #[inline(always)]
    pub const fn new(root: &'a Expr) -> Self {
        Self {
            current_expr: root,
            opcodes: smallvec::SmallVec::new_const(),
            stack: smallvec::SmallVec::new_const(),
        }
    }
    /// Evaluate this [`Expr`] using [opcodes][`OpCode`].
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
            // Evaluate the current expression.
            let expr = self.current_expr;

            // Coded this way for better branch prediction.
            // Popular branches are lifted out of the `match` statement into their own branches.
            if let Expr::FnCall(x, pos) = expr {
                // Function calls should account for a relatively larger portion of expressions because
                // binary operators are also function calls.
                // They also account for the majority of deeply-nested expressions.

                // Defer to standard evaluation if:
                // 1) the function has no parameters - thus no more nesting
                // 2) the function is qualified - again no more nesting
                // 3) the function is `call` - which needs the expression for the _second_ parameter
                // 4) the function call has no arguments that are nested
                if x.args.is_empty()
                    || x.is_qualified()
                    || x.name == KEYWORD_FN_PTR_CALL
                    || !x.args.iter().any(|e| match e {
                        Expr::FnCall(_, _) | Expr::And(_, _) | Expr::Or(_, _) => true,
                        _ => false,
                    })
                {
                    let value = engine
                        .eval_fn_call_expr(scope, global, state, lib, this_ptr, x, *pos, level)?;
                    self.stack.push(value);
                } else {
                    // If the first argument is a simple variable access, skip it because it may be
                    // converted into a method call to avoid cloning.
                    let skip_first = x.args[0].is_variable_access(false);
                    let skip = if skip_first { 1 } else { 0 };

                    // Function call
                    self.opcodes.push(OpCode::FnCall(expr, skip_first));

                    if x.args.len() > skip {
                        // Argument expressions
                        x.args
                            .iter()
                            .skip(skip + 1)
                            .rev()
                            .for_each(|e| self.opcodes.push(OpCode::Eval(e)));

                        self.current_expr = &x.args[skip];
                        continue;
                    }
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
                // Evaluate the current expression via `match`
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
                            .for_each(|e| self.opcodes.push(OpCode::Eval(e)));
                        self.current_expr = &x[0];
                        continue;
                    }

                    #[cfg(not(feature = "no_object"))]
                    Expr::Map(x, _) if x.0.is_empty() => {
                        self.stack.push(Dynamic::from_map(x.1.clone()));
                    }
                    #[cfg(not(feature = "no_object"))]
                    Expr::Map(x, _) => {
                        self.opcodes.push(OpCode::Map(expr));
                        x.0.iter()
                            .skip(1)
                            .rev()
                            .for_each(|(_, e)| self.opcodes.push(OpCode::Eval(e)));
                        self.current_expr = &x.0[0].1;
                        continue;
                    }

                    // `... ${...} ...`
                    Expr::InterpolatedString(x, _) => {
                        self.opcodes.push(OpCode::InterpolateString(expr));
                        x.iter()
                            .skip(1)
                            .rev()
                            .for_each(|e| self.opcodes.push(OpCode::Eval(e)));
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

                    _ => unreachable!("unknown expression: {:?}", expr),
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

                // Evaluations should account for a majority of opcodes...
                if let OpCode::Eval(_) = next_opcode {
                    match self.opcodes.pop().unwrap() {
                        OpCode::Eval(e) => break e,
                        op => unreachable!("`ExprOpCode::Eval` expected but gets {:?}", op),
                    }
                } else if let OpCode::FnCall(_, _) = next_opcode {
                    // Function calls should be the next more popular, as they account for the
                    // majority of deeply-nested expressions.

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
                        first_expr = match &args[0] {
                            e @ Expr::Stack(_, _) => e.clone(),
                            e => Expr::from_dynamic(mem::take(&mut stack[0]), e.position()),
                        };
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
                    // Run the current opcode via `match`
                    match self.opcodes.pop().unwrap() {
                        OpCode::And(e) => {
                            if !self.stack.pop().unwrap().as_bool().map_err(|typ| {
                                engine.make_type_mismatch_err::<bool>(typ, e.lhs.position())
                            })? {
                                self.stack.push(Dynamic::FALSE);
                            } else {
                                self.opcodes.push(OpCode::MustBeBool(e.rhs.position()));
                                break &e.rhs;
                            }
                        }
                        OpCode::Or(e) => {
                            if self.stack.pop().unwrap().as_bool().map_err(|typ| {
                                engine.make_type_mismatch_err::<bool>(typ, e.lhs.position())
                            })? {
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

                            for (_x, ((crate::ast::Ident { name, .. }, _), item)) in
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
                        op => unreachable!("unknown opcode: {:?}", op),
                    }
                }
            };
        }
    }
}
