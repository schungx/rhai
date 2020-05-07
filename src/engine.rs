//! Main module defining the script evaluation `Engine`.

use crate::api::{ObjectGetMutCallback, ObjectMutIndexerCallback};
use crate::any::{self, Dynamic, Union};
use crate::calc_fn_hash;
use crate::error::ParseErrorType;
use crate::optimize::OptimizationLevel;
use crate::packages::{CorePackage, Package, PackageLibrary, StandardPackage};
use crate::parser::{Expr, FnDef, ModuleRef, ReturnType, Stmt, AST};
use crate::result::EvalAltResult;
use crate::scope::{EntryType as ScopeEntryType, Scope};
use crate::token::Position;
use crate::utils::{calc_fn_def, StaticVec};

#[cfg(not(feature = "no_module"))]
use crate::module::{resolvers, Module, ModuleResolver};

use crate::stdlib::{
    any::TypeId,
    boxed::Box,
    collections::HashMap,
    format,
    iter::once,
    marker::PhantomData,
    mem,
    num::NonZeroUsize,
    ops::{Deref, DerefMut},
    rc::Rc,
    string::{String, ToString},
    sync::Arc,
    vec::Vec,
};

/// An dynamic array of `Dynamic` values.
///
/// Not available under the `no_index` feature.
#[cfg(not(feature = "no_index"))]
pub type Array = Vec<Dynamic>;

/// An dynamic hash map of `Dynamic` values with `String` keys.
///
/// Not available under the `no_object` feature.
#[cfg(not(feature = "no_object"))]
pub type Map = HashMap<String, Dynamic>;


trait ObjectGetMutCallbackAny {
    fn call_on<'a>(&self, target: Target<'a>) -> Target<'a>;
}

trait ObjectMutIndexerCallbackAny {
    fn call_on<'a>(&self, target: Target<'a>, index: Dynamic) -> Target<'a>;
}


// This struct is a workaround suggested here:
// https://github.com/rust-lang/rust/issues/25041

struct Function<F, I, O> {
    in_p: PhantomData<I>,
    out_p: PhantomData<O>,
    function: F
}

impl <F, I, O> Function<F, I, O> {
    fn new(function: F) -> Self {
        Function{
            function,
            in_p: PhantomData,
            out_p: PhantomData,
        }
    }
}

impl<'a, F, T, U> ObjectGetMutCallbackAny for Function<F, T, U>
    where T: any::Variant, U: any::Variant, F: ObjectGetMutCallback<T, U>
{
    fn call_on<'b>(&self, target: Target<'b>) -> Target<'b> {
        let ptr: &mut T = target.as_mut::<T>().expect("Hash collision maybe?");
        Target{ ptr: (self.function)(ptr) as &mut dyn any::Variant }
    }    
}

impl<'a, F, I, I1, O> ObjectMutIndexerCallbackAny for Function<F, (I, I1), O>
    where I: any::Variant, I1: any::Variant, O: any::Variant, F: ObjectMutIndexerCallback<I, I1, O>
{
    fn call_on<'b>(&self, target: Target<'b>, arg: Dynamic) -> Target<'b> {
        let ptr: &mut I = target.as_mut::<I>().expect("Hash collision maybe?");
        let arg: I1 = arg.try_cast().expect("Hash collision maybe?");
        Target{ ptr: (self.function)(ptr, arg) as &mut dyn any::Variant }
    }   
}

macro_rules! maybe_sync(($t:ty) => { $t });

#[cfg(feature = "sync")]
pub trait MaybeSyncSend:  Sync + Send {}
#[cfg(feature = "sync")]
impl <T: Sync + Send + ?Sized> MaybeSyncSend for T {}

#[cfg(not(feature = "sync"))]
pub trait MaybeSyncSend {}
#[cfg(not(feature = "sync"))]
impl <T: ?Sized> MaybeSyncSend for T {}

// Sticking this here to keep all the crazy type shennagians in the same place.
impl Engine {
    #[cfg(not(feature = "no_object"))]
    pub fn register_get_mut<T, U, F>(&mut self, name: &str, callback: F)
    where
        T: any::Variant + Clone,
        U: any::Variant + Clone,
        F: ObjectGetMutCallback<T, U> + Clone,
    {
        let fn_name = make_mut_getter(name);
        let hash = calc_fn_hash(&fn_name, std::iter::once(TypeId::of::<T>()));

        let function = Function::new(callback);
        let dny_any_callback: Box<dyn ObjectGetMutCallbackAny> = Box::new(function) as Box<dyn ObjectGetMutCallbackAny>; 
        self.mut_getters.insert(hash, dny_any_callback);
    }

    /// Register an indexer function for a registered type with the `Engine`.
    ///
    /// The function signature must start with `&mut self` and not `&self`.
    ///
    /// # Example
    ///
    /// ```
    /// #[derive(Clone)]
    /// struct TestStruct {
    ///     fields: Vec<i64>
    /// }
    ///
    /// impl TestStruct {
    ///     fn new() -> Self                { TestStruct { fields: vec![1, 2, 3, 4, 5] } }
    ///
    ///     fn get_field(&mut self, index: i64) -> &mut i64 { &mut self.fields[index as usize] }
    /// }
    ///
    /// # fn main() -> Result<(), Box<rhai::EvalAltResult>> {
    /// use rhai::{Engine, RegisterFn};
    ///
    /// let mut engine = Engine::new();
    ///
    /// // Register the custom type.
    /// engine.register_type::<TestStruct>();
    ///
    /// engine.register_fn("new_ts", TestStruct::new);
    ///
    /// // Register an indexer.
    /// engine.register_mut_indexer(TestStruct::get_field);
    ///
    /// assert_eq!(engine.eval::<i64>("let a = new_ts(); a[2]")?, 3);
    /// # Ok(())
    /// # }
    /// ```
    #[cfg(not(feature = "no_object"))]
    #[cfg(not(feature = "no_index"))]
    pub fn register_mut_indexer<T, X, U, F>(&mut self, callback: F)
    where
        T: any::Variant + Clone,
        U: any::Variant + Clone,
        X: any::Variant + Clone,
        // F: ObjectMutIndexerCallback<T, X, U>,
        // F: Fn(&mut T, X) -> &mut U + Send + Sync + 'static,
        // F: maybe_sync!(MutIndexerFn<T, X, U>)
        F: Fn(&mut T, X) -> &mut U + MaybeSyncSend + 'static,

    {
        // TODO: No need to hash the FUNC_INDEXER part... should make a seperate hash function.
        let types = &[TypeId::of::<T>(), TypeId::of::<U>()];
        let hash = calc_fn_hash(FUNC_INDEXER, types.iter().cloned());
        println!("Insert types: {:?}", types);
        let function = Function::new(callback);
        let dny_any_callback = Box::new(function) as Box<dyn ObjectMutIndexerCallbackAny>; 
        self.mut_indexers.insert(hash, dny_any_callback);
    }
}

pub type FnCallArgs<'a> = [&'a mut Dynamic];

#[cfg(feature = "sync")]
pub type FnAny =
    dyn Fn(&mut FnCallArgs, Position) -> Result<Dynamic, Box<EvalAltResult>> + Send + Sync;
#[cfg(not(feature = "sync"))]
pub type FnAny = dyn Fn(&mut FnCallArgs, Position) -> Result<Dynamic, Box<EvalAltResult>>;

#[cfg(feature = "sync")]
pub type IteratorFn = dyn Fn(Dynamic) -> Box<dyn Iterator<Item = Dynamic>> + Send + Sync;
#[cfg(not(feature = "sync"))]
pub type IteratorFn = dyn Fn(Dynamic) -> Box<dyn Iterator<Item = Dynamic>>;

#[cfg(debug_assertions)]
pub const MAX_CALL_STACK_DEPTH: usize = 28;

#[cfg(not(debug_assertions))]
pub const MAX_CALL_STACK_DEPTH: usize = 256;

#[cfg(not(feature = "only_i32"))]
#[cfg(not(feature = "only_i64"))]
const FUNCTIONS_COUNT: usize = 512;

#[cfg(any(feature = "only_i32", feature = "only_i64"))]
const FUNCTIONS_COUNT: usize = 256;

pub const KEYWORD_PRINT: &str = "print";
pub const KEYWORD_DEBUG: &str = "debug";
pub const KEYWORD_TYPE_OF: &str = "type_of";
pub const KEYWORD_EVAL: &str = "eval";
pub const FUNC_TO_STRING: &str = "to_string";
pub const FUNC_MUT_GETTER: &str = "mut_get$";
pub const FUNC_GETTER: &str = "get$";
pub const FUNC_SETTER: &str = "set$";
pub const FUNC_INDEXER: &str = "$index$";

