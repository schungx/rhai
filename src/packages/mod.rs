#![allow(unused)]

//! Module containing all built-in _packages_ available to Rhai, plus facilities to define custom packages.

use crate::fn_native::{CallableFunction, IteratorFn, Shared};
use crate::module::Module;
use crate::utils::StaticVec;

use crate::stdlib::any::TypeId;

pub(crate) mod arithmetic;
mod array_basic;
mod eval;
mod fn_basic;
mod iter_basic;
mod logic;
mod map_basic;
mod math_basic;
mod pkg_core;
mod pkg_std;
mod string_basic;
mod string_more;
mod time_basic;

pub use arithmetic::ArithmeticPackage;
#[cfg(not(feature = "no_index"))]
pub use array_basic::BasicArrayPackage;
pub use eval::EvalPackage;
#[cfg(not(feature = "no_function"))]
pub use fn_basic::BasicFnPackage;
pub use iter_basic::BasicIteratorPackage;
pub use logic::LogicPackage;
#[cfg(not(feature = "no_object"))]
pub use map_basic::BasicMapPackage;
pub use math_basic::BasicMathPackage;
pub use pkg_core::CorePackage;
pub use pkg_std::StandardPackage;
pub use string_basic::BasicStringPackage;
pub use string_more::MoreStringPackage;
#[cfg(not(feature = "no_std"))]
pub use time_basic::BasicTimePackage;

/// Trait that all packages must implement.
pub trait Package {
    /// Register all the functions in a package into a store.
    fn init(lib: &mut Module);

    /// Retrieve the generic package library from this package.
    fn get(&self) -> PackageLibrary;
}

/// A sharable `Module` to facilitate sharing library instances.
pub type PackageLibrary = Shared<Module>;

/// Type containing a collection of `PackageLibrary` instances.
/// All function and type iterator keys in the loaded packages are indexed for fast access.
#[derive(Debug, Clone, Default)]
pub(crate) struct PackagesCollection(StaticVec<PackageLibrary>);

impl PackagesCollection {
    /// Add a `PackageLibrary` into the `PackagesCollection`.
    pub fn push(&mut self, package: PackageLibrary) {
        // Later packages override previous ones.
        self.0.insert(0, package);
    }
    /// Does the specified function hash key exist in the `PackagesCollection`?
    pub fn contains_fn(&self, hash: u64) -> bool {
        self.0.iter().any(|p| p.contains_fn(hash))
    }
    /// Get specified function via its hash key.
    pub fn get_fn(&self, hash: u64) -> Option<&CallableFunction> {
        self.0
            .iter()
            .map(|p| p.get_fn(hash))
            .find(|f| f.is_some())
            .flatten()
    }
    /// Does the specified TypeId iterator exist in the `PackagesCollection`?
    pub fn contains_iter(&self, id: TypeId) -> bool {
        self.0.iter().any(|p| p.contains_iter(id))
    }
    /// Get the specified TypeId iterator.
    pub fn get_iter(&self, id: TypeId) -> Option<IteratorFn> {
        self.0
            .iter()
            .map(|p| p.get_iter(id))
            .find(|f| f.is_some())
            .flatten()
    }
}

/// Macro that makes it easy to define a _package_ (which is basically a shared module)
/// and register functions into it.
///
/// Functions can be added to the package using the standard module methods such as
/// `set_fn_2`, `set_fn_3_mut`, `set_fn_0` etc.
///
/// # Examples
///
/// ```
/// use rhai::{Dynamic, EvalAltResult};
/// use rhai::def_package;
///
/// fn add(x: i64, y: i64) -> Result<i64, Box<EvalAltResult>> { Ok(x + y) }
///
/// def_package!(rhai:MyPackage:"My super-duper package", lib,
/// {
///     // Load a binary function with all value parameters.
///     lib.set_fn_2("my_add", add);
/// });
/// ```
///
/// The above defines a package named 'MyPackage' with a single function named 'my_add'.
#[macro_export]
macro_rules! def_package {
    ($root:ident : $package:ident : $comment:expr , $lib:ident , $block:stmt) => {
        #[doc=$comment]
        pub struct $package($root::packages::PackageLibrary);

        impl $root::packages::Package for $package {
            fn get(&self) -> $root::packages::PackageLibrary {
                self.0.clone()
            }

            fn init($lib: &mut $root::Module) {
                $block
            }
        }

        impl $package {
            pub fn new() -> Self {
                let mut module = $root::Module::new_with_capacity(512);
                <Self as $root::packages::Package>::init(&mut module);
                Self(module.into())
            }
        }
    };
}
