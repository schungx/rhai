//! Implementations of [`serde::Serialize`] for [`AST`][crate::AST].

use crate::ast::{CustomExpr, Expr, Ident, OptionFlags, Stmt};
use crate::Position;
use serde::ser::{Serialize, SerializeSeq, SerializeStruct, SerializeTuple, Serializer};
use std::ops::Deref;
#[cfg(feature = "no_std")]
use std::prelude::v1::*;

pub mod constants {
    pub const TYPE_TAG: &str = "type";

    pub const TYPE_OPTIONS: &str = "options";
    pub const TYPE_POSITION: &str = "position";
    pub const TYPE_IDENT: &str = "ident";
    pub const TYPE_CUSTOM: &str = "custom";

    pub const TYPE_STMT: &str = "stmt";
    pub const STMT_NOOP: &str = "noop";
    pub const STMT_EXPR: &str = "expr";
    pub const STMT_BLOCK: &str = "block";
    pub const STMT_IF: &str = "if";
    pub const STMT_WHILE: &str = "while";
    pub const STMT_DO: &str = "do";
    pub const STMT_FOR: &str = "for";
    pub const STMT_VAR: &str = "var";
    pub const STMT_BREAK: &str = "break";
    pub const STMT_RETURN: &str = "return";
    pub const STMT_SHARE: &str = "share";

    pub const TYPE_EXPR: &str = "expr";
    pub const EXPR_UNIT: &str = "unit";
    pub const EXPR_TRUE: &str = "true";
    pub const EXPR_FALSE: &str = "false";
    pub const EXPR_INT: &str = "int";
    #[cfg(not(feature = "no_float"))]
    pub const EXPR_FLOAT: &str = "float";
    pub const EXPR_CHAR: &str = "char";
    pub const EXPR_STR: &str = "string";
    pub const EXPR_DYNAMIC: &str = "dyn";
    pub const EXPR_ARRAY: &str = "array";
    pub const EXPR_MAP: &str = "map";
    pub const EXPR_INTER_STR: &str = "inter_str";
    pub const EXPR_PROPERTY: &str = "prop";
    pub const EXPR_DOT: &str = "dot";
    pub const EXPR_INDEX: &str = "index";
    pub const EXPR_AND: &str = "and";
    pub const EXPR_OR: &str = "or";
    pub const EXPR_STMT: &str = "stmt";
    pub const EXPR_STACK: &str = "stack";
    pub const EXPR_CUSTOM: &str = "custom";

    pub const FIELD_POSITION: &str = "pos";
    pub const FIELD_POSITION2: &str = "pos2";
    pub const FIELD_POSITION3: &str = "pos3";
    pub const FIELD_BODY: &str = "body";
    pub const FIELD_OPTIONS: &str = "flag";
    pub const FIELD_NAME: &str = "name";
    pub const FIELD_NAME2: &str = "name2";
    pub const FIELD_GET: &str = "get";
    pub const FIELD_SET: &str = "set";
    pub const FIELD_LHS: &str = "lhs";
    pub const FIELD_RHS: &str = "rhs";
    pub const FIELD_TERMINATE: &str = "term";
    pub const FIELD_KEYWORD: &str = "keyword";
    pub const FIELD_TOKEN: &str = "token";
    pub const FIELD_SCOPE: &str = "scope";
    pub const FIELD_CONDITION: &str = "cond";
}

use constants::*;

impl Serialize for OptionFlags {
    #[inline(always)]
    fn serialize<S: Serializer>(&self, ser: S) -> Result<S::Ok, S::Error> {
        ser.serialize_newtype_struct(TYPE_OPTIONS, &self.inner_get())
    }
}

impl Serialize for Position {
    fn serialize<S: Serializer>(&self, ser: S) -> Result<S::Ok, S::Error> {
        if self.is_none() {
            ser.serialize_unit()
        } else {
            let mut tuple = ser.serialize_tuple(2)?;
            tuple.serialize_element(&self.line().expect("not NONE"))?;
            tuple.serialize_element(&self.position().expect("not NONE"))?;
            tuple.end()
        }
    }
}

impl Serialize for Ident {
    fn serialize<S: Serializer>(&self, ser: S) -> Result<S::Ok, S::Error> {
        #[cfg(not(feature = "no_position"))]
        {
            let mut sv = ser.serialize_struct(
                TYPE_IDENT,
                1 + if cfg!(feature = "no_position") { 0 } else { 1 },
            )?;
            sv.serialize_field(FIELD_NAME, self.name.as_str())?;
            sv.serialize_field(FIELD_POSITION, &self.pos)?;
            sv.end()
        }
        #[cfg(feature = "no_position")]
        ser.serialize_newtype_struct(TYPE_IDENT, self.name.as_str())
    }
}

