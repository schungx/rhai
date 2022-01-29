//! Module defining script expressions.

use super::{ASTNode, Ident, Stmt, StmtBlock};
use crate::engine::{KEYWORD_FN_PTR, OP_EXCLUSIVE_RANGE, OP_INCLUSIVE_RANGE};
use crate::func::hashing::ALT_ZERO_HASH;
use crate::tokenizer::Token;
use crate::types::dynamic::Union;
use crate::{calc_fn_hash, Dynamic, FnPtr, Identifier, ImmutableString, Position, StaticVec, INT};
#[cfg(feature = "no_std")]
use std::prelude::v1::*;
use std::{
    collections::BTreeMap,
    fmt,
    hash::Hash,
    iter::once,
    num::{NonZeroU8, NonZeroUsize},
};

#[cfg(not(feature = "no_float"))]
use std::str::FromStr;

#[cfg(not(feature = "no_float"))]
use num_traits::float::FloatCore as Float;

/// _(internals)_ A binary expression.
/// Exported under the `internals` feature only.
#[derive(Debug, Clone, Hash)]
pub struct BinaryExpr {
    /// LHS expression.
    pub lhs: Expr,
    /// RHS expression.
    pub rhs: Expr,
}

impl From<(Expr, Expr)> for BinaryExpr {
    #[inline(always)]
    fn from(value: (Expr, Expr)) -> Self {
        Self {
            lhs: value.0,
            rhs: value.1,
        }
    }
}

/// _(internals)_ A custom syntax expression.
/// Exported under the `internals` feature only.
#[derive(Debug, Clone, Hash)]
pub struct CustomExpr {
    /// List of keywords.
    pub inputs: StaticVec<Expr>,
    /// List of tokens actually parsed.
    pub tokens: StaticVec<Identifier>,
    /// Is the current [`Scope`][crate::Scope] possibly modified by this custom statement
    /// (e.g. introducing a new variable)?
    pub scope_may_be_changed: bool,
    /// Is this custom syntax self-terminated?
    pub self_terminated: bool,
}

impl CustomExpr {
    /// Is this custom syntax self-terminated (i.e. no need for a semicolon terminator)?
    ///
    /// A self-terminated custom syntax always ends in `$block$`, `}` or `;`
    #[must_use]
    #[inline(always)]
    pub const fn is_self_terminated(&self) -> bool {
        self.self_terminated
    }
}

/// _(internals)_ A set of function call hashes. Exported under the `internals` feature only.
///
/// Two separate hashes are pre-calculated because of the following patterns:
///
/// ```js
/// func(a, b, c);      // Native: func(a, b, c)        - 3 parameters
///                     // Script: func(a, b, c)        - 3 parameters
///
/// a.func(b, c);       // Native: func(&mut a, b, c)   - 3 parameters
///                     // Script: func(b, c)           - 2 parameters
/// ```
///
/// For normal function calls, the native hash equals the script hash.
///
/// For method-style calls, the script hash contains one fewer parameter.
///
/// Function call hashes are used in the following manner:
///
/// * First, the script hash is tried, which contains only the called function's name plus the
///   number of parameters.
///
/// * Next, the actual types of arguments are hashed and _combined_ with the native hash, which is
///   then used to search for a native function. In other words, a complete native function call
///   hash always contains the called function's name plus the types of the arguments.  This is due
///   to possible function overloading for different parameter types.
#[derive(Clone, Copy, Eq, PartialEq, Hash, Default)]
pub struct FnCallHashes {
    /// Pre-calculated hash for a script-defined function (zero if native functions only).
    #[cfg(not(feature = "no_function"))]
    pub script: u64,
    /// Pre-calculated hash for a native Rust function with no parameter types.
    pub native: u64,
}

impl fmt::Debug for FnCallHashes {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        #[cfg(not(feature = "no_function"))]
        if self.script != 0 {
            return if self.script == self.native {
                fmt::Debug::fmt(&self.native, f)
            } else {
                write!(f, "({}, {})", self.script, self.native)
            };
        }

        write!(f, "{} (native only)", self.native)
    }
}

impl From<u64> for FnCallHashes {
    #[inline(always)]
    fn from(hash: u64) -> Self {
        let hash = if hash == 0 { ALT_ZERO_HASH } else { hash };

        Self {
            #[cfg(not(feature = "no_function"))]
            script: hash,
            native: hash,
        }
    }
}