struct Target<'a> {
    // Importing variant breaks other code (really) so we qualify the path.
    ptr: &'a mut dyn any::Variant,
}

impl <'a> Target<'a> {
    #[inline(always)]
    pub fn is_map(&self) -> bool {
        self.ptr.is::<Map>() || self.ptr.downcast_ref::<Dynamic>().map(|d| d.is::<Map>()).unwrap_or(false)
    }

    #[inline(always)]
    pub fn is_array(&self) -> bool {
        self.ptr.is::<Array>() || self.ptr.downcast_ref::<Dynamic>().map(|d| d.is::<Array>()).unwrap_or(false)
    }

    #[inline(always)]
    pub fn is_string(&self) -> bool {
        self.ptr.is::<String>() || self.ptr.downcast_ref::<Dynamic>().map(|d| d.is::<String>()).unwrap_or(false)
    }

    #[inline(always)]
    pub fn get_map_mut(self) -> Option<&'a mut Map> {
        if self.ptr.is::<Map>() {
            return self.ptr.downcast_mut();
        }

        if let Some(dynamic) = self.ptr.downcast_mut::<Dynamic>() {
            if let Union::Map(ref mut map) = dynamic.0 {
                return Some(&mut **map);
            }
        }

        None
    }

    #[inline(always)]
    pub fn get_array_mut(self) -> Option<&'a mut Array> {
        if self.ptr.is::<Array>() {
            return self.ptr.downcast_mut();
        }

        if let Some(dynamic) = self.ptr.downcast_mut::<Dynamic>() {
            if let Union::Array(ref mut arr) = dynamic.0 {
                return Some(&mut **arr);
            }
        }

        None
    }

    pub fn type_name(&self) -> &'static str {
        // TODO: If we are holding a `Dynamic`, maybe do something custom.
        self.ptr.type_name()
    }

    pub fn contents_type_id(&self) -> TypeId {
        if let Some(dyn_self) = self.ptr.downcast_ref::<Dynamic>() {
            Dynamic::type_id(dyn_self)
        }
        else {
            self.ptr.type_id()
        }
    }
    
    pub fn as_dynamic(self) -> Result<&'a mut Dynamic, Self> {
        // Awkward if statement + unecessary unreachable!() to satisfy the borrow checker.
        if self.ptr.is::<Dynamic>() {
            return self.ptr.downcast_mut::<Dynamic>().ok_or_else(|| unreachable!())
        }
        else {
            return Err(self)
        }
    }

    pub fn as_mut<T: any::Variant>(self) -> Option<&'a mut T> {
        // Awkward if statement + unecessary unreachable!() to satisfy the borrow checker.
        if self.ptr.is::<Dynamic>() {
            let dyn_ptr = self.ptr.downcast_mut::<Dynamic>().unwrap_or_else(|| unreachable!());
            Dynamic::downcast_mut::<T>(dyn_ptr)
        }
        else if let Some(t_ptr) = self.ptr.downcast_mut::<T>() {
            Some(t_ptr)
        }
        else {
            None
        }
    }

    pub fn clone_into_dynamic(&self) -> Dynamic {
        if let Some(dyn_ref) = self.ptr.downcast_ref::<Dynamic>() {
            dyn_ref.clone()
        }
        else {
            self.ptr.clone_into_dynamic()
        }    
    }

    #[inline(always)]
    pub fn set_value_typed<T: any::Variant>(&mut self, value: T, pos: Position) -> Result<(), Box<EvalAltResult>> {
        if let Some(dyn_mut) = self.ptr.downcast_mut::<Dynamic>() {
            *dyn_mut = value.into_dynamic();
        }
        else if let Some(t_mut) = self.ptr.downcast_mut::<T>() {
            *t_mut = value;
        }
        else {
            return Err(Box::new(EvalAltResult::ErrorMismatchOutputType(
                self.ptr.type_name().into(),
                pos,
            )));
        }

        Ok(())
    }

    pub fn set_value(&mut self, new_val: Dynamic, pos: Position) -> Result<(), Box<EvalAltResult>> {
        if let Some(dyn_mut) = self.ptr.downcast_mut::<Dynamic>() {
            *dyn_mut = new_val;
            Ok(())
        }
        else {
            match new_val.0 {
                Union::Unit(()) => self.set_value_typed((), pos),
                Union::Bool(b) => self.set_value_typed(b, pos),
                Union::Str(s) => self.set_value_typed(s, pos),
                Union::Char(c) => self.set_value_typed(c, pos),
                Union::Int(i) => self.set_value_typed(i, pos),
                Union::Float(f) => self.set_value_typed(f, pos),
                Union::Array(a) => self.set_value_typed(a, pos),
                Union::Map(m) => self.set_value_typed(m, pos),
                Union::Variant(v) => {
                    if let Some(var_mut) = self.ptr.downcast_mut::<Box<Box<dyn any::Variant>>>() {
                        *var_mut = v;
                        Ok(())
                    }
                    else if let Some(var_mut) = self.ptr.downcast_mut::<Box<dyn any::Variant>>() {
                        *var_mut = *v;
                        Ok(())
                    }
                    else if (*v).try_write(self.ptr) {
                        Ok(())
                    }
                    else {
                        Err(Box::new(EvalAltResult::ErrorMismatchOutputType(
                            self.ptr.type_name().into(),
                            pos,
                        )))
                    }
                }
                #[cfg(not(feature = "no_module"))]
                Union::Module(m) => {
                    panic!("Setting modules is not supported");
                }
            }
        }
    }
}

impl<'a> From<&'a mut Dynamic> for Target<'a> {
    fn from(value: &'a mut Dynamic) -> Self {
        Target{ ptr: value as &mut dyn any::Variant }
    }
}

/// A type that holds all the current states of the Engine.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct State {
    /// Normally, access to variables are parsed with a relative offset into the scope to avoid a lookup.
    /// In some situation, e.g. after running an `eval` statement, subsequent offsets may become mis-aligned.
    /// When that happens, this flag is turned on to force a scope lookup by name.
    pub always_search: bool,
}

impl State {
    /// Create a new `State`.
    pub fn new() -> Self {
        Self {
            always_search: false,
        }
    }
}

/// A type that holds a library (`HashMap`) of script-defined functions.
///
/// Since script-defined functions have `Dynamic` parameters, functions with the same name
/// and number of parameters are considered equivalent.
///
/// The key of the `HashMap` is a `u64` hash calculated by the function `calc_fn_def`.
#[derive(Debug, Clone, Default)]
pub struct FunctionsLib(
    #[cfg(feature = "sync")] HashMap<u64, Arc<FnDef>>,
    #[cfg(not(feature = "sync"))] HashMap<u64, Rc<FnDef>>,
);

impl FunctionsLib {
    /// Create a new `FunctionsLib`.
    pub fn new() -> Self {
        Default::default()
    }
    /// Create a new `FunctionsLib` from a collection of `FnDef`.
    pub fn from_vec(vec: Vec<FnDef>) -> Self {
        FunctionsLib(
            vec.into_iter()
                .map(|f| {
                    let hash = calc_fn_def(&f.name, f.params.len());

                    #[cfg(feature = "sync")]
                    {
                        (hash, Arc::new(f))
                    }
                    #[cfg(not(feature = "sync"))]
                    {
                        (hash, Rc::new(f))
                    }
                })
                .collect(),
        )
    }
    /// Does a certain function exist in the `FunctionsLib`?
    pub fn has_function(&self, name: &str, params: usize) -> bool {
        self.contains_key(&calc_fn_def(name, params))
    }
    /// Get a function definition from the `FunctionsLib`.
    pub fn get_function(&self, name: &str, params: usize) -> Option<&FnDef> {
        self.get(&calc_fn_def(name, params)).map(|f| f.as_ref())
    }
    /// Merge another `FunctionsLib` into this `FunctionsLib`.
    pub fn merge(&self, other: &Self) -> Self {
        if self.is_empty() {
            other.clone()
        } else if other.is_empty() {
            self.clone()
        } else {
            let mut functions = self.clone();
            functions.extend(other.iter().map(|(hash, fn_def)| (*hash, fn_def.clone())));
            functions
        }
    }
}

