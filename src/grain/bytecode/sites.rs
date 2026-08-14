//! The chain positions a stripped artifact leaves behind.
//!
//! One instruction walks a whole chain, so the position table holds one entry
//! between every step of `a.b[i].c` and cannot say which failed. Step positions
//! live in the chain pool instead (see
//! [`Step::pos`](crate::grain::bytecode::Step::pos)).
//!
//! ## Stream format
//!
//! ```text
//! varint          slot count
//! per slot:       varint  line, 1-based (0 means no position)
//!                 varint  column, 1-based (0 means the start of a line)
//! ```
//!
//! Dense, because a slot *is* its index.

#[cfg(feature = "no_std")]
use std::prelude::v1::*;

use crate::grain::bytecode::chain::Chain;
use crate::grain::pos::{varint, Site};

/// Encode every chain's positions, in pool order.
#[must_use]
pub fn encode(chains: &[Chain]) -> Vec<u8> {
    let sites: Vec<_> = chains
        .iter()
        .flat_map(Chain::positions)
        .map(|pos| Site {
            line: pos.line().and_then(|n| u32::try_from(n).ok()).unwrap_or(0),
            column: pos
                .position()
                .and_then(|n| u32::try_from(n).ok())
                .unwrap_or(0),
        })
        .collect();

    let mut out = Vec::new();
    varint::put_u64(&mut out, sites.len() as u64);
    for site in sites {
        varint::put_u64(&mut out, u64::from(site.line));
        varint::put_u64(&mut out, u64::from(site.column));
    }

    out
}

/// The site recorded for `slot`, if the stream has one.
///
/// `None` past the end, for a zero line, and for a malformed stream. This runs
/// while an error is being reported and must not become the failure. [`check`]
/// is where to find out whether a stream is sound.
#[must_use]
pub fn resolve(stream: &[u8], slot: u32) -> Option<Site> {
    let mut at = 0usize;
    let count = varint::u32(stream, &mut at).ok()?;
    if slot >= count {
        return None;
    }

    for _ in 0..slot {
        varint::u32(stream, &mut at).ok()?;
        varint::u32(stream, &mut at).ok()?;
    }

    let line = varint::u32(stream, &mut at).ok()?;
    let column = varint::u32(stream, &mut at).ok()?;

    (line != 0).then_some(Site { line, column })
}

/// Every site in the stream, in slot order.
///
/// What [`Program::attach_positions`](crate::grain::Program::attach_positions)
/// writes back.
///
/// # Errors
///
/// [`StreamError`] if the stream is truncated, holds a number too wide, or has
/// bytes left after its last slot.
pub fn decode(stream: &[u8]) -> Result<Vec<Option<Site>>, StreamError> {
    let mut at = 0usize;
    let count = varint::u32(stream, &mut at).map_err(StreamError::from)?;

    let mut sites = Vec::with_capacity(count as usize);
    for _ in 0..count {
        let line = varint::u32(stream, &mut at).map_err(StreamError::from)?;
        let column = varint::u32(stream, &mut at).map_err(StreamError::from)?;
        sites.push((line != 0).then_some(Site { line, column }));
    }

    if at != stream.len() {
        return Err(StreamError::TrailingBytes {
            count: stream.len() - at,
        });
    }

    Ok(sites)
}

/// Check that a stream is well formed, so [`resolve`] can afford not to.
///
/// # Errors
///
/// As [`decode`].
pub fn check(stream: &[u8]) -> Result<(), StreamError> {
    decode(stream).map(|_| ())
}

/// Why a chain stream could not be read.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum StreamError {
    /// The stream ends mid-slot.
    Truncated,
    /// A number too wide for the field it was read into.
    Overflow,
    /// Bytes remain after the last slot, so this is not the stream it claims.
    TrailingBytes {
        /// How many bytes are left over
        count: usize,
    },
}

impl From<varint::Error> for StreamError {
    fn from(err: varint::Error) -> Self {
        match err {
            varint::Error::Truncated => Self::Truncated,
            varint::Error::Overflow => Self::Overflow,
        }
    }
}