impl Serialize for CustomExpr {
    fn serialize<S: Serializer>(&self, ser: S) -> Result<S::Ok, S::Error> {
        let mut sv = ser.serialize_struct(TYPE_CUSTOM, 4)?;
        sv.serialize_field(FIELD_KEYWORD, self.keywords.as_ref())?;
        sv.serialize_field(FIELD_SCOPE, &self.scope_may_be_changed)?;
        sv.serialize_field(FIELD_TOKEN, self.tokens.as_ref())?;
        sv.serialize_field(FIELD_TERMINATE, &self.self_terminated)?;
        sv.end()
    }
}

impl Serialize for Stmt {
    fn serialize<S: Serializer>(&self, ser: S) -> Result<S::Ok, S::Error> {
        let pos_extra = if cfg!(feature = "no_position") { 0 } else { 1 };
        let extra = 1 + pos_extra;

        match self {
            Stmt::Noop(_pos) => {
                let mut sv = ser.serialize_struct(STMT_NOOP, extra)?;
                sv.serialize_field(TYPE_TAG, STMT_NOOP)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Stmt::If(c, x, _pos) => {
                let mut sv = ser.serialize_struct(STMT_IF, 3 + 1 + pos_extra * 3)?;
                sv.serialize_field(TYPE_TAG, STMT_IF)?;
                sv.serialize_field(FIELD_CONDITION, c)?;
                sv.serialize_field(FIELD_LHS, x.0.as_ref().deref().as_ref())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION2, &x.0.position())?;
                sv.serialize_field(FIELD_RHS, x.1.as_ref().deref().as_ref())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION2, &x.1.position())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Stmt::Switch(_, _, _) => todo!(),
            Stmt::While(c, stmt, _pos) => {
                let mut sv = ser.serialize_struct(STMT_WHILE, 1 + 1 + pos_extra * 2)?;
                sv.serialize_field(TYPE_TAG, STMT_WHILE)?;
                sv.serialize_field(FIELD_CONDITION, c)?;
                sv.serialize_field(FIELD_BODY, stmt.as_ref().deref().as_ref())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION2, &stmt.position())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Stmt::Do(stmt, c, options, _pos) => {
                let mut sv = ser.serialize_struct(STMT_DO, 2 + 1 + pos_extra * 2)?;
                sv.serialize_field(TYPE_TAG, STMT_DO)?;
                sv.serialize_field(FIELD_BODY, stmt.as_ref().deref().as_ref())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION2, &stmt.position())?;
                sv.serialize_field(FIELD_CONDITION, c)?;
                sv.serialize_field(FIELD_OPTIONS, options)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Stmt::For(c, x, _pos) => {
                let mut sv = ser.serialize_struct(STMT_FOR, 4 + 1 + pos_extra * 2)?;
                sv.serialize_field(TYPE_TAG, STMT_FOR)?;
                sv.serialize_field(FIELD_NAME, &x.0)?;
                sv.serialize_field(FIELD_NAME2, &x.1)?;
                sv.serialize_field(FIELD_CONDITION, c)?;
                sv.serialize_field(FIELD_BODY, x.2.as_ref().deref().as_ref())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION2, &x.2.position())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Stmt::Var(expr, name, options, _pos) => {
                let mut sv = ser.serialize_struct(STMT_VAR, 3 + extra)?;
                sv.serialize_field(TYPE_TAG, STMT_VAR)?;
                sv.serialize_field(FIELD_OPTIONS, options)?;
                sv.serialize_field(FIELD_NAME, name)?;
                sv.serialize_field(FIELD_BODY, expr)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Stmt::Assignment(_, _) => todo!(),
            Stmt::FnCall(_, _) => todo!(),
            Stmt::Block(s, _pos) => {
                let mut sv = ser.serialize_struct(STMT_BLOCK, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, STMT_BLOCK)?;
                sv.serialize_field(FIELD_BODY, s.as_ref())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Stmt::TryCatch(_, _) => todo!(),
            Stmt::Expr(expr) => {
                let mut sv = ser.serialize_struct(STMT_EXPR, 2)?;
                sv.serialize_field(TYPE_TAG, STMT_EXPR)?;
                sv.serialize_field(FIELD_BODY, expr)?;
                sv.end()
            }
            Stmt::BreakLoop(options, _pos) => {
                let mut sv = ser.serialize_struct(STMT_BREAK, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, STMT_BREAK)?;
                sv.serialize_field(FIELD_OPTIONS, options)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Stmt::Return(options, expr, _pos) => {
                let mut sv = ser.serialize_struct(STMT_RETURN, 2 + extra)?;
                sv.serialize_field(TYPE_TAG, STMT_RETURN)?;
                sv.serialize_field(FIELD_OPTIONS, options)?;
                sv.serialize_field(FIELD_BODY, expr)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Stmt::Import(_, _, _) => todo!(),
            Stmt::Export(_, _) => todo!(),
            Stmt::Share(v) => {
                let mut sv = ser.serialize_struct(STMT_SHARE, 2)?;
                sv.serialize_field(TYPE_TAG, STMT_SHARE)?;
                sv.serialize_field(FIELD_BODY, v.as_str())?;
                sv.end()
            }
        }
    }
}

impl Serialize for Expr {
    fn serialize<S: Serializer>(&self, ser: S) -> Result<S::Ok, S::Error> {
        let extra = 1 + if cfg!(feature = "no_position") { 0 } else { 1 };

        match self {
            Expr::DynamicConstant(v, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_INT, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_DYNAMIC)?;
                sv.serialize_field(FIELD_BODY, v)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::BoolConstant(b, _pos) => {
                let v = if *b { EXPR_TRUE } else { EXPR_FALSE };
                let mut sv = ser.serialize_struct(v, extra)?;
                sv.serialize_field(TYPE_TAG, v)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::IntegerConstant(i, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_INT, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_INT)?;
                sv.serialize_field(FIELD_BODY, i)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            #[cfg(not(feature = "no_float"))]
            Expr::FloatConstant(f, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_FLOAT, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_FLOAT)?;
                sv.serialize_field(FIELD_BODY, f.as_ref())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::CharConstant(c, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_CHAR, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_CHAR)?;
                sv.serialize_field(FIELD_BODY, c)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::StringConstant(s, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_STR, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_STR)?;
                sv.serialize_field(FIELD_BODY, s.as_str())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::InterpolatedString(s, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_INTER_STR, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_INTER_STR)?;
                sv.serialize_field(FIELD_BODY, s.as_ref().as_ref())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::Array(a, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_ARRAY, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_ARRAY)?;
                sv.serialize_field(FIELD_BODY, a.as_ref().as_ref())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::Map(x, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_MAP, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_MAP)?;
                sv.serialize_field(FIELD_BODY, &x.0.iter().collect::<Vec<_>>())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::Unit(_pos) => {
                let mut sv = ser.serialize_struct(EXPR_UNIT, extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_UNIT)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::Variable(_, _, _) => todo!(),
            Expr::Property(x) => {
                let mut sv = ser.serialize_struct(EXPR_STR, 3 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_PROPERTY)?;
                sv.serialize_field(FIELD_BODY, (x.2).0.as_str())?;
                sv.serialize_field(FIELD_GET, (x.0).0.as_str())?;
                sv.serialize_field(FIELD_SET, (x.0).0.as_str())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, &(x.2).1)?;
                sv.end()
            }
            Expr::Stack(n, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_STACK, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_STACK)?;
                sv.serialize_field(FIELD_BODY, n)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::Stmt(stmt) => {
                let mut sv = ser.serialize_struct(EXPR_STMT, 2 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_STMT)?;
                sv.serialize_field(FIELD_BODY, stmt.as_ref().deref().as_ref())?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, &stmt.position())?;
                sv.end()
            }
            Expr::FnCall(_, _) => todo!(),
            Expr::Dot(x, term, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_DOT, 3 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_DOT)?;
                sv.serialize_field(FIELD_LHS, &x.lhs)?;
                sv.serialize_field(FIELD_RHS, &x.rhs)?;
                sv.serialize_field(FIELD_TERMINATE, term)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::Index(x, term, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_INDEX, 3 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_INDEX)?;
                sv.serialize_field(FIELD_LHS, &x.lhs)?;
                sv.serialize_field(FIELD_RHS, &x.rhs)?;
                sv.serialize_field(FIELD_TERMINATE, term)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::And(x, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_AND, 2 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_AND)?;
                sv.serialize_field(FIELD_LHS, &x.lhs)?;
                sv.serialize_field(FIELD_RHS, &x.rhs)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
            Expr::Or(x, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_OR, 2 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_OR)?;
                sv.serialize_field(FIELD_LHS, &x.lhs)?;
                sv.serialize_field(FIELD_RHS, &x.rhs)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }

            Expr::Custom(c, _pos) => {
                let mut sv = ser.serialize_struct(EXPR_CUSTOM, 1 + extra)?;
                sv.serialize_field(TYPE_TAG, EXPR_CUSTOM)?;
                sv.serialize_field(FIELD_BODY, c)?;
                #[cfg(not(feature = "no_position"))]
                sv.serialize_field(FIELD_POSITION, _pos)?;
                sv.end()
            }
        }
    }
}
