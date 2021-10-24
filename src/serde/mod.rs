//! _(serde)_ Serialization and deserialization support for [`serde`](https://crates.io/crates/serde).
//! Exported under the `serde` feature only.

mod ast_de;
mod ast_ser;
mod de;
mod deserialize;
mod ser;
mod serialize;
mod str;

#[cfg(feature = "metadata")]
mod metadata;

pub use de::from_dynamic;
pub use ser::to_dynamic;
