//! A simple bloom filter implementation for `u64` hash values only.

use std::ops::{Add, AddAssign};
#[cfg(feature = "no_std")]
use std::prelude::v1::*;

/// _(internals)_ A simple bloom filter implementation for `u64` hash values only - i.e. all 64 bits are assumed
/// to be relatively random.
/// Exported under the `internals` feature only.
///
/// For this reason, the implementation is simplistic - it just looks at the least significant byte
/// of the `u64` hash value and sets the corresponding bit in a 256-long bit vector.
///
/// The rationale of this type is to avoid pulling in another dependent crate.
///
/// `SIZE` parameter is the number of slots in the bloom filter, expressed in 8-bit bytes.
#[derive(Debug, Clone, Eq, PartialEq, Hash)]
pub struct BloomFilterU64<const SIZE: usize>([u8; SIZE]);

impl<const SIZE: usize> Default for BloomFilterU64<SIZE> {
    #[inline(always)]
    fn default() -> Self {
        Self::new()
    }
}

impl<const SIZE: usize> BloomFilterU64<SIZE> {
    /// Get the bit position of a `u64` hash value.
    #[inline(always)]
    #[must_use]
    const fn calc_hash(value: u64) -> (usize, u8) {
        (((value / 8) % (SIZE as u64)) as usize, 0x01 << (value % 8))
    }
    /// Create a new [`BloomFilterU64`].
    #[inline(always)]
    #[must_use]
    pub const fn new() -> Self {
        Self([0; SIZE])
    }
    /// Is this [`BloomFilterU64`] empty?
    #[inline(always)]
    #[must_use]
    pub fn is_empty(&self) -> bool {
        self.0 == [0; SIZE]
    }
    /// Clear this [`BloomFilterU64`].
    #[inline(always)]
    pub fn clear(&mut self) -> &mut Self {
        self.0 = [0; SIZE];
        self
    }
    /// Mark a `u64` hash into this [`BloomFilterU64`].
    #[inline]
    pub fn mark(&mut self, hash: u64) -> &mut Self {
        let (offset, mask) = Self::calc_hash(hash);
        self.0[offset] |= mask;
        self
    }
    /// Is a `u64` hash definitely absent from this [`BloomFilterU64`]?
    #[inline]
    #[must_use]
    pub const fn is_absent(&self, hash: u64) -> bool {
        let (offset, mask) = Self::calc_hash(hash);
        (self.0[offset] & mask) == 0
    }
    /// If a `u64` hash is absent from this [`BloomFilterU64`], return `true` and then mark it.
    /// Otherwise return `false`.
    #[inline]
    #[must_use]
    pub fn is_absent_and_set(&mut self, hash: u64) -> bool {
        let (offset, mask) = Self::calc_hash(hash);
        let result = (self.0[offset] & mask) == 0;
        self.0[offset] |= mask;
        result
    }
}

impl<const SIZE: usize> Add for &BloomFilterU64<SIZE> {
    type Output = BloomFilterU64<SIZE>;

    #[inline]
    fn add(self, rhs: Self) -> Self::Output {
        let mut buf = [0; SIZE];

        self.0
            .iter()
            .zip(rhs.0.iter())
            .map(|(&a, &b)| a | b)
            .zip(buf.iter_mut())
            .for_each(|(v, x)| *x = v);

        BloomFilterU64(buf)
    }
}

impl<const SIZE: usize> Add<BloomFilterU64<SIZE>> for &BloomFilterU64<SIZE> {
    type Output = BloomFilterU64<SIZE>;

    #[inline(always)]
    fn add(self, rhs: BloomFilterU64<SIZE>) -> Self::Output {
        self + &rhs
    }
}

impl<const SIZE: usize> AddAssign<Self> for BloomFilterU64<SIZE> {
    #[inline(always)]
    fn add_assign(&mut self, rhs: Self) {
        *self += &rhs;
    }
}

impl<const SIZE: usize> AddAssign<&Self> for BloomFilterU64<SIZE> {
    #[inline]
    fn add_assign(&mut self, rhs: &Self) {
        self.0
            .iter_mut()
            .zip(rhs.0.iter())
            .for_each(|(x, &v)| *x |= v);
    }
}
