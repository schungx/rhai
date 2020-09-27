//! Implement deserialization support of `Dynamic` for [`serde`](https://crates.io/crates/serde).

use super::str::ImmutableStringDeserializer;
use crate::any::{Dynamic, Union};
use crate::error::ParseErrorType;
use crate::result::EvalAltResult;
use crate::token::Position;
use crate::utils::ImmutableString;

use serde::de::{
    DeserializeSeed, Deserializer, Error, IntoDeserializer, MapAccess, SeqAccess, Visitor,
};
use serde::Deserialize;

#[cfg(not(feature = "no_index"))]
use crate::engine::Array;

#[cfg(not(feature = "no_object"))]
use crate::engine::Map;

#[cfg(not(feature = "no_object"))]
use serde::de::{EnumAccess, VariantAccess};

use crate::stdlib::{any::type_name, boxed::Box, fmt, string::ToString};

#[cfg(not(feature = "no_std"))]
#[cfg(not(target_arch = "wasm32"))]
use crate::stdlib::time::Instant;

#[cfg(not(feature = "no_std"))]
#[cfg(target_arch = "wasm32")]
use instant::Instant;

/// Deserializer for `Dynamic` which is kept as a reference.
///
/// The reference is necessary because the deserialized type may hold references
/// (especially `&str`) to the source `Dynamic`.
pub struct DynamicDeserializer<'a> {
    value: &'a Dynamic,
}

impl<'de> DynamicDeserializer<'de> {
    /// Create a `DynamicDeserializer` from a reference to a `Dynamic` value.
    ///
    /// The reference is necessary because the deserialized type may hold references
    /// (especially `&str`) to the source `Dynamic`.
    pub fn from_dynamic(value: &'de Dynamic) -> Self {
        Self { value }
    }
    /// Shortcut for a type conversion error.
    fn type_error<T>(&self) -> Result<T, Box<EvalAltResult>> {
        self.type_error_str(type_name::<T>())
    }
    /// Shortcut for a type conversion error.
    fn type_error_str<T>(&self, error: &str) -> Result<T, Box<EvalAltResult>> {
        EvalAltResult::ErrorMismatchOutputType(
            error.into(),
            self.value.type_name().into(),
            Position::none(),
        )
        .into()
    }
    fn deserialize_int<V: Visitor<'de>>(
        &mut self,
        v: crate::INT,
        visitor: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        #[cfg(not(feature = "only_i32"))]
        {
            visitor.visit_i64(v)
        }
        #[cfg(feature = "only_i32")]
        {
            visitor.visit_i32(v)
        }
    }
}

/// Deserialize a `Dynamic` value into a Rust type that implements `serde::Deserialize`.
///
/// # Examples
///
/// ```
/// # fn main() -> Result<(), Box<rhai::EvalAltResult>> {
/// # #[cfg(not(feature = "no_index"))]
/// # #[cfg(not(feature = "no_object"))]
/// # {
/// use rhai::{Dynamic, Array, Map, INT};
/// use rhai::de::from_dynamic;
/// use serde::Deserialize;
///
/// #[derive(Debug, Deserialize, PartialEq)]
/// struct Hello {
///     a: INT,
///     b: bool,
/// }
///
/// #[derive(Debug, Deserialize, PartialEq)]
/// struct Test {
///     int: u32,
///     seq: Vec<String>,
///     obj: Hello,
/// }
///
/// let mut map = Map::new();
/// map.insert("int".into(), Dynamic::from(42_u32));
///
/// let mut map2 = Map::new();
/// map2.insert("a".into(), (123 as INT).into());
/// map2.insert("b".into(), true.into());
///
/// map.insert("obj".into(), map2.into());
///
/// let arr: Array = vec!["foo".into(), "bar".into(), "baz".into()];
/// map.insert("seq".into(), arr.into());
///
/// let value: Test = from_dynamic(&map.into())?;
///
/// let expected = Test {
///     int: 42,
///     seq: vec!["foo".into(), "bar".into(), "baz".into()],
///     obj: Hello { a: 123, b: true },
/// };
///
/// assert_eq!(value, expected);
/// # }
/// # Ok(())
/// # }
/// ```
pub fn from_dynamic<'de, T: Deserialize<'de>>(
    value: &'de Dynamic,
) -> Result<T, Box<EvalAltResult>> {
    T::deserialize(&mut DynamicDeserializer::from_dynamic(value))
}

