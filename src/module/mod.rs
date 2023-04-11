//! Module defining external-loaded modules for Rhai.

#[cfg(feature = "metadata")]
use crate::api::formatting::format_type;
use crate::ast::FnAccess;
use crate::func::{
    shared_take_or_clone, CallableFunction, FnCallArgs, IteratorFn, RegisterNativeFunction,
    SendSync, StraightHashMap,
};
use crate::types::{dynamic::Variant, BloomFilterU64, CustomTypesCollection};
use crate::{
    calc_fn_hash, calc_fn_hash_full, Dynamic, FnArgsVec, Identifier, ImmutableString,
    NativeCallContext, RhaiResultOf, Shared, SharedModule, SmartString,
};
use bitflags::bitflags;
use hashbrown::HashMap;
#[cfg(feature = "no_std")]
use std::prelude::v1::*;
use std::{
    any::TypeId,
    fmt,
    ops::{Add, AddAssign},
};

#[cfg(any(not(feature = "no_index"), not(feature = "no_object")))]
use crate::func::register::Mut;

/// Initial capacity of the hashmap for functions.
const FN_MAP_SIZE: usize = 16;

/// A type representing the namespace of a function.
#[derive(Debug, Clone, Copy, Eq, PartialEq, Ord, PartialOrd, Hash)]
#[cfg_attr(feature = "metadata", derive(serde::Serialize))]
#[cfg_attr(feature = "metadata", serde(rename_all = "camelCase"))]
#[non_exhaustive]
pub enum FnNamespace {
    /// Module namespace only.
    ///
    /// Ignored under `no_module`.
    Internal,
    /// Expose to global namespace.
    Global,
}

impl FnNamespace {
    /// Is this a module namespace?
    #[inline(always)]
    #[must_use]
    pub const fn is_module_namespace(self) -> bool {
        match self {
            Self::Internal => true,
            Self::Global => false,
        }
    }
    /// Is this a global namespace?
    #[inline(always)]
    #[must_use]
    pub const fn is_global_namespace(self) -> bool {
        match self {
            Self::Internal => false,
            Self::Global => true,
        }
    }
}

/// A type containing the metadata of a single registered function.
#[derive(Debug, Clone)]
#[non_exhaustive]
pub struct FuncInfoMetadata {
    /// Function namespace.
    pub namespace: FnNamespace,
    /// Function access mode.
    pub access: FnAccess,
    /// Function name.
    pub name: Identifier,
    #[cfg(not(feature = "no_object"))]
    /// Type of `this` pointer, if any.
    pub this_type: Option<ImmutableString>,
    /// Number of parameters.
    pub num_params: usize,
    /// Parameter types (if applicable).
    pub param_types: FnArgsVec<TypeId>,
    /// Parameter names and types (if available).
    #[cfg(feature = "metadata")]
    pub params_info: FnArgsVec<Identifier>,
    /// Return type name.
    #[cfg(feature = "metadata")]
    pub return_type: Identifier,
    /// Comments.
    #[cfg(feature = "metadata")]
    pub comments: Box<[SmartString]>,
}

/// A type containing a single registered function.
#[derive(Debug, Clone)]
pub struct FuncInfo {
    /// Function instance.
    pub func: CallableFunction,
    /// Function metadata.
    pub metadata: Box<FuncInfoMetadata>,
}

impl FuncInfo {
    /// _(metadata)_ Generate a signature of the function.
    /// Exported under the `metadata` feature only.
    #[cfg(feature = "metadata")]
    #[must_use]
    pub fn gen_signature(&self) -> String {
        let mut signature = format!("{}(", self.metadata.name);

        let return_type = format_type(&self.metadata.return_type, true);

        if self.metadata.params_info.is_empty() {
            for x in 0..self.metadata.num_params {
                signature.push('_');
                if x < self.metadata.num_params - 1 {
                    signature.push_str(", ");
                }
            }
        } else {
            let params: FnArgsVec<_> = self
                .metadata
                .params_info
                .iter()
                .map(|param| {
                    let mut segment = param.splitn(2, ':');
                    let name = match segment.next().unwrap().trim() {
                        "" => "_",
                        s => s,
                    };
                    let result: std::borrow::Cow<str> = match segment.next() {
                        Some(typ) => format!("{name}: {}", format_type(typ, false)).into(),
                        None => name.into(),
                    };
                    result
                })
                .collect();
            signature.push_str(&params.join(", "));
        }
        signature.push(')');

        if !self.func.is_script() && !return_type.is_empty() {
            signature.push_str(" -> ");
            signature.push_str(&return_type);
        }

        signature
    }
}

/// _(internals)_ Calculate a [`u64`] hash key from a namespace-qualified function name and parameter types.
/// Exported under the `internals` feature only.
///
/// Module names are passed in via `&str` references from an iterator.
/// Parameter types are passed in via [`TypeId`] values from an iterator.
///
/// # Note
///
/// The first module name is skipped.  Hashing starts from the _second_ module in the chain.
#[inline]
pub fn calc_native_fn_hash<'a>(
    modules: impl IntoIterator<Item = &'a str, IntoIter = impl ExactSizeIterator<Item = &'a str>>,
    fn_name: &str,
    params: &[TypeId],
) -> u64 {
    calc_fn_hash_full(
        calc_fn_hash(modules, fn_name, params.len()),
        params.iter().copied(),
    )
}

bitflags! {
    /// Bit-flags containing all status for [`Module`].
    pub struct ModuleFlags: u8 {
        /// Is the [`Module`] internal?
        const INTERNAL = 0b0000_0001;
        /// Is the [`Module`] part of a standard library?
        const STANDARD_LIB = 0b0000_0010;
        /// Is the [`Module`] indexed?
        const INDEXED = 0b0000_0100;
        /// Does the [`Module`] contain indexed functions that have been exposed to the global namespace?
        const INDEXED_GLOBAL_FUNCTIONS = 0b0000_1000;
    }
}

/// A module which may contain variables, sub-modules, external Rust functions,
/// and/or script-defined functions.
#[derive(Clone)]
pub struct Module {
    /// ID identifying the module.
    id: Option<ImmutableString>,
    /// Module documentation.
    #[cfg(feature = "metadata")]
    doc: Option<Box<SmartString>>,
    /// Custom types.
    custom_types: Option<Box<CustomTypesCollection>>,
    /// Sub-modules.
    modules: Option<HashMap<Identifier, SharedModule>>,
    /// [`Module`] variables.
    variables: Option<HashMap<Identifier, Dynamic>>,
    /// Flattened collection of all [`Module`] variables, including those in sub-modules.
    all_variables: Option<StraightHashMap<Dynamic>>,
    /// Functions (both native Rust and scripted).
    functions: Option<StraightHashMap<FuncInfo>>,
    /// Flattened collection of all functions, native Rust and scripted.
    /// including those in sub-modules.
    all_functions: Option<StraightHashMap<CallableFunction>>,
    /// Bloom filter on native Rust functions (in scripted hash format) that contain [`Dynamic`] parameters.
    dynamic_functions_filter: Option<Box<BloomFilterU64>>,
    /// Iterator functions, keyed by the type producing the iterator.
    type_iterators: Option<HashMap<TypeId, Shared<IteratorFn>>>,
    /// Flattened collection of iterator functions, including those in sub-modules.
    all_type_iterators: Option<HashMap<TypeId, Shared<IteratorFn>>>,
    /// Flags.
    pub(crate) flags: ModuleFlags,
}

impl Default for Module {
    #[inline(always)]
    #[must_use]
    fn default() -> Self {
        Self::new()
    }
}

impl fmt::Debug for Module {
    #[cold]
    #[inline(never)]
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let mut d = f.debug_struct("Module");

        d.field("id", &self.id)
            .field(
                "modules",
                &self
                    .modules
                    .as_ref()
                    .into_iter()
                    .flat_map(HashMap::keys)
                    .map(SmartString::as_str)
                    .collect::<Vec<_>>(),
            )
            .field("vars", &self.variables)
            .field(
                "functions",
                &self
                    .iter_fn()
                    .map(|f| f.func.to_string())
                    .collect::<Vec<_>>(),
            );

        #[cfg(feature = "metadata")]
        d.field("doc", &self.doc);

        d.finish()
    }
}

#[cfg(not(feature = "no_function"))]
impl<T: IntoIterator<Item = Shared<crate::ast::ScriptFnDef>>> From<T> for Module {
    fn from(iter: T) -> Self {
        let mut module = Self::new();
        iter.into_iter().for_each(|fn_def| {
            module.set_script_fn(fn_def);
        });
        module
    }
}

impl<M: AsRef<Module>> Add<M> for &Module {
    type Output = Module;

    #[inline]
    fn add(self, rhs: M) -> Self::Output {
        let mut module = self.clone();
        module.merge(rhs.as_ref());
        module
    }
}

impl<M: AsRef<Module>> Add<M> for Module {
    type Output = Self;

    #[inline(always)]
    fn add(mut self, rhs: M) -> Self::Output {
        self.merge(rhs.as_ref());
        self
    }
}

impl<M: Into<Module>> AddAssign<M> for Module {
    #[inline(always)]
    fn add_assign(&mut self, rhs: M) {
        self.combine(rhs.into());
    }
}

#[inline(always)]
fn new_hash_map<T>(size: usize) -> StraightHashMap<T> {
    StraightHashMap::with_capacity_and_hasher(size, Default::default())
}

impl Module {
    /// Create a new [`Module`].
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_var("answer", 42_i64);
    /// assert_eq!(module.get_var_value::<i64>("answer").expect("answer should exist"), 42);
    /// ```
    #[inline(always)]
    #[must_use]
    pub const fn new() -> Self {
        Self {
            id: None,
            #[cfg(feature = "metadata")]
            doc: None,
            custom_types: None,
            modules: None,
            variables: None,
            all_variables: None,
            functions: None,
            all_functions: None,
            dynamic_functions_filter: None,
            type_iterators: None,
            all_type_iterators: None,
            flags: ModuleFlags::INDEXED,
        }
    }

