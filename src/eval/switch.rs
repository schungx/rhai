//! Types implementing the `switch` statement functionalities.

use crate::types::dynamic::Union;
use crate::{Dynamic, INT};
#[cfg(feature = "no_std")]
use std::prelude::v1::*;
use std::{
    fmt,
    hash::Hash,
    ops::{Range, RangeInclusive},
};

/// _(internals)_ A type containing a range case for a `switch` statement.
/// Exported under the `internals` feature only.
#[derive(Clone, Hash)]
pub enum RangeCase {
    /// Exclusive range.
    ExclusiveInt(Range<INT>, usize),
    /// Inclusive range.
    InclusiveInt(RangeInclusive<INT>, usize),
}

impl fmt::Debug for RangeCase {
    #[cold]
    #[inline(never)]
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::ExclusiveInt(r, n) => write!(f, "{}..{} => {n}", r.start, r.end),
            Self::InclusiveInt(r, n) => write!(f, "{}..={} => {n}", *r.start(), *r.end()),
        }
    }
}

impl From<Range<INT>> for RangeCase {
    #[inline(always)]
    fn from(value: Range<INT>) -> Self {
        Self::ExclusiveInt(value, usize::MAX)
    }
}

impl From<RangeInclusive<INT>> for RangeCase {
    #[inline(always)]
    fn from(value: RangeInclusive<INT>) -> Self {
        Self::InclusiveInt(value, usize::MAX)
    }
}

impl IntoIterator for RangeCase {
    type Item = INT;
    type IntoIter = Box<dyn Iterator<Item = Self::Item>>;

    #[inline]
    fn into_iter(self) -> Self::IntoIter {
        match self {
            Self::ExclusiveInt(r, ..) => Box::new(r),
            Self::InclusiveInt(r, ..) => Box::new(r),
        }
    }
}

impl RangeCase {
    /// Returns `true` if the range contains no items.
    #[inline]
    #[must_use]
    pub fn is_empty(&self) -> bool {
        match self {
            Self::ExclusiveInt(r, ..) => r.is_empty(),
            Self::InclusiveInt(r, ..) => r.is_empty(),
        }
    }
    /// Size of the range.
    #[inline]
    #[must_use]
    pub fn len(&self) -> INT {
        match self {
            Self::ExclusiveInt(r, ..) if r.is_empty() => 0,
            Self::ExclusiveInt(r, ..) => r.end - r.start,
            Self::InclusiveInt(r, ..) if r.is_empty() => 0,
            Self::InclusiveInt(r, ..) => *r.end() - *r.start() + 1,
        }
    }
    /// Is the specified value within this range?
    #[inline]
    #[must_use]
    pub fn contains(&self, value: &Dynamic) -> bool {
        match value {
            Dynamic(Union::Int(v, ..)) => self.contains_int(*v),
            #[cfg(not(feature = "no_float"))]
            Dynamic(Union::Float(v, ..)) => self.contains_float(**v),
            #[cfg(feature = "decimal")]
            Dynamic(Union::Decimal(v, ..)) => self.contains_decimal(**v),
            _ => false,
        }
    }
    /// Is the specified number within this range?
    #[inline]
    #[must_use]
    pub fn contains_int(&self, n: INT) -> bool {
        match self {
            Self::ExclusiveInt(r, ..) => r.contains(&n),
            Self::InclusiveInt(r, ..) => r.contains(&n),
        }
    }
    /// Is the specified floating-point number within this range?
    #[cfg(not(feature = "no_float"))]
    #[inline]
    #[must_use]
    pub fn contains_float(&self, n: crate::FLOAT) -> bool {
        use crate::FLOAT;

        match self {
            Self::ExclusiveInt(r, ..) => ((r.start as FLOAT)..(r.end as FLOAT)).contains(&n),
            Self::InclusiveInt(r, ..) => ((*r.start() as FLOAT)..=(*r.end() as FLOAT)).contains(&n),
        }
    }
    /// Is the specified decimal number within this range?
    #[cfg(feature = "decimal")]
    #[inline]
    #[must_use]
    pub fn contains_decimal(&self, n: rust_decimal::Decimal) -> bool {
        use rust_decimal::Decimal;

        match self {
            Self::ExclusiveInt(r, ..) => {
                (Into::<Decimal>::into(r.start)..Into::<Decimal>::into(r.end)).contains(&n)
            }
            Self::InclusiveInt(r, ..) => {
                (Into::<Decimal>::into(*r.start())..=Into::<Decimal>::into(*r.end())).contains(&n)
            }
        }
    }
    /// Is the specified range inclusive?
    #[inline(always)]
    #[must_use]
    pub const fn is_inclusive(&self) -> bool {
        match self {
            Self::ExclusiveInt(..) => false,
            Self::InclusiveInt(..) => true,
        }
    }
    /// Get the index to the list of expressions.
    #[inline(always)]
    #[must_use]
    pub const fn index(&self) -> usize {
        match self {
            Self::ExclusiveInt(.., n) | Self::InclusiveInt(.., n) => *n,
        }
    }
    /// Set the index to the list of expressions.
    #[inline(always)]
    pub fn set_index(&mut self, index: usize) {
        match self {
            Self::ExclusiveInt(.., n) | Self::InclusiveInt(.., n) => *n = index,
        }
    }
}