impl Error for Box<EvalAltResult> {
    fn custom<T: fmt::Display>(err: T) -> Self {
        EvalAltResult::ErrorParsing(ParseErrorType::BadInput(err.to_string()), Position::none())
            .into()
    }
}

impl<'de> Deserializer<'de> for &mut DynamicDeserializer<'de> {
    type Error = Box<EvalAltResult>;

    fn deserialize_any<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        match &self.value.0 {
            Union::Unit(_) => self.deserialize_unit(visitor),
            Union::Bool(_) => self.deserialize_bool(visitor),
            Union::Str(_) => self.deserialize_str(visitor),
            Union::Char(_) => self.deserialize_char(visitor),
            #[cfg(not(feature = "only_i32"))]
            Union::Int(_) => self.deserialize_i64(visitor),
            #[cfg(feature = "only_i32")]
            Union::Int(_) => self.deserialize_i32(visitor),
            #[cfg(not(feature = "no_float"))]
            Union::Float(_) => self.deserialize_f64(visitor),
            #[cfg(not(feature = "no_index"))]
            Union::Array(_) => self.deserialize_seq(visitor),
            #[cfg(not(feature = "no_object"))]
            Union::Map(_) => self.deserialize_map(visitor),
            Union::FnPtr(_) => self.type_error(),
            #[cfg(not(feature = "no_std"))]
            Union::TimeStamp(_) => self.type_error(),

            Union::Variant(value) if value.is::<i8>() => self.deserialize_i8(visitor),
            Union::Variant(value) if value.is::<i16>() => self.deserialize_i16(visitor),
            Union::Variant(value) if value.is::<i32>() => self.deserialize_i32(visitor),
            Union::Variant(value) if value.is::<i64>() => self.deserialize_i64(visitor),
            Union::Variant(value) if value.is::<i128>() => self.deserialize_i128(visitor),
            Union::Variant(value) if value.is::<u8>() => self.deserialize_u8(visitor),
            Union::Variant(value) if value.is::<u16>() => self.deserialize_u16(visitor),
            Union::Variant(value) if value.is::<u32>() => self.deserialize_u32(visitor),
            Union::Variant(value) if value.is::<u64>() => self.deserialize_u64(visitor),
            Union::Variant(value) if value.is::<u128>() => self.deserialize_u128(visitor),

            Union::Variant(_) => self.type_error(),

            #[cfg(not(feature = "no_closure"))]
            Union::Shared(_) => self.type_error(),
        }
    }

    fn deserialize_bool<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        visitor.visit_bool(self.value.as_bool().or_else(|_| self.type_error())?)
    }

    fn deserialize_i8<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(v) = self.value.as_int() {
            self.deserialize_int(v, visitor)
        } else {
            self.value
                .downcast_ref::<i8>()
                .map_or_else(|| self.type_error(), |&x| visitor.visit_i8(x))
        }
    }

    fn deserialize_i16<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(v) = self.value.as_int() {
            self.deserialize_int(v, visitor)
        } else {
            self.value
                .downcast_ref::<i16>()
                .map_or_else(|| self.type_error(), |&x| visitor.visit_i16(x))
        }
    }

    fn deserialize_i32<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(v) = self.value.as_int() {
            self.deserialize_int(v, visitor)
        } else if cfg!(feature = "only_i32") {
            self.type_error()
        } else {
            self.value
                .downcast_ref::<i32>()
                .map_or_else(|| self.type_error(), |&x| visitor.visit_i32(x))
        }
    }

    fn deserialize_i64<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(v) = self.value.as_int() {
            self.deserialize_int(v, visitor)
        } else if cfg!(not(feature = "only_i32")) {
            self.type_error()
        } else {
            self.value
                .downcast_ref::<i64>()
                .map_or_else(|| self.type_error(), |&x| visitor.visit_i64(x))
        }
    }

    fn deserialize_i128<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(v) = self.value.as_int() {
            self.deserialize_int(v, visitor)
        } else if cfg!(not(feature = "only_i32")) {
            self.type_error()
        } else {
            self.value
                .downcast_ref::<i128>()
                .map_or_else(|| self.type_error(), |&x| visitor.visit_i128(x))
        }
    }

    fn deserialize_u8<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(v) = self.value.as_int() {
            self.deserialize_int(v, visitor)
        } else {
            self.value
                .downcast_ref::<u8>()
                .map_or_else(|| self.type_error(), |&x| visitor.visit_u8(x))
        }
    }

    fn deserialize_u16<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(v) = self.value.as_int() {
            self.deserialize_int(v, visitor)
        } else {
            self.value
                .downcast_ref::<u16>()
                .map_or_else(|| self.type_error(), |&x| visitor.visit_u16(x))
        }
    }

    fn deserialize_u32<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(v) = self.value.as_int() {
            self.deserialize_int(v, visitor)
        } else {
            self.value
                .downcast_ref::<u32>()
                .map_or_else(|| self.type_error(), |&x| visitor.visit_u32(x))
        }
    }

    fn deserialize_u64<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(v) = self.value.as_int() {
            self.deserialize_int(v, visitor)
        } else {
            self.value
                .downcast_ref::<u64>()
                .map_or_else(|| self.type_error(), |&x| visitor.visit_u64(x))
        }
    }

    fn deserialize_u128<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(v) = self.value.as_int() {
            self.deserialize_int(v, visitor)
        } else {
            self.value
                .downcast_ref::<u128>()
                .map_or_else(|| self.type_error(), |&x| visitor.visit_u128(x))
        }
    }

    fn deserialize_f32<V: Visitor<'de>>(self, _visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        #[cfg(not(feature = "no_float"))]
        return self
            .value
            .downcast_ref::<f32>()
            .map_or_else(|| self.type_error(), |&x| _visitor.visit_f32(x));

        #[cfg(feature = "no_float")]
        return self.type_error_str("f32");
    }

    fn deserialize_f64<V: Visitor<'de>>(self, _visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        #[cfg(not(feature = "no_float"))]
        return self
            .value
            .downcast_ref::<f64>()
            .map_or_else(|| self.type_error(), |&x| _visitor.visit_f64(x));

        #[cfg(feature = "no_float")]
        return self.type_error_str("f64");
    }

    fn deserialize_char<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        self.value
            .downcast_ref::<char>()
            .map_or_else(|| self.type_error(), |&x| visitor.visit_char(x))
    }

    fn deserialize_str<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        self.value.downcast_ref::<ImmutableString>().map_or_else(
            || self.type_error(),
            |x| visitor.visit_borrowed_str(x.as_str()),
        )
    }

    fn deserialize_string<V: Visitor<'de>>(
        self,
        visitor: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        self.deserialize_str(visitor)
    }

    fn deserialize_bytes<V: Visitor<'de>>(self, _: V) -> Result<V::Value, Box<EvalAltResult>> {
        self.type_error()
    }

    fn deserialize_byte_buf<V: Visitor<'de>>(self, _: V) -> Result<V::Value, Box<EvalAltResult>> {
        self.type_error()
    }

    fn deserialize_option<V: Visitor<'de>>(self, _: V) -> Result<V::Value, Box<EvalAltResult>> {
        self.type_error()
    }

    fn deserialize_unit<V: Visitor<'de>>(self, visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        self.value
            .downcast_ref::<()>()
            .map_or_else(|| self.type_error(), |_| visitor.visit_unit())
    }

    fn deserialize_unit_struct<V: Visitor<'de>>(
        self,
        _name: &'static str,
        visitor: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        self.deserialize_unit(visitor)
    }

    fn deserialize_newtype_struct<V: Visitor<'de>>(
        self,
        _name: &'static str,
        visitor: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        visitor.visit_newtype_struct(self)
    }

    fn deserialize_seq<V: Visitor<'de>>(self, _visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        #[cfg(not(feature = "no_index"))]
        return self.value.downcast_ref::<Array>().map_or_else(
            || self.type_error(),
            |arr| _visitor.visit_seq(IterateArray::new(arr.iter())),
        );

        #[cfg(feature = "no_index")]
        return self.type_error();
    }

    fn deserialize_tuple<V: Visitor<'de>>(
        self,
        _len: usize,
        visitor: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        self.deserialize_seq(visitor)
    }

    fn deserialize_tuple_struct<V: Visitor<'de>>(
        self,
        _name: &'static str,
        _len: usize,
        visitor: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        self.deserialize_seq(visitor)
    }

    fn deserialize_map<V: Visitor<'de>>(self, _visitor: V) -> Result<V::Value, Box<EvalAltResult>> {
        #[cfg(not(feature = "no_object"))]
        return self.value.downcast_ref::<Map>().map_or_else(
            || self.type_error(),
            |map| _visitor.visit_map(IterateMap::new(map.keys(), map.values())),
        );

        #[cfg(feature = "no_object")]
        return self.type_error();
    }

    fn deserialize_struct<V: Visitor<'de>>(
        self,
        _name: &'static str,
        _fields: &'static [&'static str],
        visitor: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        self.deserialize_map(visitor)
    }

    fn deserialize_enum<V: Visitor<'de>>(
        self,
        _name: &'static str,
        _variants: &'static [&'static str],
        visitor: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        if let Ok(s) = self.value.as_str() {
            visitor.visit_enum(s.into_deserializer())
        } else {
            #[cfg(not(feature = "no_object"))]
            if let Some(map) = self.value.downcast_ref::<Map>() {
                let mut iter = map.iter();
                let first = iter.next();
                let second = iter.next();
                if let (Some((key, value)), None) = (first, second) {
                    visitor.visit_enum(EnumDeserializer {
                        tag: &key,
                        content: DynamicDeserializer::from_dynamic(value),
                    })
                } else {
                    self.type_error()
                }
            } else {
                self.type_error()
            }
            #[cfg(feature = "no_object")]
            return self.type_error();
        }
    }

    fn deserialize_identifier<V: Visitor<'de>>(
        self,
        visitor: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        self.deserialize_str(visitor)
    }

    fn deserialize_ignored_any<V: Visitor<'de>>(
        self,
        visitor: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        self.deserialize_any(visitor)
    }
}

