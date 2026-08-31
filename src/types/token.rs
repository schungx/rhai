//! Rhai language tokens.
use crate::{Identifier, LexError, SmartString, INT};
#[cfg(feature = "no_std")]
use std::prelude::v1::*;
use std::{char, fmt};

/// _(internals)_ A Rhai language token.
/// Exported under the `internals` feature only.
#[derive(Debug, PartialEq, Clone, Hash)]
#[non_exhaustive]
pub enum Token {
    /// An `INT` constant.
    IntegerConstant(INT),
    /// A `FLOAT` constant, including its text representation.
    ///
    /// Reserved under the `no_float` feature.
    #[cfg(not(feature = "no_float"))]
    FloatConstant(Box<(super::FloatWrapper<crate::FLOAT>, Identifier)>),
    /// A [`Decimal`][rust_decimal::Decimal] constant.
    ///
    /// Requires the `decimal` feature, including its text representation.
    #[cfg(feature = "decimal")]
    DecimalConstant(Box<(rust_decimal::Decimal, Identifier)>),
    /// An identifier.
    Identifier(Box<Identifier>),
    /// A character constant.
    CharConstant(char),
    /// A string constant.
    StringConstant(Box<SmartString>),
    /// An interpolated string.
    InterpolatedString(Box<SmartString>),
    /// `{`
    LeftBrace,
    /// `}`
    RightBrace,
    /// `(`
    LeftParen,
    /// `)`
    RightParen,
    /// `[`
    LeftBracket,
    /// `]`
    RightBracket,
    /// `()`
    Unit,
    /// `+`
    Plus,
    /// `+` (unary)
    UnaryPlus,
    /// `-`
    Minus,
    /// `-` (unary)
    UnaryMinus,
    /// `*`
    Multiply,
    /// `/`
    Divide,
    /// `%`
    Modulo,
    /// `**`
    PowerOf,
    /// `<<`
    LeftShift,
    /// `>>`
    RightShift,
    /// `;`
    SemiColon,
    /// `:`
    Colon,
    /// `::`
    DoubleColon,
    /// `=>`
    DoubleArrow,
    /// `_`
    Underscore,
    /// `,`
    Comma,
    /// `.`
    Period,
    /// `?.`
    ///
    /// Reserved under the `no_object` feature.
    #[cfg(not(feature = "no_object"))]
    Elvis,
    /// `??`
    DoubleQuestion,
    /// `?[`
    ///
    /// Reserved under the `no_object` feature.
    #[cfg(not(feature = "no_index"))]
    QuestionBracket,
    /// `..`
    ExclusiveRange,
    /// `..=`
    InclusiveRange,
    /// `#{`
    MapStart,
    /// `=`
    Equals,
    /// `true`
    True,
    /// `false`
    False,
    /// `let`
    Let,
    /// `const`
    Const,
    /// `if`
    If,
    /// `else`
    Else,
    /// `switch`
    Switch,
    /// `do`
    Do,
    /// `while`
    While,
    /// `until`
    Until,
    /// `loop`
    Loop,
    /// `for`
    For,
    /// `in`
    In,
    /// `!in`
    NotIn,
    /// `<`
    LessThan,
    /// `>`
    GreaterThan,
    /// `<=`
    LessThanEqualsTo,
    /// `>=`
    GreaterThanEqualsTo,
    /// `==`
    EqualsTo,
    /// `!=`
    NotEqualsTo,
    /// `!`
    Bang,
    /// `|`
    Pipe,
    /// `||`
    Or,
    /// `^`
    XOr,
    /// `&`
    Ampersand,
    /// `&&`
    And,
    /// `fn`
    ///
    /// Reserved under the `no_function` feature.
    #[cfg(not(feature = "no_function"))]
    Fn,
    /// `continue`
    Continue,
    /// `break`
    Break,
    /// `return`
    Return,
    /// `throw`
    Throw,
    /// `try`
    Try,
    /// `catch`
    Catch,
    /// `+=`
    PlusAssign,
    /// `-=`
    MinusAssign,
    /// `*=`
    MultiplyAssign,
    /// `/=`
    DivideAssign,
    /// `<<=`
    LeftShiftAssign,
    /// `>>=`
    RightShiftAssign,
    /// `&=`
    AndAssign,
    /// `|=`
    OrAssign,
    /// `^=`
    XOrAssign,
    /// `%=`
    ModuloAssign,
    /// `**=`
    PowerOfAssign,
    /// `private`
    ///
    /// Reserved under the `no_function` feature.
    #[cfg(not(feature = "no_function"))]
    Private,
    /// `import`
    ///
    /// Reserved under the `no_module` feature.
    #[cfg(not(feature = "no_module"))]
    Import,
    /// `export`
    ///
    /// Reserved under the `no_module` feature.
    #[cfg(not(feature = "no_module"))]
    Export,
    /// `as`
    ///
    /// Reserved under the `no_module` feature.
    #[cfg(not(feature = "no_module"))]
    As,
    /// A lexer error.
    LexError(Box<LexError>),
    /// A comment block.
    Comment(Box<String>),
    /// A reserved symbol.
    Reserved(Box<Identifier>),
    /// A custom keyword.
    ///
    /// Not available under `no_custom_syntax`.
    #[cfg(not(feature = "no_custom_syntax"))]
    Custom(Box<Identifier>),
    /// A single character from the input stream, unprocessed.
    ///
    /// Not available under `no_custom_syntax`.
    #[cfg(not(feature = "no_custom_syntax"))]
    UnprocessedRawChar(char),
    /// End of the input stream.
    /// Used as a placeholder for the end of input.
    EOF,
}