impl Deref for FunctionsLib {
    #[cfg(feature = "sync")]
    type Target = HashMap<u64, Arc<FnDef>>;
    #[cfg(not(feature = "sync"))]
    type Target = HashMap<u64, Rc<FnDef>>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl DerefMut for FunctionsLib {
    #[cfg(feature = "sync")]
    fn deref_mut(&mut self) -> &mut HashMap<u64, Arc<FnDef>> {
        &mut self.0
    }
    #[cfg(not(feature = "sync"))]
    fn deref_mut(&mut self) -> &mut HashMap<u64, Rc<FnDef>> {
        &mut self.0
    }
}

/// Rhai main scripting engine.
///
/// ```
/// # fn main() -> Result<(), Box<rhai::EvalAltResult>> {
/// use rhai::Engine;
///
/// let engine = Engine::new();
///
/// let result = engine.eval::<i64>("40 + 2")?;
///
/// println!("Answer: {}", result);  // prints 42
/// # Ok(())
/// # }
/// ```
///
/// Currently, `Engine` is neither `Send` nor `Sync`. Turn on the `sync` feature to make it `Send + Sync`.
pub struct Engine {
    /// A collection of all library packages loaded into the engine.
    pub(crate) packages: Vec<PackageLibrary>,
    /// A `HashMap` containing all compiled functions known to the engine.
    ///
    /// The key of the `HashMap` is a `u64` hash calculated by the function `crate::calc_fn_hash`.
    pub(crate) functions: HashMap<u64, Box<FnAny>>,

    // TODO: It's plausible that the various mut function types could be combined into one hash table...
    // is it more performant?

    /// A `HashMap` containing all compiled functions known to the engine.
    ///
    /// The key of the `HashMap` is a `u64` hash calculated by the function 
    /// `crate::calc_fn_spec`
    mut_getters: HashMap<u64, Box<dyn ObjectGetMutCallbackAny>>,
    mut_indexers: HashMap<u64, Box<dyn ObjectMutIndexerCallbackAny>>,

    /// A hashmap containing all iterators known to the engine.
    pub(crate) type_iterators: HashMap<TypeId, Box<IteratorFn>>,

    /// A module resolution service.
    #[cfg(not(feature = "no_module"))]
    pub(crate) module_resolver: Option<Box<dyn ModuleResolver>>,

    /// A hashmap mapping type names to pretty-print names.
    pub(crate) type_names: HashMap<String, String>,

    /// Closure for implementing the `print` command.
    #[cfg(feature = "sync")]
    pub(crate) print: Box<dyn Fn(&str) + Send + Sync + 'static>,
    /// Closure for implementing the `print` command.
    #[cfg(not(feature = "sync"))]
    pub(crate) print: Box<dyn Fn(&str) + 'static>,

    /// Closure for implementing the `debug` command.
    #[cfg(feature = "sync")]
    pub(crate) debug: Box<dyn Fn(&str) + Send + Sync + 'static>,
    /// Closure for implementing the `debug` command.
    #[cfg(not(feature = "sync"))]
    pub(crate) debug: Box<dyn Fn(&str) + 'static>,

    /// Optimize the AST after compilation.
    pub(crate) optimization_level: OptimizationLevel,

    /// Maximum levels of call-stack to prevent infinite recursion.
    ///
    /// Defaults to 28 for debug builds and 256 for non-debug builds.
    pub(crate) max_call_stack_depth: usize,
}

impl Default for Engine {
    fn default() -> Self {
        // Create the new scripting Engine
        let mut engine = Self {
            packages: Default::default(),
            functions: HashMap::with_capacity(FUNCTIONS_COUNT),
            mut_getters: HashMap::new(),
            mut_indexers: HashMap::new(),

            type_iterators: Default::default(),

            #[cfg(not(feature = "no_module"))]
            #[cfg(not(feature = "no_std"))]
            module_resolver: Some(Box::new(resolvers::FileModuleResolver::new())),
            #[cfg(not(feature = "no_module"))]
            #[cfg(feature = "no_std")]
            module_resolver: None,

            type_names: Default::default(),

            // default print/debug implementations
            print: Box::new(default_print),
            debug: Box::new(default_print),

            // optimization level
            #[cfg(feature = "no_optimize")]
            optimization_level: OptimizationLevel::None,

            #[cfg(not(feature = "no_optimize"))]
            #[cfg(not(feature = "optimize_full"))]
            optimization_level: OptimizationLevel::Simple,

            #[cfg(not(feature = "no_optimize"))]
            #[cfg(feature = "optimize_full")]
            optimization_level: OptimizationLevel::Full,

            max_call_stack_depth: MAX_CALL_STACK_DEPTH,
        };

        #[cfg(feature = "no_stdlib")]
        engine.load_package(CorePackage::new().get());

        #[cfg(not(feature = "no_stdlib"))]
        engine.load_package(StandardPackage::new().get());

        engine
    }
}

/// Make getter function
pub fn make_getter(id: &str) -> String {
    format!("{}{}", FUNC_GETTER, id)
}

/// Make mut getter function
pub fn make_mut_getter(id: &str) -> String {
    format!("{}{}", FUNC_MUT_GETTER, id)
}

/// Extract the property name from a getter function name.
fn extract_prop_from_getter(fn_name: &str) -> Option<&str> {
    #[cfg(not(feature = "no_object"))]
    {
        if fn_name.starts_with(FUNC_GETTER) {
            Some(&fn_name[FUNC_GETTER.len()..])
        } else {
            None
        }
    }
    #[cfg(feature = "no_object")]
    {
        None
    }
}

/// Make setter function
pub fn make_setter(id: &str) -> String {
    format!("{}{}", FUNC_SETTER, id)
}

/// Extract the property name from a setter function name.
fn extract_prop_from_setter(fn_name: &str) -> Option<&str> {
    #[cfg(not(feature = "no_object"))]
    {
        if fn_name.starts_with(FUNC_SETTER) {
            Some(&fn_name[FUNC_SETTER.len()..])
        } else {
            None
        }
    }
    #[cfg(feature = "no_object")]
    {
        None
    }
}

/// Print/debug to stdout
fn default_print(s: &str) {
    #[cfg(not(feature = "no_std"))]
    println!("{}", s);
}

/// Search for a variable within the scope
fn search_scope<'a>(
    scope: &'a mut Scope,
    name: &str,
    modules: &ModuleRef,
    index: Option<NonZeroUsize>,
    pos: Position,
) -> Result<(&'a mut Dynamic, ScopeEntryType), Box<EvalAltResult>> {
    #[cfg(not(feature = "no_module"))]
    {
        if let Some(modules) = modules {
            let (id, root_pos) = modules.get(0); // First module

            let module = if let Some(index) = index {
                scope
                    .get_mut(scope.len() - index.get())
                    .0
                    .downcast_mut::<Module>()
                    .unwrap()
            } else {
                scope.find_module(id).ok_or_else(|| {
                    Box::new(EvalAltResult::ErrorModuleNotFound(id.into(), *root_pos))
                })?
            };

            return Ok((
                module.get_qualified_var_mut(name, modules.as_ref(), pos)?,
                // Module variables are constant
                ScopeEntryType::Constant,
            ));
        }
    }

    let index = if let Some(index) = index {
        scope.len() - index.get()
    } else {
        scope
            .get_index(name)
            .ok_or_else(|| Box::new(EvalAltResult::ErrorVariableNotFound(name.into(), pos)))?
            .0
    };

    Ok(scope.get_mut(index))
}

impl Engine {
    /// Create a new `Engine`
    pub fn new() -> Self {
        Default::default()
    }

    /// Create a new `Engine` with _no_ built-in functions.
    /// Use the `load_package` method to load packages of functions.
    pub fn new_raw() -> Self {
        Self {
            packages: Default::default(),
            functions: HashMap::with_capacity(FUNCTIONS_COUNT / 2),
            mut_getters: HashMap::new(),
            mut_indexers: HashMap::new(),
            type_iterators: Default::default(),

            #[cfg(not(feature = "no_module"))]
            module_resolver: None,

            type_names: Default::default(),

            print: Box::new(|_| {}),
            debug: Box::new(|_| {}),

            #[cfg(feature = "no_optimize")]
            optimization_level: OptimizationLevel::None,

            #[cfg(not(feature = "no_optimize"))]
            #[cfg(not(feature = "optimize_full"))]
            optimization_level: OptimizationLevel::Simple,

            #[cfg(not(feature = "no_optimize"))]
            #[cfg(feature = "optimize_full")]
            optimization_level: OptimizationLevel::Full,

            max_call_stack_depth: MAX_CALL_STACK_DEPTH,
        }
    }