    /// Get the ID of the [`Module`], if any.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_id("hello");
    /// assert_eq!(module.id(), Some("hello"));
    /// ```
    #[inline]
    #[must_use]
    pub fn id(&self) -> Option<&str> {
        self.id.as_ref().map(|s| s.as_str())
    }

    /// Get the ID of the [`Module`] as an [`Identifier`], if any.
    #[inline(always)]
    #[must_use]
    pub(crate) const fn id_raw(&self) -> Option<&ImmutableString> {
        self.id.as_ref()
    }

    /// Set the ID of the [`Module`].
    ///
    /// If the string is empty, it is equivalent to clearing the ID.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_id("hello");
    /// assert_eq!(module.id(), Some("hello"));
    /// ```
    #[inline(always)]
    pub fn set_id(&mut self, id: impl Into<ImmutableString>) -> &mut Self {
        let id = id.into();
        self.id = (!id.is_empty()).then(|| id);
        self
    }

    /// Clear the ID of the [`Module`].
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_id("hello");
    /// assert_eq!(module.id(), Some("hello"));
    /// module.clear_id();
    /// assert_eq!(module.id(), None);
    /// ```
    #[inline(always)]
    pub fn clear_id(&mut self) -> &mut Self {
        self.id = None;
        self
    }

    /// Get the documentation of the [`Module`], if any.
    /// Exported under the `metadata` feature only.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_doc("//! This is my special module.");
    /// assert_eq!(module.doc(), "//! This is my special module.");
    /// ```
    #[cfg(feature = "metadata")]
    #[inline]
    #[must_use]
    pub fn doc(&self) -> &str {
        self.doc.as_deref().map_or("", SmartString::as_str)
    }

    /// Set the documentation of the [`Module`].
    /// Exported under the `metadata` feature only.
    ///
    /// If the string is empty, it is equivalent to clearing the documentation.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_doc("//! This is my special module.");
    /// assert_eq!(module.doc(), "//! This is my special module.");
    /// ```
    #[cfg(feature = "metadata")]
    #[inline(always)]
    pub fn set_doc(&mut self, doc: impl Into<crate::SmartString>) -> &mut Self {
        self.doc = Some(Box::new(doc.into()));
        self
    }

    /// Clear the documentation of the [`Module`].
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_doc("//! This is my special module.");
    /// assert_eq!(module.doc(), "//! This is my special module.");
    /// module.clear_doc();
    /// assert_eq!(module.doc(), "");
    /// ```
    #[cfg(feature = "metadata")]
    #[inline(always)]
    pub fn clear_doc(&mut self) -> &mut Self {
        self.doc = None;
        self
    }

