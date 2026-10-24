#![cfg(not(feature = "no_ast"))]

use rhai::{Engine, LexError, ParseError, ParseErrorType, Position};

fn after(source: &str) -> Position {
    let line = source.chars().filter(|&ch| ch == '\n').count() + 1;
    let column = source.rsplit('\n').next().unwrap().chars().count() + 1;
    Position::new(line.try_into().unwrap(), column.try_into().unwrap())
}

fn with_trivia(prefix: &str, suffix: &str, mut check: impl FnMut(&str, Position)) {
    for trivia in [" ", " \t   ", "\n   ", "\r\n\t", " /* comment */ ", " /* outer /* inner */ end */ \n ", " // comment\r\n "] {
        check(&format!("{prefix}{trivia}{suffix}"), after(prefix));
    }
}

fn assert_missing(error: &ParseError, token: &str, position: Position, source: &str) {
    assert!(matches!(error.err_type(), ParseErrorType::MissingToken(t, _) if t == token), "{source:?}: {error:?}");
    assert_eq!(error.position(), position, "{source:?}: {error}");
}

#[test]
fn test_position_missing_punctuation_and_keywords() {
    let engine = Engine::new();
    for (prefix, suffix, token) in [
        ("let x = 1", "let y = 2;", ";"),
        ("{ let x = 1", "let y = 2; }", ";"),
        ("(42", "", ")"),
        ("(42", ";", ")"),
        ("f(", "", ")"),
        ("f(42", "", ")"),
        ("f(42", "true)", ","),
        ("f!", "true", "("),
        ("if true", "42", "{"),
        ("if true {", "", "}"),
        ("while true", "42", "{"),
        ("loop", "42", "{"),
        ("do {}", "", "while"),
        ("for x", "42 {}", "in"),
        ("for (x", "y) in 0..1 {}", ","),
        ("for (x, y", "in 0..1 {}", ")"),
        ("try {}", "", "catch"),
        ("try {} catch (x", "{}", ")"),
        ("switch 42", "42", "{"),
        ("switch 42 {", "", "}"),
        ("switch 42 { 1", "42 }", "=>"),
        ("switch 42 { 1 => 42", "2 => 0 }", ","),
    ] {
        with_trivia(prefix, suffix, |source, position| {
            assert_missing(&engine.compile(source).unwrap_err(), token, position, source);
        });
    }
}

#[test]
fn test_position_missing_names_and_expressions() {
    let engine = Engine::new();
    for (prefix, suffix, expected) in [
        ("let", "= 1", ParseErrorType::VariableExpected),
        ("const", "= 1", ParseErrorType::VariableExpected),
        ("for", "in 0..1 {}", ParseErrorType::VariableExpected),
        ("try {} catch (", ")", ParseErrorType::VariableExpected),
        ("let x =", "", ParseErrorType::UnexpectedEOF),
        ("let x = 1 +", "", ParseErrorType::UnexpectedEOF),
        ("let x = !", "", ParseErrorType::UnexpectedEOF),
    ] {
        with_trivia(prefix, suffix, |source, position| {
            let error = engine.compile(source).unwrap_err();
            assert_eq!(error.err_type(), &expected, "{source:?}");
            assert_eq!(error.position(), position, "{source:?}");
        });
    }
    for source in ["", " \t\r\n", " /* comment */ // end"] {
        engine.compile(source).unwrap();
        let error = engine.compile_expression(source).unwrap_err();
        assert_eq!(error.err_type(), &ParseErrorType::UnexpectedEOF);
        assert_eq!(error.position(), Position::START, "{source:?}");
    }
}