impl FnCallHashes {
    /// Create a [`FnCallHashes`] with only the native Rust hash.
    #[inline(always)]
    #[must_use]
    pub const fn from_native(hash: u64) -> Self {
        Self {
            #[cfg(not(feature = "no_function"))]
            script: 0,
            native: if hash == 0 { ALT_ZERO_HASH } else { hash },
        }
    }
    /// Create a [`FnCallHashes`] with both native Rust and script function hashes.
    #[inline(always)]
    #[must_use]
    pub const fn from_all(#[cfg(not(feature = "no_function"))] script: u64, native: u64) -> Self {
        Self {
            #[cfg(not(feature = "no_function"))]
            script: if script == 0 { ALT_ZERO_HASH } else { script },
            native: if native == 0 { ALT_ZERO_HASH } else { native },
        }
    }
    /// Is this [`FnCallHashes`] native Rust only?
    #[inline(always)]
    #[must_use]
    pub const fn is_native_only(&self) -> bool {
        #[cfg(not(feature = "no_function"))]
        return self.script == 0;

        #[cfg(feature = "no_function")]
        return true;
    }
}

/// _(internals)_ A function call.
/// Exported under the `internals` feature only.
#[derive(Debug, Clone, Default, Hash)]
pub struct FnCallExpr {
    /// Namespace of the function, if any.
    ///
    /// Not available under `no_module`.
    #[cfg(not(feature = "no_module"))]
    pub namespace: Option<crate::module::Namespace>,
    /// Function name.
    pub name: Identifier,
    /// Pre-calculated hashes.
    pub hashes: FnCallHashes,
    /// List of function call argument expressions.
    pub args: StaticVec<Expr>,
    /// List of function call arguments that are constants.
    ///
    /// Any arguments in `args` that is [`Expr::Stack`] indexes into this
    /// array to find the constant for use as its argument value.
    ///
    /// # Notes
    ///
    /// Constant arguments are very common in function calls, and keeping each constant in
    /// an [`Expr::DynamicConstant`] involves an additional allocation.  Keeping the constant
    /// values in an inlined array avoids these extra allocations.
    pub constants: StaticVec<Dynamic>,
    /// Does this function call capture the parent scope?
    pub capture_parent_scope: bool,
}

impl FnCallExpr {
    /// Does this function call contain a qualified namespace?
    ///
    /// Always `false` under `no_module`.
    #[inline(always)]
    #[must_use]
    pub const fn is_qualified(&self) -> bool {
        #[cfg(not(feature = "no_module"))]
        return self.namespace.is_some();
        #[cfg(feature = "no_module")]
        return false;
    }
    /// Convert this into an [`Expr::FnCall`].
    #[inline(always)]
    #[must_use]
    pub fn into_fn_call_expr(self, pos: Position) -> Expr {
        Expr::FnCall(self.into(), pos)
    }
}

/// A type that wraps a floating-point number and implements [`Hash`].
///
/// Not available under `no_float`.
#[cfg(not(feature = "no_float"))]
#[derive(Clone, Copy, PartialEq, PartialOrd)]
pub struct FloatWrapper<F>(F);

#[cfg(not(feature = "no_float"))]
impl Hash for FloatWrapper<crate::FLOAT> {
    #[inline(always)]
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.0.to_ne_bytes().hash(state);
    }
}

#[cfg(not(feature = "no_float"))]
impl<F: Float> AsRef<F> for FloatWrapper<F> {
    #[inline(always)]
    fn as_ref(&self) -> &F {
        &self.0
    }
}

#[cfg(not(feature = "no_float"))]
impl<F: Float> AsMut<F> for FloatWrapper<F> {
    #[inline(always)]
    fn as_mut(&mut self) -> &mut F {
        &mut self.0
    }
}

#[cfg(not(feature = "no_float"))]
impl<F: Float> std::ops::Deref for FloatWrapper<F> {
    type Target = F;

    #[inline(always)]
    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

#[cfg(not(feature = "no_float"))]
impl<F: Float> std::ops::DerefMut for FloatWrapper<F> {
    #[inline(always)]
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.0
    }
}

#[cfg(not(feature = "no_float"))]
impl<F: Float + fmt::Debug> fmt::Debug for FloatWrapper<F> {
    #[inline(always)]
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::Debug::fmt(&self.0, f)
    }
}

