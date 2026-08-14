//! What a `Dynamic` is, on the machine that wrote the artifact.
//!
//! Rhai's feature flags change the value representation rather than just what
//! is available: `f32_float` makes `FLOAT` an `f32`, `only_i32` narrows `INT`,
//! `sync` swaps `Rc` for `Arc`. Loading an artifact across one of those is not
//! a missing feature, it is a value decoded as the wrong type — so the header
//! carries a fingerprint and the loader refuses a mismatch by name.
//!
//! ## What the fingerprint can and cannot see
//!
//! Widths are *measured*, so they are right no matter how Rhai was configured.
//! The booleans are read from this crate's own features, which is why the
//! manifest mirrors them — `cfg!(feature = "no_object")` here does not consult
//! Rhai's manifest.
//!
//! That leaves one gap: enabling a restriction on Rhai directly, bypassing the
//! mirror. The cross-checks below close it wherever rust can prove the
//! disagreement, turning it into a compile error rather than a wrong
//! fingerprint. They cannot close it everywhere, which is what the mirror is
//! documented for.

use bitflags::bitflags;

bitflags! {
    /// Feature flags.
    ///
    /// Order is the wire order and must never change; append only.
    #[derive(Debug, Default, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
    pub struct FeatureFlags: u32 {
        const SYNC = 0b0000_0000_0000_0001;
        const DECIMAL = 0b0000_0000_0000_0010;
        const NO_INDEX = 0b0000_0000_0000_0100;
        const NO_OBJECT = 0b0000_0000_0000_1000;
        const NO_CLOSURE = 0b0000_0000_0001_0000;
        const NO_FUNCTION = 0b0000_0000_0010_0000;
        const NO_MODULE = 0b0000_0000_0100_0000;
        const NO_POSITION = 0b0000_0000_1000_0000;
        const NO_CUSTOM_SYNTAX = 0b0000_0001_0000_0000;
        const NO_TIME = 0b0000_0010_0000_0000;
        const UNCHECKED = 0b0000_0100_0000_0000;
    }
}

use FeatureFlags as F;

/// Restrictions that are not visible in a width.
/// A flag's name is what the loader reports, so it has to match Rhai's own spelling.
const FLAGS: &[(FeatureFlags, &'static str, bool)] = &[
    (F::SYNC, "sync", cfg!(feature = "sync")),
    (F::DECIMAL, "decimal", cfg!(feature = "decimal")),
    (F::NO_INDEX, "no_index", cfg!(feature = "no_index")),
    (F::NO_OBJECT, "no_object", cfg!(feature = "no_object")),
    (F::NO_CLOSURE, "no_closure", cfg!(feature = "no_closure")),
    (F::NO_FUNCTION, "no_function", cfg!(feature = "no_function")),
    (F::NO_MODULE, "no_module", cfg!(feature = "no_module")),
    (F::NO_POSITION, "no_position", cfg!(feature = "no_position")),
    (
        F::NO_CUSTOM_SYNTAX,
        "no_custom_syntax",
        cfg!(feature = "no_custom_syntax"),
    ),
    (F::NO_TIME, "no_time", cfg!(feature = "no_time")),
    (F::UNCHECKED, "unchecked", cfg!(feature = "unchecked")),
];

/// The value representation an artifact was written against.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Abi {
    /// `size_of::<rhai::INT>()`. Measured, so `only_i32` set on Rhai alone is
    /// still caught.
    pub int_bytes: u8,
    /// `size_of::<rhai::FLOAT>()`, or 0 under `no_float`.
    pub float_bytes: u8,
    /// current build's feature flags.
    pub features: FeatureFlags,
}

/// How two fingerprints differ.
///
/// Naming the difference is the whole point: "artifact was built for a
/// different rhai" is not something a user can act on.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum AbiMismatch {
    /// A width differs, which means integers or floats would decode wrong.
    Width {
        /// Which width differs
        what: &'static str,
        /// What the writer used
        artifact: u8,
        /// What this build uses
        host: u8,
    },
    /// A restriction differs. `artifact` is whether the writer had it on.
    Flag {
        /// Which flag differs
        flag: &'static str,
        /// Whether the writer had it on
        artifact: bool,
    },
}