#[test]
fn test_position_unexpected_tokens_point_to_the_offending_token() {
    let engine = Engine::new();
    for (prefix, suffix, token) in [("let x =", ";", ";"), ("f(1,", ";)", ";"), ("let x = !", ";", ";"), ("let x = 1 +", ";", ";"), ("let x =", "}", "}"), ("", ")", ")")] {
        with_trivia(prefix, suffix, |source, _| {
            let error = engine.compile(source).unwrap_err();
            assert_eq!(error.err_type(), &ParseErrorType::BadInput(LexError::UnexpectedInput(token.into())), "{source:?}");
            assert_eq!(error.position(), after(&source[..source.len() - suffix.len()]), "{source:?}");
        });
    }
    with_trivia("switch 1 { 1 |", "| 2 => 42 }", |source, _| {
        let error = engine.compile(source).unwrap_err();
        assert_eq!(error.err_type(), &ParseErrorType::ExprExpected("literal".into()));
        let offset = source.rfind("| 2").unwrap();
        assert_eq!(error.position(), after(&source[..offset]), "{source:?}");
    });
}

#[test]
#[cfg(not(feature = "no_index"))]
fn test_position_missing_array_and_index_tokens() {
    let engine = Engine::new();
    for (prefix, suffix, token) in [("[", "", "]"), ("[1", "", "]"), ("[1", "2]", ","), ("x[1", "", "]"), ("x[1", ";", "]")] {
        with_trivia(prefix, suffix, |source, position| {
            assert_missing(&engine.compile(source).unwrap_err(), token, position, source);
        });
    }
}

#[test]
#[cfg(not(feature = "no_object"))]
fn test_position_missing_map_and_property_tokens() {
    let engine = Engine::new();
    for (prefix, suffix, token) in [("#{", "", "}"), ("#{x", "42}", ":"), ("#{x: 1", "y: 2}", ","), ("#{x: 1", "", "}")] {
        with_trivia(prefix, suffix, |source, position| {
            assert_missing(&engine.compile(source).unwrap_err(), token, position, source);
        });
    }
    for (prefix, suffix) in [("x.", ";"), ("x?.", ""), ("#{x: 1,", ";}")] {
        with_trivia(prefix, suffix, |source, position| {
            let error = engine.compile(source).unwrap_err();
            assert_eq!(error.err_type(), &ParseErrorType::PropertyExpected);
            assert_eq!(error.position(), position, "{source:?}");
        });
    }
}

#[test]
#[cfg(not(feature = "no_function"))]
fn test_position_missing_function_tokens_and_nested_states() {
    let engine = Engine::new();
    for (prefix, suffix, expected) in [
        ("fn", "42 () {}", ParseErrorType::FnMissingName),
        ("fn", "", ParseErrorType::FnMissingName),
        ("fn foo", "{}", ParseErrorType::FnMissingParams("foo".into())),
        ("fn foo()", "", ParseErrorType::FnMissingBody("foo".into())),
    ] {
        with_trivia(prefix, suffix, |source, position| {
            let error = engine.compile(source).unwrap_err();
            assert_eq!(error.err_type(), &expected, "{source:?}");
            assert_eq!(error.position(), position, "{source:?}");
        });
    }
    for (prefix, suffix, token) in [
        ("private", "foo() {}", "fn"),
        ("fn foo(x", "y) {}", ","),
        ("fn foo(", "", ")"),
        ("fn foo() { let x = 1", "let y = 2; }", ";"),
        ("|x", "y| x", ","),
        ("|x,", "", "|"),
        ("|| { let x = 1", "let y = 2; }", ";"),
    ] {
        with_trivia(prefix, suffix, |source, position| {
            assert_missing(&engine.compile(source).unwrap_err(), token, position, source);
        });
    }
    #[cfg(not(feature = "no_object"))]
    {
        with_trivia("fn \"int\"", "foo() {}", |source, position| {
            assert_missing(&engine.compile(source).unwrap_err(), ".", position, source);
        });
        with_trivia("fn \"int\".", "42 () {}", |source, position| {
            let error = engine.compile(source).unwrap_err();
            assert_eq!(error.err_type(), &ParseErrorType::FnMissingName);
            assert_eq!(error.position(), position, "{source:?}");
        });
    }
}

#[test]
#[cfg(not(feature = "no_module"))]
fn test_position_missing_module_names() {
    let engine = Engine::new();
    for prefix in ["foo::", "import \"foo\" as", "export x as"] {
        with_trivia(prefix, ";", |source, position| {
            let error = engine.compile(source).unwrap_err();
            assert_eq!(error.err_type(), &ParseErrorType::VariableExpected);
            assert_eq!(error.position(), position, "{source:?}");
        });
    }
}