#[cfg(not(feature = "no_float"))]
impl<F: Float + fmt::Display + fmt::LowerExp + From<f32>> fmt::Display for FloatWrapper<F> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let abs = self.0.abs();
        if abs.is_zero() {
            f.write_str("0.0")
        } else if abs > Self::MAX_NATURAL_FLOAT_FOR_DISPLAY.into()
            || abs < Self::MIN_NATURAL_FLOAT_FOR_DISPLAY.into()
        {
            write!(f, "{:e}", self.0)
        } else {
            fmt::Display::fmt(&self.0, f)?;
            if abs.fract().is_zero() {
                f.write_str(".0")?;
            }
            Ok(())
        }
    }
}

#[cfg(not(feature = "no_float"))]
impl<F: Float> From<F> for FloatWrapper<F> {
    #[inline(always)]
    fn from(value: F) -> Self {
        Self::new(value)
    }
}

#[cfg(not(feature = "no_float"))]
impl<F: Float + FromStr> FromStr for FloatWrapper<F> {
    type Err = <F as FromStr>::Err;

    #[inline]
    fn from_str(s: &str) -> Result<Self, Self::Err> {
        F::from_str(s).map(Into::into)
    }
}

#[cfg(not(feature = "no_float"))]
impl<F: Float> FloatWrapper<F> {
    /// Maximum floating-point number for natural display before switching to scientific notation.
    pub const MAX_NATURAL_FLOAT_FOR_DISPLAY: f32 = 10000000000000.0;

    /// Minimum floating-point number for natural display before switching to scientific notation.
    pub const MIN_NATURAL_FLOAT_FOR_DISPLAY: f32 = 0.0000000000001;

    /// Create a new [`FloatWrapper`].
    #[inline(always)]
    #[must_use]
    pub fn new(value: F) -> Self {
        Self(value)
    }
}

#[cfg(not(feature = "no_float"))]
impl FloatWrapper<crate::FLOAT> {
    /// Create a new [`FloatWrapper`].
    #[inline(always)]
    #[must_use]
    pub const fn new_const(value: crate::FLOAT) -> Self {
        Self(value)
    }
}

/// _(internals)_ An expression sub-tree.
/// Exported under the `internals` feature only.
#[derive(Clone, Hash)]
pub enum Expr {
    /// Dynamic constant.
    ///
    /// Used to hold complex constants such as [`Array`][crate::Array] or [`Map`][crate::Map] for quick cloning.
    /// Primitive data types should use the appropriate variants to avoid an allocation.
    DynamicConstant(Box<Dynamic>, Position),
    /// Boolean constant.
    BoolConstant(bool, Position),
    /// Integer constant.
    IntegerConstant(INT, Position),
    /// Floating-point constant.
    ///
    /// Not available under `no_float`.
    #[cfg(not(feature = "no_float"))]
    FloatConstant(FloatWrapper<crate::FLOAT>, Position),
    /// Character constant.
    CharConstant(char, Position),
    /// [String][ImmutableString] constant.
    StringConstant(ImmutableString, Position),
    /// An interpolated [string][ImmutableString].
    InterpolatedString(Box<StaticVec<Expr>>, Position),
    /// [ expr, ... ]
    Array(Box<StaticVec<Expr>>, Position),
    /// #{ name:expr, ... }
    Map(
        Box<(StaticVec<(Ident, Expr)>, BTreeMap<Identifier, Dynamic>)>,
        Position,
    ),
    /// ()
    Unit(Position),
    /// Variable access - optional short index, position, (optional index, optional (hash, modules), variable name)
    ///
    /// The short index is [`u8`] which is used when the index is <= 255, which should be the vast
    /// majority of cases (unless there are more than 255 variables defined!).
    /// This is to avoid reading a pointer redirection during each variable access.
    Variable(
        Option<NonZeroU8>,
        Position,
        #[cfg(not(feature = "no_module"))]
        Box<(
            Option<NonZeroUsize>,
            Option<(crate::module::Namespace, u64)>,
            Identifier,
        )>,
        #[cfg(feature = "no_module")] Box<(Option<NonZeroUsize>, (), Identifier)>,
    ),
    /// Property access - ((getter, hash), (setter, hash), prop)
    Property(
        Box<((Identifier, u64), (Identifier, u64), ImmutableString)>,
        Position,
    ),
    /// Stack slot for function calls.  See [`FnCallExpr`] for more details.
    ///
    /// This variant does not map to any language structure.  It is used in function calls with
    /// constant arguments where the `usize` number indexes into an array containing a list of
    /// constant arguments for the function call.
    Stack(usize, Position),
    /// { [statement][Stmt] ... }
    Stmt(Box<StmtBlock>),
    /// func `(` expr `,` ... `)`
    FnCall(Box<FnCallExpr>, Position),
    /// lhs `.` rhs - boolean variable is a dummy
    Dot(Box<BinaryExpr>, bool, Position),
    /// lhs `[` rhs `]` - boolean indicates whether the dotting/indexing chain stops
    Index(Box<BinaryExpr>, bool, Position),
    /// lhs `&&` rhs
    And(Box<BinaryExpr>, Position),
    /// lhs `||` rhs
    Or(Box<BinaryExpr>, Position),
    /// Custom syntax
    Custom(Box<CustomExpr>, Position),
}

