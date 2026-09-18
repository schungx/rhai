use crate::grain::bytecode::disassemble;
use crate::grain::bytecode::Op;

/// One body of code: the top-level [`Program`], or one script
/// [`Function`][crate::grain::Function].
///
/// [`Program`]: crate::grain::Program
///
/// ## Metadata Only
///
/// Every chunk in a [`Program`] shares a single instruction buffer,
/// concatenated in order, and a [`Chunk`] names its span of it.
///
/// That keeps one position table and one instruction address across the whole
/// [`Program`], so a device reporting where it failed reports one number.
///
/// ## Stack Usage
///
/// `max_stack` exists so the [VM][crate::grain::Vm] can size its operand stack
/// rather than growing it.
///
/// The compiler emits an upper bound it can compute without a depth walk —
/// one per instruction — and then replaces it with the high water the verifier
/// actually measured.
///
/// On a device that difference is the whole reservation: a [`Chunk`] of 25
/// instructions rarely stacks more than three values.
#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub struct Chunk {
    entry: u32,
    end: u32,
    max_stack: u16,
}

impl Chunk {
    #[inline(always)]
    #[must_use]
    pub(crate) fn new(entry: u32, end: u32, max_stack: u16) -> Self {
        Self {
            entry,
            end,
            max_stack,
        }
    }

    /// Where execution starts, as an offset into the
    /// [`Program`][crate::grain::Program]'s code.
    #[inline(always)]
    #[must_use]
    pub fn entry(&self) -> u32 {
        self.entry
    }

    /// One past the last byte of this chunk.
    #[inline(always)]
    #[must_use]
    pub fn end(&self) -> u32 {
        self.end
    }

    /// The deepest the operand stack gets, as proven by the verifier.
    #[inline(always)]
    #[must_use]
    pub fn max_stack(&self) -> u16 {
        self.max_stack
    }

    #[cfg(not(feature = "no_ast"))]
    pub(crate) fn set_max_stack(&mut self, max_stack: u16) {
        self.max_stack = max_stack;
    }

    /// This chunk's slice of a [`Program`][crate::grain::Program]'s code.
    #[inline]
    #[must_use]
    pub fn body<'c>(&self, code: &'c [u8]) -> &'c [u8] {
        code.get(self.entry as usize..self.end as usize)
            .unwrap_or_default()
    }

    /// _(internals)_ The instructions, paired with their addresses in the
    /// [`Program`][crate::grain::Program].
    /// Exported under the `internals` feature only.
    ///
    /// ## Note
    ///
    /// For reading, not for running — reconstructing an [`Op`] is exactly
    /// the work the byte encoding exists to avoid.
    #[crate::expose_under_internals]
    fn ops<'c>(&self, code: &'c [u8]) -> impl Iterator<Item = (usize, Op)> + 'c {
        let entry = self.entry as usize;
        disassemble(self.body(code)).map(move |(at, op)| (at + entry, op))
    }
}
