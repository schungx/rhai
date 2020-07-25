//! Module implementing custom syntax for `Engine`.

use crate::any::Dynamic;
use crate::engine::{Engine, Imports, State, MARKER_BLOCK, MARKER_EXPR, MARKER_IDENT};
use crate::error::{LexError, ParseError};
use crate::fn_native::{SendSync, Shared};
use crate::module::Module;
use crate::parser::Expr;
use crate::result::EvalAltResult;
use crate::scope::Scope;
use crate::token::{is_valid_identifier, Position, Token};
use crate::utils::StaticVec;

use crate::stdlib::{
    boxed::Box,
    fmt, format,
    rc::Rc,
    string::{String, ToString},
};

/// A general expression evaluation trait object.
#[cfg(not(feature = "sync"))]
pub type FnCustomSyntaxEval = dyn Fn(
    &Engine,
    &mut EvalContext,
    &mut Scope,
    &[Expression],
) -> Result<Dynamic, Box<EvalAltResult>>;
/// A general expression evaluation trait object.
#[cfg(feature = "sync")]
pub type FnCustomSyntaxEval = dyn Fn(&Engine, &mut EvalContext, &mut Scope, &[Expression]) -> Result<Dynamic, Box<EvalAltResult>>
    + Send
    + Sync;

/// An expression sub-tree in an AST.
#[derive(Debug, Clone, Hash)]
pub struct Expression<'a>(&'a Expr);

impl<'a> From<&'a Expr> for Expression<'a> {
    fn from(expr: &'a Expr) -> Self {
        Self(expr)
    }
}

impl Expression<'_> {
    /// If this expression is a variable name, return it.  Otherwise `None`.
    pub fn get_variable_name(&self) -> Option<&str> {
        match self.0 {
            Expr::Variable(x) => Some((x.0).0.as_str()),
            _ => None,
        }
    }
    /// Get the expression.
    pub(crate) fn expr(&self) -> &Expr {
        &self.0
    }
    /// Get the position of this expression.
    pub fn position(&self) -> Position {
        self.0.position()
    }
}

#[derive(Clone)]
pub struct CustomSyntax {
    pub segments: StaticVec<String>,
    pub func: Shared<FnCustomSyntaxEval>,
    pub scope_delta: isize,
}

impl fmt::Debug for CustomSyntax {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::Debug::fmt(&self.segments, f)
    }
}

/// Context of a script evaluation process.
#[derive(Debug)]
pub struct EvalContext<'a, 'b: 'a, 's, 'm, 't, 'd: 't> {
    pub(crate) mods: &'a mut Imports<'b>,
    pub(crate) state: &'s mut State,
    pub(crate) lib: &'m Module,
    pub(crate) this_ptr: &'t mut Option<&'d mut Dynamic>,
    pub(crate) level: usize,
}

impl Engine {
    pub fn register_custom_syntax<S: AsRef<str> + ToString>(
        &mut self,
        keywords: &[S],
        scope_delta: isize,
        func: impl Fn(
                &Engine,
                &mut EvalContext,
                &mut Scope,
                &[Expression],
            ) -> Result<Dynamic, Box<EvalAltResult>>
            + SendSync
            + 'static,
    ) -> Result<&mut Self, Box<ParseError>> {
        let mut segments: StaticVec<_> = Default::default();

        for s in keywords {
            let s = s.as_ref().trim();

            // skip empty keywords
            if s.is_empty() {
                continue;
            }

            let seg = match s {
                // Markers not in first position
                MARKER_EXPR | MARKER_BLOCK | MARKER_IDENT if !segments.is_empty() => s.to_string(),
                // Standard symbols not in first position
                s if !segments.is_empty() && Token::lookup_from_syntax(s).is_some() => {
                    // Make it a custom keyword/operator if it is a disabled standard keyword/operator
                    // or a reserved keyword/operator.
                    if self
                        .disabled_symbols
                        .as_ref()
                        .map(|d| d.contains(s))
                        .unwrap_or(false)
                        || Token::lookup_from_syntax(s)
                            .map(|token| token.is_reserved())
                            .unwrap_or(false)
                    {
                        // If symbol is disabled, make it a custom keyword
                        if self.custom_keywords.is_none() {
                            self.custom_keywords = Some(Default::default());
                        }

                        if !self.custom_keywords.as_ref().unwrap().contains_key(s) {
                            self.custom_keywords.as_mut().unwrap().insert(s.into(), 0);
                        }
                    }

                    s.into()
                }
                // Identifier
                s if is_valid_identifier(s.chars()) => {
                    if self.custom_keywords.is_none() {
                        self.custom_keywords = Some(Default::default());
                    }

                    if !self.custom_keywords.as_ref().unwrap().contains_key(s) {
                        self.custom_keywords.as_mut().unwrap().insert(s.into(), 0);
                    }

                    s.into()
                }
                // Anything else is an error
                _ => {
                    return Err(LexError::ImproperSymbol(format!(
                        "Improper symbol for custom syntax: '{}'",
                        s
                    ))
                    .into_err(Position::none())
                    .into());
                }
            };

            segments.push(seg);
        }

        // If the syntax has no keywords, just ignore the registration
        if segments.is_empty() {
            return Ok(self);
        }

        // Remove the first keyword as the discriminator
        let key = segments.remove(0);

        let syntax = CustomSyntax {
            segments,
            #[cfg(not(feature = "sync"))]
            func: Rc::new(func),
            #[cfg(feature = "sync")]
            func: Arc::new(func),
            scope_delta,
        };

        if self.custom_syntax.is_none() {
            self.custom_syntax = Some(Default::default());
        }

        self.custom_syntax
            .as_mut()
            .unwrap()
            .insert(key, syntax.into());

        Ok(self)
    }

    /// Evaluate an expression tree.
    ///
    /// ## WARNING - Low Level API
    ///
    /// This function is very low level.  It evaluates an expression from an AST.
    pub fn eval_expression_tree(
        &self,
        context: &mut EvalContext,
        scope: &mut Scope,
        expr: &Expression,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        self.eval_expr(
            scope,
            context.mods,
            context.state,
            context.lib,
            context.this_ptr,
            expr.expr(),
            context.level,
        )
    }
}