    /// Load a new package into the `Engine`.
    ///
    /// When searching for functions, packages loaded later are preferred.
    /// In other words, loaded packages are searched in reverse order.
    pub fn load_package(&mut self, package: PackageLibrary) {
        // Push the package to the top - packages are searched in reverse order
        self.packages.insert(0, package);
    }

    /// Control whether and how the `Engine` will optimize an AST after compilation.
    ///
    /// Not available under the `no_optimize` feature.
    #[cfg(not(feature = "no_optimize"))]
    pub fn set_optimization_level(&mut self, optimization_level: OptimizationLevel) {
        self.optimization_level = optimization_level
    }

    /// Set the maximum levels of function calls allowed for a script in order to avoid
    /// infinite recursion and stack overflows.
    pub fn set_max_call_levels(&mut self, levels: usize) {
        self.max_call_stack_depth = levels
    }

    /// Set the module resolution service used by the `Engine`.
    ///
    /// Not available under the `no_module` feature.
    #[cfg(not(feature = "no_module"))]
    pub fn set_module_resolver(&mut self, resolver: Option<impl ModuleResolver + 'static>) {
        self.module_resolver = resolver.map(|f| Box::new(f) as Box<dyn ModuleResolver>);
    }

    /// Universal method for calling functions either registered with the `Engine` or written in Rhai.
    ///
    /// ## WARNING
    ///
    /// Function call arguments may be _consumed_ when the function requires them to be passed by value.
    /// All function arguments not in the first position are always passed by value and thus consumed.
    /// **DO NOT** reuse the argument values unless for the first `&mut` argument - all others are silently replaced by `()`!
    pub(crate) fn call_fn_raw(
        &self,
        scope: Option<&mut Scope>,
        fn_lib: &FunctionsLib,
        fn_name: &str,
        args: &mut FnCallArgs,
        def_val: Option<&Dynamic>,
        pos: Position,
        level: usize,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        // Check for stack overflow
        if level > self.max_call_stack_depth {
            return Err(Box::new(EvalAltResult::ErrorStackOverflow(pos)));
        }

        // First search in script-defined functions (can override built-in)
        if let Some(fn_def) = fn_lib.get_function(fn_name, args.len()) {
            return self.call_fn_from_lib(scope, fn_lib, fn_def, args, pos, level);
        }

        // Search built-in's and external functions
        let fn_spec = calc_fn_hash(fn_name, args.iter().map(|a| a.type_id()));

        if let Some(func) = self.functions.get(&fn_spec).or_else(|| {
            self.packages
                .iter()
                .find(|pkg| pkg.functions.contains_key(&fn_spec))
                .and_then(|pkg| pkg.functions.get(&fn_spec))
        }) {
            // Run external function
            let result = func(args, pos)?;

            // See if the function match print/debug (which requires special processing)
            return Ok(match fn_name {
                KEYWORD_PRINT => (self.print)(result.as_str().map_err(|type_name| {
                    Box::new(EvalAltResult::ErrorMismatchOutputType(
                        type_name.into(),
                        pos,
                    ))
                })?)
                .into(),
                KEYWORD_DEBUG => (self.debug)(result.as_str().map_err(|type_name| {
                    Box::new(EvalAltResult::ErrorMismatchOutputType(
                        type_name.into(),
                        pos,
                    ))
                })?)
                .into(),
                _ => result,
            });
        }

        // Return default value (if any)
        if let Some(val) = def_val {
            return Ok(val.clone());
        }

        // Getter function not found?
        if let Some(prop) = extract_prop_from_getter(fn_name) {
            return Err(Box::new(EvalAltResult::ErrorDotExpr(
                format!("- property '{}' unknown or write-only", prop),
                pos,
            )));
        }

        // Setter function not found?
        if let Some(prop) = extract_prop_from_setter(fn_name) {
            return Err(Box::new(EvalAltResult::ErrorDotExpr(
                format!("- property '{}' unknown or read-only", prop),
                pos,
            )));
        }

        let types_list: Vec<_> = args
            .iter()
            .map(|name| self.map_type_name(name.type_name()))
            .collect();

        // Getter function not found?
        if fn_name == FUNC_INDEXER {
            return Err(Box::new(EvalAltResult::ErrorFunctionNotFound(
                format!("[]({})", types_list.join(", ")),
                pos,
            )));
        }

        // Raise error
        Err(Box::new(EvalAltResult::ErrorFunctionNotFound(
            format!("{} ({})", fn_name, types_list.join(", ")),
            pos,
        )))
    }

    /// Call a script-defined function.
    ///
    /// ## WARNING
    ///
    /// Function call arguments may be _consumed_ when the function requires them to be passed by value.
    /// All function arguments not in the first position are always passed by value and thus consumed.
    /// **DO NOT** reuse the argument values unless for the first `&mut` argument - all others are silently replaced by `()`!
    pub(crate) fn call_fn_from_lib(
        &self,
        scope: Option<&mut Scope>,
        fn_lib: &FunctionsLib,
        fn_def: &FnDef,
        args: &mut FnCallArgs,
        pos: Position,
        level: usize,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        match scope {
            // Extern scope passed in which is not empty
            Some(scope) if scope.len() > 0 => {
                let scope_len = scope.len();
                let mut state = State::new();

                // Put arguments into scope as variables - variable name is copied
                scope.extend(
                    fn_def
                        .params
                        .iter()
                        .zip(
                            // Actually consume the arguments instead of cloning them
                            args.into_iter().map(|v| mem::take(*v)),
                        )
                        .map(|(name, value)| (name.clone(), ScopeEntryType::Normal, value)),
                );

                // Evaluate the function at one higher level of call depth
                let result = self
                    .eval_stmt(scope, &mut state, fn_lib, &fn_def.body, level + 1)
                    .or_else(|err| match *err {
                        // Convert return statement to return value
                        EvalAltResult::Return(x, _) => Ok(x),
                        _ => Err(EvalAltResult::set_position(err, pos)),
                    });

                scope.rewind(scope_len);

                return result;
            }
            // No new scope - create internal scope
            _ => {
                let mut scope = Scope::new();
                let mut state = State::new();

                // Put arguments into scope as variables
                scope.extend(
                    fn_def
                        .params
                        .iter()
                        .zip(
                            // Actually consume the arguments instead of cloning them
                            args.into_iter().map(|v| mem::take(*v)),
                        )
                        .map(|(name, value)| (name, ScopeEntryType::Normal, value)),
                );

                // Evaluate the function at one higher level of call depth
                return self
                    .eval_stmt(&mut scope, &mut state, fn_lib, &fn_def.body, level + 1)
                    .or_else(|err| match *err {
                        // Convert return statement to return value
                        EvalAltResult::Return(x, _) => Ok(x),
                        _ => Err(EvalAltResult::set_position(err, pos)),
                    });
            }
        }
    }

    // Has a system function an override?
    fn has_override(&self, fn_lib: &FunctionsLib, name: &str) -> bool {
        let hash = calc_fn_hash(name, once(TypeId::of::<String>()));

        // First check registered functions
        self.functions.contains_key(&hash)
            // Then check packages
            || self.packages.iter().any(|p| p.functions.contains_key(&hash))
            // Then check script-defined functions
            || fn_lib.has_function(name, 1)
    }

    // Perform an actual function call, taking care of special functions
    ///
    /// ## WARNING
    ///
    /// Function call arguments may be _consumed_ when the function requires them to be passed by value.
    /// All function arguments not in the first position are always passed by value and thus consumed.
    /// **DO NOT** reuse the argument values unless for the first `&mut` argument - all others are silently replaced by `()`!
    fn exec_fn_call(
        &self,
        fn_lib: &FunctionsLib,
        fn_name: &str,
        args: &mut FnCallArgs,
        def_val: Option<&Dynamic>,
        pos: Position,
        level: usize,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        match fn_name {
            // type_of
            KEYWORD_TYPE_OF if args.len() == 1 && !self.has_override(fn_lib, KEYWORD_TYPE_OF) => {
                Ok(self.map_type_name(args[0].type_name()).to_string().into())
            }

            // eval - reaching this point it must be a method-style call
            KEYWORD_EVAL if args.len() == 1 && !self.has_override(fn_lib, KEYWORD_EVAL) => {
                Err(Box::new(EvalAltResult::ErrorRuntime(
                    "'eval' should not be called in method style. Try eval(...);".into(),
                    pos,
                )))
            }
            // Normal method call
            _ => self.call_fn_raw(None, fn_lib, fn_name, args, def_val, pos, level),
        }
    }