/// `SeqAccess` implementation for arrays.
struct IterateArray<'a, ITER>
where
    ITER: Iterator<Item = &'a Dynamic>,
{
    /// Iterator for a stream of `Dynamic` values.
    iter: ITER,
}

#[cfg(not(feature = "no_index"))]
impl<'a, ITER> IterateArray<'a, ITER>
where
    ITER: Iterator<Item = &'a Dynamic>,
{
    pub fn new(iter: ITER) -> Self {
        Self { iter }
    }
}

impl<'a: 'de, 'de, ITER> SeqAccess<'de> for IterateArray<'a, ITER>
where
    ITER: Iterator<Item = &'a Dynamic>,
{
    type Error = Box<EvalAltResult>;

    fn next_element_seed<T: DeserializeSeed<'de>>(
        &mut self,
        seed: T,
    ) -> Result<Option<T::Value>, Box<EvalAltResult>> {
        // Deserialize each item coming out of the iterator.
        match self.iter.next() {
            None => Ok(None),
            Some(item) => seed
                .deserialize(&mut DynamicDeserializer::from_dynamic(item))
                .map(Some),
        }
    }
}

/// `MapAccess` implementation for maps.
struct IterateMap<'a, KEYS, VALUES>
where
    KEYS: Iterator<Item = &'a ImmutableString>,
    VALUES: Iterator<Item = &'a Dynamic>,
{
    // Iterator for a stream of `Dynamic` keys.
    keys: KEYS,
    // Iterator for a stream of `Dynamic` values.
    values: VALUES,
}

