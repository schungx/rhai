//! Implementations of [`serde::Deserialize`] for [`AST`][crate::AST].

use crate::ast::{CustomExpr, Expr, Ident, OptionFlags, Stmt, StmtBlock};
use crate::engine::{make_getter, make_setter};
use crate::{calc_fn_hash, BinaryExpr, Dynamic, Identifier, Position, StaticVec, INT};
use serde::de::{Deserialize, Deserializer, Error, MapAccess, SeqAccess, Unexpected, Visitor};
use std::fmt;
#[cfg(feature = "no_std")]
use std::prelude::v1::*;

use super::ast_ser::constants::*;

struct OptionFlagsVisitor;

impl<'de> Visitor<'de> for OptionFlagsVisitor {
    type Value = OptionFlags;

    #[inline(always)]
    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str(TYPE_OPTIONS)
    }
    #[inline(always)]
    fn visit_u8<E>(self, v: u8) -> Result<Self::Value, E> {
        Ok(OptionFlags::from_u8(v))
    }
    #[inline(always)]
    fn visit_i8<E>(self, v: i8) -> Result<Self::Value, E> {
        Ok(OptionFlags::from_u8(v as u8))
    }
    #[inline(always)]
    fn visit_u16<E>(self, v: u16) -> Result<Self::Value, E> {
        Ok(OptionFlags::from_u8(v as u8))
    }
    #[inline(always)]
    fn visit_i16<E>(self, v: i16) -> Result<Self::Value, E> {
        Ok(OptionFlags::from_u8(v as u8))
    }
    #[inline(always)]
    fn visit_u32<E>(self, v: u32) -> Result<Self::Value, E> {
        Ok(OptionFlags::from_u8(v as u8))
    }
    #[inline(always)]
    fn visit_i32<E>(self, v: i32) -> Result<Self::Value, E> {
        Ok(OptionFlags::from_u8(v as u8))
    }
    #[inline(always)]
    fn visit_u64<E>(self, v: u64) -> Result<Self::Value, E> {
        Ok(OptionFlags::from_u8(v as u8))
    }
    #[inline(always)]
    fn visit_i64<E>(self, v: i64) -> Result<Self::Value, E> {
        Ok(OptionFlags::from_u8(v as u8))
    }
    #[inline(always)]
    fn visit_newtype_struct<D: Deserializer<'de>>(self, d: D) -> Result<Self::Value, D::Error> {
        d.deserialize_u8(self)
    }
}

impl<'de> Deserialize<'de> for OptionFlags {
    #[inline(always)]
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        d.deserialize_newtype_struct(TYPE_OPTIONS, OptionFlagsVisitor)
    }
}

struct PositionVisitor;

impl<'de> Visitor<'de> for PositionVisitor {
    type Value = Position;

    #[inline(always)]
    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str(TYPE_POSITION)
    }
    #[inline(always)]
    fn visit_unit<E: Error>(self) -> Result<Self::Value, E> {
        Ok(Position::NONE)
    }
    fn visit_seq<V: SeqAccess<'de>>(self, mut seq: V) -> Result<Self::Value, V::Error> {
        let line = seq
            .next_element()?
            .ok_or_else(|| Error::invalid_length(0, &self))?;
        let chars = seq
            .next_element()?
            .ok_or_else(|| Error::invalid_length(1, &self))?;
        Ok(Position::new(line, chars))
    }
}

impl<'de> Deserialize<'de> for Position {
    #[inline(always)]
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        d.deserialize_seq(PositionVisitor)
    }
}

struct IdentVisitor;

impl<'de> Visitor<'de> for IdentVisitor {
    type Value = Ident;

    #[inline(always)]
    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str(TYPE_IDENT)
    }
    #[inline(always)]
    fn visit_str<E>(self, s: &str) -> Result<Self::Value, E> {
        Ok(Ident {
            name: s.into(),
            pos: Position::NONE,
        })
    }
    fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<Self::Value, A::Error> {
        let mut name: Option<&str> = None;
        let mut pos = Position::NONE;
        while let Some(key) = map.next_key()? {
            match key {
                Some(FIELD_NAME) => name = Some(map.next_value()?),
                Some(FIELD_POSITION) => pos = map.next_value()?,
                _ => (),
            }
        }
        let name = name.ok_or_else(|| Error::missing_field(FIELD_NAME))?.into();
        Ok(Ident { name, pos })
    }
}

impl<'de> Deserialize<'de> for Ident {
    #[inline(always)]
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        #[cfg(not(feature = "no_position"))]
        return d.deserialize_struct(TYPE_IDENT, &[FIELD_NAME, FIELD_POSITION], IdentVisitor);

