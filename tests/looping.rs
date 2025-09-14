use rhai::{Engine, ParseErrorType, INT};

#[test]
fn test_loop() {
    let engine = Engine::new();

    assert_eq!(
        engine
            .eval::<INT>(
                "
                    let x = 0;
                    let i = 0;

                    loop {
                        if i < 10 {
                            i += 1;
                            if x > 20 { continue; }
                            x += i;
                        } else {
                            break;
                        }
                    }

                    x
                "
            )
            .unwrap(),
        21
    );

    assert_eq!(
        engine
            .eval::<INT>(
                "
                    for n in 0..10 {
                        let x = if n <= 5 { n };
                        x ?? break 42;
                    }
                "
            )
            .unwrap(),
        42
    );

    assert_eq!(*engine.compile("let x = 0; break;").unwrap_err().err_type(), ParseErrorType::LoopBreak);

    #[cfg(not(feature = "no_function"))]
    assert_eq!(*engine.compile("loop { let f = || { break;  } }").unwrap_err().err_type(), ParseErrorType::LoopBreak);

    assert_eq!(*engine.compile("let x = 0; if x > 0 { continue; }").unwrap_err().err_type(), ParseErrorType::LoopBreak);
}

#[test]
fn test_loop_expression() {
    let mut engine = Engine::new();

    assert_eq!(
        engine
            .eval::<INT>(
                "
                    let x = 0;

                    let value = while x < 10 {
                        if x % 5 == 0 { break 42; }
                        x += 1;
                    };

                    value
                "
            )
            .unwrap(),
        42
    );

    engine.set_allow_loop_expressions(false);

    let _ = engine
        .eval::<INT>(
            "
				let x = 0;

				let value = while x < 10 {
                    if x % 5 == 0 { break 42; }
                    x += 1;
				};

				value
		    ",
        )
        .unwrap_err();
}