    /// Clear the [`Module`].
    #[inline(always)]
    pub fn clear(&mut self) {
        #[cfg(feature = "metadata")]
        {
            self.doc = None;
        }
        self.custom_types = None;
        self.modules = None;
        self.variables = None;
        self.all_variables = None;
        self.functions = None;
        self.all_functions = None;
        self.dynamic_functions_filter = None;
        self.type_iterators = None;
        self.all_type_iterators = None;
        self.flags
            .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);
    }

    /// Map a custom type to a friendly display name.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// #[derive(Clone)]
    /// struct TestStruct;
    ///
    /// let name = std::any::type_name::<TestStruct>();
    ///
    /// let mut module = Module::new();
    ///
    /// module.set_custom_type::<TestStruct>("MyType");
    ///
    /// assert_eq!(module.get_custom_type(name), Some("MyType"));
    /// ```
    #[inline(always)]
    pub fn set_custom_type<T>(&mut self, name: &str) -> &mut Self {
        self.custom_types
            .get_or_insert_with(Default::default)
            .add_type::<T>(name);
        self
    }
    /// Map a custom type to a friendly display name.
    ///
    /// ```
    /// # use rhai::Module;
    /// #[derive(Clone)]
    /// struct TestStruct;
    ///
    /// let name = std::any::type_name::<TestStruct>();
    ///
    /// let mut module = Module::new();
    ///
    /// module.set_custom_type_raw(name, "MyType");
    ///
    /// assert_eq!(module.get_custom_type(name), Some("MyType"));
    /// ```
    #[inline(always)]
    pub fn set_custom_type_raw(
        &mut self,
        type_path: impl Into<Identifier>,
        name: impl Into<Identifier>,
    ) -> &mut Self {
        self.custom_types
            .get_or_insert_with(Default::default)
            .add(type_path, name);
        self
    }
    /// Get the display name of a registered custom type.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// #[derive(Clone)]
    /// struct TestStruct;
    ///
    /// let name = std::any::type_name::<TestStruct>();
    ///
    /// let mut module = Module::new();
    ///
    /// module.set_custom_type::<TestStruct>("MyType");
    ///
    /// assert_eq!(module.get_custom_type(name), Some("MyType"));
    /// ```
    #[inline]
    #[must_use]
    pub fn get_custom_type(&self, key: &str) -> Option<&str> {
        self.custom_types
            .as_ref()
            .and_then(|c| c.get(key))
            .map(|t| t.display_name.as_str())
    }

    /// Returns `true` if this [`Module`] contains no items.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let module = Module::new();
    /// assert!(module.is_empty());
    /// ```
    #[inline]
    #[must_use]
    pub fn is_empty(&self) -> bool {
        !self.flags.contains(ModuleFlags::INDEXED_GLOBAL_FUNCTIONS)
            && self
                .functions
                .as_ref()
                .map_or(true, StraightHashMap::is_empty)
            && self.variables.as_ref().map_or(true, HashMap::is_empty)
            && self.modules.as_ref().map_or(true, HashMap::is_empty)
            && self.type_iterators.as_ref().map_or(true, HashMap::is_empty)
            && self
                .all_functions
                .as_ref()
                .map_or(true, StraightHashMap::is_empty)
            && self
                .all_variables
                .as_ref()
                .map_or(true, StraightHashMap::is_empty)
            && self
                .all_type_iterators
                .as_ref()
                .map_or(true, HashMap::is_empty)
    }

    /// Is the [`Module`] indexed?
    ///
    /// A module must be indexed before it can be used in an `import` statement.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// assert!(module.is_indexed());
    ///
    /// module.set_native_fn("foo", |x: &mut i64, y: i64| { *x = y; Ok(()) });
    /// assert!(!module.is_indexed());
    ///
    /// # #[cfg(not(feature = "no_module"))]
    /// # {
    /// module.build_index();
    /// assert!(module.is_indexed());
    /// # }
    /// ```
    #[inline(always)]
    #[must_use]
    pub const fn is_indexed(&self) -> bool {
        self.flags.contains(ModuleFlags::INDEXED)
    }

    /// _(metadata)_ Generate signatures for all the non-private functions in the [`Module`].
    /// Exported under the `metadata` feature only.
    #[cfg(feature = "metadata")]
    #[inline]
    pub fn gen_fn_signatures(&self) -> impl Iterator<Item = String> + '_ {
        self.iter_fn()
            .filter(|&f| match f.metadata.access {
                FnAccess::Public => true,
                FnAccess::Private => false,
            })
            .map(FuncInfo::gen_signature)
    }

    /// Does a variable exist in the [`Module`]?
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_var("answer", 42_i64);
    /// assert!(module.contains_var("answer"));
    /// ```
    #[inline(always)]
    #[must_use]
    pub fn contains_var(&self, name: &str) -> bool {
        self.variables
            .as_ref()
            .map_or(false, |m| m.contains_key(name))
    }

    /// Get the value of a [`Module`] variable.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_var("answer", 42_i64);
    /// assert_eq!(module.get_var_value::<i64>("answer").expect("answer should exist"), 42);
    /// ```
    #[inline]
    #[must_use]
    pub fn get_var_value<T: Variant + Clone>(&self, name: &str) -> Option<T> {
        self.get_var(name).and_then(Dynamic::try_cast::<T>)
    }

    /// Get a [`Module`] variable as a [`Dynamic`].
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_var("answer", 42_i64);
    /// assert_eq!(module.get_var("answer").expect("answer should exist").cast::<i64>(), 42);
    /// ```
    #[inline(always)]
    #[must_use]
    pub fn get_var(&self, name: &str) -> Option<Dynamic> {
        self.variables.as_ref().and_then(|m| m.get(name)).cloned()
    }

    /// Set a variable into the [`Module`].
    ///
    /// If there is an existing variable of the same name, it is replaced.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// module.set_var("answer", 42_i64);
    /// assert_eq!(module.get_var_value::<i64>("answer").expect("answer should exist"), 42);
    /// ```
    #[inline]
    pub fn set_var(
        &mut self,
        name: impl Into<Identifier>,
        value: impl Variant + Clone,
    ) -> &mut Self {
        let ident = name.into();
        let value = Dynamic::from(value);

        if self.is_indexed() {
            let hash_var = crate::calc_var_hash(Some(""), &ident);

            // Catch hash collisions in testing environment only.
            #[cfg(feature = "testing-environ")]
            if let Some(_) = self.all_variables.as_ref().and_then(|f| f.get(&hash_var)) {
                panic!(
                    "Hash {} already exists when registering variable {}",
                    hash_var, ident
                );
            }

            self.all_variables
                .get_or_insert_with(Default::default)
                .insert(hash_var, value.clone());
        }
        self.variables
            .get_or_insert_with(Default::default)
            .insert(ident, value);
        self
    }

    /// Get a namespace-qualified [`Module`] variable as a [`Dynamic`].
    #[cfg(not(feature = "no_module"))]
    #[inline]
    pub(crate) fn get_qualified_var(&self, hash_var: u64) -> Option<Dynamic> {
        self.all_variables
            .as_ref()
            .and_then(|c| c.get(&hash_var).cloned())
    }

    /// Set a script-defined function into the [`Module`].
    ///
    /// If there is an existing function of the same name and number of arguments, it is replaced.
    #[cfg(not(feature = "no_function"))]
    #[inline]
    pub fn set_script_fn(&mut self, fn_def: impl Into<Shared<crate::ast::ScriptFnDef>>) -> u64 {
        let fn_def = fn_def.into();

        // None + function name + number of arguments.
        let namespace = FnNamespace::Internal;
        let num_params = fn_def.params.len();
        let hash_script = crate::calc_fn_hash(None, &fn_def.name, num_params);
        #[cfg(not(feature = "no_object"))]
        let (hash_script, namespace) = if let Some(ref this_type) = fn_def.this_type {
            let hash = crate::calc_typed_method_hash(hash_script, this_type);
            (hash, FnNamespace::Global)
        } else {
            (hash_script, namespace)
        };

        // Catch hash collisions in testing environment only.
        #[cfg(feature = "testing-environ")]
        if let Some(f) = self.functions.as_ref().and_then(|f| f.get(&hash_script)) {
            panic!(
                "Hash {} already exists when registering function {:#?}:\n{:#?}",
                hash_script, fn_def, f
            );
        }

        #[cfg(feature = "metadata")]
        let params_info = fn_def.params.iter().map(Into::into).collect();

        self.functions
            .get_or_insert_with(|| new_hash_map(FN_MAP_SIZE))
            .insert(
                hash_script,
                FuncInfo {
                    metadata: FuncInfoMetadata {
                        name: fn_def.name.as_str().into(),
                        namespace,
                        access: fn_def.access,
                        #[cfg(not(feature = "no_object"))]
                        this_type: fn_def.this_type.clone(),
                        num_params,
                        param_types: FnArgsVec::new_const(),
                        #[cfg(feature = "metadata")]
                        params_info,
                        #[cfg(feature = "metadata")]
                        return_type: "".into(),
                        #[cfg(feature = "metadata")]
                        comments: Box::default(),
                    }
                    .into(),
                    func: fn_def.into(),
                },
            );

        self.flags
            .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);

        hash_script
    }

    /// Get a shared reference to the script-defined function in the [`Module`] based on name
    /// and number of parameters.
    #[cfg(not(feature = "no_function"))]
    #[inline]
    #[must_use]
    pub fn get_script_fn(
        &self,
        name: impl AsRef<str>,
        num_params: usize,
    ) -> Option<&Shared<crate::ast::ScriptFnDef>> {
        self.functions.as_ref().and_then(|lib| {
            let name = name.as_ref();

            lib.values()
                .find(|&f| f.metadata.num_params == num_params && f.metadata.name == name)
                .and_then(|f| f.func.get_script_fn_def())
        })
    }

    /// Get a mutable reference to the underlying [`HashMap`] of sub-modules,
    /// creating one if empty.
    ///
    /// # WARNING
    ///
    /// By taking a mutable reference, it is assumed that some sub-modules will be modified.
    /// Thus the [`Module`] is automatically set to be non-indexed.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    #[must_use]
    pub(crate) fn get_sub_modules_mut(&mut self) -> &mut HashMap<Identifier, SharedModule> {
        // We must assume that the user has changed the sub-modules
        // (otherwise why take a mutable reference?)
        self.all_functions = None;
        self.all_variables = None;
        self.all_type_iterators = None;
        self.flags
            .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);

        self.modules.get_or_insert_with(Default::default)
    }

    /// Does a sub-module exist in the [`Module`]?
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// let sub_module = Module::new();
    /// module.set_sub_module("question", sub_module);
    /// assert!(module.contains_sub_module("question"));
    /// ```
    #[inline(always)]
    #[must_use]
    pub fn contains_sub_module(&self, name: &str) -> bool {
        self.modules
            .as_ref()
            .map_or(false, |m| m.contains_key(name))
    }

    /// Get a sub-module in the [`Module`].
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// let sub_module = Module::new();
    /// module.set_sub_module("question", sub_module);
    /// assert!(module.get_sub_module("question").is_some());
    /// ```
    #[inline]
    #[must_use]
    pub fn get_sub_module(&self, name: &str) -> Option<&Module> {
        self.modules
            .as_ref()
            .and_then(|m| m.get(name))
            .map(|m| &**m)
    }

    /// Set a sub-module into the [`Module`].
    ///
    /// If there is an existing sub-module of the same name, it is replaced.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// let sub_module = Module::new();
    /// module.set_sub_module("question", sub_module);
    /// assert!(module.get_sub_module("question").is_some());
    /// ```
    #[inline]
    pub fn set_sub_module(
        &mut self,
        name: impl Into<Identifier>,
        sub_module: impl Into<SharedModule>,
    ) -> &mut Self {
        self.modules
            .get_or_insert_with(Default::default)
            .insert(name.into(), sub_module.into());
        self.flags
            .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);
        self
    }

    /// Does the particular Rust function exist in the [`Module`]?
    ///
    /// The [`u64`] hash is returned by the [`set_native_fn`][Module::set_native_fn] call.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// let hash = module.set_native_fn("calc", || Ok(42_i64));
    /// assert!(module.contains_fn(hash));
    /// ```
    #[inline]
    #[must_use]
    pub fn contains_fn(&self, hash_fn: u64) -> bool {
        self.functions
            .as_ref()
            .map_or(false, |m| m.contains_key(&hash_fn))
    }

    /// _(metadata)_ Update the metadata (parameter names/types and return type) of a registered function.
    /// Exported under the `metadata` feature only.
    ///
    /// The [`u64`] hash is returned by the [`set_native_fn`][Module::set_native_fn] call.
    ///
    /// ## Parameter Names and Types
    ///
    /// Each parameter name/type pair should be a single string of the format: `var_name: type`.
    ///
    /// ## Return Type
    ///
    /// The _last entry_ in the list should be the _return type_ of the function.
    /// In other words, the number of entries should be one larger than the number of parameters.
    #[cfg(feature = "metadata")]
    #[inline]
    pub fn update_fn_metadata<S: Into<Identifier>>(
        &mut self,
        hash_fn: u64,
        arg_names: impl IntoIterator<Item = S>,
    ) -> &mut Self {
        let mut param_names: FnArgsVec<_> = arg_names.into_iter().map(Into::into).collect();

        if let Some(f) = self.functions.as_mut().and_then(|m| m.get_mut(&hash_fn)) {
            let (param_names, return_type_name) = if param_names.len() > f.metadata.num_params {
                let return_type = param_names.pop().unwrap();
                (param_names, return_type)
            } else {
                (param_names, crate::SmartString::new_const())
            };
            f.metadata.params_info = param_names;
            f.metadata.return_type = return_type_name;
        }

        self
    }

    /// _(metadata)_ Update the metadata (parameter names/types, return type and doc-comments) of a registered function.
    /// Exported under the `metadata` feature only.
    ///
    /// The [`u64`] hash is returned by the [`set_native_fn`][Module::set_native_fn] call.
    ///
    /// ## Parameter Names and Types
    ///
    /// Each parameter name/type pair should be a single string of the format: `var_name: type`.
    ///
    /// ## Return Type
    ///
    /// The _last entry_ in the list should be the _return type_ of the function. In other words,
    /// the number of entries should be one larger than the number of parameters.
    ///
    /// ## Comments
    ///
    /// Block doc-comments should be kept in a separate string slice.
    ///
    /// Line doc-comments should be merged, with line-breaks, into a single string slice without a final termination line-break.
    ///
    /// Leading white-spaces should be stripped, and each string slice always starts with the corresponding
    /// doc-comment leader: `///` or `/**`.
    ///
    /// Each line in non-block doc-comments should start with `///`.
    #[cfg(feature = "metadata")]
    #[inline]
    pub fn update_fn_metadata_with_comments<A: Into<Identifier>, C: Into<Identifier>>(
        &mut self,
        hash_fn: u64,
        arg_names: impl IntoIterator<Item = A>,
        comments: impl IntoIterator<Item = C>,
    ) -> &mut Self {
        self.update_fn_metadata(hash_fn, arg_names);

        self.functions
            .as_mut()
            .and_then(|m| m.get_mut(&hash_fn))
            .unwrap()
            .metadata
            .comments = comments.into_iter().map(Into::into).collect();

        self
    }

    /// Update the namespace of a registered function.
    ///
    /// The [`u64`] hash is returned by the [`set_native_fn`][Module::set_native_fn] call.
    #[inline]
    pub fn update_fn_namespace(&mut self, hash_fn: u64, namespace: FnNamespace) -> &mut Self {
        if let Some(f) = self.functions.as_mut().and_then(|m| m.get_mut(&hash_fn)) {
            f.metadata.namespace = namespace;
            self.flags
                .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);
        }
        self
    }

    /// Remap type ID.
    #[inline]
    #[must_use]
    fn map_type(map: bool, type_id: TypeId) -> TypeId {
        if !map {
            return type_id;
        }
        if type_id == TypeId::of::<&str>() {
            // Map &str to ImmutableString
            return TypeId::of::<ImmutableString>();
        }
        if type_id == TypeId::of::<String>() {
            // Map String to ImmutableString
            return TypeId::of::<ImmutableString>();
        }

        type_id
    }

    /// Set a native Rust function into the [`Module`], returning a [`u64`] hash key.
    ///
    /// If there is an existing Rust function of the same hash, it is replaced.
    ///
    /// # WARNING - Low Level API
    ///
    /// This function is very low level.
    ///
    /// ## Parameter Names and Types
    ///
    /// Each parameter name/type pair should be a single string of the format: `var_name: type`.
    ///
    /// ## Return Type
    ///
    /// The _last entry_ in the list should be the _return type_ of the function.
    /// In other words, the number of entries should be one larger than the number of parameters.
    #[inline]
    pub fn set_fn(
        &mut self,
        name: impl AsRef<str>,
        namespace: FnNamespace,
        access: FnAccess,
        arg_names: Option<&[&str]>,
        arg_types: impl AsRef<[TypeId]>,
        func: CallableFunction,
    ) -> u64 {
        let _arg_names = arg_names;
        let is_method = func.is_method();

        let mut param_types: FnArgsVec<_> = arg_types
            .as_ref()
            .iter()
            .enumerate()
            .map(|(i, &type_id)| Self::map_type(!is_method || i > 0, type_id))
            .collect();
        param_types.shrink_to_fit();

        let is_dynamic = param_types
            .iter()
            .any(|&type_id| type_id == TypeId::of::<Dynamic>());

        #[cfg(feature = "metadata")]
        let (param_names, return_type_name) = {
            let mut names = _arg_names
                .into_iter()
                .flatten()
                .map(|&s| s.into())
                .collect::<FnArgsVec<_>>();
            let return_type = if names.len() > param_types.len() {
                names.pop().unwrap()
            } else {
                crate::SmartString::new_const()
            };
            names.shrink_to_fit();
            (names, return_type)
        };

        let name = name.as_ref();
        let hash_base = calc_fn_hash(None, name, param_types.len());
        let hash_fn = calc_fn_hash_full(hash_base, param_types.iter().copied());

        // Catch hash collisions in testing environment only.
        #[cfg(feature = "testing-environ")]
        if let Some(f) = self.functions.as_ref().and_then(|f| f.get(&hash_base)) {
            panic!(
                "Hash {} already exists when registering function {}:\n{:#?}",
                hash_base, name, f
            );
        }

        if is_dynamic {
            self.dynamic_functions_filter
                .get_or_insert_with(Default::default)
                .mark(hash_base);
        }

        self.functions
            .get_or_insert_with(|| new_hash_map(FN_MAP_SIZE))
            .insert(
                hash_fn,
                FuncInfo {
                    func,
                    metadata: FuncInfoMetadata {
                        name: name.into(),
                        namespace,
                        access,
                        #[cfg(not(feature = "no_object"))]
                        this_type: None,
                        num_params: param_types.len(),
                        param_types,
                        #[cfg(feature = "metadata")]
                        params_info: param_names,
                        #[cfg(feature = "metadata")]
                        return_type: return_type_name,
                        #[cfg(feature = "metadata")]
                        comments: Box::default(),
                    }
                    .into(),
                },
            );

        self.flags
            .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);

        hash_fn
    }

    /// _(metadata)_ Set a native Rust function into the [`Module`], returning a [`u64`] hash key.
    /// Exported under the `metadata` feature only.
    ///
    /// If there is an existing Rust function of the same hash, it is replaced.
    ///
    /// # WARNING - Low Level API
    ///
    /// This function is very low level.
    ///
    /// ## Parameter Names and Types
    ///
    /// Each parameter name/type pair should be a single string of the format: `var_name: type`.
    ///
    /// ## Return Type
    ///
    /// The _last entry_ in the list should be the _return type_ of the function.
    /// In other words, the number of entries should be one larger than the number of parameters.
    ///
    /// ## Comments
    ///
    /// Block doc-comments should be kept in a separate string slice.
    ///
    /// Line doc-comments should be merged, with line-breaks, into a single string slice without a final termination line-break.
    ///
    /// Leading white-spaces should be stripped, and each string slice always starts with the corresponding
    /// doc-comment leader: `///` or `/**`.
    ///
    /// Each line in non-block doc-comments should start with `///`.
    #[cfg(feature = "metadata")]
    #[inline]
    pub fn set_fn_with_comments<S: AsRef<str>>(
        &mut self,
        name: impl AsRef<str>,
        namespace: FnNamespace,
        access: FnAccess,
        arg_names: Option<&[&str]>,
        arg_types: impl AsRef<[TypeId]>,
        comments: impl IntoIterator<Item = S>,
        func: CallableFunction,
    ) -> u64 {
        let hash = self.set_fn(name, namespace, access, arg_names, arg_types, func);

        self.functions
            .as_mut()
            .unwrap()
            .get_mut(&hash)
            .unwrap()
            .metadata
            .comments = comments.into_iter().map(|s| s.as_ref().into()).collect();

        hash
    }

    /// Set a native Rust function into the [`Module`], returning a [`u64`] hash key.
    ///
    /// If there is a similar existing Rust function, it is replaced.
    ///
    /// # WARNING - Low Level API
    ///
    /// This function is very low level.
    ///
    /// # Arguments
    ///
    /// A list of [`TypeId`]'s is taken as the argument types.
    ///
    /// Arguments are simply passed in as a mutable array of [`&mut Dynamic`][Dynamic],
    /// which is guaranteed to contain enough arguments of the correct types.
    ///
    /// The function is assumed to be a _method_, meaning that the first argument should not be consumed.
    /// All other arguments can be consumed.
    ///
    /// To access a primary argument value (i.e. cloning is cheap), use: `args[n].as_xxx().unwrap()`
    ///
    /// To access an argument value and avoid cloning, use `std::mem::take(args[n]).cast::<T>()`.
    /// Notice that this will _consume_ the argument, replacing it with `()`.
    ///
    /// To access the first mutable argument, use `args.get_mut(0).unwrap()`
    ///
    /// # Function Metadata
    ///
    /// No metadata for the function is registered. Use [`update_fn_metadata`][Module::update_fn_metadata] to add metadata.
    ///
    /// # Example
    ///
    /// ```
    /// use rhai::{Module, FnNamespace, FnAccess};
    ///
    /// let mut module = Module::new();
    /// let hash = module.set_raw_fn("double_or_not", FnNamespace::Internal, FnAccess::Public,
    ///                 // Pass parameter types via a slice with TypeId's
    ///                 &[std::any::TypeId::of::<i64>(), std::any::TypeId::of::<bool>()],
    ///                 // Fixed closure signature
    ///                 |context, args| {
    ///                     // 'args' is guaranteed to be the right length and of the correct types
    ///
    ///                     // Get the second parameter by 'consuming' it
    ///                     let double = std::mem::take(args[1]).cast::<bool>();
    ///                     // Since it is a primary type, it can also be cheaply copied
    ///                     let double = args[1].clone_cast::<bool>();
    ///                     // Get a mutable reference to the first argument.
    ///                     let mut x = args[0].write_lock::<i64>().unwrap();
    ///
    ///                     let orig = *x;
    ///
    ///                     if double {
    ///                         *x *= 2;            // the first argument can be mutated
    ///                     }
    ///
    ///                     Ok(orig)                // return RhaiResult<T>
    ///                 });
    ///
    /// assert!(module.contains_fn(hash));
    /// ```
    #[inline(always)]
    pub fn set_raw_fn<T: Variant + Clone>(
        &mut self,
        name: impl AsRef<str>,
        namespace: FnNamespace,
        access: FnAccess,
        arg_types: impl AsRef<[TypeId]>,
        func: impl Fn(NativeCallContext, &mut FnCallArgs) -> RhaiResultOf<T> + SendSync + 'static,
    ) -> u64 {
        let f = move |ctx: Option<NativeCallContext>, args: &mut FnCallArgs| {
            func(ctx.unwrap(), args).map(Dynamic::from)
        };

        self.set_fn(
            name,
            namespace,
            access,
            None,
            arg_types,
            CallableFunction::Method {
                func: Shared::new(f),
                has_context: true,
                is_pure: false,
            },
        )
    }

    /// Set a native Rust function into the [`Module`], returning a [`u64`] hash key.
    ///
    /// If there is a similar existing Rust function, it is replaced.
    ///
    /// # Function Namespace
    ///
    /// The default function namespace is [`FnNamespace::Internal`].
    /// Use [`update_fn_namespace`][Module::update_fn_namespace] to change it.
    ///
    /// # Function Metadata
    ///
    /// No metadata for the function is registered.
    /// Use [`update_fn_metadata`][Module::update_fn_metadata] to add metadata.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// let hash = module.set_native_fn("calc", || Ok(42_i64));
    /// assert!(module.contains_fn(hash));
    /// ```
    #[inline(always)]
    pub fn set_native_fn<A: 'static, const N: usize, const C: bool, T, F>(
        &mut self,
        name: impl AsRef<str> + Into<Identifier>,
        func: F,
    ) -> u64
    where
        T: Variant + Clone,
        F: RegisterNativeFunction<A, N, C, T, true>,
    {
        let fn_name = name.into();
        let is_pure = true;

        #[cfg(any(not(feature = "no_index"), not(feature = "no_object")))]
        let is_pure = is_pure && (F::num_params() != 3 || fn_name != crate::engine::FN_IDX_SET);
        #[cfg(not(feature = "no_object"))]
        let is_pure =
            is_pure && (F::num_params() != 2 || !fn_name.starts_with(crate::engine::FN_SET));

        let func = func.into_callable_function(fn_name.clone(), is_pure);

        self.set_fn(
            fn_name,
            FnNamespace::Internal,
            FnAccess::Public,
            None,
            F::param_types(),
            func,
        )
    }

    /// Set a Rust getter function taking one mutable parameter, returning a [`u64`] hash key.
    /// This function is automatically exposed to the global namespace.
    ///
    /// If there is a similar existing Rust getter function, it is replaced.
    ///
    /// # Function Metadata
    ///
    /// No metadata for the function is registered.
    /// Use [`update_fn_metadata`][Module::update_fn_metadata] to add metadata.
    ///
    /// # Example
    ///
    /// ```
    /// # use rhai::Module;
    /// let mut module = Module::new();
    /// let hash = module.set_getter_fn("value", |x: &mut i64| { Ok(*x) });
    /// assert!(module.contains_fn(hash));
    /// ```
    #[cfg(not(feature = "no_object"))]
    #[inline(always)]
    pub fn set_getter_fn<A, const C: bool, T, F>(&mut self, name: impl AsRef<str>, func: F) -> u64
    where
        A: Variant + Clone,
        T: Variant + Clone,
        F: RegisterNativeFunction<(Mut<A>,), 1, C, T, true> + SendSync + 'static,
    {
        let fn_name = crate::engine::make_getter(name.as_ref());
        let func = func.into_callable_function(fn_name.clone(), true);

        self.set_fn(
            fn_name,
            FnNamespace::Global,
            FnAccess::Public,
            None,
            F::param_types(),
            func,
        )
    }

    /// Set a Rust setter function taking two parameters (the first one mutable) into the [`Module`],
    /// returning a [`u64`] hash key.
    /// This function is automatically exposed to the global namespace.
    ///
    /// If there is a similar existing setter Rust function, it is replaced.
    ///
    /// # Function Metadata
    ///
    /// No metadata for the function is registered.
    /// Use [`update_fn_metadata`][Module::update_fn_metadata] to add metadata.
    ///
    /// # Example
    ///
    /// ```
    /// use rhai::{Module, ImmutableString};
    ///
    /// let mut module = Module::new();
    /// let hash = module.set_setter_fn("value", |x: &mut i64, y: ImmutableString| {
    ///     *x = y.len() as i64;
    ///     Ok(())
    /// });
    /// assert!(module.contains_fn(hash));
    /// ```
    #[cfg(not(feature = "no_object"))]
    #[inline(always)]
    pub fn set_setter_fn<A, const C: bool, T, F>(&mut self, name: impl AsRef<str>, func: F) -> u64
    where
        A: Variant + Clone,
        T: Variant + Clone,
        F: RegisterNativeFunction<(Mut<A>, T), 2, C, (), true> + SendSync + 'static,
    {
        let fn_name = crate::engine::make_setter(name.as_ref());
        let func = func.into_callable_function(fn_name.clone(), false);

        self.set_fn(
            fn_name,
            FnNamespace::Global,
            FnAccess::Public,
            None,
            F::param_types(),
            func,
        )
    }

    /// Set a pair of Rust getter and setter functions into the [`Module`], returning both [`u64`] hash keys.
    /// This is a short-hand for [`set_getter_fn`][Module::set_getter_fn] and [`set_setter_fn`][Module::set_setter_fn].
    ///
    /// These function are automatically exposed to the global namespace.
    ///
    /// If there are similar existing Rust functions, they are replaced.
    ///
    /// # Function Metadata
    ///
    /// No metadata for the function is registered.
    /// Use [`update_fn_metadata`][Module::update_fn_metadata] to add metadata.
    ///
    /// # Example
    ///
    /// ```
    /// use rhai::{Module, ImmutableString};
    ///
    /// let mut module = Module::new();
    /// let (hash_get, hash_set) = module.set_getter_setter_fn("value",
    ///                                 |x: &mut i64| { Ok(x.to_string().into()) },
    ///                                 |x: &mut i64, y: ImmutableString| {
    ///                                     *x = y.len() as i64;
    ///                                     Ok(())
    ///                                 }
    /// );
    /// assert!(module.contains_fn(hash_get));
    /// assert!(module.contains_fn(hash_set));
    /// ```
    #[cfg(not(feature = "no_object"))]
    #[inline(always)]
    pub fn set_getter_setter_fn<
        A: Variant + Clone,
        const C1: bool,
        const C2: bool,
        T: Variant + Clone,
    >(
        &mut self,
        name: impl AsRef<str>,
        getter: impl RegisterNativeFunction<(Mut<A>,), 1, C1, T, true> + SendSync + 'static,
        setter: impl RegisterNativeFunction<(Mut<A>, T), 2, C2, (), true> + SendSync + 'static,
    ) -> (u64, u64) {
        (
            self.set_getter_fn(name.as_ref(), getter),
            self.set_setter_fn(name.as_ref(), setter),
        )
    }

    /// Set a Rust index getter taking two parameters (the first one mutable) into the [`Module`],
    /// returning a [`u64`] hash key.
    /// This function is automatically exposed to the global namespace.
    ///
    /// If there is a similar existing setter Rust function, it is replaced.
    ///
    /// # Panics
    ///
    /// Panics if the type is [`Array`][crate::Array] or [`Map`][crate::Map].
    /// Indexers for arrays, object maps and strings cannot be registered.
    ///
    /// # Function Metadata
    ///
    /// No metadata for the function is registered.
    /// Use [`update_fn_metadata`][Module::update_fn_metadata] to add metadata.
    ///
    /// # Example
    ///
    /// ```
    /// use rhai::{Module, ImmutableString};
    ///
    /// let mut module = Module::new();
    /// let hash = module.set_indexer_get_fn(|x: &mut i64, y: ImmutableString| {
    ///     Ok(*x + y.len() as i64)
    /// });
    /// assert!(module.contains_fn(hash));
    /// ```
    #[cfg(any(not(feature = "no_index"), not(feature = "no_object")))]
    #[inline]
    pub fn set_indexer_get_fn<A, B, const C: bool, T, F>(&mut self, func: F) -> u64
    where
        A: Variant + Clone,
        B: Variant + Clone,
        T: Variant + Clone,
        F: RegisterNativeFunction<(Mut<A>, B), 2, C, T, true> + SendSync + 'static,
    {
        #[cfg(not(feature = "no_index"))]
        if TypeId::of::<A>() == TypeId::of::<crate::Array>() {
            panic!("Cannot register indexer for arrays.");
        }
        #[cfg(not(feature = "no_object"))]
        if TypeId::of::<A>() == TypeId::of::<crate::Map>() {
            panic!("Cannot register indexer for object maps.");
        }
        if TypeId::of::<A>() == TypeId::of::<String>()
            || TypeId::of::<A>() == TypeId::of::<&str>()
            || TypeId::of::<A>() == TypeId::of::<ImmutableString>()
        {
            panic!("Cannot register indexer for strings.");
        }

        self.set_fn(
            crate::engine::FN_IDX_GET,
            FnNamespace::Global,
            FnAccess::Public,
            None,
            F::param_types(),
            func.into_callable_function(crate::engine::FN_IDX_GET.into(), true),
        )
    }

    /// Set a Rust index setter taking three parameters (the first one mutable) into the [`Module`],
    /// returning a [`u64`] hash key.
    /// This function is automatically exposed to the global namespace.
    ///
    /// If there is a similar existing Rust function, it is replaced.
    ///
    /// # Panics
    ///
    /// Panics if the type is [`Array`][crate::Array] or [`Map`][crate::Map].
    /// Indexers for arrays, object maps and strings cannot be registered.
    ///
    /// # Function Metadata
    ///
    /// No metadata for the function is registered.
    /// Use [`update_fn_metadata`][Module::update_fn_metadata] to add metadata.
    ///
    /// # Example
    ///
    /// ```
    /// use rhai::{Module, ImmutableString};
    ///
    /// let mut module = Module::new();
    /// let hash = module.set_indexer_set_fn(|x: &mut i64, y: ImmutableString, value: i64| {
    ///     *x = y.len() as i64 + value; Ok(())
    /// });
    /// assert!(module.contains_fn(hash));
    /// ```
    #[cfg(any(not(feature = "no_index"), not(feature = "no_object")))]
    #[inline]
    pub fn set_indexer_set_fn<A, B, const C: bool, T, F>(&mut self, func: F) -> u64
    where
        A: Variant + Clone,
        B: Variant + Clone,
        T: Variant + Clone,
        F: RegisterNativeFunction<(Mut<A>, B, T), 3, C, (), true> + SendSync + 'static,
    {
        #[cfg(not(feature = "no_index"))]
        if TypeId::of::<A>() == TypeId::of::<crate::Array>() {
            panic!("Cannot register indexer for arrays.");
        }
        #[cfg(not(feature = "no_object"))]
        if TypeId::of::<A>() == TypeId::of::<crate::Map>() {
            panic!("Cannot register indexer for object maps.");
        }
        if TypeId::of::<A>() == TypeId::of::<String>()
            || TypeId::of::<A>() == TypeId::of::<&str>()
            || TypeId::of::<A>() == TypeId::of::<ImmutableString>()
        {
            panic!("Cannot register indexer for strings.");
        }

        self.set_fn(
            crate::engine::FN_IDX_SET,
            FnNamespace::Global,
            FnAccess::Public,
            None,
            F::param_types(),
            func.into_callable_function(crate::engine::FN_IDX_SET.into(), false),
        )
    }

    /// Set a pair of Rust index getter and setter functions into the [`Module`], returning both [`u64`] hash keys.
    /// This is a short-hand for [`set_indexer_get_fn`][Module::set_indexer_get_fn] and
    /// [`set_indexer_set_fn`][Module::set_indexer_set_fn].
    ///
    /// These functions are automatically exposed to the global namespace.
    ///
    /// If there are similar existing Rust functions, they are replaced.
    ///
    /// # Panics
    ///
    /// Panics if the type is [`Array`][crate::Array] or [`Map`][crate::Map].
    /// Indexers for arrays, object maps and strings cannot be registered.
    ///
    /// # Function Metadata
    ///
    /// No metadata for the function is registered.
    /// Use [`update_fn_metadata`][Module::update_fn_metadata] to add metadata.
    ///
    /// # Example
    ///
    /// ```
    /// use rhai::{Module, ImmutableString};
    ///
    /// let mut module = Module::new();
    /// let (hash_get, hash_set) = module.set_indexer_get_set_fn(
    ///     |x: &mut i64, y: ImmutableString| {
    ///         Ok(*x + y.len() as i64)
    ///     },
    ///     |x: &mut i64, y: ImmutableString, value: i64| {
    ///         *x = y.len() as i64 + value; Ok(())
    ///     }
    /// );
    /// assert!(module.contains_fn(hash_get));
    /// assert!(module.contains_fn(hash_set));
    /// ```
    #[cfg(any(not(feature = "no_index"), not(feature = "no_object")))]
    #[inline(always)]
    pub fn set_indexer_get_set_fn<
        A: Variant + Clone,
        B: Variant + Clone,
        const C1: bool,
        const C2: bool,
        T: Variant + Clone,
    >(
        &mut self,
        get_fn: impl RegisterNativeFunction<(Mut<A>, B), 2, C1, T, true> + SendSync + 'static,
        set_fn: impl RegisterNativeFunction<(Mut<A>, B, T), 3, C2, (), true> + SendSync + 'static,
    ) -> (u64, u64) {
        (
            self.set_indexer_get_fn(get_fn),
            self.set_indexer_set_fn(set_fn),
        )
    }

    /// Look up a native Rust function by hash.
    ///
    /// The [`u64`] hash is returned by the [`set_native_fn`][Module::set_native_fn] call.
    #[inline]
    #[must_use]
    pub(crate) fn get_fn(&self, hash_native: u64) -> Option<&CallableFunction> {
        self.functions
            .as_ref()
            .and_then(|m| m.get(&hash_native))
            .map(|f| &f.func)
    }

    /// Can the particular function with [`Dynamic`] parameter(s) exist in the [`Module`]?
    ///
    /// A `true` return value does not automatically imply that the function _must_ exist.
    #[inline]
    #[must_use]
    pub(crate) fn may_contain_dynamic_fn(&self, hash_script: u64) -> bool {
        !self
            .dynamic_functions_filter
            .as_ref()
            .map_or(false, |f| f.is_absent(hash_script))
    }

    /// Does the particular namespace-qualified function exist in the [`Module`]?
    ///
    /// The [`u64`] hash is calculated by [`build_index`][Module::build_index].
    #[inline(always)]
    #[must_use]
    pub fn contains_qualified_fn(&self, hash_fn: u64) -> bool {
        self.all_functions
            .as_ref()
            .map_or(false, |m| m.contains_key(&hash_fn))
    }

    /// Get a namespace-qualified function.
    ///
    /// The [`u64`] hash is calculated by [`build_index`][Module::build_index].
    #[cfg(not(feature = "no_module"))]
    #[inline]
    #[must_use]
    pub(crate) fn get_qualified_fn(&self, hash_qualified_fn: u64) -> Option<&CallableFunction> {
        self.all_functions
            .as_ref()
            .and_then(|m| m.get(&hash_qualified_fn))
    }

    /// Combine another [`Module`] into this [`Module`].
    /// The other [`Module`] is _consumed_ to merge into this [`Module`].
    #[inline]
    pub fn combine(&mut self, other: Self) -> &mut Self {
        match self.modules {
            Some(ref mut m) if other.modules.is_some() => {
                m.extend(other.modules.unwrap().into_iter())
            }
            Some(_) => (),
            None => self.modules = other.modules,
        }
        match self.variables {
            Some(ref mut m) if other.variables.is_some() => {
                m.extend(other.variables.unwrap().into_iter())
            }
            Some(_) => (),
            None => self.variables = other.variables,
        }
        match self.functions {
            Some(ref mut m) if other.functions.is_some() => {
                m.extend(other.functions.unwrap().into_iter())
            }
            Some(_) => (),
            None => self.functions = other.functions,
        }
        match self.dynamic_functions_filter {
            Some(ref mut m) if other.dynamic_functions_filter.is_some() => {
                **m += &**other.dynamic_functions_filter.as_ref().unwrap()
            }
            Some(_) => (),
            None => self.dynamic_functions_filter = other.dynamic_functions_filter,
        }
        match self.type_iterators {
            Some(ref mut m) if other.type_iterators.is_some() => {
                m.extend(other.type_iterators.unwrap().into_iter())
            }
            Some(_) => (),
            None => self.type_iterators = other.type_iterators,
        }
        self.all_functions = None;
        self.all_variables = None;
        self.all_type_iterators = None;
        self.flags
            .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);

        #[cfg(feature = "metadata")]
        if !other.doc.as_deref().map_or(true, SmartString::is_empty) {
            if !self.doc.as_deref().map_or(true, SmartString::is_empty) {
                self.doc.get_or_insert_with(Default::default).push('\n');
            }
            self.doc
                .get_or_insert_with(Default::default)
                .push_str(other.doc.as_ref().unwrap());
        }

        self
    }

    /// Combine another [`Module`] into this [`Module`].
    /// The other [`Module`] is _consumed_ to merge into this [`Module`].
    /// Sub-modules are flattened onto the root [`Module`], with higher level overriding lower level.
    #[inline]
    pub fn combine_flatten(&mut self, other: Self) -> &mut Self {
        if let Some(modules) = other.modules {
            for m in modules.into_values() {
                self.combine_flatten(shared_take_or_clone(m));
            }
        }
        match self.variables {
            Some(ref mut m) if other.variables.is_some() => {
                m.extend(other.variables.unwrap().into_iter())
            }
            Some(_) => (),
            None => self.variables = other.variables,
        }
        match self.functions {
            Some(ref mut m) if other.functions.is_some() => {
                m.extend(other.functions.unwrap().into_iter())
            }
            Some(_) => (),
            None => self.functions = other.functions,
        }
        match self.dynamic_functions_filter {
            Some(ref mut m) if other.dynamic_functions_filter.is_some() => {
                **m += &**other.dynamic_functions_filter.as_ref().unwrap()
            }
            Some(_) => (),
            None => self.dynamic_functions_filter = other.dynamic_functions_filter,
        }
        match self.type_iterators {
            Some(ref mut m) if other.type_iterators.is_some() => {
                m.extend(other.type_iterators.unwrap().into_iter())
            }
            Some(_) => (),
            None => self.type_iterators = other.type_iterators,
        }
        self.all_functions = None;
        self.all_variables = None;
        self.all_type_iterators = None;
        self.flags
            .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);

        #[cfg(feature = "metadata")]
        if !other.doc.as_deref().map_or(true, SmartString::is_empty) {
            if !self.doc.as_deref().map_or(true, SmartString::is_empty) {
                self.doc.get_or_insert_with(Default::default).push('\n');
            }
            self.doc
                .get_or_insert_with(Default::default)
                .push_str(other.doc.as_ref().unwrap());
        }

        self
    }

    /// Polyfill this [`Module`] with another [`Module`].
    /// Only items not existing in this [`Module`] are added.
    #[inline]
    pub fn fill_with(&mut self, other: &Self) -> &mut Self {
        if let Some(ref modules) = other.modules {
            let m = self.modules.get_or_insert_with(Default::default);

            for (k, v) in modules.iter() {
                if !m.contains_key(k) {
                    m.insert(k.clone(), v.clone());
                }
            }
        }
        if let Some(ref variables) = other.variables {
            for (k, v) in variables.iter() {
                let map = self.variables.get_or_insert_with(Default::default);

                if !map.contains_key(k) {
                    map.insert(k.clone(), v.clone());
                }
            }
        }
        if let Some(ref functions) = other.functions {
            let others_len = functions.len();

            for (&k, f) in functions.iter() {
                let map = self
                    .functions
                    .get_or_insert_with(|| new_hash_map(FN_MAP_SIZE));
                map.reserve(others_len);
                map.entry(k).or_insert_with(|| f.clone());
            }
        }
        match self.dynamic_functions_filter {
            Some(ref mut m) if other.dynamic_functions_filter.is_some() => {
                **m += &**other.dynamic_functions_filter.as_ref().unwrap()
            }
            Some(_) => (),
            None => self.dynamic_functions_filter = other.dynamic_functions_filter.clone(),
        }
        if let Some(ref type_iterators) = other.type_iterators {
            let t = self.type_iterators.get_or_insert_with(Default::default);

            for (&k, v) in type_iterators.iter() {
                t.entry(k).or_insert_with(|| v.clone());
            }
        }
        self.all_functions = None;
        self.all_variables = None;
        self.all_type_iterators = None;
        self.flags
            .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);

        #[cfg(feature = "metadata")]
        if !other.doc.as_deref().map_or(true, SmartString::is_empty) {
            if !self.doc.as_deref().map_or(true, SmartString::is_empty) {
                self.doc.get_or_insert_with(Default::default).push('\n');
            }
            self.doc
                .get_or_insert_with(Default::default)
                .push_str(other.doc.as_ref().unwrap());
        }

        self
    }

    /// Merge another [`Module`] into this [`Module`].
    #[inline(always)]
    pub fn merge(&mut self, other: &Self) -> &mut Self {
        self.merge_filtered(other, |_, _, _, _, _| true)
    }

    /// Merge another [`Module`] into this [`Module`] based on a filter predicate.
    pub(crate) fn merge_filtered(
        &mut self,
        other: &Self,
        _filter: impl Fn(FnNamespace, FnAccess, bool, &str, usize) -> bool + Copy,
    ) -> &mut Self {
        if let Some(ref modules) = other.modules {
            for (k, v) in modules.iter() {
                let mut m = Self::new();
                m.merge_filtered(v, _filter);
                self.set_sub_module(k.clone(), m);
            }
            #[cfg(feature = "no_function")]
            if let Some(ref mut m) = self.modules {
                m.extend(modules.iter().map(|(k, v)| (k.clone(), v.clone())));
            } else {
                self.modules = Some(modules.clone());
            }
        }

        if let Some(ref variables) = other.variables {
            match self.variables {
                Some(ref mut m) => m.extend(variables.iter().map(|(k, v)| (k.clone(), v.clone()))),
                None => self.variables = other.variables.clone(),
            }
        }
        if let Some(ref functions) = other.functions {
            match self.functions {
                Some(ref mut m) => m.extend(
                    functions
                        .iter()
                        .filter(|&(.., f)| {
                            _filter(
                                f.metadata.namespace,
                                f.metadata.access,
                                f.func.is_script(),
                                f.metadata.name.as_str(),
                                f.metadata.num_params,
                            )
                        })
                        .map(|(&k, f)| (k, f.clone())),
                ),
                None => self.functions = other.functions.clone(),
            }
        }
        match self.dynamic_functions_filter {
            Some(ref mut m) if other.dynamic_functions_filter.is_some() => {
                **m += &**other.dynamic_functions_filter.as_ref().unwrap()
            }
            Some(_) => (),
            None => self.dynamic_functions_filter = other.dynamic_functions_filter.clone(),
        }

        if let Some(ref type_iterators) = other.type_iterators {
            match self.type_iterators {
                Some(ref mut t) => t.extend(type_iterators.iter().map(|(&k, v)| (k, v.clone()))),
                None => self.type_iterators = other.type_iterators.clone(),
            }
        }
        self.all_functions = None;
        self.all_variables = None;
        self.all_type_iterators = None;
        self.flags
            .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);

        #[cfg(feature = "metadata")]
        if !other.doc.as_deref().map_or(true, SmartString::is_empty) {
            if !self.doc.as_deref().map_or(true, SmartString::is_empty) {
                self.doc.get_or_insert_with(Default::default).push('\n');
            }
            self.doc
                .get_or_insert_with(Default::default)
                .push_str(other.doc.as_ref().unwrap());
        }

        self
    }

    /// Filter out the functions, retaining only some script-defined functions based on a filter predicate.
    #[cfg(not(feature = "no_function"))]
    #[inline]
    pub(crate) fn retain_script_functions(
        &mut self,
        filter: impl Fn(FnNamespace, FnAccess, &str, usize) -> bool,
    ) -> &mut Self {
        self.functions = std::mem::take(&mut self.functions).map(|m| {
            m.into_iter()
                .filter(|(.., f)| {
                    if f.func.is_script() {
                        filter(
                            f.metadata.namespace,
                            f.metadata.access,
                            f.metadata.name.as_str(),
                            f.metadata.num_params,
                        )
                    } else {
                        false
                    }
                })
                .collect()
        });

        self.dynamic_functions_filter = None;
        self.all_functions = None;
        self.all_variables = None;
        self.all_type_iterators = None;
        self.flags
            .remove(ModuleFlags::INDEXED | ModuleFlags::INDEXED_GLOBAL_FUNCTIONS);
        self
    }

    /// Get the number of variables, functions and type iterators in the [`Module`].
    #[inline(always)]
    #[must_use]
    pub fn count(&self) -> (usize, usize, usize) {
        (
            self.variables.as_ref().map_or(0, HashMap::len),
            self.functions.as_ref().map_or(0, StraightHashMap::len),
            self.type_iterators.as_ref().map_or(0, HashMap::len),
        )
    }

    /// Get an iterator to the sub-modules in the [`Module`].
    #[inline(always)]
    pub fn iter_sub_modules(&self) -> impl Iterator<Item = (&str, &SharedModule)> {
        self.iter_sub_modules_raw().map(|(k, m)| (k.as_str(), m))
    }
    /// Get an iterator to the sub-modules in the [`Module`].
    #[inline]
    pub(crate) fn iter_sub_modules_raw(
        &self,
    ) -> impl Iterator<Item = (&Identifier, &SharedModule)> {
        self.modules
            .as_ref()
            .into_iter()
            .flatten()
            .map(|(k, m)| (k, m))
    }

    /// Get an iterator to the variables in the [`Module`].
    #[inline(always)]
    pub fn iter_var(&self) -> impl Iterator<Item = (&str, &Dynamic)> {
        self.iter_var_raw().map(|(k, v)| (k.as_str(), v))
    }
    /// Get an iterator to the variables in the [`Module`].
    #[inline]
    pub(crate) fn iter_var_raw(&self) -> impl Iterator<Item = (&Identifier, &Dynamic)> {
        self.variables
            .as_ref()
            .into_iter()
            .flatten()
            .map(|(k, v)| (k, v))
    }

    /// Get an iterator to the functions in the [`Module`].
    #[inline]
    #[allow(dead_code)]
    pub(crate) fn iter_fn(&self) -> impl Iterator<Item = &FuncInfo> {
        self.functions.iter().flat_map(StraightHashMap::values)
    }

    /// Get an iterator over all script-defined functions in the [`Module`].
    ///
    /// Function metadata includes:
    /// 1) Namespace ([`FnNamespace::Global`] or [`FnNamespace::Internal`]).
    /// 2) Access mode ([`FnAccess::Public`] or [`FnAccess::Private`]).
    /// 3) Function name (as string slice).
    /// 4) Number of parameters.
    /// 5) Shared reference to function definition [`ScriptFnDef`][crate::ast::ScriptFnDef].
    #[cfg(not(feature = "no_function"))]
    #[inline]
    pub(crate) fn iter_script_fn(
        &self,
    ) -> impl Iterator<
        Item = (
            FnNamespace,
            FnAccess,
            &str,
            usize,
            &Shared<crate::ast::ScriptFnDef>,
        ),
    > + '_ {
        self.iter_fn().filter(|&f| f.func.is_script()).map(|f| {
            (
                f.metadata.namespace,
                f.metadata.access,
                f.metadata.name.as_str(),
                f.metadata.num_params,
                f.func.get_script_fn_def().expect("script-defined function"),
            )
        })
    }

    /// Get an iterator over all script-defined functions in the [`Module`].
    ///
    /// Function metadata includes:
    /// 1) Namespace ([`FnNamespace::Global`] or [`FnNamespace::Internal`]).
    /// 2) Access mode ([`FnAccess::Public`] or [`FnAccess::Private`]).
    /// 3) Function name (as string slice).
    /// 4) Number of parameters.
    #[cfg(not(feature = "no_function"))]
    #[cfg(not(feature = "internals"))]
    #[inline]
    pub fn iter_script_fn_info(
        &self,
    ) -> impl Iterator<Item = (FnNamespace, FnAccess, &str, usize)> {
        self.iter_fn().filter(|&f| f.func.is_script()).map(|f| {
            (
                f.metadata.namespace,
                f.metadata.access,
                f.metadata.name.as_str(),
                f.metadata.num_params,
            )
        })
    }

    /// _(internals)_ Get an iterator over all script-defined functions in the [`Module`].
    /// Exported under the `internals` feature only.
    ///
    /// Function metadata includes:
    /// 1) Namespace ([`FnNamespace::Global`] or [`FnNamespace::Internal`]).
    /// 2) Access mode ([`FnAccess::Public`] or [`FnAccess::Private`]).
    /// 3) Function name (as string slice).
    /// 4) Number of parameters.
    /// 5) _(internals)_ Shared reference to function definition [`ScriptFnDef`][crate::ast::ScriptFnDef].
    #[cfg(not(feature = "no_function"))]
    #[cfg(feature = "internals")]
    #[inline(always)]
    pub fn iter_script_fn_info(
        &self,
    ) -> impl Iterator<
        Item = (
            FnNamespace,
            FnAccess,
            &str,
            usize,
            &Shared<crate::ast::ScriptFnDef>,
        ),
    > {
        self.iter_script_fn()
    }

    /// Create a new [`Module`] by evaluating an [`AST`][crate::AST].
    ///
    /// The entire [`AST`][crate::AST] is encapsulated into each function, allowing functions to
    /// cross-call each other.
    ///
    /// # Example
    ///
    /// ```
    /// # fn main() -> Result<(), Box<rhai::EvalAltResult>> {
    /// use rhai::{Engine, Module, Scope};
    ///
    /// let engine = Engine::new();
    /// let ast = engine.compile("let answer = 42; export answer;")?;
    /// let module = Module::eval_ast_as_new(Scope::new(), &ast, &engine)?;
    /// assert!(module.contains_var("answer"));
    /// assert_eq!(module.get_var_value::<i64>("answer").expect("answer should exist"), 42);
    /// # Ok(())
    /// # }
    /// ```
    #[cfg(not(feature = "no_module"))]
    #[inline(always)]
    pub fn eval_ast_as_new(
        scope: crate::Scope,
        ast: &crate::AST,
        engine: &crate::Engine,
    ) -> RhaiResultOf<Self> {
        let mut scope = scope;
        let global = &mut crate::eval::GlobalRuntimeState::new(engine);

        Self::eval_ast_as_new_raw(engine, &mut scope, global, ast)
    }
    /// Create a new [`Module`] by evaluating an [`AST`][crate::AST].
    ///
    /// The entire [`AST`][crate::AST] is encapsulated into each function, allowing functions to
    /// cross-call each other.
    ///
    /// # WARNING - Low Level API
    ///
    /// This function is very low level.
    ///
    /// In particular, the [`global`][crate::GlobalRuntimeState] parameter allows the entire
    /// calling environment to be encapsulated, including automatic global constants.
    #[cfg(not(feature = "no_module"))]
    pub fn eval_ast_as_new_raw(
        engine: &crate::Engine,
        scope: &mut crate::Scope,
        global: &mut crate::eval::GlobalRuntimeState,
        ast: &crate::AST,
    ) -> RhaiResultOf<Self> {
        // Save global state
        let orig_scope_len = scope.len();
        let orig_imports_len = global.num_imports();
        let orig_source = global.source.clone();

        #[cfg(not(feature = "no_function"))]
        let orig_lib_len = global.lib.len();

        #[cfg(not(feature = "no_function"))]
        let orig_constants = std::mem::take(&mut global.constants);

        // Run the script
        let caches = &mut crate::eval::Caches::new();

        let result = engine.eval_ast_with_scope_raw(global, caches, scope, ast);

        // Create new module
        let mut module = Module::new();

        // Extra modules left become sub-modules
        let mut imports = crate::StaticVec::new_const();

        if result.is_ok() {
            global
                .scan_imports_raw()
                .skip(orig_imports_len)
                .for_each(|(k, m)| {
                    imports.push((k.clone(), m.clone()));
                    module.set_sub_module(k.clone(), m.clone());
                });
        }

        // Restore global state
        #[cfg(not(feature = "no_function"))]
        let constants = std::mem::replace(&mut global.constants, orig_constants);

        global.truncate_imports(orig_imports_len);

        #[cfg(not(feature = "no_function"))]
        global.lib.truncate(orig_lib_len);

        global.source = orig_source;

        // The return value is thrown away and not used
        let _ = result?;

        // Encapsulated environment
        let environ = Shared::new(crate::func::EncapsulatedEnviron {
            #[cfg(not(feature = "no_function"))]
            lib: ast.shared_lib().clone(),
            imports: imports.into(),
            #[cfg(not(feature = "no_function"))]
            constants,
        });

        // Variables with an alias left in the scope become module variables
        while scope.len() > orig_scope_len {
            let (_name, mut value, mut aliases) = scope.pop_entry().expect("not empty");

            value.deep_scan(|v| {
                if let Some(fn_ptr) = v.downcast_mut::<crate::FnPtr>() {
                    fn_ptr.set_encapsulated_environ(Some(environ.clone()));
                }
            });

            match aliases.len() {
                0 => (),
                1 => {
                    let alias = aliases.pop().unwrap();
                    module.set_var(alias, value);
                }
                _ => {
                    let last_alias = aliases.pop().unwrap();
                    for alias in aliases {
                        module.set_var(alias, value.clone());
                    }
                    // Avoid cloning the last value
                    module.set_var(last_alias, value);
                }
            }
        }

        // Non-private functions defined become module functions
        #[cfg(not(feature = "no_function"))]
        ast.iter_fn_def()
            .filter(|&f| match f.access {
                FnAccess::Public => true,
                FnAccess::Private => false,
            })
            .for_each(|f| {
                let hash = module.set_script_fn(f.clone());
                let f = module.functions.as_mut().unwrap().get_mut(&hash).unwrap();

                // Encapsulate AST environment
                if let CallableFunction::Script {
                    environ: ref mut e, ..
                } = f.func
                {
                    *e = Some(environ.clone());
                }
            });

        module.id = ast.source_raw().cloned();

        #[cfg(feature = "metadata")]
        module.set_doc(ast.doc());

        module.build_index();

        Ok(module)
    }

    /// Does the [`Module`] contain indexed functions that have been exposed to the global namespace?
    ///
    /// # Panics
    ///
    /// Panics if the [`Module`] is not yet indexed via [`build_index`][Module::build_index].
    #[inline(always)]
    #[must_use]
    pub fn contains_indexed_global_functions(&self) -> bool {
        self.flags.contains(ModuleFlags::INDEXED_GLOBAL_FUNCTIONS)
    }

    /// Scan through all the sub-modules in the [`Module`] and build a hash index of all
    /// variables and functions as one flattened namespace.
    ///
    /// If the [`Module`] is already indexed, this method has no effect.
    pub fn build_index(&mut self) -> &mut Self {
        // Collect a particular module.
        fn index_module<'a>(
            module: &'a Module,
            path: &mut Vec<&'a str>,
            variables: &mut StraightHashMap<Dynamic>,
            functions: &mut StraightHashMap<CallableFunction>,
            type_iterators: &mut HashMap<TypeId, Shared<IteratorFn>>,
        ) -> bool {
            let mut contains_indexed_global_functions = false;

            if let Some(ref modules) = module.modules {
                for (name, m) in modules.iter() {
                    // Index all the sub-modules first.
                    path.push(name);
                    if index_module(m, path, variables, functions, type_iterators) {
                        contains_indexed_global_functions = true;
                    }
                    path.pop();
                }
            }

            // Index all variables
            if let Some(ref v) = module.variables {
                for (var_name, value) in v.iter() {
                    let hash_var = crate::calc_var_hash(path.iter().copied(), var_name);

                    // Catch hash collisions in testing environment only.
                    #[cfg(feature = "testing-environ")]
                    if let Some(_) = variables.get(&hash_var) {
                        panic!(
                            "Hash {} already exists when indexing variable {}",
                            hash_var, var_name
                        );
                    }

                    variables.insert(hash_var, value.clone());
                }
            }

            // Index all type iterators
            if let Some(ref t) = module.type_iterators {
                for (&type_id, func) in t.iter() {
                    type_iterators.insert(type_id, func.clone());
                }
            }

            // Index all functions
            for (&hash, f) in module.functions.iter().flatten() {
                match f.metadata.namespace {
                    FnNamespace::Global => {
                        // Catch hash collisions in testing environment only.
                        #[cfg(feature = "testing-environ")]
                        if let Some(fx) = functions.get(&hash) {
                            panic!(
                                "Hash {} already exists when indexing function {:#?}:\n{:#?}",
                                hash, f.func, fx
                            );
                        }

                        // Flatten all functions with global namespace
                        functions.insert(hash, f.func.clone());
                        contains_indexed_global_functions = true;
                    }
                    FnNamespace::Internal => (),
                }
                match f.metadata.access {
                    FnAccess::Public => (),
                    FnAccess::Private => continue, // Do not index private functions
                }

                if !f.func.is_script() {
                    let hash_qualified_fn = calc_native_fn_hash(
                        path.iter().copied(),
                        f.metadata.name.as_str(),
                        &f.metadata.param_types,
                    );

                    // Catch hash collisions in testing environment only.
                    #[cfg(feature = "testing-environ")]
                    if let Some(fx) = functions.get(&hash_qualified_fn) {
                        panic!(
                            "Hash {} already exists when indexing function {:#?}:\n{:#?}",
                            hash_qualified_fn, f.func, fx
                        );
                    }

                    functions.insert(hash_qualified_fn, f.func.clone());
                } else {
                    #[cfg(not(feature = "no_function"))]
                    {
                        let hash_qualified_script = crate::calc_fn_hash(
                            path.iter().copied(),
                            &f.metadata.name,
                            f.metadata.num_params,
                        );
                        #[cfg(not(feature = "no_object"))]
                        let hash_qualified_script =
                            if let Some(ref this_type) = f.metadata.this_type {
                                crate::calc_typed_method_hash(hash_qualified_script, this_type)
                            } else {
                                hash_qualified_script
                            };

                        // Catch hash collisions in testing environment only.
                        #[cfg(feature = "testing-environ")]
                        if let Some(fx) = functions.get(&hash_qualified_script) {
                            panic!(
                                "Hash {} already exists when indexing function {:#?}:\n{:#?}",
                                hash_qualified_script, f.func, fx
                            );
                        }

                        functions.insert(hash_qualified_script, f.func.clone());
                    }
                }
            }

            contains_indexed_global_functions
        }

        if !self.is_indexed() {
            let mut path = Vec::with_capacity(4);
            let mut variables = new_hash_map(self.variables.as_ref().map_or(0, HashMap::len));
            let mut functions =
                new_hash_map(self.functions.as_ref().map_or(0, StraightHashMap::len));
            let mut type_iterators = HashMap::new();

            path.push("");

            let has_global_functions = index_module(
                self,
                &mut path,
                &mut variables,
                &mut functions,
                &mut type_iterators,
            );

            self.flags
                .set(ModuleFlags::INDEXED_GLOBAL_FUNCTIONS, has_global_functions);

            self.all_variables = (!variables.is_empty()).then(|| variables.into());
            self.all_functions = (!functions.is_empty()).then(|| functions.into());
            self.all_type_iterators = (!type_iterators.is_empty()).then(|| type_iterators.into());

            self.flags |= ModuleFlags::INDEXED;
        }

        self
    }

    /// Does a type iterator exist in the entire module tree?
    #[inline(always)]
    #[must_use]
    pub fn contains_qualified_iter(&self, id: TypeId) -> bool {
        self.all_type_iterators
            .as_ref()
            .map_or(false, |t| t.contains_key(&id))
    }

    /// Does a type iterator exist in the module?
    #[inline(always)]
    #[must_use]
    pub fn contains_iter(&self, id: TypeId) -> bool {
        self.type_iterators
            .as_ref()
            .map_or(false, |t| t.contains_key(&id))
    }

    /// Set a type iterator into the [`Module`].
    #[inline(always)]
    pub fn set_iter(
        &mut self,
        type_id: TypeId,
        func: impl Fn(Dynamic) -> Box<dyn Iterator<Item = Dynamic>> + SendSync + 'static,
    ) -> &mut Self {
        self.set_iter_result(type_id, move |x| {
            Box::new(func(x).map(Ok)) as Box<dyn Iterator<Item = RhaiResultOf<Dynamic>>>
        })
    }

    /// Set a fallible type iterator into the [`Module`].
    #[inline]
    pub fn set_iter_result(
        &mut self,
        type_id: TypeId,
        func: impl Fn(Dynamic) -> Box<dyn Iterator<Item = RhaiResultOf<Dynamic>>> + SendSync + 'static,
    ) -> &mut Self {
        let func = Shared::new(func);
        if self.is_indexed() {
            self.all_type_iterators
                .get_or_insert_with(Default::default)
                .insert(type_id, func.clone());
        }
        self.type_iterators
            .get_or_insert_with(Default::default)
            .insert(type_id, func);
        self
    }

    /// Set a type iterator into the [`Module`].
    #[inline(always)]
    pub fn set_iterable<T>(&mut self) -> &mut Self
    where
        T: Variant + Clone + IntoIterator,
        <T as IntoIterator>::Item: Variant + Clone,
    {
        self.set_iter(TypeId::of::<T>(), |obj: Dynamic| {
            Box::new(obj.cast::<T>().into_iter().map(Dynamic::from))
        })
    }

    /// Set a fallible type iterator into the [`Module`].
    #[inline(always)]
    pub fn set_iterable_result<T, X>(&mut self) -> &mut Self
    where
        T: Variant + Clone + IntoIterator<Item = RhaiResultOf<X>>,
        X: Variant + Clone,
    {
        self.set_iter_result(TypeId::of::<T>(), |obj: Dynamic| {
            Box::new(obj.cast::<T>().into_iter().map(|v| v.map(Dynamic::from)))
        })
    }

    /// Set an iterator type into the [`Module`] as a type iterator.
    #[inline(always)]
    pub fn set_iterator<T>(&mut self) -> &mut Self
    where
        T: Variant + Clone + Iterator,
        <T as Iterator>::Item: Variant + Clone,
    {
        self.set_iter(TypeId::of::<T>(), |obj: Dynamic| {
            Box::new(obj.cast::<T>().map(Dynamic::from))
        })
    }

    /// Set a iterator type into the [`Module`] as a fallible type iterator.
    #[inline(always)]
    pub fn set_iterator_result<T, X>(&mut self) -> &mut Self
    where
        T: Variant + Clone + Iterator<Item = RhaiResultOf<X>>,
        X: Variant + Clone,
    {
        self.set_iter_result(TypeId::of::<T>(), |obj: Dynamic| {
            Box::new(obj.cast::<T>().map(|v| v.map(Dynamic::from)))
        })
    }

    /// Get the specified type iterator.
    #[cfg(not(feature = "no_module"))]
    #[inline]
    #[must_use]
    pub(crate) fn get_qualified_iter(&self, id: TypeId) -> Option<&IteratorFn> {
        self.all_type_iterators
            .as_ref()
            .and_then(|t| t.get(&id))
            .map(|f| &**f)
    }

    /// Get the specified type iterator.
    #[inline]
    #[must_use]
    pub(crate) fn get_iter(&self, id: TypeId) -> Option<&IteratorFn> {
        self.type_iterators
            .as_ref()
            .and_then(|t| t.get(&id))
            .map(|f| &**f)
    }
}

/// Module containing all built-in [module resolvers][ModuleResolver].
#[cfg(not(feature = "no_module"))]
pub mod resolvers;

#[cfg(not(feature = "no_module"))]
pub use resolvers::ModuleResolver;