        #[cfg(feature = "no_position")]
        return d.deserialize_newtype_struct(TYPE_IDENT, IdentVisitor);
    }
}

struct CustomExprVisitor;

impl<'de> Visitor<'de> for CustomExprVisitor {
    type Value = CustomExpr;

    #[inline(always)]
    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str(TYPE_CUSTOM)
    }
    #[inline(always)]
    fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<Self::Value, A::Error> {
        let mut keywords: Option<Vec<Expr>> = None;
        let mut scope_may_be_changed: Option<bool> = None;
        let mut tokens: Option<Vec<&str>> = None;
        let mut self_terminated: Option<bool> = None;
        while let Some(key) = map.next_key()? {
            match key {
                Some(FIELD_KEYWORD) => keywords = Some(map.next_value()?),
                Some(FIELD_SCOPE) => scope_may_be_changed = Some(map.next_value()?),
                Some(FIELD_TOKEN) => tokens = Some(map.next_value()?),
                Some(FIELD_TERMINATE) => self_terminated = Some(map.next_value()?),
                _ => (),
            }
        }
        let keywords = keywords
            .ok_or_else(|| Error::missing_field(FIELD_KEYWORD))?
            .into();
        let scope_may_be_changed =
            scope_may_be_changed.ok_or_else(|| Error::missing_field(FIELD_SCOPE))?;
        let tokens = tokens
            .ok_or_else(|| Error::missing_field(FIELD_TOKEN))?
            .iter()
            .map(|&s| s.into())
            .collect::<Vec<_>>()
            .into();
        let self_terminated =
            self_terminated.ok_or_else(|| Error::missing_field(FIELD_TERMINATE))?;
        Ok(CustomExpr {
            keywords,
            scope_may_be_changed,
            tokens,
            self_terminated,
        })
    }
}

impl<'de> Deserialize<'de> for CustomExpr {
    #[inline(always)]
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        d.deserialize_struct(
            TYPE_CUSTOM,
            &[FIELD_NAME, FIELD_POSITION],
            CustomExprVisitor,
        )
    }
}

struct StmtVisitor;

impl<'de> Visitor<'de> for StmtVisitor {
    type Value = Stmt;

