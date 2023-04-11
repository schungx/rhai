//! Global runtime state.

use crate::{Dynamic, Engine, ImmutableString};
use std::fmt;
#[cfg(feature = "no_std")]
use std::prelude::v1::*;

/// Collection of globally-defined constants.
#[cfg(not(feature = "no_module"))]
#[cfg(not(feature = "no_function"))]
pub type SharedGlobalConstants =
    crate::Shared<crate::Locked<hashbrown::HashMap<ImmutableString, Dynamic>>>;

/// _(internals)_ Global runtime states.
/// Exported under the `internals` feature only.
//
// # Implementation Notes
//
// This implementation for imported [modules][crate::Module] splits the module names from the shared
// modules to improve data locality.
//
// Most usage will be looking up a particular key from the list and then getting the module that
// corresponds to that key.
#[derive(Clone)]
pub struct GlobalRuntimeState {
    /// Names of imported [modules][crate::Module].
    #[cfg(not(feature = "no_module"))]
    imports: Option<Box<crate::StaticVec<ImmutableString>>>,
    /// Stack of imported [modules][crate::Module].
    #[cfg(not(feature = "no_module"))]
    modules: Option<Box<crate::StaticVec<crate::SharedModule>>>,

    /// The current stack of loaded [modules][crate::Module] containing script-defined functions.
    #[cfg(not(feature = "no_function"))]
    pub lib: crate::StaticVec<crate::SharedModule>,
    /// Source of the current context.
    ///
    /// No source if the string is empty.
    pub source: Option<ImmutableString>,
    /// Number of operations performed.
    pub num_operations: u64,
    /// Number of modules loaded.
    #[cfg(not(feature = "no_module"))]
    pub num_modules_loaded: usize,
    /// The current nesting level of function calls.
    pub level: usize,
    /// Level of the current scope.
    ///
    /// The global (root) level is zero, a new block (or function call) is one level higher, and so on.
    pub scope_level: usize,
    /// Force a [`Scope`][crate::Scope] search by name.
    ///
    /// Normally, access to variables are parsed with a relative offset into the
    /// [`Scope`][crate::Scope] to avoid a lookup.
    ///
    /// In some situation, e.g. after running an `eval` statement, or after a custom syntax
    /// statement, subsequent offsets may become mis-aligned.
    ///
    /// When that happens, this flag is turned on.
    pub always_search_scope: bool,
    /// Embedded [module][crate::Module] resolver.
    #[cfg(not(feature = "no_module"))]
    pub embedded_module_resolver:
        Option<crate::Shared<crate::module::resolvers::StaticModuleResolver>>,
    /// Cache of globally-defined constants.
    ///
    /// Interior mutability is needed because it is shared in order to aid in cloning.
    #[cfg(not(feature = "no_module"))]
    #[cfg(not(feature = "no_function"))]
    pub constants: Option<SharedGlobalConstants>,
    /// Custom state that can be used by the external host.
    pub tag: Dynamic,
    /// Debugging interface.
    #[cfg(feature = "debugging")]
    pub(crate) debugger: Option<Box<super::Debugger>>,
}