    /// Evaluate a text string as a script - used primarily for 'eval'.
    fn eval_script_expr(
        &self,
        scope: &mut Scope,
        fn_lib: &FunctionsLib,
        script: &Dynamic,
        pos: Position,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        let script = script
            .as_str()
            .map_err(|type_name| EvalAltResult::ErrorMismatchOutputType(type_name.into(), pos))?;

        // Compile the script text
        // No optimizations because we only run it once
        let mut ast = self.compile_with_scope_and_optimization_level(
            &Scope::new(),
            script,
            OptimizationLevel::None,
        )?;

        // If new functions are defined within the eval string, it is an error
        if ast.fn_lib().len() > 0 {
            return Err(Box::new(EvalAltResult::ErrorParsing(
                ParseErrorType::WrongFnDefinition.into_err(pos),
            )));
        }

        let statements = mem::take(ast.statements_mut());
        let ast = AST::new(statements, fn_lib.clone());

        // Evaluate the AST
        self.eval_ast_with_scope_raw(scope, &ast)
            .map_err(|err| EvalAltResult::set_position(err, pos))
    }

    /// Chain-evaluate a dot/index chain.
    fn eval_dot_index_chain_helper(
        &self,
        fn_lib: &FunctionsLib,
        mut target: Target,
        rhs: &Expr,
        idx_values: &mut StaticVec<Dynamic>,
        is_index: bool,
        op_pos: Position,
        level: usize,
        mut new_val: Option<Dynamic>,
    ) -> Result<Dynamic, Box<EvalAltResult>> {

        // Pop the last index value
        let mut idx_val = idx_values.pop();

        if is_index {
            match rhs {
                // xxx[idx].dot_rhs...
                Expr::Dot(idx, idx_rhs, pos) |
                // xxx[idx][dot_rhs]...
                Expr::Index(idx, idx_rhs, pos) => {
                    let is_index = matches!(rhs, Expr::Index(_,_,_));

                    let indexed_val = self.get_indexed_mut(fn_lib, target, idx_val, idx.position(), op_pos, false)?;
                    self.eval_dot_index_chain_helper(
                        fn_lib, indexed_val, idx_rhs.as_ref(), idx_values, is_index, *pos, level, new_val
                    )
                }
                // xxx[rhs] = new_val
                _ if new_val.is_some() => {
                    let mut indexed_val = self.get_indexed_mut(fn_lib, target, idx_val, rhs.position(), op_pos, true)?;
                    indexed_val.set_value(new_val.unwrap(), rhs.position())?;
                    Ok(().into())
                }
                // xxx[rhs]
                _ => self
                    .get_indexed_mut(fn_lib, target, idx_val, rhs.position(), op_pos, false)
                    .map(|v| v.clone_into_dynamic())
            }
        } else {
            match rhs {
                // xxx.fn_name(arg_expr_list)
                Expr::FnCall(fn_name, None, _, def_val, pos) => {
                    let mut tmp;
                    let obj = match target.as_dynamic() {
                        Ok(ptr) => ptr,
                        Err(target) => {
                            // TODO: I really want to be able to pass arbitrary &mut T to methods,
                            // right now if target is a ptr to T we are only passing an effectively
                            // immutable Dynamic.
                            // TODO: I seem to be doing this repeatedly, but I can't extract it in to an
                            // efficient function because of tmp... without unsafe... possibly I should
                            // make a macro instead.
                            // TODO: Chars in strings in are awkward and need some form of special casing.
                            // (This special casing is possible with a few extra match arms when the current
                            // target points to a string). Right now mutable methods that try to mutate chars
                            // in strings end up doing nothing.
                            // Personally I wouldn't be against forbidding that concept anyways, the proper way
                            // to deal with chars in strings is probably for the implementor to make a method on
                            // the string instead of on the char.
                            tmp = target.clone_into_dynamic();
                            &mut tmp
                        }
                    };
                    let mut args: Vec<_> = once(obj)
                        .chain(idx_val.downcast_mut::<Vec<Dynamic>>().unwrap().iter_mut())
                        .collect();
                    let def_val = def_val.as_deref();
                    // A function call is assumed to have side effects, so the value is changed
                    // TODO - Remove assumption of side effects by checking whether the first parameter is &mut
                    self.exec_fn_call(fn_lib, fn_name, &mut args, def_val, *pos, 0)
                }
                // xxx.module::fn_name(...) - syntax error
                Expr::FnCall(_,_,_,_,_) => unreachable!(),
                // {xxx:map}.id = ???
                Expr::Property(id, pos) if target.is_map() && new_val.is_some() => {
                    let mut indexed_val =
                        self.get_indexed_mut(fn_lib, target, id.to_string().into(), *pos, op_pos, true)?;
                    indexed_val.set_value(new_val.unwrap(), rhs.position())?;
                    Ok(().into())
                }
                Expr::Property(id, pos) if target.is_map() => {
                    let indexed_val =
                        self.get_indexed_mut(fn_lib, target, id.to_string().into(), *pos, op_pos, false)?;
                    Ok(indexed_val.clone_into_dynamic())
                }
                // xxx.id = ??? a
                Expr::Property(id, pos) if new_val.is_some() => {
                    let fn_name = make_setter(id);
                    let mut tmp;
                    let obj = match target.as_dynamic() {
                        Ok(ptr) => ptr,
                        Err(target) => {
                            // TODO: I seem to be doing this repeatedly, but I can't extract it in to an
                            // efficient function because of tmp... without unsafe... possibly I should
                            // make a macro instead.
                            // <See other todos on the first version>
                            eprintln!("Had to clone {}, setter will fail to mutate the value", id);
                            tmp = target.clone_into_dynamic();
                            &mut tmp
                        }
                    };
                    let mut args = [obj, new_val.as_mut().unwrap()];
                    self.exec_fn_call(fn_lib, &fn_name, &mut args, None, *pos, 0).map(|_| ().into())
                }
                // xxx.id
                Expr::Property(id, pos) => {
                    let fn_name = make_getter(id);
                    let mut tmp;
                    let obj = match target.as_dynamic() {
                        Ok(ptr) => ptr,
                        Err(target) => {
                            // TODO: I seem to be doing this repeatedly, but I can't extract it in to an
                            // efficient function because of tmp... without unsafe... possibly I should
                            // make a macro instead.
                            // <See other todos on the first version>
                            tmp = target.clone_into_dynamic();
                            &mut tmp
                        }
                    };
                    let mut args = [obj];
                    self.exec_fn_call(fn_lib, &fn_name, &mut args, None, *pos, 0)
                }
                #[cfg(not(feature = "no_object"))]
                // {xxx:map}.idx_lhs[idx_expr]
                Expr::Index(dot_lhs, dot_rhs, pos) |
                // {xxx:map}.dot_lhs.rhs
                Expr::Dot(dot_lhs, dot_rhs, pos) if target.is_map() => {
                    let is_index = matches!(rhs, Expr::Index(_,_,_));

                    let indexed_val = if let Expr::Property(id, pos) = dot_lhs.as_ref() {
                        self.get_indexed_mut(fn_lib, target, id.to_string().into(), *pos, op_pos, false)?
                    } else {
                        // Syntax error
                        return Err(Box::new(EvalAltResult::ErrorDotExpr(
                            "".to_string(),
                            rhs.position(),
                        )));
                    };
                    self.eval_dot_index_chain_helper(
                        fn_lib, indexed_val, dot_rhs, idx_values, is_index, *pos, level, new_val
                    )
                }
                // xxx.idx_lhs[idx_expr]
                Expr::Index(dot_lhs, dot_rhs, pos) |
                // xxx.dot_lhs.rhs
                Expr::Dot(dot_lhs, dot_rhs, pos) => {
                    let is_index = matches!(rhs, Expr::Index(_,_,_));

                    let (id, pos) = &mut (if let Expr::Property(id, pos) = dot_lhs.as_ref() {
                        (id, pos)
                    } else {
                        // Syntax error
                        return Err(Box::new(EvalAltResult::ErrorDotExpr(
                            "".to_string(),
                            rhs.position(),
                        )));
                    });

                    // Look for a mut_getter first
                    let fn_spec = calc_fn_hash(&make_mut_getter(id), std::iter::once(target.contents_type_id()));
                    if let Some(mut_getter) = self.mut_getters.get(&fn_spec) {
                        let new_target = mut_getter.call_on(target);
                        self.eval_dot_index_chain_helper(
                            fn_lib, new_target, dot_rhs, idx_values, is_index,**pos, level, new_val
                        )
                    }
                    else if new_val.is_some() {
                        // We can't get a pointer to the location we are assigning to.
                        unimplemented!("Some sort of error here, id: {}", id);
                    }
                    else {                        
                        // Failed to find a mut getter, and we maybe aren't mutating things, so fall back to a getter.
                        // TODO: Somehow give an error if there is a mutating method at the end of this chain
                        let mut tmp;
                        let obj = match target.as_dynamic() {
                            Ok(ptr) => ptr,
                            Err(target) => {
                                // TODO: I seem to be doing this repeatedly, but I can't extract it in to an
                                // efficient function because of tmp... without unsafe... possibly I should
                                // make a macro instead.
                                // <See other todos on the first version>
                                tmp = target.clone_into_dynamic();
                                &mut tmp
                            }
                        };
                        let mut args = [obj, &mut Default::default()];
                        
                        let fn_name = make_getter(id);
                        let indexed_val = &mut self.exec_fn_call(fn_lib, &fn_name, &mut args[..1], None, **pos, 0)?;
    
                        self.eval_dot_index_chain_helper(
                            fn_lib, indexed_val.into(), dot_rhs, idx_values, is_index, **pos, level, new_val
                        )
                    }
                }
                // Syntax error
                _ => Err(Box::new(EvalAltResult::ErrorDotExpr(
                    "".to_string(),
                    rhs.position(),
                ))),
            }
        }
    }