    #[inline(always)]
    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str(TYPE_STMT)
    }
    fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<Self::Value, A::Error> {
        let tag = if let Some((TYPE_TAG, value)) = map.next_entry::<&str, &str>()? {
            value
        } else {
            return Err(Error::missing_field(TYPE_TAG));
        };

        match tag {
            STMT_NOOP => {
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                Ok(Stmt::Noop(pos))
            }
            STMT_EXPR => {
                let mut value: Option<Expr> = None;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Stmt::Expr(value))
            }
            STMT_BLOCK => {
                let mut value: Option<Vec<Stmt>> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Stmt::Block(value.into(), pos))
            }
            STMT_IF => {
                let mut condition: Option<Expr> = None;
                let mut lhs: Option<Vec<Stmt>> = None;
                let mut rhs: Option<Vec<Stmt>> = None;
                let mut pos = Position::NONE;
                let mut pos2 = Position::NONE;
                let mut pos3 = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_CONDITION) => condition = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        Some(FIELD_LHS) => lhs = Some(map.next_value()?),
                        Some(FIELD_POSITION2) => pos2 = map.next_value()?,
                        Some(FIELD_RHS) => rhs = Some(map.next_value()?),
                        Some(FIELD_POSITION3) => pos3 = map.next_value()?,
                        _ => (),
                    }
                }
                let condition = condition.ok_or_else(|| Error::missing_field(FIELD_CONDITION))?;
                let lhs = lhs.ok_or_else(|| Error::missing_field(FIELD_LHS))?;
                let rhs = rhs.ok_or_else(|| Error::missing_field(FIELD_LHS))?;
                Ok(Stmt::If(
                    condition,
                    (StmtBlock::new(lhs, pos2), StmtBlock::new(rhs, pos3)).into(),
                    pos,
                ))
            }
            STMT_WHILE => {
                let mut condition: Option<Expr> = None;
                let mut block: Option<Vec<Stmt>> = None;
                let mut pos = Position::NONE;
                let mut pos2 = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_CONDITION) => condition = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        Some(FIELD_BODY) => block = Some(map.next_value()?),
                        Some(FIELD_POSITION2) => pos2 = map.next_value()?,
                        _ => (),
                    }
                }
                let condition = condition.ok_or_else(|| Error::missing_field(FIELD_CONDITION))?;
                let block = block.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Stmt::While(
                    condition,
                    StmtBlock::new(block, pos2).into(),
                    pos,
                ))
            }
            STMT_DO => {
                let mut condition: Option<Expr> = None;
                let mut options: Option<OptionFlags> = None;
                let mut block: Option<Vec<Stmt>> = None;
                let mut pos = Position::NONE;
                let mut pos2 = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_CONDITION) => condition = Some(map.next_value()?),
                        Some(FIELD_OPTIONS) => options = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        Some(FIELD_BODY) => block = Some(map.next_value()?),
                        Some(FIELD_POSITION2) => pos2 = map.next_value()?,
                        _ => (),
                    }
                }
                let condition = condition.ok_or_else(|| Error::missing_field(FIELD_CONDITION))?;
                let options = options.ok_or_else(|| Error::missing_field(FIELD_OPTIONS))?;
                let block = block.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Stmt::Do(
                    StmtBlock::new(block, pos2).into(),
                    condition,
                    options,
                    pos,
                ))
            }
            STMT_FOR => {
                let mut condition: Option<Expr> = None;
                let mut name: Option<Ident> = None;
                let mut name2: Option<Ident> = None;
                let mut block: Option<Vec<Stmt>> = None;
                let mut pos = Position::NONE;
                let mut pos2 = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_NAME) => name = Some(map.next_value()?),
                        Some(FIELD_NAME2) => name2 = Some(map.next_value()?),
                        Some(FIELD_CONDITION) => condition = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        Some(FIELD_BODY) => block = Some(map.next_value()?),
                        Some(FIELD_POSITION2) => pos2 = map.next_value()?,
                        _ => (),
                    }
                }
                let name = name.ok_or_else(|| Error::missing_field(FIELD_NAME))?;
                let condition = condition.ok_or_else(|| Error::missing_field(FIELD_CONDITION))?;
                let block = block.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Stmt::For(
                    condition,
                    (name, name2, StmtBlock::new(block, pos2)).into(),
                    pos,
                ))
            }
            STMT_VAR => {
                let mut options: Option<OptionFlags> = None;
                let mut name: Option<Ident> = None;
                let mut expr: Option<Expr> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_OPTIONS) => options = Some(map.next_value()?),
                        Some(FIELD_NAME) => name = Some(map.next_value()?),
                        Some(FIELD_BODY) => expr = map.next_value()?,
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let options = options.ok_or_else(|| Error::missing_field(FIELD_OPTIONS))?;
                let name = name.ok_or_else(|| Error::missing_field(FIELD_NAME))?;
                let expr = expr.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Stmt::Var(expr, name.into(), options, pos))
            }
            STMT_BREAK => {
                let mut options: Option<OptionFlags> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_OPTIONS) => options = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let options = options.ok_or_else(|| Error::missing_field(FIELD_OPTIONS))?;
                Ok(Stmt::BreakLoop(options, pos))
            }
            STMT_RETURN => {
                let mut options: Option<OptionFlags> = None;
                let mut expr: Option<Expr> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_OPTIONS) => options = Some(map.next_value()?),
                        Some(FIELD_BODY) => expr = map.next_value()?,
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let options = options.ok_or_else(|| Error::missing_field(FIELD_OPTIONS))?;
                Ok(Stmt::Return(options, expr, pos))
            }
            STMT_SHARE => {
                let mut value: Option<&str> = None;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Stmt::Share(value.into()))
            }

            _ => Err(Error::invalid_type(Unexpected::StructVariant, &TYPE_EXPR)),
        }
    }
}

impl<'de> Deserialize<'de> for Stmt {
    #[inline(always)]
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        d.deserialize_map(StmtVisitor)
    }
}

struct ExprVisitor;

impl<'de> Visitor<'de> for ExprVisitor {
    type Value = Expr;

