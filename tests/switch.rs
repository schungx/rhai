#[cfg(feature = "internals")]
use rhai::{ASTNode, Expr};
use rhai::{Engine, ParseErrorType, Scope, INT};

#[test]
fn test_switch() {
    let engine = Engine::new();
    let mut scope = Scope::new();
    scope.push("x", 42 as INT);

    assert_eq!(engine.eval::<char>("switch 2 { 1 => (), 2 => 'a', 42 => true }").unwrap(), 'a');
    engine.run("switch 3 { 1 => (), 2 => 'a', 42 => true }").unwrap();
    assert_eq!(engine.eval::<INT>("switch 3 { 1 => (), 2 => 'a', 42 => true, _ => 123 }").unwrap(), 123);
    assert_eq!(engine.eval_with_scope::<INT>(&mut scope, "switch 2 { 1 => (), 2 if x < 40 => 'a', 42 => true, _ => 123 }").unwrap(), 123);
    assert_eq!(engine.eval_with_scope::<char>(&mut scope, "switch 2 { 1 => (), 2 if x > 40 => 'a', 42 => true, _ => 123 }").unwrap(), 'a');
    assert!(engine.eval_with_scope::<bool>(&mut scope, "switch x { 1 => (), 2 => 'a', 42 => true }").unwrap());
    assert!(engine.eval_with_scope::<bool>(&mut scope, "switch x { 1 => (), 2 => 'a', _ => true }").unwrap());
    let _: () = engine.eval_with_scope::<()>(&mut scope, "switch x { 1 => 123, 2 => 'a' }").unwrap();

    assert_eq!(engine.eval_with_scope::<INT>(&mut scope, "switch x { 1 | 2 | 3 | 5..50 | 'x' | true => 123, 'z' => 'a' }").unwrap(), 123);
    assert_eq!(engine.eval_with_scope::<INT>(&mut scope, "switch x { 424242 => 123, _ => 42 }").unwrap(), 42);
    assert_eq!(engine.eval_with_scope::<INT>(&mut scope, "switch x { 1 => 123, 42 => { x / 2 }, _ => 999 }").unwrap(), 21);
    #[cfg(not(feature = "no_index"))]
    assert_eq!(
        engine
            .eval_with_scope::<INT>(
                &mut scope,
                "
                    let y = [1, 2, 3];

                    switch y {
                        42 => 1,
                        true => 2,
                        [1, 2, 3] => 3,
                        _ => 9
                    }
                "
            )
            .unwrap(),
        3
    );
    #[cfg(not(feature = "no_object"))]
    assert_eq!(
        engine
            .eval_with_scope::<INT>(
                &mut scope,
                "
                    let y = #{a:1, b:true, c:'x'};

                    switch y {
                        42 => 1,
                        true => 2,
                        #{b:true, c:'x', a:1} => 3,
                        _ => 9
                    }
                "
            )
            .unwrap(),
        3
    );
    assert_eq!(engine.eval::<bool>("let x = 1..42; switch x { 1 => (), 2 => 'a', 1..42 => true }").unwrap(), true);

    assert_eq!(engine.eval_with_scope::<INT>(&mut scope, "switch 42 { 42 => 123, 42 => 999 }").unwrap(), 123);

    assert_eq!(engine.eval_with_scope::<INT>(&mut scope, "switch x { 42 => 123, 42 => 999 }").unwrap(), 123);
}

#[test]
fn test_switch_errors() {
    let engine = Engine::new();

    assert!(matches!(engine.compile("switch x { _ => 123, 1 => 42 }").unwrap_err().err_type(), ParseErrorType::WrongSwitchDefaultCase));
}