impl GlobalRuntimeState {
    /// Create a new [`GlobalRuntimeState`] based on an [`Engine`].
    #[inline(always)]
    #[must_use]
    pub fn new(engine: &Engine) -> Self {
        Self {
            #[cfg(not(feature = "no_module"))]
            imports: None,
            #[cfg(not(feature = "no_module"))]
            modules: None,
            #[cfg(not(feature = "no_function"))]
            lib: crate::StaticVec::new_const(),
            source: None,
            num_operations: 0,
            #[cfg(not(feature = "no_module"))]
            num_modules_loaded: 0,
            scope_level: 0,
            level: 0,
            always_search_scope: false,
            #[cfg(not(feature = "no_module"))]
            embedded_module_resolver: None,
            #[cfg(not(feature = "no_module"))]
            #[cfg(not(feature = "no_function"))]
            constants: None,

            tag: engine.default_tag().clone(),

            #[cfg(feature = "debugging")]
            debugger: engine.debugger_interface.as_ref().map(|x| {
                let dbg = crate::eval::Debugger::new(crate::eval::DebuggerStatus::Init);
                (x.0)(engine, dbg).into()
            }),
        }
    }
    /// Get the length of the stack of globally-imported [modules][crate::Module].
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    #[must_use]
    pub fn num_imports(&self) -> usize {
        self.modules.as_deref().map_or(0, crate::StaticVec::len)
    }
    /// Get the globally-imported [module][crate::Module] at a particular index.
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    #[must_use]
    pub fn get_shared_import(&self, index: usize) -> Option<crate::SharedModule> {
        self.modules.as_ref().and_then(|m| m.get(index).cloned())
    }
    /// Get the index of a globally-imported [module][crate::Module] by name.
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    #[must_use]
    pub fn find_import(&self, name: &str) -> Option<usize> {
        self.imports.as_ref().and_then(|imports| {
            imports
                .iter()
                .rev()
                .position(|key| key.as_str() == name)
                .map(|i| imports.len() - 1 - i)
        })
    }
    /// Push an imported [module][crate::Module] onto the stack.
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    pub fn push_import(
        &mut self,
        name: impl Into<ImmutableString>,
        module: impl Into<crate::SharedModule>,
    ) {
        self.imports
            .get_or_insert_with(|| crate::StaticVec::new_const().into())
            .push(name.into());

        self.modules
            .get_or_insert_with(|| crate::StaticVec::new_const().into())
            .push(module.into());
    }
    /// Truncate the stack of globally-imported [modules][crate::Module] to a particular length.
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    pub fn truncate_imports(&mut self, size: usize) {
        if size == 0 {
            self.imports = None;
            self.modules = None;
        } else if self.imports.is_some() {
            self.imports.as_deref_mut().unwrap().truncate(size);
            self.modules.as_deref_mut().unwrap().truncate(size);
        }
    }
    /// Get an iterator to the stack of globally-imported [modules][crate::Module] in reverse order.
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    pub fn iter_imports(&self) -> impl Iterator<Item = (&str, &crate::Module)> {
        self.imports
            .as_deref()
            .into_iter()
            .flatten()
            .rev()
            .zip(self.modules.as_deref().into_iter().flatten().rev())
            .map(|(name, module)| (name.as_str(), &**module))
    }
    /// Get an iterator to the stack of globally-imported [modules][crate::Module] in reverse order.
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    pub(crate) fn iter_imports_raw(
        &self,
    ) -> impl Iterator<Item = (&ImmutableString, &crate::SharedModule)> {
        self.imports
            .as_deref()
            .into_iter()
            .flatten()
            .rev()
            .zip(self.modules.as_deref().into_iter().flatten())
    }
    /// Get an iterator to the stack of globally-imported [modules][crate::Module] in forward order.
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    pub fn scan_imports_raw(
        &self,
    ) -> impl Iterator<Item = (&ImmutableString, &crate::SharedModule)> {
        self.imports
            .as_deref()
            .into_iter()
            .flatten()
            .zip(self.modules.as_deref().into_iter().flatten())
    }
    /// Can the particular function with [`Dynamic`] parameter(s) exist in the stack of
    /// globally-imported [modules][crate::Module]?
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    pub(crate) fn may_contain_dynamic_fn(&self, hash_script: u64) -> bool {
        self.modules.as_deref().map_or(false, |m| {
            m.iter().any(|m| m.may_contain_dynamic_fn(hash_script))
        })
    }
    /// Does the specified function hash key exist in the stack of globally-imported
    /// [modules][crate::Module]?
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[allow(dead_code)]
    #[inline]
    #[must_use]
    pub fn contains_qualified_fn(&self, hash: u64) -> bool {
        self.modules
            .as_ref()
            .map_or(false, |m| m.iter().any(|m| m.contains_qualified_fn(hash)))
    }
    /// Get the specified function via its hash key from the stack of globally-imported
    /// [modules][crate::Module].
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    #[must_use]
    pub fn get_qualified_fn(
        &self,
        hash: u64,
        global_namespace_only: bool,
    ) -> Option<(&crate::func::CallableFunction, Option<&ImmutableString>)> {
        if global_namespace_only {
            self.modules.as_ref().and_then(|m| {
                m.iter()
                    .rev()
                    .filter(|m| m.contains_indexed_global_functions())
                    .find_map(|m| m.get_qualified_fn(hash).map(|f| (f, m.id_raw())))
            })
        } else {
            self.modules.as_ref().and_then(|m| {
                m.iter()
                    .rev()
                    .find_map(|m| m.get_qualified_fn(hash).map(|f| (f, m.id_raw())))
            })
        }
    }
    /// Does the specified [`TypeId`][std::any::TypeId] iterator exist in the stack of
    /// globally-imported [modules][crate::Module]?
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[allow(dead_code)]
    #[inline]
    #[must_use]
    pub fn contains_iter(&self, id: std::any::TypeId) -> bool {
        self.modules
            .as_ref()
            .map_or(false, |m| m.iter().any(|m| m.contains_qualified_iter(id)))
    }
    /// Get the specified [`TypeId`][std::any::TypeId] iterator from the stack of globally-imported
    /// [modules][crate::Module].
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    #[must_use]
    pub fn get_iter(&self, id: std::any::TypeId) -> Option<&crate::func::IteratorFn> {
        self.modules
            .as_ref()
            .and_then(|m| m.iter().rev().find_map(|m| m.get_qualified_iter(id)))
    }
    /// Get the current source.
    #[inline(always)]
    #[must_use]
    pub fn source(&self) -> Option<&str> {
        self.source.as_ref().map(|s| s.as_str())
    }
    /// Get the current source.
    #[inline(always)]
    #[must_use]
    #[allow(dead_code)]
    pub(crate) const fn source_raw(&self) -> Option<&ImmutableString> {
        self.source.as_ref()
    }

