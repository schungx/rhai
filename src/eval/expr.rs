//! Module defining functions for evaluating an expression.

use super::{EvalContext, EvalState, GlobalRuntimeState, Target};
use crate::ast::{Expr, FnCallExpr, OpAssignment};
use crate::engine::{KEYWORD_THIS, OP_CONCAT};
use crate::types::dynamic::AccessMode;
use crate::{Dynamic, Engine, Module, Position, RhaiResult, RhaiResultOf, Scope, StaticVec, ERR};
use std::num::NonZeroUsize;
#[cfg(feature = "no_std")]
use std::prelude::v1::*;

impl Engine {
    /// Search for a module within an imports stack.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    #[must_use]
    pub(crate) fn search_imports(
        &self,
        global: &GlobalRuntimeState,
        state: &mut EvalState,
        namespace: &crate::module::Namespace,
    ) -> Option<crate::Shared<Module>> {
        let root = &namespace[0].name;

        // Qualified - check if the root module is directly indexed
        let index = if state.always_search_scope {
            None
        } else {
            namespace.index()
        };

        if let Some(index) = index {
            let offset = global.num_imports() - index.get();
            Some(global.get_shared_import(offset).unwrap())
        } else {
            global
                .find_import(root)
                .map(|n| global.get_shared_import(n).unwrap())
                .or_else(|| self.global_sub_modules.get(root).cloned())
        }
    }