#[cfg(not(feature = "no_object"))]
impl<'a, KEYS, VALUES> IterateMap<'a, KEYS, VALUES>
where
    KEYS: Iterator<Item = &'a ImmutableString>,
    VALUES: Iterator<Item = &'a Dynamic>,
{
    pub fn new(keys: KEYS, values: VALUES) -> Self {
        Self { keys, values }
    }
}

impl<'a: 'de, 'de, KEYS, VALUES> MapAccess<'de> for IterateMap<'a, KEYS, VALUES>
where
    KEYS: Iterator<Item = &'a ImmutableString>,
    VALUES: Iterator<Item = &'a Dynamic>,
{
    type Error = Box<EvalAltResult>;

    fn next_key_seed<K: DeserializeSeed<'de>>(
        &mut self,
        seed: K,
    ) -> Result<Option<K::Value>, Box<EvalAltResult>> {
        // Deserialize each `ImmutableString` key coming out of the keys iterator.
        match self.keys.next() {
            None => Ok(None),
            Some(item) => seed
                .deserialize(&mut ImmutableStringDeserializer::from_str(item))
                .map(Some),
        }
    }

    fn next_value_seed<V: DeserializeSeed<'de>>(
        &mut self,
        seed: V,
    ) -> Result<V::Value, Box<EvalAltResult>> {
        // Deserialize each value item coming out of the iterator.
        seed.deserialize(&mut DynamicDeserializer::from_dynamic(
            self.values.next().unwrap(),
        ))
    }
}