#[test]
fn test_switch_condition() {
    let engine = Engine::new();
    let mut scope = Scope::new();
    scope.push("x", 42 as INT);

    assert_eq!(
        engine
            .eval_with_scope::<INT>(
                &mut scope,
                "
                    switch x / 2 {
                        21 if x > 40 => 1,
                        0 if x < 100 => 2,
                        1 => 3,
                        _ => 9
                    }
                "
            )
            .unwrap(),
        1
    );

    assert_eq!(
        engine
            .eval_with_scope::<INT>(
                &mut scope,
                "
                    switch x / 2 {
                        21 if x < 40 => 1,
                        0 if x < 100 => 2,
                        1 => 3,
                        _ => 9
                    }
                "
            )
            .unwrap(),
        9
    );

    assert_eq!(
        engine
            .eval_with_scope::<INT>(
                &mut scope,
                "
                    switch x {
                        42 if x < 40 => 1,
                        42 if x > 40 => 7,
                        0 if x < 100 => 2,
                        1 => 3,
                        42 if x == 10 => 10,
                        _ => 9
                    }
                "
            )
            .unwrap(),
        7
    );

    assert!(matches!(engine.compile("switch x { 1 => 123, _ if true => 42 }").unwrap_err().err_type(), ParseErrorType::WrongSwitchCaseCondition));
}

#[cfg(not(feature = "no_index"))]
#[cfg(not(feature = "no_object"))]
mod test_switch_enum {
    use super::*;
    use rhai::Array;
    #[derive(Debug, Clone)]
    #[allow(dead_code)]
    enum MyEnum {
        Foo,
        Bar(INT),
        Baz(String, bool),
    }

    impl MyEnum {
        fn get_enum_data(&mut self) -> Array {
            match self {
                Self::Foo => vec!["Foo".into()] as Array,
                Self::Bar(num) => vec!["Bar".into(), (*num).into()] as Array,
                Self::Baz(name, option) => vec!["Baz".into(), name.clone().into(), (*option).into()] as Array,
            }
        }
    }

    #[test]
    fn test_switch_enum() {
        let mut engine = Engine::new();

        engine.register_type_with_name::<MyEnum>("MyEnum").register_get("get_data", MyEnum::get_enum_data);

        let mut scope = Scope::new();
        scope.push("x", MyEnum::Baz("hello".to_string(), true));

        assert_eq!(
            engine
                .eval_with_scope::<INT>(
                    &mut scope,
                    r#"
                        switch x.get_data {
                            ["Foo"] => 1,
                            ["Bar", 42] => 2,
                            ["Bar", 123] => 3,
                            ["Baz", "hello", false] => 4,
                            ["Baz", "hello", true] => 5,
                            _ => 9
                        }
                    "#
                )
                .unwrap(),
            5
        );
    }
}