impl Default for Expr {
    #[inline(always)]
    fn default() -> Self {
        Self::Unit(Position::NONE)
    }
}

impl fmt::Debug for Expr {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let mut display_pos = self.position();

        match self {
            Self::DynamicConstant(value, _) => write!(f, "{:?}", value),
            Self::BoolConstant(value, _) => write!(f, "{:?}", value),
            Self::IntegerConstant(value, _) => write!(f, "{:?}", value),
            #[cfg(not(feature = "no_float"))]
            Self::FloatConstant(value, _) => write!(f, "{:?}", value),
            Self::CharConstant(value, _) => write!(f, "{:?}", value),
            Self::StringConstant(value, _) => write!(f, "{:?}", value),
            Self::Unit(_) => f.write_str("()"),

            Self::InterpolatedString(x, _) => {
                f.write_str("InterpolatedString")?;
                return f.debug_list().entries(x.iter()).finish();
            }
            Self::Array(x, _) => {
                f.write_str("Array")?;
                f.debug_list().entries(x.iter()).finish()
            }
            Self::Map(x, _) => {
                f.write_str("Map")?;
                f.debug_map()
                    .entries(x.0.iter().map(|(k, v)| (k, v)))
                    .finish()
            }
            Self::Variable(i, _, x) => {
                f.write_str("Variable(")?;

                #[cfg(not(feature = "no_module"))]
                if let Some((_, ref namespace)) = x.1 {
                    write!(f, "{}{}", namespace, Token::DoubleColon.literal_syntax())?
                }
                f.write_str(&x.2)?;
                if let Some(n) = i.map_or_else(|| x.0, |n| NonZeroUsize::new(n.get() as usize)) {
                    write!(f, " #{}", n)?
                }
                f.write_str(")")
            }
            Self::Property(x, _) => write!(f, "Property({})", x.2),
            Self::Stack(x, _) => write!(f, "StackSlot({})", x),
            Self::Stmt(x) => {
                f.write_str("ExprStmtBlock")?;
                f.debug_list().entries(x.iter()).finish()
            }
            Self::FnCall(x, _) => {
                let mut ff = f.debug_struct("FnCall");
                #[cfg(not(feature = "no_module"))]
                x.namespace.as_ref().map(|ns| ff.field("namespace", ns));
                ff.field("name", &x.name)
                    .field("hash", &x.hashes)
                    .field("args", &x.args);
                if !x.constants.is_empty() {
                    ff.field("constants", &x.constants);
                }
                if x.capture_parent_scope {
                    ff.field("capture_parent_scope", &x.capture_parent_scope);
                }
                ff.finish()
            }
            Self::Index(x, term, pos) => {
                display_pos = *pos;

                f.debug_struct("Index")
                    .field("lhs", &x.lhs)
                    .field("rhs", &x.rhs)
                    .field("terminate", term)
                    .finish()
            }
            Self::Dot(x, _, pos) | Self::And(x, pos) | Self::Or(x, pos) => {
                let op_name = match self {
                    Self::Dot(_, _, _) => "Dot",
                    Self::And(_, _) => "And",
                    Self::Or(_, _) => "Or",
                    expr => unreachable!(
                        "Self::Dot or Self::And or Self::Or expected but gets {:?}",
                        expr
                    ),
                };

                display_pos = *pos;

                f.debug_struct(op_name)
                    .field("lhs", &x.lhs)
                    .field("rhs", &x.rhs)
                    .finish()
            }
            Self::Custom(x, _) => f.debug_tuple("Custom").field(x).finish(),
        }?;