    #[inline(always)]
    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str(TYPE_EXPR)
    }
    fn visit_map<A: MapAccess<'de>>(self, mut map: A) -> Result<Self::Value, A::Error> {
        let tag = if let Some((TYPE_TAG, value)) = map.next_entry::<&str, &str>()? {
            value
        } else {
            return Err(Error::missing_field(TYPE_TAG));
        };

        match tag {
            EXPR_UNIT | EXPR_TRUE | EXPR_FALSE => {
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                Ok(match tag {
                    EXPR_UNIT => Expr::Unit(pos),
                    EXPR_TRUE => Expr::BoolConstant(true, pos),
                    EXPR_FALSE => Expr::BoolConstant(false, pos),
                    _ => unreachable!(),
                })
            }
            EXPR_INT => {
                let mut value: Option<INT> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Expr::IntegerConstant(value, pos))
            }
            #[cfg(not(feature = "no_float"))]
            EXPR_FLOAT => {
                let mut value: Option<crate::FLOAT> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Expr::FloatConstant(value.into(), pos))
            }
            EXPR_CHAR => {
                let mut value: Option<char> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Expr::CharConstant(value, pos))
            }
            EXPR_STR => {
                let mut value: Option<&str> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Expr::StringConstant(value.into(), pos))
            }
            EXPR_DYNAMIC => {
                let mut value: Option<Dynamic> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Expr::DynamicConstant(value.into(), pos))
            }
            EXPR_ARRAY => {
                let mut value: Option<Vec<Expr>> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value: StaticVec<_> = value
                    .ok_or_else(|| Error::missing_field(FIELD_BODY))?
                    .into();
                Ok(Expr::Array(value.into(), pos))
            }
            EXPR_MAP => {
                let mut value: Option<Vec<(Ident, Expr)>> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                let template = value
                    .iter()
                    .map(|(Ident { name, .. }, _)| (name.clone(), Default::default()))
                    .collect();
                Ok(Expr::Map((value.into(), template).into(), pos))
            }
            EXPR_INTER_STR => {
                let mut value: Option<Vec<Expr>> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value: StaticVec<_> = value
                    .ok_or_else(|| Error::missing_field(FIELD_BODY))?
                    .into();
                Ok(Expr::InterpolatedString(value.into(), pos))
            }
            EXPR_PROPERTY => {
                let mut value: Option<&str> = None;
                let mut getter: Option<&str> = None;
                let mut setter: Option<&str> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_GET) => getter = Some(map.next_value()?),
                        Some(FIELD_SET) => setter = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                let getter: Identifier =
                    getter.map_or_else(|| make_getter(value).into(), |v| v.into());
                let setter: Identifier =
                    setter.map_or_else(|| make_setter(value).into(), |v| v.into());
                let hash_get = calc_fn_hash(&getter, 1);
                let hash_set = calc_fn_hash(&setter, 2);
                Ok(Expr::Property(
                    ((getter, hash_get), (setter, hash_set), (value.into(), pos)).into(),
                ))
            }
            EXPR_DOT | EXPR_INDEX | EXPR_AND | EXPR_OR => {
                let mut lhs: Option<Expr> = None;
                let mut rhs: Option<Expr> = None;
                let mut term = false;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_LHS) => lhs = Some(map.next_value()?),
                        Some(FIELD_RHS) => rhs = Some(map.next_value()?),
                        Some(FIELD_TERMINATE) => term = map.next_value()?,
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let lhs = lhs.ok_or_else(|| Error::missing_field(FIELD_LHS))?;
                let rhs = rhs.ok_or_else(|| Error::missing_field(FIELD_RHS))?;
                match tag {
                    EXPR_DOT => Ok(Expr::Dot(BinaryExpr { lhs, rhs }.into(), term, pos)),
                    EXPR_INDEX => Ok(Expr::Index(BinaryExpr { lhs, rhs }.into(), term, pos)),
                    EXPR_AND => Ok(Expr::And(BinaryExpr { lhs, rhs }.into(), pos)),
                    EXPR_OR => Ok(Expr::Or(BinaryExpr { lhs, rhs }.into(), pos)),
                    _ => unreachable!(),
                }
            }
            EXPR_STMT => {
                let mut value: Option<Vec<Stmt>> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value =
                    StmtBlock::new(value.ok_or_else(|| Error::missing_field(FIELD_BODY))?, pos);
                Ok(Expr::Stmt(value.into()))
            }
            EXPR_STACK => {
                let mut value: Option<usize> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Expr::Stack(value, pos))
            }
            EXPR_CUSTOM => {
                let mut value: Option<CustomExpr> = None;
                let mut pos = Position::NONE;
                while let Some(key) = map.next_key()? {
                    match key {
                        Some(FIELD_BODY) => value = Some(map.next_value()?),
                        Some(FIELD_POSITION) => pos = map.next_value()?,
                        _ => (),
                    }
                }
                let value = value.ok_or_else(|| Error::missing_field(FIELD_BODY))?;
                Ok(Expr::Custom(value.into(), pos))
            }
            _ => Err(Error::invalid_type(Unexpected::StructVariant, &TYPE_EXPR)),
        }
    }
}

impl<'de> Deserialize<'de> for Expr {
    #[inline(always)]
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        d.deserialize_map(ExprVisitor)
    }
}
