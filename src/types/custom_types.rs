//! Collection of custom types.

use crate::Identifier;
use hashbrown::HashMap;
use std::any::type_name;

/// _(internals)_ Information for a custom type.
/// Exported under the `internals` feature only.
#[derive(Debug, Eq, PartialEq, Clone, Hash, Default)]
pub struct CustomTypeInfo {
    /// Friendly display name of the custom type.
    pub display_name: Identifier,
}

/// _(internals)_ A collection of custom types.
/// Exported under the `internals` feature only.
#[derive(Debug, Clone)]
pub struct CustomTypesCollection(HashMap<Identifier, CustomTypeInfo>);

impl Default for CustomTypesCollection {
    #[inline(always)]
    fn default() -> Self {
        Self::new()
    }
}

impl CustomTypesCollection {
    /// Create a new [`CustomTypesCollection`].
    #[inline(always)]
    pub fn new() -> Self {
        Self(HashMap::new())
    }
    /// Register a custom type.
    #[inline(always)]
    pub fn add(&mut self, type_name: impl Into<Identifier>, name: impl Into<Identifier>) {
        self.add_raw(
            type_name,
            CustomTypeInfo {
                display_name: name.into(),
            },
        );
    }
    /// Register a custom type.
    #[inline(always)]
    pub fn add_type<T>(&mut self, name: &str) {
        self.add_raw(
            type_name::<T>(),
            CustomTypeInfo {
                display_name: name.into(),
            },
        );
    }
    /// Register a custom type.
    #[inline(always)]
    pub fn add_raw(&mut self, type_name: impl Into<Identifier>, custom_type: CustomTypeInfo) {
        self.0.insert(type_name.into(), custom_type);
    }
    /// Find a custom type.
    #[inline(always)]
    #[must_use]
    pub fn get(&self, key: &str) -> Option<&CustomTypeInfo> {
        self.0.get(key)
    }
}
