//! Module that defines the `call_fn` API of [`Engine`].
#![cfg(not(feature = "no_function"))]

use crate::eval::{Caches, GlobalRuntimeState};
use crate::types::dynamic::Variant;
use crate::{
    CallFnOptions, Dynamic, Engine, FnArgsVec, FuncArgs, Position, RhaiResult, RhaiResultOf, Scope,
    AST, ERR,
};
#[cfg(feature = "no_std")]
use std::prelude::v1::*;
use std::{any::type_name, mem};

impl Engine {
    /// Call a script function defined in an [`AST`] with multiple arguments.
    ///
    /// Not available under `no_function`.
    ///
    /// The [`AST`] is evaluated before calling the function.
    /// This allows a script to load the necessary modules.
    /// This is usually desired. If not, use [`call_fn_with_options`][Engine::call_fn_with_options] instead.
    ///
    /// # Example
    ///
    /// ```
    /// # fn main() -> Result<(), Box<rhai::EvalAltResult>> {
    /// use rhai::{Engine, Scope};
    ///
    /// let engine = Engine::new();
    ///
    /// let ast = engine.compile("
    ///     fn add(x, y) { len(x) + y + foo }
    ///     fn add1(x)   { len(x) + 1 + foo }
    ///     fn bar()     { foo/2 }
    /// ")?;
    ///
    /// let mut scope = Scope::new();
    /// scope.push("foo", 42_i64);
    ///
    /// // Call the script-defined function
    /// let result = engine.call_fn::<i64>(&mut scope, &ast, "add", ( "abc", 123_i64 ) )?;
    /// assert_eq!(result, 168);
    ///
    /// let result = engine.call_fn::<i64>(&mut scope, &ast, "add1", ( "abc", ) )?;
    /// //                                                           ^^^^^^^^^^ tuple of one
    /// assert_eq!(result, 46);
    ///
    /// let result = engine.call_fn::<i64>(&mut scope, &ast, "bar", () )?;
    /// assert_eq!(result, 21);
    /// # Ok(())
    /// # }
    /// ```
    #[inline(always)]
    pub fn call_fn<T: Variant + Clone>(
        &self,
        scope: &mut Scope,
        ast: &AST,
        fn_name: impl AsRef<str>,
        args: impl FuncArgs,
    ) -> RhaiResultOf<T> {
        self.call_fn_with_options(<_>::default(), scope, ast, fn_name, args)
    }
    /// Call a script function defined in an [`AST`] with multiple [`Dynamic`] arguments.
    /// Options are provided via the [`CallFnOptions`] type.
    ///
    /// If [`in_all_namespaces`](CallFnOptions::in_all_namespaces) is specified, the function will
    /// be searched in all namespaces instead, so registered native Rust functions etc. are also found.
    ///
    /// This is an advanced API.
    ///
    /// Not available under `no_function`.
    ///
    /// # Example
    ///
    /// ```
    /// # fn main() -> Result<(), Box<rhai::EvalAltResult>> {
    /// use rhai::{Engine, Scope, Dynamic, CallFnOptions};
    ///
    /// let engine = Engine::new();
    ///
    /// let ast = engine.compile("
    ///     fn action(x) { this += x; }         // function using 'this' pointer
    ///     fn decl(x)   { let hello = x; }     // declaring variables
    /// ")?;
    ///
    /// let mut scope = Scope::new();
    /// scope.push("foo", 42_i64);
    ///
    /// // Binding the 'this' pointer
    /// let mut value = 1_i64.into();
    /// let options = CallFnOptions::new().bind_this_ptr(&mut value);
    ///
    /// engine.call_fn_with_options::<()>(options, &mut scope, &ast, "action", ( 41_i64, ))?;
    /// assert_eq!(value.as_int().unwrap(), 42);
    ///
    /// // Do not rewind scope
    /// let options = CallFnOptions::default().rewind_scope(false);
    ///
    /// engine.call_fn_with_options::<()>(options, &mut scope, &ast, "decl", ( 42_i64, ))?;
    /// assert_eq!(scope.get_value::<i64>("hello").unwrap(), 42);
    /// # Ok(())
    /// # }
    /// ```
    #[inline(always)]
    pub fn call_fn_with_options<T: Variant + Clone>(
        &self,
        options: CallFnOptions,
        scope: &mut Scope,
        ast: &AST,
        fn_name: impl AsRef<str>,
        args: impl FuncArgs,
    ) -> RhaiResultOf<T> {
        let mut arg_values = FnArgsVec::new_const();
        args.parse(&mut arg_values);

        self._call_fn(
            options,
            scope,
            ast,
            fn_name.as_ref(),
            arg_values.as_mut(),
            &mut self.new_global_runtime_state(),
            &mut Caches::new(),
        )
        .and_then(|result| {
            result.try_cast_result().map_err(|r| {
                let result_type = self.map_type_name(r.type_name());
                let cast_type = match type_name::<T>() {
                    typ if typ.contains("::") => self.map_type_name(typ),
                    typ => typ,
                };
                ERR::ErrorMismatchOutputType(cast_type.into(), result_type.into(), Position::NONE)
                    .into()
            })
        })
    }
    /// Make a function call with multiple [`Dynamic`] arguments.
    ///
    /// # Arguments
    ///
    /// All the arguments are _consumed_, meaning that they're replaced by `()`. This is to avoid
    /// unnecessarily cloning the arguments.
    ///
    /// Do not use the arguments after this call. If they are needed afterwards, clone them _before_
    /// calling this function.
    #[inline(always)]
    pub(crate) fn _call_fn(
        &self,
        options: CallFnOptions,
        scope: &mut Scope,
        ast: &AST,
        name: &str,
        arg_values: &mut [Dynamic],
        global: &mut GlobalRuntimeState,
        caches: &mut Caches,
    ) -> RhaiResult {
        let statements = ast.statements();

        let orig_source = mem::replace(&mut global.source, ast.source_raw().cloned());

        let orig_lib_len = global.lib.len();
        global.lib.push(ast.shared_lib().clone());

        let orig_tag = options.tag.map(|v| mem::replace(&mut global.tag, v));

        let mut this_ptr = options.this_ptr;

        #[cfg(not(feature = "no_module"))]
        let orig_embedded_module_resolver =
            std::mem::replace(&mut global.embedded_module_resolver, ast.resolver.clone());

        let rewind_scope = options.rewind_scope;
        let in_all_namespaces = options.in_all_namespaces;

        defer! { global => move |g| {
            #[cfg(not(feature = "no_module"))]
            {
                g.embedded_module_resolver = orig_embedded_module_resolver;
            }
            if let Some(orig_tag) = orig_tag { g.tag = orig_tag; }
            g.lib.truncate(orig_lib_len);
            g.source = orig_source;
        }}

        let global_result = if options.eval_ast && !statements.is_empty() {
            defer! {
                scope if rewind_scope => rewind;
                let orig_scope_len = scope.len();
            }

            self.eval_global_statements(global, caches, scope, statements, true)
        } else {
            Ok(Dynamic::UNIT)
        };

        let result = global_result.and_then(|_| {
            let args = &mut arg_values.iter_mut().collect::<FnArgsVec<_>>();

            // Check for data race.
            #[cfg(not(feature = "no_closure"))]
            crate::func::ensure_no_data_race(name, args, false)?;

            if let Some(fn_def) = ast.shared_lib().get_script_fn(name, args.len()) {
                self.call_script_fn(
                    global,
                    caches,
                    scope,
                    this_ptr.as_deref_mut(),
                    None,
                    fn_def,
                    args,
                    rewind_scope,
                    Position::NONE,
                )
                .or_else(|err| match *err {
                    ERR::Exit(out, ..) => Ok(out),
                    _ => Err(err),
                })
            } else if !in_all_namespaces {
                Err(ERR::ErrorFunctionNotFound(name.into(), Position::NONE).into())
            } else {
                let has_this = this_ptr.as_deref_mut().map_or(false, |this_ptr| {
                    args.insert(0, this_ptr);
                    true
                });

                self.eval_fn_call_with_arguments::<Dynamic>(name, args, has_this, has_this)
            }
        });

        #[cfg(feature = "debugging")]
        if self.is_debugger_registered() {
            global.debugger_mut().status = crate::eval::DebuggerStatus::Terminate;
            let node = &crate::ast::Stmt::Noop(Position::NONE);
            self.dbg(global, caches, scope, this_ptr, node)?;
        }

        result.map_err(|err| match *err {
            ERR::ErrorInFunctionCall(fn_name, _, inner_err, _) if fn_name == name => inner_err,
            _ => err,
        })
    }
}