        display_pos.debug_print(f)
    }
}

impl Expr {
    /// Get the [`Dynamic`] value of a literal constant expression.
    ///
    /// Returns [`None`] if the expression is not a literal constant.
    #[inline]
    #[must_use]
    pub fn get_literal_value(&self) -> Option<Dynamic> {
        Some(match self {
            Self::DynamicConstant(x, _) => x.as_ref().clone(),
            Self::IntegerConstant(x, _) => (*x).into(),
            #[cfg(not(feature = "no_float"))]
            Self::FloatConstant(x, _) => (*x).into(),
            Self::CharConstant(x, _) => (*x).into(),
            Self::StringConstant(x, _) => x.clone().into(),
            Self::BoolConstant(x, _) => (*x).into(),
            Self::Unit(_) => Dynamic::UNIT,

            #[cfg(not(feature = "no_index"))]
            Self::Array(x, _) if self.is_constant() => {
                let mut arr = crate::Array::with_capacity(x.len());
                arr.extend(x.iter().map(|v| v.get_literal_value().unwrap()));
                Dynamic::from_array(arr)
            }

            #[cfg(not(feature = "no_object"))]
            Self::Map(x, _) if self.is_constant() => {
                Dynamic::from_map(x.0.iter().fold(x.1.clone(), |mut map, (k, v)| {
                    let value_ref = map.get_mut(k.name.as_str()).unwrap();
                    *value_ref = v.get_literal_value().unwrap();
                    map
                }))
            }

            // Fn
            Self::FnCall(ref x, _)
                if !x.is_qualified() && x.args.len() == 1 && x.name == KEYWORD_FN_PTR =>
            {
                if let Expr::StringConstant(ref s, _) = x.args[0] {
                    if let Ok(fn_ptr) = FnPtr::new(s) {
                        fn_ptr.into()
                    } else {
                        return None;
                    }
                } else {
                    return None;
                }
            }

            // Binary operators
            Self::FnCall(x, _) if !x.is_qualified() && x.args.len() == 2 => match x.name.as_str() {
                // x..y
                OP_EXCLUSIVE_RANGE => {
                    if let Expr::IntegerConstant(ref start, _) = x.args[0] {
                        if let Expr::IntegerConstant(ref end, _) = x.args[1] {
                            (*start..*end).into()
                        } else {
                            return None;
                        }
                    } else {
                        return None;
                    }
                }
                // x..=y
                OP_INCLUSIVE_RANGE => {
                    if let Expr::IntegerConstant(ref start, _) = x.args[0] {
                        if let Expr::IntegerConstant(ref end, _) = x.args[1] {
                            (*start..=*end).into()
                        } else {
                            return None;
                        }
                    } else {
                        return None;
                    }
                }
                _ => return None,
            },

            _ => return None,
        })
    }
    /// Create an [`Expr`] from a [`Dynamic`] value.
    #[inline]
    #[must_use]
    pub fn from_dynamic(value: Dynamic, pos: Position) -> Self {
        match value.0 {
            Union::Unit(_, _, _) => Self::Unit(pos),
            Union::Bool(b, _, _) => Self::BoolConstant(b, pos),
            Union::Str(s, _, _) => Self::StringConstant(s, pos),
            Union::Char(c, _, _) => Self::CharConstant(c, pos),
            Union::Int(i, _, _) => Self::IntegerConstant(i, pos),

            #[cfg(feature = "decimal")]
            Union::Decimal(value, _, _) => Self::DynamicConstant(Box::new((*value).into()), pos),

            #[cfg(not(feature = "no_float"))]
            Union::Float(f, _, _) => Self::FloatConstant(f, pos),

            #[cfg(not(feature = "no_index"))]
            Union::Array(a, _, _) => Self::DynamicConstant(Box::new((*a).into()), pos),

            #[cfg(not(feature = "no_object"))]
            Union::Map(m, _, _) => Self::DynamicConstant(Box::new((*m).into()), pos),

            Union::FnPtr(f, _, _) if !f.is_curried() => Self::FnCall(
                FnCallExpr {
                    #[cfg(not(feature = "no_module"))]
                    namespace: None,
                    name: KEYWORD_FN_PTR.into(),
                    hashes: calc_fn_hash(f.fn_name(), 1).into(),
                    args: once(Self::Stack(0, pos)).collect(),
                    constants: once(f.fn_name().into()).collect(),
                    capture_parent_scope: false,
                }
                .into(),
                pos,
            ),

            _ => Self::DynamicConstant(value.into(), pos),
        }
    }
    /// Is the expression a simple variable access?
    ///
    /// `non_qualified` is ignored under `no_module`.
    #[inline]
    #[must_use]
    pub(crate) const fn is_variable_access(&self, non_qualified: bool) -> bool {
        let _non_qualified = non_qualified;

        match self {
            #[cfg(not(feature = "no_module"))]
            Self::Variable(_, _, x) if _non_qualified && x.1.is_some() => false,
            Self::Variable(_, _, _) => true,
            _ => false,
        }
    }
    /// Return the variable name if the expression a simple variable access.
    ///
    /// `non_qualified` is ignored under `no_module`.
    #[inline]
    #[must_use]
    pub(crate) fn get_variable_name(&self, non_qualified: bool) -> Option<&str> {
        let _non_qualified = non_qualified;

        match self {
            #[cfg(not(feature = "no_module"))]
            Self::Variable(_, _, x) if _non_qualified && x.1.is_some() => None,
            Self::Variable(_, _, x) => Some(x.2.as_str()),
            _ => None,
        }
    }
    /// Get the [position][Position] of the expression.
    #[inline]
    #[must_use]
    pub const fn position(&self) -> Position {
        match self {
            #[cfg(not(feature = "no_float"))]
            Self::FloatConstant(_, pos) => *pos,

            Self::DynamicConstant(_, pos)
            | Self::BoolConstant(_, pos)
            | Self::IntegerConstant(_, pos)
            | Self::CharConstant(_, pos)
            | Self::Unit(pos)
            | Self::StringConstant(_, pos)
            | Self::Array(_, pos)
            | Self::Map(_, pos)
            | Self::Variable(_, pos, _)
            | Self::Stack(_, pos)
            | Self::FnCall(_, pos)
            | Self::Index(_, _, pos)
            | Self::Custom(_, pos)
            | Self::InterpolatedString(_, pos)
            | Self::Property(_, pos) => *pos,

            Self::Stmt(x) => x.position(),

            Self::And(x, _) | Self::Or(x, _) | Self::Dot(x, _, _) => x.lhs.position(),
        }
    }
    /// Override the [position][Position] of the expression.
    #[inline]
    pub fn set_position(&mut self, new_pos: Position) -> &mut Self {
        match self {
            #[cfg(not(feature = "no_float"))]
            Self::FloatConstant(_, pos) => *pos = new_pos,

            Self::DynamicConstant(_, pos)
            | Self::BoolConstant(_, pos)
            | Self::IntegerConstant(_, pos)
            | Self::CharConstant(_, pos)
            | Self::Unit(pos)
            | Self::StringConstant(_, pos)
            | Self::Array(_, pos)
            | Self::Map(_, pos)
            | Self::And(_, pos)
            | Self::Or(_, pos)
            | Self::Dot(_, _, pos)
            | Self::Index(_, _, pos)
            | Self::Variable(_, pos, _)
            | Self::Stack(_, pos)
            | Self::FnCall(_, pos)
            | Self::Custom(_, pos)
            | Self::InterpolatedString(_, pos)
            | Self::Property(_, pos) => *pos = new_pos,

            Self::Stmt(x) => x.set_position(new_pos),
        }

        self
    }
    /// Is the expression pure?
    ///
    /// A pure expression has no side effects.
    #[inline]
    #[must_use]
    pub fn is_pure(&self) -> bool {
        match self {
            Self::InterpolatedString(x, _) | Self::Array(x, _) => x.iter().all(Self::is_pure),

            Self::Map(x, _) => x.0.iter().map(|(_, v)| v).all(Self::is_pure),

            Self::And(x, _) | Self::Or(x, _) => x.lhs.is_pure() && x.rhs.is_pure(),

            Self::Stmt(x) => x.iter().all(Stmt::is_pure),

            Self::Variable(_, _, _) | Self::Stack(_, _) => true,

            _ => self.is_constant(),
        }
    }
    /// Is the expression the unit `()` literal?
    #[inline(always)]
    #[must_use]
    pub const fn is_unit(&self) -> bool {
        matches!(self, Self::Unit(_))
    }
    /// Is the expression a constant?
    #[inline]
    #[must_use]
    pub fn is_constant(&self) -> bool {
        match self {
            #[cfg(not(feature = "no_float"))]
            Self::FloatConstant(_, _) => true,

            Self::DynamicConstant(_, _)
            | Self::BoolConstant(_, _)
            | Self::IntegerConstant(_, _)
            | Self::CharConstant(_, _)
            | Self::StringConstant(_, _)
            | Self::Unit(_)
            | Self::Stack(_, _) => true,

            Self::InterpolatedString(x, _) | Self::Array(x, _) => x.iter().all(Self::is_constant),

            Self::Map(x, _) => x.0.iter().map(|(_, expr)| expr).all(Self::is_constant),

            _ => false,
        }
    }
    /// Is a particular [token][Token] allowed as a postfix operator to this expression?
    #[inline]
    #[must_use]
    pub const fn is_valid_postfix(&self, token: &Token) -> bool {
        match token {
            #[cfg(not(feature = "no_object"))]
            Token::Period => return true,
            _ => (),
        }

        match self {
            #[cfg(not(feature = "no_float"))]
            Self::FloatConstant(_, _) => false,

            Self::DynamicConstant(_, _)
            | Self::BoolConstant(_, _)
            | Self::CharConstant(_, _)
            | Self::And(_, _)
            | Self::Or(_, _)
            | Self::Unit(_) => false,

            Self::IntegerConstant(_, _)
            | Self::StringConstant(_, _)
            | Self::InterpolatedString(_, _)
            | Self::FnCall(_, _)
            | Self::Stmt(_)
            | Self::Dot(_, _, _)
            | Self::Index(_, _, _)
            | Self::Array(_, _)
            | Self::Map(_, _)
            | Self::Custom(_, _) => match token {
                #[cfg(not(feature = "no_index"))]
                Token::LeftBracket => true,
                _ => false,
            },

            Self::Variable(_, _, _) => match token {
                #[cfg(not(feature = "no_index"))]
                Token::LeftBracket => true,
                Token::LeftParen => true,
                Token::Bang => true,
                Token::DoubleColon => true,
                _ => false,
            },

            Self::Property(_, _) => match token {
                #[cfg(not(feature = "no_index"))]
                Token::LeftBracket => true,
                Token::LeftParen => true,
                _ => false,
            },

            Self::Stack(_, _) => false,
        }
    }
    /// Recursively walk this expression.
    /// Return `false` from the callback to terminate the walk.
    pub fn walk<'a>(
        &'a self,
        path: &mut Vec<ASTNode<'a>>,
        on_node: &mut impl FnMut(&[ASTNode]) -> bool,
    ) -> bool {
        // Push the current node onto the path
        path.push(self.into());

        if !on_node(path) {
            return false;
        }

        match self {
            Self::Stmt(x) => {
                for s in x.iter() {
                    if !s.walk(path, on_node) {
                        return false;
                    }
                }
            }
            Self::InterpolatedString(x, _) | Self::Array(x, _) => {
                for e in x.as_ref() {
                    if !e.walk(path, on_node) {
                        return false;
                    }
                }
            }
            Self::Map(x, _) => {
                for (_, e) in &x.0 {
                    if !e.walk(path, on_node) {
                        return false;
                    }
                }
            }
            Self::Index(x, _, _) | Self::Dot(x, _, _) | Expr::And(x, _) | Expr::Or(x, _) => {
                if !x.lhs.walk(path, on_node) {
                    return false;
                }
                if !x.rhs.walk(path, on_node) {
                    return false;
                }
            }
            Self::FnCall(x, _) => {
                for e in &x.args {
                    if !e.walk(path, on_node) {
                        return false;
                    }
                }
            }
            Self::Custom(x, _) => {
                for e in &x.inputs {
                    if !e.walk(path, on_node) {
                        return false;
                    }
                }
            }
            _ => (),
        }

        path.pop().unwrap();

        true
    }
}