impl fmt::Display for Token {
    #[inline(always)]
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        #[allow(clippy::enum_glob_use)]
        use Token::*;

        match self {
            IntegerConstant(i) => write!(f, "{i}"),
            #[cfg(not(feature = "no_float"))]
            FloatConstant(v) => write!(f, "{}", v.0),
            #[cfg(feature = "decimal")]
            DecimalConstant(d) => write!(f, "{}", d.0),
            StringConstant(s) => write!(f, r#""{s}""#),
            InterpolatedString(..) => f.write_str("string"),
            CharConstant(c) => write!(f, "{c}"),
            Identifier(s) => f.write_str(s),
            Reserved(s) => f.write_str(s),
            #[cfg(not(feature = "no_custom_syntax"))]
            Custom(s) => f.write_str(s),
            #[cfg(not(feature = "no_custom_syntax"))]
            UnprocessedRawChar(c) => write!(f, "{c}"),
            LexError(err) => write!(f, "{err}"),
            Comment(s) => f.write_str(s),

            EOF => f.write_str("{EOF}"),

            token => f.write_str(token.literal_syntax()),
        }
    }
}

// Table-driven keyword recognizer generated by GNU `gperf` on the file `tools/keywords.txt`.
//
// When adding new keywords, make sure to update `tools/keywords.txt` and re-generate this.

const MIN_KEYWORD_LEN: usize = 1;
const MAX_KEYWORD_LEN: usize = 8;
const MIN_KEYWORD_HASH_VALUE: usize = 1;
const MAX_KEYWORD_HASH_VALUE: usize = 152;