    /// Search for a variable within the scope or within imports,
    /// depending on whether the variable name is namespace-qualified.
    pub(crate) fn search_namespace<'s>(
        &self,
        scope: &'s mut Scope,
        global: &mut GlobalRuntimeState,
        state: &mut EvalState,
        lib: &[&Module],
        this_ptr: &'s mut Option<&mut Dynamic>,
        expr: &Expr,
    ) -> RhaiResultOf<(Target<'s>, Position)> {
        match expr {
            Expr::Variable(Some(_), _, _) => {
                self.search_scope_only(scope, global, state, lib, this_ptr, expr)
            }
            Expr::Variable(None, _var_pos, v) => match v.as_ref() {
                // Normal variable access
                #[cfg(not(feature = "no_module"))]
                (_, None, _) => self.search_scope_only(scope, global, state, lib, this_ptr, expr),
                #[cfg(feature = "no_module")]
                (_, (), _) => self.search_scope_only(scope, global, state, lib, this_ptr, expr),

                // Qualified variable access
                #[cfg(not(feature = "no_module"))]
                (_, Some((namespace, hash_var)), var_name) => {
                    // foo:bar::baz::VARIABLE
                    if let Some(module) = self.search_imports(global, state, namespace) {
                        return match module.get_qualified_var(*hash_var) {
                            Ok(target) => {
                                let mut target = target.clone();
                                // Module variables are constant
                                target.set_access_mode(AccessMode::ReadOnly);
                                Ok((target.into(), *_var_pos))
                            }
                            Err(err) => Err(match *err {
                                ERR::ErrorVariableNotFound(_, _) => ERR::ErrorVariableNotFound(
                                    format!(
                                        "{}{}{}",
                                        namespace,
                                        crate::tokenizer::Token::DoubleColon.literal_syntax(),
                                        var_name
                                    ),
                                    namespace[0].pos,
                                )
                                .into(),
                                _ => err.fill_position(*_var_pos),
                            }),
                        };
                    }

                    // global::VARIABLE
                    #[cfg(not(feature = "no_function"))]
                    if namespace.len() == 1 && namespace[0].name == crate::engine::KEYWORD_GLOBAL {
                        if let Some(ref constants) = global.constants {
                            if let Some(value) =
                                crate::func::locked_write(constants).get_mut(var_name)
                            {
                                let mut target: Target = value.clone().into();
                                // Module variables are constant
                                target.set_access_mode(AccessMode::ReadOnly);
                                return Ok((target.into(), *_var_pos));
                            }
                        }

                        return Err(ERR::ErrorVariableNotFound(
                            format!(
                                "{}{}{}",
                                namespace,
                                crate::tokenizer::Token::DoubleColon.literal_syntax(),
                                var_name
                            ),
                            namespace[0].pos,
                        )
                        .into());
                    }

                    Err(ERR::ErrorModuleNotFound(namespace.to_string(), namespace[0].pos).into())
                }
            },
            _ => unreachable!("Expr::Variable expected but gets {:?}", expr),
        }
    }

    /// Search for a variable within the scope
    ///
    /// # Panics
    ///
    /// Panics if `expr` is not [`Expr::Variable`].
    pub(crate) fn search_scope_only<'s>(
        &self,
        scope: &'s mut Scope,
        global: &mut GlobalRuntimeState,
        state: &mut EvalState,
        lib: &[&Module],
        this_ptr: &'s mut Option<&mut Dynamic>,
        expr: &Expr,
    ) -> RhaiResultOf<(Target<'s>, Position)> {
        // Make sure that the pointer indirection is taken only when absolutely necessary.

        let (index, var_pos) = match expr {
            // Check if the variable is `this`
            Expr::Variable(None, pos, v) if v.0.is_none() && v.2 == KEYWORD_THIS => {
                return if let Some(val) = this_ptr {
                    Ok(((*val).into(), *pos))
                } else {
                    Err(ERR::ErrorUnboundThis(*pos).into())
                }
            }
            _ if state.always_search_scope => (0, expr.position()),
            Expr::Variable(Some(i), pos, _) => (i.get() as usize, *pos),
            Expr::Variable(None, pos, v) => (v.0.map(NonZeroUsize::get).unwrap_or(0), *pos),
            _ => unreachable!("Expr::Variable expected but gets {:?}", expr),
        };

        // Check the variable resolver, if any
        if let Some(ref resolve_var) = self.resolve_var {
            let context = EvalContext {
                engine: self,
                scope,
                global,
                state,
                lib,
                this_ptr,
                level: 0,
            };
            match resolve_var(
                expr.get_variable_name(true).expect("`Expr::Variable`"),
                index,
                &context,
            ) {
                Ok(Some(mut result)) => {
                    result.set_access_mode(AccessMode::ReadOnly);
                    return Ok((result.into(), var_pos));
                }
                Ok(None) => (),
                Err(err) => return Err(err.fill_position(var_pos)),
            }
        }

        let index = if index > 0 {
            scope.len() - index
        } else {
            // Find the variable in the scope
            let var_name = expr.get_variable_name(true).expect("`Expr::Variable`");
            scope
                .get_index(var_name)
                .ok_or_else(|| ERR::ErrorVariableNotFound(var_name.to_string(), var_pos))?
                .0
        };

        let val = scope.get_mut_by_index(index);

        Ok((val.into(), var_pos))
    }

    /// Evaluate a function call expression.
    pub(crate) fn eval_fn_call_expr(
        &self,
        scope: &mut Scope,
        global: &mut GlobalRuntimeState,
        state: &mut EvalState,
        lib: &[&Module],
        this_ptr: &mut Option<&mut Dynamic>,
        expr: &FnCallExpr,
        pos: Position,
        level: usize,
    ) -> RhaiResult {
        let FnCallExpr {
            name,
            #[cfg(not(feature = "no_module"))]
            namespace,
            capture_parent_scope: capture,
            hashes,
            args,
            constants,
            ..
        } = expr;

        #[cfg(not(feature = "no_module"))]
        if let Some(namespace) = namespace.as_ref() {
            // Qualified function call
            let hash = hashes.native;

            return self.make_qualified_function_call(
                scope, global, state, lib, this_ptr, namespace, name, args, constants, hash, pos,
                level,
            );
        }

        // Normal function call
        let (first_arg, args) = args.split_first().map_or_else(
            || (None, args.as_ref()),
            |(first, rest)| (Some(first), rest),
        );

        self.make_function_call(
            scope, global, state, lib, this_ptr, name, first_arg, args, constants, *hashes, pos,
            *capture, level,
        )
    }

    /// Evaluate an expression.
    //
    // # Implementation Notes
    //
    // Do not use the `?` operator within the main body as it makes this function return early,
    // possibly by-passing important cleanup tasks at the end.
    //
    // Errors that are not recoverable, such as system errors or safety errors, can use `?`.
    pub(crate) fn eval_expr(
        &self,
        scope: &mut Scope,
        global: &mut GlobalRuntimeState,
        state: &mut EvalState,
        lib: &[&Module],
        this_ptr: &mut Option<&mut Dynamic>,
        expr: &Expr,
        level: usize,
    ) -> RhaiResult {
        #[cfg(feature = "debugging")]
        let reset_debugger_command =
            self.run_debugger(scope, global, state, lib, this_ptr, expr.into(), level);

        // Coded this way for better branch prediction.
        // Popular branches are lifted out of the `match` statement into their own branches.

        // Function calls should account for a relatively larger portion of expressions because
        // binary operators are also function calls.
        if let Expr::FnCall(x, pos) = expr {
            #[cfg(feature = "debugging")]
            let reset_debugger =
                self.run_debugger_with_reset(scope, global, state, lib, this_ptr, expr, level)?;

            #[cfg(not(feature = "unchecked"))]
            self.inc_operations(&mut global.num_operations, expr.position())?;

            let result =
                self.eval_fn_call_expr(scope, global, state, lib, this_ptr, x, *pos, level);

            #[cfg(feature = "debugging")]
            global.debugger.reset_status(reset_debugger);

            return result;
        }

        // Then variable access.
        // We shouldn't do this for too many variants because, soon or later, the added comparisons
        // will cost more than the mis-predicted `match` branch.
        if let Expr::Variable(index, var_pos, x) = expr {
            #[cfg(feature = "debugging")]
            self.run_debugger(scope, global, state, lib, this_ptr, expr, level)?;

            #[cfg(not(feature = "unchecked"))]
            self.inc_operations(&mut global.num_operations, expr.position())?;

            let result = if index.is_none() && x.0.is_none() && x.2 == KEYWORD_THIS {
                this_ptr
                    .as_deref()
                    .cloned()
                    .ok_or_else(|| ERR::ErrorUnboundThis(*var_pos).into())
            } else {
                self.search_namespace(scope, global, state, lib, this_ptr, expr)
                    .map(|(val, _)| val.take_or_clone())
            };

            #[cfg(feature = "debugging")]
            global.debugger.activate(reset_debugger_command);

            return result;
        }

        #[cfg(feature = "debugging")]
        let reset_debugger =
            self.run_debugger_with_reset(scope, global, state, lib, this_ptr, expr, level)?;

        #[cfg(not(feature = "unchecked"))]
        self.inc_operations(&mut global.num_operations, expr.position())?;

        let result = match expr {
            // Constants
            Expr::DynamicConstant(x, _) => Ok(x.as_ref().clone()),
            Expr::IntegerConstant(x, _) => Ok((*x).into()),
            #[cfg(not(feature = "no_float"))]
            Expr::FloatConstant(x, _) => Ok((*x).into()),
            Expr::StringConstant(x, _) => Ok(x.clone().into()),
            Expr::CharConstant(x, _) => Ok((*x).into()),
            Expr::BoolConstant(x, _) => Ok((*x).into()),
            Expr::Unit(_) => Ok(Dynamic::UNIT),

            // `... ${...} ...`
            Expr::InterpolatedString(x, pos) => {
                let mut pos = *pos;
                let mut concat: Dynamic = self.const_empty_string().into();
                let mut result = Ok(Dynamic::UNIT);

                for expr in x.iter() {
                    let item =
                        match self.eval_expr(scope, global, state, lib, this_ptr, expr, level) {
                            Ok(r) => r,
                            err => {
                                result = err;
                                break;
                            }
                        };

                    if let Err(err) = self.eval_op_assignment(
                        global,
                        state,
                        lib,
                        Some(OpAssignment::new(OP_CONCAT)),
                        pos,
                        &mut (&mut concat).into(),
                        ("", Position::NONE),
                        item,
                    ) {
                        result = Err(err.fill_position(expr.position()));
                        break;
                    }

                    pos = expr.position();
                }

                result.map(|_| concat)
            }

            #[cfg(not(feature = "no_index"))]
            Expr::Array(x, _) => {
                let mut arr = crate::Array::with_capacity(x.len());
                let mut result = Ok(Dynamic::UNIT);

                #[cfg(not(feature = "unchecked"))]
                let mut sizes = (0, 0, 0);

                for item_expr in x.iter() {
                    let value = match self
                        .eval_expr(scope, global, state, lib, this_ptr, item_expr, level)
                    {
                        Ok(r) => r.flatten(),
                        err => {
                            result = err;
                            break;
                        }
                    };

                    #[cfg(not(feature = "unchecked"))]
                    let val_sizes = Self::calc_data_sizes(&value, true);

                    arr.push(value);

                    #[cfg(not(feature = "unchecked"))]
                    if self.has_data_size_limit() {
                        sizes = (
                            sizes.0 + val_sizes.0,
                            sizes.1 + val_sizes.1,
                            sizes.2 + val_sizes.2,
                        );
                        self.raise_err_if_over_data_size_limit(sizes, item_expr.position())?;
                    }
                }

                result.map(|_| arr.into())
            }

            #[cfg(not(feature = "no_object"))]
            Expr::Map(x, _) => {
                let mut map = x.1.clone();
                let mut result = Ok(Dynamic::UNIT);

                #[cfg(not(feature = "unchecked"))]
                let mut sizes = (0, 0, 0);

                for (crate::ast::Ident { name, .. }, value_expr) in x.0.iter() {
                    let key = name.as_str();
                    let value = match self
                        .eval_expr(scope, global, state, lib, this_ptr, value_expr, level)
                    {
                        Ok(r) => r.flatten(),
                        err => {
                            result = err;
                            break;
                        }
                    };

                    #[cfg(not(feature = "unchecked"))]
                    let val_sizes = Self::calc_data_sizes(&value, true);

                    *map.get_mut(key).unwrap() = value;

                    #[cfg(not(feature = "unchecked"))]
                    if self.has_data_size_limit() {
                        sizes = (
                            sizes.0 + val_sizes.0,
                            sizes.1 + val_sizes.1,
                            sizes.2 + val_sizes.2,
                        );
                        self.raise_err_if_over_data_size_limit(sizes, value_expr.position())?;
                    }
                }

                result.map(|_| map.into())
            }

            Expr::And(x, _) => {
                let lhs = self
                    .eval_expr(scope, global, state, lib, this_ptr, &x.lhs, level)
                    .and_then(|v| {
                        v.as_bool().map_err(|typ| {
                            self.make_type_mismatch_err::<bool>(typ, x.lhs.position())
                        })
                    });

                if let Ok(true) = lhs {
                    self.eval_expr(scope, global, state, lib, this_ptr, &x.rhs, level)
                        .and_then(|v| {
                            v.as_bool()
                                .map_err(|typ| {
                                    self.make_type_mismatch_err::<bool>(typ, x.rhs.position())
                                })
                                .map(Into::into)
                        })
                } else {
                    lhs.map(Into::into)
                }
            }

            Expr::Or(x, _) => {
                let lhs = self
                    .eval_expr(scope, global, state, lib, this_ptr, &x.lhs, level)
                    .and_then(|v| {
                        v.as_bool().map_err(|typ| {
                            self.make_type_mismatch_err::<bool>(typ, x.lhs.position())
                        })
                    });

                if let Ok(false) = lhs {
                    self.eval_expr(scope, global, state, lib, this_ptr, &x.rhs, level)
                        .and_then(|v| {
                            v.as_bool()
                                .map_err(|typ| {
                                    self.make_type_mismatch_err::<bool>(typ, x.rhs.position())
                                })
                                .map(Into::into)
                        })
                } else {
                    lhs.map(Into::into)
                }
            }

            Expr::Custom(custom, pos) => {
                let expressions: StaticVec<_> = custom.inputs.iter().map(Into::into).collect();
                // The first token acts as the custom syntax's key
                let key_token = custom.tokens.first().unwrap();
                // The key should exist, unless the AST is compiled in a different Engine
                let custom_def = self.custom_syntax.get(key_token).ok_or_else(|| {
                    Box::new(ERR::ErrorCustomSyntax(
                        format!("Invalid custom syntax prefix: {}", key_token),
                        custom.tokens.iter().map(|s| s.to_string()).collect(),
                        *pos,
                    ))
                })?;
                let mut context = EvalContext {
                    engine: self,
                    scope,
                    global,
                    state,
                    lib,
                    this_ptr,
                    level,
                };

                let result = (custom_def.func)(&mut context, &expressions);

                self.check_return_value(result, expr.position())
            }

            Expr::Stmt(x) if x.is_empty() => Ok(Dynamic::UNIT),
            Expr::Stmt(x) => {
                self.eval_stmt_block(scope, global, state, lib, this_ptr, x, true, level)
            }

            #[cfg(not(feature = "no_index"))]
            Expr::Index(_, _, _) => {
                self.eval_dot_index_chain(scope, global, state, lib, this_ptr, expr, level, None)
            }

            #[cfg(not(feature = "no_object"))]
            Expr::Dot(_, _, _) => {
                self.eval_dot_index_chain(scope, global, state, lib, this_ptr, expr, level, None)
            }

            _ => unreachable!("expression cannot be evaluated: {:?}", expr),
        };

        #[cfg(feature = "debugging")]
        global.debugger.reset_status(reset_debugger);

        return result;
    }
}
