use rhai::Engine;

#[test]
fn test_chars() {
    let engine = Engine::new();

    assert_eq!(engine.eval::<char>("'y'").unwrap(), 'y');
    assert_eq!(engine.eval::<char>(r"'\''").unwrap(), '\'');
    assert_eq!(engine.eval::<char>(r#"'"'"#).unwrap(), '"');
    assert_eq!(engine.eval::<char>(r"'\u2764'").unwrap(), '❤');

    #[cfg(not(feature = "no_index"))]
    assert_eq!(engine.eval::<char>(r#"let x="hello"; x[2]"#).unwrap(), 'l');
    #[cfg(not(feature = "no_index"))]
    assert_eq!(engine.eval::<String>(r#"let y="hello"; y[2]='$'; y"#).unwrap(), "he$lo");

    let _ = engine.eval::<char>(r"'\uhello'").unwrap_err();
    let _ = engine.eval::<char>("''").unwrap_err();
}
