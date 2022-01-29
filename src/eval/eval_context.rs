//! Evaluation context.

use super::{EvalState, GlobalRuntimeState};
use crate::{Dynamic, Engine, Module, Scope};
#[cfg(feature = "no_std")]
use std::prelude::v1::*;

/// Context of a script evaluation process.
#[derive(Debug)]
pub struct EvalContext<'a, 'x, 'px, 'm, 'pm, 's, 'ps, 'b, 't, 'pt> {
    /// The current [`Engine`].
    pub(crate) engine: &'a Engine,
    /// The current [`Scope`].
    pub(crate) scope: &'x mut Scope<'px>,
    /// The current [`GlobalRuntimeState`].
    pub(crate) global: &'m mut GlobalRuntimeState<'pm>,
    /// The current [evaluation state][EvalState].
    pub(crate) state: &'s mut EvalState<'ps>,
    /// The current stack of imported [modules][Module].
    pub(crate) lib: &'b [&'b Module],
    /// The current bound `this` pointer, if any.
    pub(crate) this_ptr: &'t mut Option<&'pt mut Dynamic>,
    /// The current nesting level of function calls.
    pub(crate) level: usize,
}

impl<'x, 'px, 'm, 'pm, 'pt> EvalContext<'_, 'x, 'px, 'm, 'pm, '_, '_, '_, '_, 'pt> {
    /// The current [`Engine`].
    #[inline(always)]
    #[must_use]
    pub const fn engine(&self) -> &Engine {
        self.engine
    }
    /// The current source.
    #[inline(always)]
    #[must_use]
    pub fn source(&self) -> Option<&str> {
        match self.global.source.as_str() {
            "" => None,
            s => Some(s),
        }
    }
    /// The current [`Scope`].
    #[inline(always)]
    #[must_use]
    pub const fn scope(&self) -> &Scope<'px> {
        self.scope
    }
    /// Get a mutable reference to the current [`Scope`].
    #[inline(always)]
    #[must_use]
    pub fn scope_mut(&mut self) -> &mut &'x mut Scope<'px> {
        &mut self.scope
    }
    /// Get an iterator over the current set of modules imported via `import` statements,
    /// in reverse order (i.e. modules imported last come first).
    #[cfg(not(feature = "no_module"))]
    #[inline(always)]
    pub fn iter_imports(&self) -> impl Iterator<Item = (&str, &Module)> {
        self.global.iter_imports()
    }
    /// _(internals)_ The current [`GlobalRuntimeState`].
    /// Exported under the `internals` feature only.
    #[cfg(feature = "internals")]
    #[inline(always)]
    #[must_use]
    pub const fn global_runtime_state(&self) -> &GlobalRuntimeState {
        self.global
    }
    /// _(internals)_ Get a mutable reference to the current [`GlobalRuntimeState`].
    /// Exported under the `internals` feature only.
    #[cfg(feature = "internals")]
    #[inline(always)]
    #[must_use]
    pub fn global_runtime_state_mut(&mut self) -> &mut &'m mut GlobalRuntimeState<'pm> {
        &mut self.global
    }
    /// Get an iterator over the namespaces containing definition of all script-defined functions.
    #[inline]
    pub fn iter_namespaces(&self) -> impl Iterator<Item = &Module> {
        self.lib.iter().cloned()
    }
    /// _(internals)_ The current set of namespaces containing definitions of all script-defined functions.
    /// Exported under the `internals` feature only.
    #[cfg(feature = "internals")]
    #[inline(always)]
    #[must_use]
    pub const fn namespaces(&self) -> &[&Module] {
        self.lib
    }
    /// The current bound `this` pointer, if any.
    #[inline(always)]
    #[must_use]
    pub fn this_ptr(&self) -> Option<&Dynamic> {
        self.this_ptr.as_ref().map(|v| &**v)
    }
    /// Mutable reference to the current bound `this` pointer, if any.
    #[inline(always)]
    #[must_use]
    pub fn this_ptr_mut(&mut self) -> Option<&mut &'pt mut Dynamic> {
        self.this_ptr.as_mut()
    }
    /// The current nesting level of function calls.
    #[inline(always)]
    #[must_use]
    pub const fn call_level(&self) -> usize {
        self.level
    }
}