#[test]
fn test_position_source_widths_and_shared_parser_entry_points() {
    let engine = Engine::new();
    for prefix in [
        "let x = 1_000",
        "let x = -123",
        "let x = \"\\u0041\"",
        "let x = \"\u{e9}\u{1f642}\"",
        "let x = #\"raw\"#",
        "let x = ##\"raw\"##",
        "let x = `first\nsecond`",
        "let x = `a${42}b`",
        "let x = '\u{e9}'",
        "let x = true && false",
    ] {
        with_trivia(prefix, "let y = 2;", |source, position| {
            assert_missing(&engine.compile(source).unwrap_err(), ";", position, source);
        });
    }
    with_trivia("x <<=", "", |source, position| {
        let error = engine.compile(source).unwrap_err();
        assert_eq!(error.err_type(), &ParseErrorType::UnexpectedEOF);
        assert_eq!(error.position(), position, "{source:?}");
    });
    #[cfg(feature = "unicode-xid-ident")]
    with_trivia("let \u{e9} = 42", "let y = 2;", |source, position| {
        assert_missing(&engine.compile(source).unwrap_err(), ";", position, source);
    });

    let source = "(42 /* comment */ ";
    assert_missing(&engine.compile_expression(source).unwrap_err(), ")", after("(42"), source);
    assert_missing(&engine.compact_script(source).unwrap_err(), ")", after("(42"), source);
    for error in [engine.run(source).unwrap_err(), engine.eval::<rhai::Dynamic>(source).unwrap_err()] {
        assert!(matches!(*error, rhai::EvalAltResult::ErrorParsing(ParseErrorType::MissingToken(ref t, _), p) if t == ")" && p == after("(42")));
    }
    let parts = ["(4", "2 /* comment */", "\n"];
    assert_missing(&engine.compile_scripts_with_scope(&rhai::Scope::new(), &parts).unwrap_err(), ")", after("(42"), source);
    assert_missing(&engine.compile("(42;").unwrap_err(), ")", after("(42"), "(42;");
    assert_eq!(engine.eval::<rhai::INT>("let x = 40 /* comment */; x + 2").unwrap(), 42);
}

#[test]
fn test_position_invalid_input_positions_are_preserved() {
    let mut engine = Engine::new();
    engine.disable_symbol("if");
    for (source, expected, position) in [
        ("let x =   @", ParseErrorType::Reserved("@".into()), Position::new(1, 11)),
        ("let   if = 1;", ParseErrorType::Reserved("if".into()), Position::new(1, 7)),
        ("let x =   \"oops", ParseErrorType::BadInput(LexError::UnterminatedString), Position::new(1, 11)),
        ("const x = 1;   x = 2;", ParseErrorType::AssignmentToConstant("x".into()), Position::new(1, 16)),
    ] {
        let error = engine.compile(source).unwrap_err();
        assert_eq!(error.err_type(), &expected, "{source:?}");
        assert_eq!(error.position(), position, "{source:?}");
    }
    let error = engine.compile_expression("42 /* comment */ 99").unwrap_err();
    assert_eq!(error.err_type(), &ParseErrorType::BadInput(LexError::UnexpectedInput("99".into())));
    assert_eq!(error.position(), Position::new(1, 18));
    engine.set_strict_variables(true);
    let error = engine.compile("let x =   missing;").unwrap_err();
    assert_eq!(error.err_type(), &ParseErrorType::VariableUndefined("missing".into()));
    assert_eq!(error.position(), Position::new(1, 11));

    let engine = Engine::new();
    for (source, expected, position) in [
        ("if   {}", ParseErrorType::ExprExpected("a boolean".into()), Position::new(1, 6)),
        ("if   42 {}", ParseErrorType::MismatchedType("a boolean expression".into(), "a number".into()), Position::new(1, 6)),
        #[cfg(not(feature = "no_function"))]
        ("fn foo(if) {}", ParseErrorType::VariableExpected, Position::new(1, 8)),
        #[cfg(not(feature = "no_object"))]
        ("#{x: 1,   x: 2}", ParseErrorType::DuplicatedProperty("x".into()), Position::new(1, 11)),
    ] {
        let error = engine.compile(source).unwrap_err();
        assert_eq!(error.err_type(), &expected, "{source:?}");
        assert_eq!(error.position(), position, "{source:?}");
    }
    for prefix in [
        "do {}   ",
        "try {}   ",
        "for (x   ",
        "f!   ",
        #[cfg(not(feature = "no_function"))]
        "fn foo()   ",
        #[cfg(not(feature = "no_function"))]
        "fn   ",
    ] {
        let source = format!("{prefix}\"unterminated");
        let error = engine.compile(&source).unwrap_err();
        assert_eq!(error.position(), after(prefix), "{source:?}: {error}");
    }
}