    /// Evaluate a dot/index chain.
    fn eval_dot_index_chain(
        &self,
        scope: &mut Scope,
        state: &mut State,
        fn_lib: &FunctionsLib,
        dot_lhs: &Expr,
        dot_rhs: &Expr,
        is_index: bool,
        op_pos: Position,
        level: usize,
        new_val: Option<Dynamic>,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        let idx_values = &mut StaticVec::new();

        self.eval_indexed_chain(scope, state, fn_lib, dot_rhs, idx_values, 0, level)?;

        match dot_lhs {
            // id.??? or id[???]
            Expr::Variable(id, modules, index, pos) => {
                let index = if state.always_search { None } else { *index };
                let (target, typ) = search_scope(scope, id, modules, index, *pos)?;

                // Constants cannot be modified
                match typ {
                    ScopeEntryType::Module => unreachable!(),
                    ScopeEntryType::Constant if new_val.is_some() => {
                        return Err(Box::new(EvalAltResult::ErrorAssignmentToConstant(
                            id.to_string(),
                            *pos,
                        )));
                    }
                    ScopeEntryType::Constant | ScopeEntryType::Normal => (),
                }

                let this_ptr = target.into();
                self.eval_dot_index_chain_helper(
                    fn_lib, this_ptr, dot_rhs, idx_values, is_index, op_pos, level, new_val,
                )
            }
            // {expr}.??? = ??? or {expr}[???] = ???
            expr if new_val.is_some() => {
                return Err(Box::new(EvalAltResult::ErrorAssignmentToUnknownLHS(
                    expr.position(),
                )));
            }
            expr => {
                let mut val = self.eval_expr(scope, state, fn_lib, expr, level)?;
                let this_ptr = Target{ ptr: &mut val };
                self.eval_dot_index_chain_helper(
                    fn_lib, this_ptr, dot_rhs, idx_values, is_index, op_pos, level, new_val,
                )
            }
        }
    }

    /// Evaluate a chain of indexes and store the results in a list.
    /// The first few results are stored in the array `list` which is of fixed length.
    /// Any spill-overs are stored in `more`, which is dynamic.
    /// The fixed length array is used to avoid an allocation in the overwhelming cases of just a few levels of indexing.
    /// The total number of values is returned.
    fn eval_indexed_chain(
        &self,
        scope: &mut Scope,
        state: &mut State,
        fn_lib: &FunctionsLib,
        expr: &Expr,
        idx_values: &mut StaticVec<Dynamic>,
        size: usize,
        level: usize,
    ) -> Result<(), Box<EvalAltResult>> {
        match expr {
            Expr::FnCall(_, None, arg_exprs, _, _) => {
                let arg_values = arg_exprs
                    .iter()
                    .map(|arg_expr| self.eval_expr(scope, state, fn_lib, arg_expr, level))
                    .collect::<Result<Vec<_>, _>>()?;

                #[cfg(not(feature = "no_index"))]
                idx_values.push(arg_values);
                #[cfg(feature = "no_index")]
                idx_values.push(Dynamic::from(arg_values));
            }
            Expr::FnCall(_, _, _, _, _) => unreachable!(),
            Expr::Property(_, _) => idx_values.push(()), // Store a placeholder - no need to copy the property name
            Expr::Index(lhs, rhs, _) | Expr::Dot(lhs, rhs, _) => {
                // Evaluate in left-to-right order
                let lhs_val = match lhs.as_ref() {
                    Expr::Property(_, _) => Default::default(), // Store a placeholder in case of a property
                    _ => self.eval_expr(scope, state, fn_lib, lhs, level)?,
                };

                // Push in reverse order
                self.eval_indexed_chain(scope, state, fn_lib, rhs, idx_values, size, level)?;

                idx_values.push(lhs_val);
            }
            _ => idx_values.push(self.eval_expr(scope, state, fn_lib, expr, level)?),
        }

        Ok(())
    }

