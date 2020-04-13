use rhai::{Engine, EvalAltResult, INT};

#[test]
fn test_string() -> Result<(), EvalAltResult> {
    let engine = Engine::new();

    assert_eq!(
        engine.eval::<String>(r#""Test string: \u2764""#)?,
        "Test string: ❤"
    );
    assert_eq!(
        engine.eval::<String>(r#""Test string: \x58""#)?,
        "Test string: X"
    );
    assert_eq!(engine.eval::<String>(r#""\"hello\"""#)?, r#""hello""#);

    assert_eq!(engine.eval::<String>(r#""foo" + "bar""#)?, "foobar");

    assert!(engine.eval::<bool>(r#"let y = "hello, world!"; "world" in y"#)?);
    assert!(engine.eval::<bool>(r#"let y = "hello, world!"; 'w' in y"#)?);
    assert!(!engine.eval::<bool>(r#"let y = "hello, world!"; "hey" in y"#)?);

    #[cfg(not(feature = "no_stdlib"))]
    assert_eq!(engine.eval::<String>(r#""foo" + 123"#)?, "foo123");

    #[cfg(not(feature = "no_stdlib"))]
    #[cfg(not(feature = "no_object"))]
    assert_eq!(engine.eval::<String>("(42).to_string()")?, "42");

    #[cfg(not(feature = "no_float"))]
    #[cfg(not(feature = "no_stdlib"))]
    assert_eq!(engine.eval::<String>(r#""foo" + 123.4556"#)?, "foo123.4556");

    Ok(())
}

#[cfg(not(feature = "no_stdlib"))]
#[cfg(not(feature = "no_object"))]
#[test]
fn test_string_substring() -> Result<(), EvalAltResult> {
    let engine = Engine::new();

    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.sub_string(-1, 2)"#
        )?,
        "❤❤"
    );

    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.sub_string(1, 5)"#
        )?,
        "❤❤ he"
    );

    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.sub_string(1)"#
        )?,
        "❤❤ hello! ❤❤❤"
    );

    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.sub_string(99)"#
        )?,
        ""
    );

    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.sub_string(1, -1)"#
        )?,
        ""
    );

    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.sub_string(1, 999)"#
        )?,
        "❤❤ hello! ❤❤❤"
    );

    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.crop(1, -1); x"#
        )?,
        ""
    );

    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.crop(4, 6); x"#
        )?,
        "hello!"
    );

    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.crop(1, 999); x"#
        )?,
        "❤❤ hello! ❤❤❤"
    );

    assert_eq!(
        engine.eval::<INT>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.index_of('\u2764')"#
        )?,
        0
    );

    assert_eq!(
        engine.eval::<INT>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.index_of('\u2764', 5)"#
        )?,
        11
    );

    assert_eq!(
        engine.eval::<INT>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.index_of('\u2764', -1)"#
        )?,
        0
    );

    assert_eq!(
        engine.eval::<INT>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.index_of('\u2764', 999)"#
        )?,
        -1
    );

    assert_eq!(
        engine.eval::<INT>(
            r#"let x = "\u2764\u2764\u2764 hello! \u2764\u2764\u2764"; x.index_of('x')"#
        )?,
        -1
    );

    Ok(())
}

#[test]
fn test_reverse() -> Result<(), EvalAltResult> {
    let engine = Engine::new();

    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764"; x.reverse()"#
        )?,
        "❤❤"
    );
    assert_eq!(
        engine.eval::<String>(
            r#"let x = "\u2764\u2764\u2764 hello!"; x.reverse()"#
        )?,
        "!olleh ❤❤❤"
    );

    Ok(())
}