#[test]
fn test_position_limits() {
    let engine = Engine::new();
    #[cfg(not(feature = "no_position"))]
    for (source, expected) in [
        (format!("{}(1 /* end */", " ".repeat(u16::MAX as usize)), Position::new(1, u16::MAX)),
        (format!("{}(1 /* end */", "\n".repeat(u16::MAX as usize)), Position::new(u16::MAX, 3)),
    ] {
        assert_missing(&engine.compile(&source).unwrap_err(), ")", expected, "saturated position");
    }
    #[cfg(feature = "no_position")]
    {
        let error = engine.compile("(1 /* end */").unwrap_err();
        assert!(error.position().is_none());
        assert_eq!(error.position().line(), None);
        assert_eq!(error.position().position(), None);
    }
}

#[test]
#[cfg(not(feature = "no_object"))]
fn test_position_json_remapping_uses_source_boundaries() {
    let engine = Engine::new();
    for (source, position) in [("{   ", Position::new(1, 2)), ("{\"x\":null   ", Position::new(1, 10))] {
        let error = engine.parse_json(source, true).unwrap_err();
        assert!(matches!(*error, rhai::EvalAltResult::ErrorParsing(ParseErrorType::MissingToken(ref t, _), p) if t == "}" && p == position), "{source:?}: {error}");
    }
    assert!(engine.parse_json("{\"x\":null}", true).is_ok());
}

#[test]
#[cfg(not(feature = "no_custom_syntax"))]
fn test_position_custom_syntax_expectations_and_callback_positions() {
    for (marker, expected) in [
        ("$ident$", ParseErrorType::VariableExpected),
        ("$symbol$", ParseErrorType::MissingSymbol(String::new())),
        ("$bool$", ParseErrorType::MissingSymbol("Expecting 'true' or 'false'".into())),
        ("$int$", ParseErrorType::MissingSymbol("Expecting an integer number".into())),
        ("$string$", ParseErrorType::MissingSymbol("Expecting a string".into())),
        #[cfg(not(feature = "no_float"))]
        ("$float$", ParseErrorType::MissingSymbol("Expecting a floating-point number".into())),
        #[cfg(not(feature = "no_function"))]
        ("$func$", ParseErrorType::MissingSymbol("Expecting '{' or '|'".into())),
    ] {
        let mut engine = Engine::new();
        engine.register_custom_syntax(["test", marker], false, |_, _| Ok(rhai::Dynamic::UNIT)).unwrap();
        with_trivia("test", "()", |source, position| {
            let error = engine.compile(source).unwrap_err();
            assert_eq!(error.err_type(), &expected, "{marker}: {source:?}");
            assert_eq!(error.position(), position, "{marker}: {source:?}");
        });
    }
    let mut engine = Engine::new();
    engine.register_custom_syntax(["test", "then"], false, |_, _| Ok(rhai::Dynamic::UNIT)).unwrap();
    with_trivia("test", "42", |source, position| {
        assert_missing(&engine.compile(source).unwrap_err(), "then", position, source);
    });
    engine.register_custom_syntax_with_state_raw("fail", |_, _, _| Err(LexError::Runtime("callback".into()).into_err(Position::NONE)), false, |_, _, _| Ok(rhai::Dynamic::UNIT));
    let error = engine.compile("fail   42").unwrap_err();
    assert_eq!(error.err_type(), &ParseErrorType::BadInput(LexError::Runtime("callback".into())));
    assert_eq!(error.position(), Position::new(1, 8));

    engine.register_custom_syntax_without_look_ahead_raw(
        "raw",
        |segments, _| {
            Ok(match segments.len() {
                1 => Some("$raw$".into()),
                2 => Some("then".into()),
                _ => None,
            })
        },
        false,
        |_, _, _| Ok(rhai::Dynamic::UNIT),
    );
    for prefix in ["raw ", "raw\n", "raw/"] {
        for suffix in ["42", ""] {
            with_trivia(prefix, suffix, |source, position| {
                assert_missing(&engine.compile(source).unwrap_err(), "then", position, source);
            });
        }
    }
    assert!(engine.compile("raw\nthen").is_ok());
}