    /// Return a reference to the debugging interface.
    ///
    /// # Panics
    ///
    /// Panics if the debugging interface is not set.
    #[cfg(feature = "debugging")]
    #[must_use]
    pub fn debugger(&self) -> &super::Debugger {
        self.debugger.as_ref().unwrap()
    }
    /// Return a mutable reference to the debugging interface.
    ///
    /// # Panics
    ///
    /// Panics if the debugging interface is not set.
    #[cfg(feature = "debugging")]
    #[must_use]
    pub fn debugger_mut(&mut self) -> &mut super::Debugger {
        self.debugger.as_deref_mut().unwrap()
    }
}

#[cfg(not(feature = "no_module"))]
impl<K: Into<ImmutableString>, M: Into<crate::SharedModule>> Extend<(K, M)> for GlobalRuntimeState {
    #[inline]
    fn extend<T: IntoIterator<Item = (K, M)>>(&mut self, iter: T) {
        let imports = self
            .imports
            .get_or_insert_with(|| crate::StaticVec::new_const().into());
        let modules = self
            .modules
            .get_or_insert_with(|| crate::StaticVec::new_const().into());

        for (k, m) in iter {
            imports.push(k.into());
            modules.push(m.into());
        }
    }
}

impl fmt::Debug for GlobalRuntimeState {
    #[cold]
    #[inline(never)]
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let mut f = f.debug_struct("GlobalRuntimeState");

        #[cfg(not(feature = "no_module"))]
        f.field("imports", &self.scan_imports_raw().collect::<Vec<_>>())
            .field("num_modules_loaded", &self.num_modules_loaded)
            .field("embedded_module_resolver", &self.embedded_module_resolver);

        #[cfg(not(feature = "no_function"))]
        f.field("lib", &self.lib);

        f.field("source", &self.source)
            .field("num_operations", &self.num_operations)
            .field("level", &self.level)
            .field("scope_level", &self.scope_level)
            .field("always_search_scope", &self.always_search_scope);

        #[cfg(not(feature = "no_module"))]
        #[cfg(not(feature = "no_function"))]
        f.field("constants", &self.constants);

        f.field("tag", &self.tag);

        #[cfg(feature = "debugging")]
        f.field("debugger", &self.debugger);

        f.finish()
    }
}