static KEYWORD_ASSOC_VALUES: [u8; 257] = [
    153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
    153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 115, 153, 100, 153, 110,
    105, 40, 80, 2, 20, 25, 125, 95, 15, 40, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 55,
    35, 10, 5, 0, 30, 110, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
    153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 120, 105, 100, 85, 90, 153, 125, 5,
    0, 125, 35, 10, 100, 153, 20, 0, 153, 10, 0, 45, 55, 0, 153, 50, 55, 5, 0, 153, 0, 0, 35, 153,
    45, 50, 30, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
    153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
    153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
    153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
    153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
    153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
    153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153, 153,
    153,
];
static KEYWORDS_LIST: [(&str, Token); 153] = [
    ("", Token::EOF),
    (">", Token::GreaterThan),
    (">=", Token::GreaterThanEqualsTo),
    (")", Token::RightParen),
    ("", Token::EOF),
    ("const", Token::Const),
    ("=", Token::Equals),
    ("==", Token::EqualsTo),
    ("continue", Token::Continue),
    ("", Token::EOF),
    ("catch", Token::Catch),
    ("<", Token::LessThan),
    ("<=", Token::LessThanEqualsTo),
    ("for", Token::For),
    ("loop", Token::Loop),
    ("", Token::EOF),
    (".", Token::Period),
    ("<<", Token::LeftShift),
    ("<<=", Token::LeftShiftAssign),
    ("", Token::EOF),
    ("false", Token::False),
    ("*", Token::Multiply),
    ("*=", Token::MultiplyAssign),
    ("let", Token::Let),
    ("", Token::EOF),
    ("while", Token::While),
    ("+", Token::Plus),
    ("+=", Token::PlusAssign),
    ("", Token::EOF),
    ("", Token::EOF),
    ("throw", Token::Throw),
    ("}", Token::RightBrace),
    (">>", Token::RightShift),
    (">>=", Token::RightShiftAssign),
    ("", Token::EOF),
    ("", Token::EOF),
    (";", Token::SemiColon),
    ("=>", Token::DoubleArrow),
    ("", Token::EOF),
    ("else", Token::Else),
    ("", Token::EOF),
    ("/", Token::Divide),
    ("/=", Token::DivideAssign),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("{", Token::LeftBrace),
    ("**", Token::PowerOf),
    ("**=", Token::PowerOfAssign),
    ("", Token::EOF),
    ("", Token::EOF),
    ("|", Token::Pipe),
    ("|=", Token::OrAssign),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    (":", Token::Colon),
    ("..", Token::ExclusiveRange),
    ("..=", Token::InclusiveRange),
    ("", Token::EOF),
    ("until", Token::Until),
    ("switch", Token::Switch),
    #[cfg(not(feature = "no_function"))]
    ("private", Token::Private),
    #[cfg(feature = "no_function")]
    ("", Token::EOF),
    ("try", Token::Try),
    ("true", Token::True),
    ("break", Token::Break),
    ("return", Token::Return),
    #[cfg(not(feature = "no_function"))]
    ("fn", Token::Fn),
    #[cfg(feature = "no_function")]
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    #[cfg(not(feature = "no_module"))]
    ("import", Token::Import),
    #[cfg(feature = "no_module")]
    ("", Token::EOF),
    #[cfg(not(feature = "no_object"))]
    ("?.", Token::Elvis),
    #[cfg(feature = "no_object")]
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    #[cfg(not(feature = "no_module"))]
    ("export", Token::Export),
    #[cfg(feature = "no_module")]
    ("", Token::EOF),
    ("in", Token::In),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("(", Token::LeftParen),
    ("||", Token::Or),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("^", Token::XOr),
    ("^=", Token::XOrAssign),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("_", Token::Underscore),
    ("::", Token::DoubleColon),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("-", Token::Minus),
    ("-=", Token::MinusAssign),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("]", Token::RightBracket),
    ("()", Token::Unit),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("&", Token::Ampersand),
    ("&=", Token::AndAssign),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("%", Token::Modulo),
    ("%=", Token::ModuloAssign),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("!", Token::Bang),
    ("!=", Token::NotEqualsTo),
    ("!in", Token::NotIn),
    ("", Token::EOF),
    ("", Token::EOF),
    ("[", Token::LeftBracket),
    ("if", Token::If),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    (",", Token::Comma),
    ("do", Token::Do),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    #[cfg(not(feature = "no_module"))]
    ("as", Token::As),
    #[cfg(feature = "no_module")]
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    #[cfg(not(feature = "no_index"))]
    ("?[", Token::QuestionBracket),
    #[cfg(feature = "no_index")]
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("??", Token::DoubleQuestion),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("&&", Token::And),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("", Token::EOF),
    ("#{", Token::MapStart),
];

// Table-driven reserved symbol recognizer generated by GNU `gperf` on the file `tools/reserved.txt`.
//
// When adding new reserved symbols, make sure to update `tools/reserved.txt` and re-generate this.

const MIN_RESERVED_LEN: usize = 1;
const MAX_RESERVED_LEN: usize = 10;
const MIN_RESERVED_HASH_VALUE: usize = 1;
const MAX_RESERVED_HASH_VALUE: usize = 149;