#[test]
#[cfg(feature = "internals")]
fn test_position_token_boundaries_survive_lookahead_comments_and_eof() {
    use rhai::{ParseState, Token, TokenizerControlBlock};
    assert_eq!(TokenizerControlBlock::default(), TokenizerControlBlock::new());
    assert_eq!(TokenizerControlBlock::new().last_token_end, Position::START);
    assert_eq!(TokenizerControlBlock::new().previous_token_end, Position::START);
    let engine = Engine::new();
    let (mut tokens, control) = engine.lex(&["42 /* comment */ 99 /** doc */ \n "]);
    tokens.state.include_comments = true;
    let mut tokens = tokens.peekable();
    for (token, start, previous, end) in [
        (Token::IntegerConstant(42), 1, 0, 3),
        (Token::Comment("/* comment */".to_string().into()), 4, 3, 3),
        (Token::IntegerConstant(99), 18, 3, 20),
        (Token::Comment("/** doc */".to_string().into()), 21, 20, 20),
    ] {
        for _ in 0..2 {
            assert_eq!(tokens.peek().unwrap(), &(token.clone(), Position::new(1, start)));
            assert_eq!(control.borrow().previous_token_end, Position::new(1, previous));
            assert_eq!(control.borrow().last_token_end, Position::new(1, end));
        }
        assert_eq!(tokens.next().unwrap().0, token);
        assert_eq!(control.borrow().previous_token_end, Position::new(1, previous));
    }
    for _ in 0..3 {
        assert_eq!(tokens.next().unwrap().0, Token::EOF);
        assert_eq!(control.borrow().previous_token_end, Position::new(1, 20));
        assert_eq!(control.borrow().last_token_end, Position::new(1, 20));
    }
    let mut lib = Default::default();
    let state = ParseState::new(None, &mut tokens, control, &mut lib);
    assert_eq!(state.input.peek().unwrap().0, Token::EOF);

    let (mut tokens, control) = engine.lex(&[" /* comment */ \n "]);
    for _ in 0..3 {
        assert_eq!(tokens.next().unwrap().0, Token::EOF);
        assert_eq!(control.borrow().previous_token_end, Position::START);
        assert_eq!(control.borrow().last_token_end, Position::START);
    }
}

#[test]
#[cfg(feature = "internals")]
#[allow(deprecated)]
fn test_position_token_mapper_preserves_source_positions() {
    use rhai::Token;
    let mut engine = Engine::new();
    engine.on_parse_token(|token, pos, state| {
        if matches!(token, Token::IntegerConstant(_)) {
            assert_eq!(pos, Position::new(1, 9));
            assert_eq!(state.tokenizer_control.borrow().last_token_end, Position::new(1, 14));
            Token::Unit
        } else {
            token
        }
    });
    let source = "let x = 1_000 /* comment */ let y;";
    assert_missing(&engine.compile(source).unwrap_err(), ";", Position::new(1, 14), source);
}

#[test]
#[cfg(all(feature = "metadata", not(feature = "no_function")))]
fn test_position_documentation_comments_do_not_advance_insertion_positions() {
    let engine = Engine::new();
    for source in ["let x = 42 /** doc */ fn foo() {}", "let x = 42 /// doc\nfn foo() {}"] {
        assert_missing(&engine.compile(source).unwrap_err(), ";", after("let x = 42"), source);
    }
    assert!(engine.compile("/** doc */ fn foo() {}").is_ok());
}