    /// Get the value at the indexed position of a base type
    fn get_indexed_mut<'a>(
        &self,
        fn_lib: &FunctionsLib,
        mut target: Target<'a>,
        mut idx: Dynamic,
        idx_pos: Position,
        op_pos: Position,
        create: bool,
    ) -> Result<Target<'a>, Box<EvalAltResult>> {
        let type_name = self.map_type_name(target.type_name());

        // The is_<type> calls are here to satisfy the borrow checker.
        // in reality they are redundant with the `get_<type>_mut` calls.
        // Fortunately the optimizer is almost certainly smart enough to handle
        // that.
        if target.is_array() {
            let arr = target.get_array_mut().unwrap();
            // val_array[idx]
            let index = idx
                .as_int()
                .map_err(|_| EvalAltResult::ErrorNumericIndexExpr(idx_pos))?;

            let arr_len = arr.len();

            if index >= 0 {
                arr.get_mut(index as usize)
                    .map(Target::from)
                    .ok_or_else(|| {
                        Box::new(EvalAltResult::ErrorArrayBounds(arr_len, index, idx_pos))
                    })
            } else {
                Err(Box::new(EvalAltResult::ErrorArrayBounds(
                    arr_len, index, idx_pos,
                )))
            }
        }
        else if target.is_map() {
            let map = target.get_map_mut().unwrap();
            // val_map[idx]
            let index = idx
                .take_string()
                .map_err(|_| EvalAltResult::ErrorStringIndexExpr(idx_pos))?;

            Ok(if create {
                map.entry(index).or_insert(Default::default()).into()
            } else {
                map.get_mut(&index)
                    .map(Target::from)
                    .ok_or(
                        Box::new(EvalAltResult::ErrorIndexingType(
                            "TODO: Create a real index not found error?".into(), 
                            idx_pos))
                    )?
            })
        }
        else if target.is_string() {
            // TODO: See TODO in method FnCall. Similar issues apply to trying to get/set a char here.
            // They could easily be special cased, but if we implement index syntax getters and setters
            // we won't even need to special case it!
            unimplemented!("Strings not yet implemented");
        }
        else {
            let types = &[target.contents_type_id(), idx.type_id()];
            println!("Get types: {:?}", types);
            let hash = calc_fn_hash(FUNC_INDEXER, types.iter().cloned());
            let function = self.mut_indexers.get(&hash)
                .unwrap_or_else(|| unimplemented!("Return some nice error"));
            Ok(function.call_on(target, idx))
        }
    }

    // Evaluate an 'in' expression
    fn eval_in_expr(
        &self,
        scope: &mut Scope,
        state: &mut State,
        fn_lib: &FunctionsLib,
        lhs: &Expr,
        rhs: &Expr,
        level: usize,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        let lhs_value = self.eval_expr(scope, state, fn_lib, lhs, level)?;
        let rhs_value = self.eval_expr(scope, state, fn_lib, rhs, level)?;

        match rhs_value {
            #[cfg(not(feature = "no_index"))]
            Dynamic(Union::Array(rhs_value)) => {
                let def_value = false.into();

                // Call the `==` operator to compare each value
                for value in rhs_value.iter() {
                    // WARNING - Always clone the values here because they'll be consumed by the function call.
                    //           Do not pass the `&mut` straight through because the `==` implementation
                    //           very likely takes parameters passed by value!
                    let args = &mut [&mut lhs_value.clone(), &mut value.clone()];
                    let def_value = Some(&def_value);
                    let pos = rhs.position();

                    if self
                        .call_fn_raw(None, fn_lib, "==", args, def_value, pos, level)?
                        .as_bool()
                        .unwrap_or(false)
                    {
                        return Ok(true.into());
                    }
                }

                Ok(false.into())
            }
            #[cfg(not(feature = "no_object"))]
            Dynamic(Union::Map(rhs_value)) => match lhs_value {
                // Only allows String or char
                Dynamic(Union::Str(s)) => Ok(rhs_value.contains_key(s.as_ref()).into()),
                Dynamic(Union::Char(c)) => Ok(rhs_value.contains_key(&c.to_string()).into()),
                _ => Err(Box::new(EvalAltResult::ErrorInExpr(lhs.position()))),
            },
            Dynamic(Union::Str(rhs_value)) => match lhs_value {
                // Only allows String or char
                Dynamic(Union::Str(s)) => Ok(rhs_value.contains(s.as_ref()).into()),
                Dynamic(Union::Char(c)) => Ok(rhs_value.contains(c).into()),
                _ => Err(Box::new(EvalAltResult::ErrorInExpr(lhs.position()))),
            },
            _ => Err(Box::new(EvalAltResult::ErrorInExpr(rhs.position()))),
        }
    }

    /// Evaluate an expression
    fn eval_expr(
        &self,
        scope: &mut Scope,
        state: &mut State,
        fn_lib: &FunctionsLib,
        expr: &Expr,
        level: usize,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        match expr {
            Expr::IntegerConstant(i, _) => Ok((*i).into()),
            #[cfg(not(feature = "no_float"))]
            Expr::FloatConstant(f, _) => Ok((*f).into()),
            Expr::StringConstant(s, _) => Ok(s.to_string().into()),
            Expr::CharConstant(c, _) => Ok((*c).into()),
            Expr::Variable(id, modules, index, pos) => {
                let index = if state.always_search { None } else { *index };
                let val = search_scope(scope, id, modules, index, *pos)?;
                Ok(val.0.clone())
            }
            Expr::Property(_, _) => unreachable!(),

            // Statement block
            Expr::Stmt(stmt, _) => self.eval_stmt(scope, state, fn_lib, stmt, level),

            // lhs = rhs
            Expr::Assignment(lhs, rhs, op_pos) => {
                let rhs_val = self.eval_expr(scope, state, fn_lib, rhs, level)?;

                match lhs.as_ref() {
                    // name = rhs
                    Expr::Variable(name, modules, index, pos) => {
                        let index = if state.always_search { None } else { *index };
                        match search_scope(scope, name, modules, index, *pos)? {
                            (_, ScopeEntryType::Constant) => Err(Box::new(
                                EvalAltResult::ErrorAssignmentToConstant(name.to_string(), *op_pos),
                            )),
                            (value_ptr, ScopeEntryType::Normal) => {
                                *value_ptr = rhs_val;
                                Ok(Default::default())
                            }
                            // End variable cannot be a module
                            (_, ScopeEntryType::Module) => unreachable!(),
                        }
                    }
                    // idx_lhs[idx_expr] = rhs
                    #[cfg(not(feature = "no_index"))]
                    Expr::Index(idx_lhs, idx_expr, op_pos) => {
                        let new_val = Some(rhs_val);
                        self.eval_dot_index_chain(
                            scope, state, fn_lib, idx_lhs, idx_expr, true, *op_pos, level, new_val,
                        )
                    }
                    // dot_lhs.dot_rhs = rhs
                    #[cfg(not(feature = "no_object"))]
                    Expr::Dot(dot_lhs, dot_rhs, _) => {
                        let new_val = Some(rhs_val);
                        self.eval_dot_index_chain(
                            scope, state, fn_lib, dot_lhs, dot_rhs, false, *op_pos, level, new_val,
                        )
                    }
                    // Error assignment to constant
                    expr if expr.is_constant() => {
                        Err(Box::new(EvalAltResult::ErrorAssignmentToConstant(
                            expr.get_constant_str(),
                            lhs.position(),
                        )))
                    }
                    // Syntax error
                    _ => Err(Box::new(EvalAltResult::ErrorAssignmentToUnknownLHS(
                        lhs.position(),
                    ))),
                }
            }

            // lhs[idx_expr]
            #[cfg(not(feature = "no_index"))]
            Expr::Index(lhs, idx_expr, op_pos) => self.eval_dot_index_chain(
                scope, state, fn_lib, lhs, idx_expr, true, *op_pos, level, None,
            ),

            // lhs.dot_rhs
            #[cfg(not(feature = "no_object"))]
            Expr::Dot(lhs, dot_rhs, op_pos) => self.eval_dot_index_chain(
                scope, state, fn_lib, lhs, dot_rhs, false, *op_pos, level, None,
            ),

            #[cfg(not(feature = "no_index"))]
            Expr::Array(contents, _) => Ok(Dynamic(Union::Array(Box::new(
                contents
                    .iter()
                    .map(|item| self.eval_expr(scope, state, fn_lib, item, level))
                    .collect::<Result<Vec<_>, _>>()?,
            )))),

            #[cfg(not(feature = "no_object"))]
            Expr::Map(contents, _) => Ok(Dynamic(Union::Map(Box::new(
                contents
                    .iter()
                    .map(|(key, expr, _)| {
                        self.eval_expr(scope, state, fn_lib, expr, level)
                            .map(|val| (key.clone(), val))
                    })
                    .collect::<Result<HashMap<_, _>, _>>()?,
            )))),

            // Normal function call
            Expr::FnCall(fn_name, None, arg_exprs, def_val, pos) => {
                let mut arg_values = arg_exprs
                    .iter()
                    .map(|expr| self.eval_expr(scope, state, fn_lib, expr, level))
                    .collect::<Result<Vec<_>, _>>()?;

                let mut args: Vec<_> = arg_values.iter_mut().collect();

                if fn_name.as_ref() == KEYWORD_EVAL
                    && args.len() == 1
                    && !self.has_override(fn_lib, KEYWORD_EVAL)
                {
                    // eval - only in function call style
                    let prev_len = scope.len();

                    // Evaluate the text string as a script
                    let result =
                        self.eval_script_expr(scope, fn_lib, args[0], arg_exprs[0].position());

                    if scope.len() != prev_len {
                        // IMPORTANT! If the eval defines new variables in the current scope,
                        //            all variable offsets from this point on will be mis-aligned.
                        state.always_search = true;
                    }

                    result
                } else {
                    // Normal function call - except for eval (handled above)
                    let def_value = def_val.as_deref();
                    self.exec_fn_call(fn_lib, fn_name, &mut args, def_value, *pos, level)
                }
            }

            // Module-qualified function call
            #[cfg(not(feature = "no_module"))]
            Expr::FnCall(fn_name, Some(modules), arg_exprs, def_val, pos) => {
                let modules = modules.as_ref();

                let mut arg_values = arg_exprs
                    .iter()
                    .map(|expr| self.eval_expr(scope, state, fn_lib, expr, level))
                    .collect::<Result<Vec<_>, _>>()?;

                let mut args: Vec<_> = arg_values.iter_mut().collect();

                let (id, root_pos) = modules.get(0); // First module

                let module = scope.find_module(id).ok_or_else(|| {
                    Box::new(EvalAltResult::ErrorModuleNotFound(id.into(), *root_pos))
                })?;

                // First search in script-defined functions (can override built-in)
                if let Some(fn_def) = module.get_qualified_fn_lib(fn_name, args.len(), modules)? {
                    self.call_fn_from_lib(None, fn_lib, fn_def, &mut args, *pos, level)
                } else {
                    // Then search in Rust functions
                    let hash = calc_fn_hash(fn_name, args.iter().map(|a| a.type_id()));

                    match module.get_qualified_fn(fn_name, hash, modules, *pos) {
                        Ok(func) => func(&mut args, *pos),
                        Err(_) if def_val.is_some() => Ok(def_val.as_deref().unwrap().clone()),
                        Err(err) => Err(err),
                    }
                }
            }

            Expr::In(lhs, rhs, _) => {
                self.eval_in_expr(scope, state, fn_lib, lhs.as_ref(), rhs.as_ref(), level)
            }

            Expr::And(lhs, rhs, _) => Ok((self
                    .eval_expr(scope, state, fn_lib, lhs.as_ref(), level)?
                    .as_bool()
                    .map_err(|_| {
                        EvalAltResult::ErrorBooleanArgMismatch("AND".into(), lhs.position())
                    })?
                    && // Short-circuit using &&
                self
                    .eval_expr(scope, state, fn_lib, rhs.as_ref(), level)?
                    .as_bool()
                    .map_err(|_| {
                        EvalAltResult::ErrorBooleanArgMismatch("AND".into(), rhs.position())
                    })?)
            .into()),

            Expr::Or(lhs, rhs, _) => Ok((self
                    .eval_expr(scope, state, fn_lib, lhs.as_ref(), level)?
                    .as_bool()
                    .map_err(|_| {
                        EvalAltResult::ErrorBooleanArgMismatch("OR".into(), lhs.position())
                    })?
                    || // Short-circuit using ||
                self
                    .eval_expr(scope, state, fn_lib, rhs.as_ref(), level)?
                    .as_bool()
                    .map_err(|_| {
                        EvalAltResult::ErrorBooleanArgMismatch("OR".into(), rhs.position())
                    })?)
            .into()),

            Expr::True(_) => Ok(true.into()),
            Expr::False(_) => Ok(false.into()),
            Expr::Unit(_) => Ok(().into()),

            _ => unreachable!(),
        }
    }

    /// Evaluate a statement
    pub(crate) fn eval_stmt(
        &self,
        scope: &mut Scope,
        state: &mut State,
        fn_lib: &FunctionsLib,
        stmt: &Stmt,
        level: usize,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        match stmt {
            // No-op
            Stmt::Noop(_) => Ok(Default::default()),

            // Expression as statement
            Stmt::Expr(expr) => {
                let result = self.eval_expr(scope, state, fn_lib, expr, level)?;

                Ok(if let Expr::Assignment(_, _, _) = *expr.as_ref() {
                    // If it is an assignment, erase the result at the root
                    Default::default()
                } else {
                    result
                })
            }

            // Block scope
            Stmt::Block(block, _) => {
                let prev_len = scope.len();

                let result = block.iter().try_fold(Default::default(), |_, stmt| {
                    self.eval_stmt(scope, state, fn_lib, stmt, level)
                });

                scope.rewind(prev_len);

                // The impact of an eval statement goes away at the end of a block
                // because any new variables introduced will go out of scope
                state.always_search = false;

                result
            }

            // If-else statement
            Stmt::IfThenElse(guard, if_body, else_body) => self
                .eval_expr(scope, state, fn_lib, guard, level)?
                .as_bool()
                .map_err(|_| Box::new(EvalAltResult::ErrorLogicGuard(guard.position())))
                .and_then(|guard_val| {
                    if guard_val {
                        self.eval_stmt(scope, state, fn_lib, if_body, level)
                    } else if let Some(stmt) = else_body {
                        self.eval_stmt(scope, state, fn_lib, stmt.as_ref(), level)
                    } else {
                        Ok(Default::default())
                    }
                }),

            // While loop
            Stmt::While(guard, body) => loop {
                match self
                    .eval_expr(scope, state, fn_lib, guard, level)?
                    .as_bool()
                {
                    Ok(true) => match self.eval_stmt(scope, state, fn_lib, body, level) {
                        Ok(_) => (),
                        Err(err) => match *err {
                            EvalAltResult::ErrorLoopBreak(false, _) => (),
                            EvalAltResult::ErrorLoopBreak(true, _) => return Ok(Default::default()),
                            _ => return Err(err),
                        },
                    },
                    Ok(false) => return Ok(Default::default()),
                    Err(_) => {
                        return Err(Box::new(EvalAltResult::ErrorLogicGuard(guard.position())))
                    }
                }
            },

            // Loop statement
            Stmt::Loop(body) => loop {
                match self.eval_stmt(scope, state, fn_lib, body, level) {
                    Ok(_) => (),
                    Err(err) => match *err {
                        EvalAltResult::ErrorLoopBreak(false, _) => (),
                        EvalAltResult::ErrorLoopBreak(true, _) => return Ok(Default::default()),
                        _ => return Err(err),
                    },
                }
            },

            // For loop
            Stmt::For(name, expr, body) => {
                let arr = self.eval_expr(scope, state, fn_lib, expr, level)?;
                let tid = arr.type_id();

                if let Some(iter_fn) = self.type_iterators.get(&tid).or_else(|| {
                    self.packages
                        .iter()
                        .find(|pkg| pkg.type_iterators.contains_key(&tid))
                        .and_then(|pkg| pkg.type_iterators.get(&tid))
                }) {
                    // Add the loop variable
                    let var_name = name.as_ref().clone();
                    scope.push(var_name, ());
                    let index = scope.len() - 1;

                    for a in iter_fn(arr) {
                        *scope.get_mut(index).0 = a;

                        match self.eval_stmt(scope, state, fn_lib, body, level) {
                            Ok(_) => (),
                            Err(err) => match *err {
                                EvalAltResult::ErrorLoopBreak(false, _) => (),
                                EvalAltResult::ErrorLoopBreak(true, _) => break,
                                _ => return Err(err),
                            },
                        }
                    }

                    scope.rewind(scope.len() - 1);
                    Ok(Default::default())
                } else {
                    Err(Box::new(EvalAltResult::ErrorFor(expr.position())))
                }
            }

            // Continue statement
            Stmt::Continue(pos) => Err(Box::new(EvalAltResult::ErrorLoopBreak(false, *pos))),

            // Break statement
            Stmt::Break(pos) => Err(Box::new(EvalAltResult::ErrorLoopBreak(true, *pos))),

            // Empty return
            Stmt::ReturnWithVal(None, ReturnType::Return, pos) => {
                Err(Box::new(EvalAltResult::Return(Default::default(), *pos)))
            }

            // Return value
            Stmt::ReturnWithVal(Some(a), ReturnType::Return, pos) => Err(Box::new(
                EvalAltResult::Return(self.eval_expr(scope, state, fn_lib, a, level)?, *pos),
            )),

            // Empty throw
            Stmt::ReturnWithVal(None, ReturnType::Exception, pos) => {
                Err(Box::new(EvalAltResult::ErrorRuntime("".into(), *pos)))
            }

            // Throw value
            Stmt::ReturnWithVal(Some(a), ReturnType::Exception, pos) => {
                let val = self.eval_expr(scope, state, fn_lib, a, level)?;
                Err(Box::new(EvalAltResult::ErrorRuntime(
                    val.take_string().unwrap_or_else(|_| "".to_string()),
                    *pos,
                )))
            }

            // Let statement
            Stmt::Let(name, Some(expr), _) => {
                let val = self.eval_expr(scope, state, fn_lib, expr, level)?;
                // TODO - avoid copying variable name in inner block?
                let var_name = name.as_ref().clone();
                scope.push_dynamic_value(var_name, ScopeEntryType::Normal, val, false);
                Ok(Default::default())
            }

            Stmt::Let(name, None, _) => {
                // TODO - avoid copying variable name in inner block?
                let var_name = name.as_ref().clone();
                scope.push(var_name, ());
                Ok(Default::default())
            }

            // Const statement
            Stmt::Const(name, expr, _) if expr.is_constant() => {
                let val = self.eval_expr(scope, state, fn_lib, expr, level)?;
                // TODO - avoid copying variable name in inner block?
                let var_name = name.as_ref().clone();
                scope.push_dynamic_value(var_name, ScopeEntryType::Constant, val, true);
                Ok(Default::default())
            }

            // Const expression not constant
            Stmt::Const(_, _, _) => unreachable!(),

            // Import statement
            Stmt::Import(expr, name, _) => {
                #[cfg(feature = "no_module")]
                unreachable!();

                #[cfg(not(feature = "no_module"))]
                {
                    if let Some(path) = self
                        .eval_expr(scope, state, fn_lib, expr, level)?
                        .try_cast::<String>()
                    {
                        if let Some(resolver) = self.module_resolver.as_ref() {
                            let module = resolver.resolve(self, &path, expr.position())?;

                            // TODO - avoid copying module name in inner block?
                            let mod_name = name.as_ref().clone();
                            scope.push_module(mod_name, module);
                            Ok(Default::default())
                        } else {
                            Err(Box::new(EvalAltResult::ErrorModuleNotFound(
                                path,
                                expr.position(),
                            )))
                        }
                    } else {
                        Err(Box::new(EvalAltResult::ErrorImportExpr(expr.position())))
                    }
                }
            }
        }
    }

    /// Map a type_name into a pretty-print name
    pub(crate) fn map_type_name<'a>(&'a self, name: &'a str) -> &'a str {
        self.type_names
            .get(name)
            .map(String::as_str)
            .unwrap_or(name)
    }
}