#[test]
fn test_switch_ranges() {
    let engine = Engine::new();
    let mut scope = Scope::new();
    scope.push("x", 42 as INT);

    assert_eq!(
        engine
            .eval_with_scope::<char>(&mut scope, "switch x { 10..20 => (), 20..=42 => 'a', 25..45 => 'z', 30..100 => true }")
            .unwrap(),
        'a'
    );
    assert_eq!(
        engine
            .eval_with_scope::<char>(&mut scope, "switch x { 10..20 => (), 20..=42 if x < 40 => 'a', 25..45 => 'z', 30..100 => true }")
            .unwrap(),
        'z'
    );
    assert_eq!(
        engine
            .eval_with_scope::<char>(&mut scope, "switch x { 42 => 'x', 10..20 => (), 20..=42 => 'a', 25..45 => 'z', 30..100 => true, 'w' => true }")
            .unwrap(),
        'x'
    );
    assert!(matches!(
        engine
            .compile("switch x { 10..20 => (), 20..=42 => 'a', 25..45 => 'z', 42 => 'x', 30..100 => true }")
            .unwrap_err()
            .err_type(),
        ParseErrorType::WrongSwitchIntegerCase
    ));
    #[cfg(not(feature = "no_float"))]
    assert!(matches!(
        engine
            .compile("switch x { 10..20 => (), 20..=42 => 'a', 25..45 => 'z', 42.0 => 'x', 30..100 => true }")
            .unwrap_err()
            .err_type(),
        ParseErrorType::WrongSwitchIntegerCase
    ));
    assert_eq!(
        engine
            .eval_with_scope::<char>(
                &mut scope,
                "
                    switch 5 {
                        'a' => true,
                        0..10 if x+2==1+2 => print(40+2),
                        _ => 'x'
                    }
                "
            )
            .unwrap(),
        'x'
    );
    assert_eq!(
        engine
            .eval_with_scope::<INT>(
                &mut scope,
                "
                    switch 5 {
                        'a' => true,
                        0..10 => 123,
                        2..12 => 'z',
                        _ => 'x'
                    }
                "
            )
            .unwrap(),
        123
    );
    assert_eq!(
        engine
            .eval_with_scope::<INT>(
                &mut scope,
                "
                    switch 5 {
                        'a' => true,
                        4 | 5 | 6 => 42,
                        0..10 => 123,
                        2..12 => 'z',
                        _ => 'x'
                    }
                "
            )
            .unwrap(),
        42
    );
    assert_eq!(
        engine
            .eval_with_scope::<char>(
                &mut scope,
                "
                    switch 5 {
                        'a' => true,
                        2..12 => 'z',
                        0..10 if x+2==1+2 => print(40+2),
                        _ => 'x'
                    }
                "
            )
            .unwrap(),
        'z'
    );
    assert_eq!(
        engine
            .eval_with_scope::<char>(
                &mut scope,
                "
                    switch 5 {
                        'a' => true,
                        0..10 if x+2==1+2 => print(40+2),
                        2..12 => 'z',
                        _ => 'x'
                    }
                "
            )
            .unwrap(),
        'z'
    );
}

/// AST walk tests — verify that `walk` visits the body of the `switch` default case.

#[test]
#[cfg(feature = "internals")]
fn test_switch_walk_visits_default_case_body() {
    let engine = Engine::new();
    // `extra` is inside the default branch body and must be visited.
    let ast = engine
        .compile(
            r#"
                switch action {
                    1 => foo(),
                    _ => bar(extra)
                }
            "#,
        )
        .unwrap();

    let mut vars: Vec<String> = Vec::new();
    ast.walk(&mut |nodes: &[ASTNode]| {
        if let Some(ASTNode::Expr(Expr::Variable(info, _, _))) = nodes.last() {
            vars.push(info.1.to_string());
        }
        true
    });

    assert!(vars.contains(&"extra".to_string()), "walk should visit `extra` in the default branch body");
}

#[test]
#[cfg(feature = "internals")]
fn test_switch_walk_visits_all_case_bodies_and_default() {
    let engine = Engine::new();
    let ast = engine
        .compile(
            r#"
                switch x {
                    1 => arm_one(a),
                    2 => arm_two(b),
                    _ => arm_default(c)
                }
            "#,
        )
        .unwrap();

    let mut vars: Vec<String> = Vec::new();
    ast.walk(&mut |nodes: &[ASTNode]| {
        if let Some(ASTNode::Expr(Expr::Variable(info, _, _))) = nodes.last() {
            vars.push(info.1.to_string());
        }
        true
    });

    for name in &["x", "a", "b", "c"] {
        assert!(vars.contains(&name.to_string()), "walk should visit `{name}`", name = name);
    }
}

#[test]
#[cfg(feature = "internals")]
fn test_switch_walk_default_only() {
    let engine = Engine::new();
    // A switch with only a default arm — the body must still be visited.
    let ast = engine.compile("switch x { _ => fallback(y) }").unwrap();

    let mut vars: Vec<String> = Vec::new();
    ast.walk(&mut |nodes: &[ASTNode]| {
        if let Some(ASTNode::Expr(Expr::Variable(info, _, _))) = nodes.last() {
            vars.push(info.1.to_string());
        }
        true
    });

    assert!(vars.contains(&"y".to_string()), "walk should visit `y` inside the default-only branch body");
}