#[cfg(not(feature = "no_object"))]
struct EnumDeserializer<'t, 'de: 't> {
    tag: &'t str,
    content: DynamicDeserializer<'de>,
}

#[cfg(not(feature = "no_object"))]
impl<'t, 'de> EnumAccess<'de> for EnumDeserializer<'t, 'de> {
    type Error = Box<EvalAltResult>;
    type Variant = Self;

    fn variant_seed<V>(self, seed: V) -> Result<(V::Value, Self::Variant), Self::Error>
    where
        V: DeserializeSeed<'de>,
    {
        seed.deserialize(self.tag.into_deserializer())
            .map(|v| (v, self))
    }
}

#[cfg(not(feature = "no_object"))]
impl<'t, 'de> VariantAccess<'de> for EnumDeserializer<'t, 'de> {
    type Error = Box<EvalAltResult>;

    fn unit_variant(mut self) -> Result<(), Self::Error> {
        Deserialize::deserialize(&mut self.content)
    }

    fn newtype_variant_seed<T>(mut self, seed: T) -> Result<T::Value, Self::Error>
    where
        T: DeserializeSeed<'de>,
    {
        seed.deserialize(&mut self.content)
    }

    fn tuple_variant<V>(mut self, len: usize, visitor: V) -> Result<V::Value, Self::Error>
    where
        V: Visitor<'de>,
    {
        self.content.deserialize_tuple(len, visitor)
    }

    fn struct_variant<V>(
        mut self,
        fields: &'static [&'static str],
        visitor: V,
    ) -> Result<V::Value, Self::Error>
    where
        V: Visitor<'de>,
    {
        self.content.deserialize_struct("", fields, visitor)
    }
}