impl core::fmt::Display for StreamError {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        match self {
            Self::Truncated => write!(f, "chain position stream ends mid-slot"),
            Self::Overflow => write!(f, "chain position stream holds a number too wide to read"),
            Self::TrailingBytes { count } => {
                write!(
                    f,
                    "chain position stream has {count} bytes past its last slot"
                )
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::grain::bytecode::chain::{Root, Step, Tail};
    use crate::Position;

    fn chain(root: Root, steps: Vec<Step>) -> Chain {
        Chain {
            root,
            steps,
            tail: Tail::Read,
            operands: 0,
        }
    }

    /// `a[i].b`, rooted at a name — so the root, the index, its bracket and the
    /// property, in that order.
    fn sample() -> Vec<Chain> {
        vec![chain(
            Root::Named {
                name: 0,
                pos: Position::new(1, 1),
            },
            vec![
                Step::Index {
                    operand: 0,
                    pos: Position::new(1, 3),
                    bracket: Position::new(1, 2),
                },
                Step::Property {
                    name: 1,
                    getter: 2,
                    setter: 3,
                    pos: Position::new(1, 6),
                },
            ],
        )]
    }

    #[test]
    #[cfg(not(feature = "no_position"))]
    fn every_slot_resolves_to_the_position_it_was_written_from() {
        let stream = encode(&sample());

        assert_eq!(
            resolve(&stream, 0),
            Some(Site { line: 1, column: 1 }),
            "the root"
        );
        assert_eq!(
            resolve(&stream, 1),
            Some(Site { line: 1, column: 3 }),
            "the index"
        );
        assert_eq!(
            resolve(&stream, 2),
            Some(Site { line: 1, column: 2 }),
            "the bracket"
        );
        assert_eq!(
            resolve(&stream, 3),
            Some(Site { line: 1, column: 6 }),
            "the property"
        );
    }

    /// The slot a fault reports is the step's own, and it has to land on the
    /// step rather than between two of them.
    #[test]
    #[cfg(not(feature = "no_position"))]
    fn a_steps_slot_names_that_steps_position() {
        let chains = sample();
        let stream = encode(&chains);
        let chain = &chains[0];

        let index = chain.step_slot(0).expect("the index step exists");
        let property = chain.step_slot(1).expect("the property step exists");

        assert_eq!(resolve(&stream, index), Some(Site { line: 1, column: 3 }));
        assert_eq!(
            resolve(&stream, property),
            Some(Site { line: 1, column: 6 })
        );
    }

    /// Slots are positional, so a chain's base is every earlier chain's count.
    #[test]
    #[cfg(not(feature = "no_position"))]
    fn slots_run_on_across_chains() {
        let mut chains = sample();
        chains.push(chain(
            Root::Temporary,
            vec![Step::Method {
                name: 0,
                argc: 0,
                operand: 0,
                pos: Position::new(9, 9),
            }],
        ));

        let stream = encode(&chains);
        let base: u32 = chains[..1].iter().map(Chain::position_slots).sum();

        assert_eq!(base, 4, "the first chain holds four positions");
        assert_eq!(resolve(&stream, base), Some(Site { line: 9, column: 9 }));
    }

    #[test]
    fn a_slot_past_the_end_resolves_to_nothing() {
        assert_eq!(resolve(&encode(&sample()), 99), None);
    }

    #[test]
    fn an_empty_stream_is_sound_and_resolves_nothing() {
        let stream = encode(&[]);
        assert_eq!(check(&stream), Ok(()));
        assert_eq!(resolve(&stream, 0), None);
    }

    #[test]
    fn a_truncated_stream_is_named_as_such() {
        let stream = encode(&sample());
        for cut in 0..stream.len() {
            assert!(
                check(&stream[..cut]).is_err(),
                "a {cut}-byte prefix passed the check"
            );
        }
    }

    #[test]
    fn bytes_past_the_last_slot_are_refused() {
        let mut stream = encode(&sample());
        stream.push(0);
        assert_eq!(check(&stream), Err(StreamError::TrailingBytes { count: 1 }));
    }

    /// Resolution runs while an error is already being reported. Whatever the
    /// stream says, it may not become the failure.
    #[test]
    fn no_byte_string_can_make_resolution_panic() {
        let stream = encode(&sample());
        for index in 0..stream.len() {
            for bit in 0..8 {
                let mut corrupt = stream.clone();
                corrupt[index] ^= 1 << bit;
                for slot in 0..64 {
                    let _ = resolve(&corrupt, slot);
                }
                let _ = check(&corrupt);
            }
        }

        for junk in [&b""[..], &[0xff][..], &[0xff; 32][..], &[0x80; 12][..]] {
            for slot in 0..8 {
                let _ = resolve(junk, slot);
            }
            let _ = check(junk);
        }
    }
}
