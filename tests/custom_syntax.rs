use rhai::{
    Dynamic, Engine, EvalAltResult, ImmutableString, LexError, ParseErrorType, Position, INT,
};

#[test]
fn test_custom_syntax() -> Result<(), Box<EvalAltResult>> {
    let mut engine = Engine::new();

    engine.consume("while false {}")?;

    // Disable 'while' and make sure it still works with custom syntax
    engine.disable_symbol("while");
    assert!(matches!(
        *engine.compile("while false {}").expect_err("should error").0,
        ParseErrorType::Reserved(err) if err == "while"
    ));
    assert!(matches!(
        *engine.compile("let while = 0").expect_err("should error").0,
        ParseErrorType::Reserved(err) if err == "while"
    ));

    engine.register_custom_syntax(
        &[
            "exec", "[", "$ident$", "$symbol$", "$int$", "]", "->", "$block$", "while", "$expr$",
        ],
        true,
        |context, inputs| {
            let var_name = inputs[0].get_variable_name().unwrap().to_string();
            let op = inputs[1].get_literal_value::<ImmutableString>().unwrap();
            let max = inputs[2].get_literal_value::<INT>().unwrap();
            let stmt = inputs.get(3).unwrap();
            let condition = inputs.get(4).unwrap();

            context.scope_mut().push(var_name.clone(), 0 as INT);

            let mut count: INT = 0;

            loop {
                let done = match op.as_str() {
                    "<" => count >= max,
                    "<=" => count > max,
                    ">" => count <= max,
                    ">=" => count < max,
                    "==" => count != max,
                    "!=" => count == max,
                    _ => return Err(format!("Unsupported operator: {}", op).into()),
                };

                if done {
                    break;
                }

                context.eval_expression_tree(stmt)?;
                count += 1;

                context
                    .scope_mut()
                    .push(format!("{}{}", var_name, count), count);

                let stop = !context
                    .eval_expression_tree(condition)?
                    .as_bool()
                    .map_err(|err| {
                        Box::new(EvalAltResult::ErrorMismatchDataType(
                            "bool".to_string(),
                            err.to_string(),
                            condition.position(),
                        ))
                    })?;

                if stop {
                    break;
                }
            }

            Ok(count.into())
        },
    )?;

    assert!(matches!(
        *engine
            .consume("let foo = (exec [x<<15] -> { x += 2 } while x < 42) * 10;")
            .expect_err("should error"),
        EvalAltResult::ErrorRuntime(_, _)
    ));

    assert_eq!(
        engine.eval::<INT>(
            "
                let x = 0;
                let foo = (exec [x<15] -> { x += 2 } while x < 42) * 10;
                foo
            "
        )?,
        150
    );
    assert_eq!(
        engine.eval::<INT>(
            "
                let x = 0;
                exec [x<100] -> { x += 1 } while x < 42;
                x
            "
        )?,
        42
    );
    assert_eq!(
        engine.eval::<INT>(
            "
                exec [x<100] -> { x += 1 } while x < 42;
                x
            "
        )?,
        42
    );
    assert_eq!(
        engine.eval::<INT>(
            "
                let foo = 123;
                exec [x<15] -> { x += 1 } while x < 42;
                foo + x + x1 + x2 + x3
            "
        )?,
        144
    );

    // The first symbol must be an identifier
    assert_eq!(
        *engine
            .register_custom_syntax(&["!"], false, |_, _| Ok(Dynamic::UNIT))
            .expect_err("should error")
            .0,
        ParseErrorType::BadInput(LexError::ImproperSymbol(
            "!".to_string(),
            "Improper symbol for custom syntax at position #1: '!'".to_string()
        ))
    );

    Ok(())
}

#[test]
fn test_custom_syntax_raw() -> Result<(), Box<EvalAltResult>> {
    let mut engine = Engine::new();

    engine.register_custom_syntax_raw(
        "hello",
        |stream, _| match stream.len() {
            0 => unreachable!(),
            1 => Ok(Some("$ident$".into())),
            2 => match stream[1].as_str() {
                "world" | "kitty" => Ok(None),
                s => Err(LexError::ImproperSymbol(s.to_string(), Default::default())
                    .into_err(Position::NONE)
                    .into()),
            },
            _ => unreachable!(),
        },
        true,
        |context, inputs| {
            context.scope_mut().push("foo", 999 as INT);

            Ok(match inputs[0].get_variable_name().unwrap() {
                "world" => 123 as INT,
                "kitty" => 42 as INT,
                _ => unreachable!(),
            }
            .into())
        },
    );

    assert_eq!(engine.eval::<INT>("hello world")?, 123);
    assert_eq!(engine.eval::<INT>("hello kitty")?, 42);
    assert_eq!(
        engine.eval::<INT>("let foo = 0; (hello kitty) + foo")?,
        1041
    );
    assert_eq!(engine.eval::<INT>("(hello kitty) + foo")?, 1041);
    assert_eq!(
        *engine.compile("hello hey").expect_err("should error").0,
        ParseErrorType::BadInput(LexError::ImproperSymbol("hey".to_string(), "".to_string()))
    );

    Ok(())
}