static RESERVED_ASSOC_VALUES: [u8; 256] = [
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 10, 150, 5, 35, 150, 150,
    150, 45, 35, 30, 30, 150, 20, 15, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 35,
    30, 15, 5, 25, 0, 25, 150, 150, 150, 150, 150, 65, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 40, 150, 150, 150, 150, 150, 0, 150, 0,
    0, 0, 15, 45, 10, 15, 150, 150, 35, 25, 10, 50, 0, 150, 5, 0, 15, 0, 5, 25, 45, 15, 150, 150,
    25, 150, 20, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
];
static RESERVED_LIST: [(&str, bool, bool, bool); 150] = [
    ("", false, false, false),
    ("?", true, false, false),
    ("as", cfg!(feature = "no_module"), false, false),
    ("use", true, false, false),
    ("case", true, false, false),
    ("async", true, false, false),
    ("public", true, false, false),
    ("package", true, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("super", true, false, false),
    ("#", true, false, false),
    ("private", cfg!(feature = "no_function"), false, false),
    ("var", true, false, false),
    ("protected", true, false, false),
    ("spawn", true, false, false),
    ("shared", true, false, false),
    ("is", true, false, false),
    ("===", true, false, false),
    ("sync", true, false, false),
    ("curry", true, true, true),
    ("static", true, false, false),
    ("default", true, false, false),
    ("!==", true, false, false),
    ("is_shared", cfg!(not(feature = "no_closure")), true, true),
    ("print", true, true, false),
    ("", false, false, false),
    ("#!", true, false, false),
    ("", false, false, false),
    ("this", true, false, false),
    ("is_def_var", true, true, false),
    ("thread", true, false, false),
    ("?.", cfg!(feature = "no_object"), false, false),
    ("", false, false, false),
    ("is_def_fn", cfg!(not(feature = "no_function")), true, false),
    ("yield", true, false, false),
    ("", false, false, false),
    ("fn", cfg!(feature = "no_function"), false, false),
    ("new", true, false, false),
    ("call", true, true, true),
    ("match", true, false, false),
    ("~", true, false, false),
    ("!.", true, false, false),
    ("", false, false, false),
    ("eval", true, true, false),
    ("await", true, false, false),
    ("", false, false, false),
    (":=", true, false, false),
    ("...", true, false, false),
    ("null", true, false, false),
    ("debug", true, true, false),
    ("@", true, false, false),
    ("type_of", true, true, true),
    ("", false, false, false),
    ("with", true, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("<-", true, false, false),
    ("", false, false, false),
    ("void", true, false, false),
    ("", false, false, false),
    ("import", cfg!(feature = "no_module"), false, false),
    ("--", true, false, false),
    ("nil", true, false, false),
    ("exit", false, false, false),
    ("", false, false, false),
    ("export", cfg!(feature = "no_module"), false, false),
    ("<|", true, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("$", true, false, false),
    ("->", true, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("|>", true, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("module", true, false, false),
    ("?[", cfg!(feature = "no_index"), false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("Fn", true, true, false),
    ("::<", true, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("++", true, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    (":;", true, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("*)", true, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("(*", true, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("", false, false, false),
    ("go", true, false, false),
    ("", false, false, false),
    ("goto", true, false, false),
];

impl Token {
    /// Is the token a literal symbol?
    #[must_use]
    pub const fn is_literal(&self) -> bool {
        #[allow(clippy::enum_glob_use)]
        use Token::*;

        match self {
            IntegerConstant(..) => false,
            #[cfg(not(feature = "no_float"))]
            FloatConstant(..) => false,
            #[cfg(feature = "decimal")]
            DecimalConstant(..) => false,
            StringConstant(..)
            | InterpolatedString(..)
            | CharConstant(..)
            | Identifier(..)
            | Reserved(..) => false,
            #[cfg(not(feature = "no_custom_syntax"))]
            Custom(..) => false,
            LexError(..) | Comment(..) => false,

            EOF => false,

            _ => true,
        }
    }
    /// Get the literal syntax of the token.
    ///
    /// # Panics
    ///
    /// Panics if the token is not a literal symbol.
    #[must_use]
    pub const fn literal_syntax(&self) -> &'static str {
        #[allow(clippy::enum_glob_use)]
        use Token::*;

        match self {
            LeftBrace => "{",
            RightBrace => "}",
            LeftParen => "(",
            RightParen => ")",
            LeftBracket => "[",
            RightBracket => "]",
            Unit => "()",
            Plus => "+",
            UnaryPlus => "+",
            Minus => "-",
            UnaryMinus => "-",
            Multiply => "*",
            Divide => "/",
            SemiColon => ";",
            Colon => ":",
            DoubleColon => "::",
            DoubleArrow => "=>",
            Underscore => "_",
            Comma => ",",
            Period => ".",
            #[cfg(not(feature = "no_object"))]
            Elvis => "?.",
            DoubleQuestion => "??",
            #[cfg(not(feature = "no_index"))]
            QuestionBracket => "?[",
            ExclusiveRange => "..",
            InclusiveRange => "..=",
            MapStart => "#{",
            Equals => "=",
            True => "true",
            False => "false",
            Let => "let",
            Const => "const",
            If => "if",
            Else => "else",
            Switch => "switch",
            Do => "do",
            While => "while",
            Until => "until",
            Loop => "loop",
            For => "for",
            In => "in",
            NotIn => "!in",
            LessThan => "<",
            GreaterThan => ">",
            Bang => "!",
            LessThanEqualsTo => "<=",
            GreaterThanEqualsTo => ">=",
            EqualsTo => "==",
            NotEqualsTo => "!=",
            Pipe => "|",
            Or => "||",
            Ampersand => "&",
            And => "&&",
            Continue => "continue",
            Break => "break",
            Return => "return",
            Throw => "throw",
            Try => "try",
            Catch => "catch",
            PlusAssign => "+=",
            MinusAssign => "-=",
            MultiplyAssign => "*=",
            DivideAssign => "/=",
            LeftShiftAssign => "<<=",
            RightShiftAssign => ">>=",
            AndAssign => "&=",
            OrAssign => "|=",
            XOrAssign => "^=",
            LeftShift => "<<",
            RightShift => ">>",
            XOr => "^",
            Modulo => "%",
            ModuloAssign => "%=",
            PowerOf => "**",
            PowerOfAssign => "**=",

            #[cfg(not(feature = "no_function"))]
            Fn => "fn",
            #[cfg(not(feature = "no_function"))]
            Private => "private",

            #[cfg(not(feature = "no_module"))]
            Import => "import",
            #[cfg(not(feature = "no_module"))]
            Export => "export",
            #[cfg(not(feature = "no_module"))]
            As => "as",

            _ => panic!("token is not a literal symbol"),
        }
    }

    /// Reverse lookup a symbol token from a piece of syntax.
    #[inline]
    #[must_use]
    pub fn lookup_symbol_from_syntax(syntax: &str) -> Option<Self> {
        // This implementation is based upon a pre-calculated table generated
        // by GNU `gperf` on the list of keywords.
        let utf8 = syntax.as_bytes();
        let len = utf8.len();

        if !(MIN_KEYWORD_LEN..=MAX_KEYWORD_LEN).contains(&len) {
            return None;
        }

        let mut hash_val = len;

        match len {
            1 => (),
            _ => hash_val += KEYWORD_ASSOC_VALUES[(utf8[1] as usize) + 1] as usize,
        }
        hash_val += KEYWORD_ASSOC_VALUES[utf8[0] as usize] as usize;

        if !(MIN_KEYWORD_HASH_VALUE..=MAX_KEYWORD_HASH_VALUE).contains(&hash_val) {
            return None;
        }

        match KEYWORDS_LIST[hash_val] {
            (_, Self::EOF) => None,
            // Fail early to avoid calling memcmp().
            // Since we are already working with bytes, mind as well check the first one.
            (s, ref t) if s.len() == len && s.as_bytes()[0] == utf8[0] && s == syntax => {
                Some(t.clone())
            }
            _ => None,
        }
    }

    /// Is this token an op-assignment operator?
    #[inline]
    #[must_use]
    pub const fn is_op_assignment(&self) -> bool {
        #[allow(clippy::enum_glob_use)]
        use Token::*;

        matches!(
            self,
            PlusAssign
                | MinusAssign
                | MultiplyAssign
                | DivideAssign
                | LeftShiftAssign
                | RightShiftAssign
                | ModuloAssign
                | PowerOfAssign
                | AndAssign
                | OrAssign
                | XOrAssign
        )
    }

    /// Get the corresponding operator of the token if it is an op-assignment operator.
    #[must_use]
    pub const fn get_base_op_from_assignment(&self) -> Option<Self> {
        #[allow(clippy::enum_glob_use)]
        use Token::*;

        Some(match self {
            PlusAssign => Plus,
            MinusAssign => Minus,
            MultiplyAssign => Multiply,
            DivideAssign => Divide,
            LeftShiftAssign => LeftShift,
            RightShiftAssign => RightShift,
            ModuloAssign => Modulo,
            PowerOfAssign => PowerOf,
            AndAssign => Ampersand,
            OrAssign => Pipe,
            XOrAssign => XOr,
            _ => return None,
        })
    }

    /// Has this token a corresponding op-assignment operator?
    #[inline]
    #[must_use]
    pub const fn has_op_assignment(&self) -> bool {
        #[allow(clippy::enum_glob_use)]
        use Token::*;

        matches!(
            self,
            Plus | Minus
                | Multiply
                | Divide
                | LeftShift
                | RightShift
                | Modulo
                | PowerOf
                | Ampersand
                | Pipe
                | XOr
        )
    }

    /// Get the corresponding op-assignment operator of the token.
    #[must_use]
    pub const fn convert_to_op_assignment(&self) -> Option<Self> {
        #[allow(clippy::enum_glob_use)]
        use Token::*;

        Some(match self {
            Plus => PlusAssign,
            Minus => MinusAssign,
            Multiply => MultiplyAssign,
            Divide => DivideAssign,
            LeftShift => LeftShiftAssign,
            RightShift => RightShiftAssign,
            Modulo => ModuloAssign,
            PowerOf => PowerOfAssign,
            Ampersand => AndAssign,
            Pipe => OrAssign,
            XOr => XOrAssign,
            _ => return None,
        })
    }
}

/// _(internals)_ Is a text string a valid identifier?
/// Exported under the `internals` feature only.
#[must_use]
pub fn is_valid_identifier(name: &str) -> bool {
    let mut iter = name.chars();

    if !iter.next().map(is_id_first_alphabetic).unwrap_or(false) {
        return false;
    }

    while let Some(ch) = iter.next() {
        if !is_id_continue(ch) {
            return false;
        }
    }

    true
}

/// Is a character valid to start an identifier?
#[inline(always)]
#[must_use]
#[allow(clippy::missing_const_for_fn)]
pub fn is_id_first_alphabetic(x: char) -> bool {
    #[cfg(feature = "unicode-xid-ident")]
    return unicode_xid::UnicodeXID::is_xid_start(x);
    #[cfg(not(feature = "unicode-xid-ident"))]
    return x.is_ascii_alphabetic();
}

/// Is a character valid for an identifier?
#[inline(always)]
#[must_use]
#[allow(clippy::missing_const_for_fn)]
pub fn is_id_continue(x: char) -> bool {
    #[cfg(feature = "unicode-xid-ident")]
    return unicode_xid::UnicodeXID::is_xid_continue(x);
    #[cfg(not(feature = "unicode-xid-ident"))]
    return x.is_ascii_alphanumeric() || x == '_';
}

/// Is a piece of syntax a reserved keyword or reserved symbol?
///
/// # Return values
///
/// The first `bool` indicates whether it is a reserved keyword or symbol.
///
/// The second `bool` indicates whether the keyword can be called normally as a function.
/// `false` if it is not a reserved keyword.
///
/// The third `bool` indicates whether the keyword can be called in method-call style.
/// `false` if it is not a reserved keyword or it cannot be called as a function.
#[inline]
#[must_use]
pub fn is_reserved_keyword_or_symbol(syntax: &str) -> (bool, bool, bool) {
    // This implementation is based upon a pre-calculated table generated
    // by GNU `gperf` on the list of keywords.
    let utf8 = syntax.as_bytes();
    let len = utf8.len();

    if !(MIN_RESERVED_LEN..=MAX_RESERVED_LEN).contains(&len) {
        return (false, false, false);
    }

    let mut hash_val = len;

    match len {
        1 => (),
        _ => hash_val += RESERVED_ASSOC_VALUES[utf8[1] as usize] as usize,
    }
    hash_val += RESERVED_ASSOC_VALUES[utf8[0] as usize] as usize;
    hash_val += RESERVED_ASSOC_VALUES[utf8[len - 1] as usize] as usize;

    if !(MIN_RESERVED_HASH_VALUE..=MAX_RESERVED_HASH_VALUE).contains(&hash_val) {
        return (false, false, false);
    }

    match RESERVED_LIST[hash_val] {
        ("", ..) => (false, false, false),
        (s, true, a, b) => {
            // Fail early to avoid calling memcmp().
            // Since we are already working with bytes, mind as well check the first one.
            let is_reserved = s.len() == len && s.as_bytes()[0] == utf8[0] && s == syntax;
            (is_reserved, is_reserved && a, is_reserved && a && b)
        }
        _ => (false, false, false),
    }
}