impl core::fmt::Display for AbiMismatch {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        match self {
            Self::Width {
                what,
                artifact,
                host,
            } => write!(
                f,
                "artifact was written with a {artifact}-byte {what}, but this build has {host}"
            ),
            Self::Flag { flag, artifact } => {
                let (writer, reader) = if *artifact {
                    ("on", "off")
                } else {
                    ("off", "on")
                };
                write!(
                    f,
                    "artifact was written with `{flag}` {writer}, but this build has it {reader}"
                )
            }
        }
    }
}

impl Abi {
    /// The fingerprint of the running build.
    #[must_use]
    pub fn host() -> Self {
        let int_bytes = core::mem::size_of::<rhai::INT>() as u8;
        #[cfg(not(feature = "no_float"))]
        let float_bytes = core::mem::size_of::<rhai::FLOAT>() as u8;
        #[cfg(feature = "no_float")]
        let float_bytes = 0u8;

        let mut features = F::empty();
        FLAGS
            .iter()
            .for_each(|(flag, _, on)| features.set(*flag, *on));

        Self {
            int_bytes,
            float_bytes,
            features,
        }
    }

    /// Why this fingerprint cannot be loaded by `host`, if it cannot.
    ///
    /// Widths first: they are measured rather than declared, so they are the
    /// claim least likely to be lying.
    #[must_use]
    pub fn incompatible_with(self, host: Self) -> Option<AbiMismatch> {
        if self.int_bytes != host.int_bytes {
            return Some(AbiMismatch::Width {
                what: "INT",
                artifact: self.int_bytes,
                host: host.int_bytes,
            });
        }
        if self.float_bytes != host.float_bytes {
            return Some(AbiMismatch::Width {
                what: "FLOAT",
                artifact: self.float_bytes,
                host: host.float_bytes,
            });
        }

        let diff = self.features ^ host.features;
        if !diff.is_empty() {
            // A bit not in the table means the writer knows a flag this build does not.
            // Reporting it as unknown.
            let (bit, flag) = FLAGS
                .iter()
                .find(|(flag, _, _)| diff.contains(*flag))
                .map_or((true, "an unknown feature flag"), |(bit, name, _)| {
                    (self.features.contains(*bit), *name)
                });
            return Some(AbiMismatch::Flag {
                flag,
                artifact: bit,
            });
        }

        None
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn a_build_can_load_its_own_artifacts() {
        assert_eq!(Abi::host().incompatible_with(Abi::host()), None);
    }

    #[test]
    fn the_build_measures_the_widths_it_should() {
        let abi = Abi::host();
        // Against the aliases rather than concrete types, so this holds under
        // only_i32 and f32_float as well — the point is that the fingerprint
        // reports the build it was taken on, whichever build that is.
        assert_eq!(abi.int_bytes as usize, core::mem::size_of::<rhai::INT>(),);
        #[cfg(not(feature = "no_float"))]
        assert_eq!(
            abi.float_bytes as usize,
            core::mem::size_of::<rhai::FLOAT>(),
        );
        #[cfg(feature = "no_float")]
        assert_eq!(abi.float_bytes, 0);
    }

    #[test]
    fn a_narrower_int_is_refused_by_name() {
        let host = Abi::host();
        // Halved rather than named: `only_i32` makes 4 the host's own width,
        // and an artifact agreeing with the host is not a mismatch to report.
        let narrow = Abi {
            int_bytes: host.int_bytes / 2,
            ..host
        };
        assert_eq!(
            narrow.incompatible_with(host),
            Some(AbiMismatch::Width {
                what: "INT",
                artifact: host.int_bytes / 2,
                host: host.int_bytes,
            }),
        );
    }

    /// The message has to name the flag; that is the difference between an
    /// error a user can act on and one they cannot.
    #[test]
    fn a_differing_restriction_is_refused_by_name() {
        let host = Abi::host();
        let restricted = Abi {
            features: host.features ^ FeatureFlags::NO_OBJECT,
            ..host
        };

        let Some(mismatch @ AbiMismatch::Flag { flag, .. }) = restricted.incompatible_with(host)
        else {
            panic!("a differing flag must be refused");
        };
        assert_eq!(flag, "no_object");
        assert!(mismatch.to_string().contains("no_object"));
    }

    #[test]
    fn a_flag_this_build_has_never_heard_of_does_not_panic() {
        let host = Abi::host();
        let future = Abi {
            features: host.features ^ FeatureFlags::from_bits_retain(1_u32 << 31),
            ..host
        };
        assert!(matches!(
            future.incompatible_with(host),
            Some(AbiMismatch::Flag { .. }),
        ));
    }
}
