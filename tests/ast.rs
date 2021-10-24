use rhai::{Engine, EvalAltResult, Expr, Stmt};

#[cfg(feature = "metadata")]
#[cfg(not(feature = "no_position"))]
#[test]
fn test_ast_serde() -> Result<(), Box<EvalAltResult>> {
    let mut engine = Engine::new();
    #[cfg(not(feature = "no_optimize"))]
    engine.set_optimization_level(rhai::OptimizationLevel::None);

    // Expression
    let ast = engine.compile_expression("42")?;
    let json = serde_json::to_string(ast.statements()).unwrap();
    assert_eq!(
        json,
        r#"[{"type":"expr","body":{"type":"int","body":42,"pos":[1,1]}}]"#
    );

    let statements: Vec<Stmt> = serde_json::from_str(&json).unwrap();
    println!("{:?}", statements);

    // Expression
    let ast = engine.compile_expression(r#"#{ a:42, b:true, c:"hello", d:() }"#)?;
    let json = serde_json::to_string(ast.statements()).unwrap();
    assert_eq!(
        json,
        r#"[{"type":"expr","body":{"type":"map","body":[[{"name":"a","pos":[1,4]},{"type":"int","body":42,"pos":[1,6]}],[{"name":"b","pos":[1,10]},{"type":"true","pos":[1,12]}],[{"name":"c","pos":[1,18]},{"type":"string","body":"hello","pos":[1,20]}],[{"name":"d","pos":[1,29]},{"type":"unit","pos":[1,31]}]],"pos":[1,1]}}]"#
    );

    let statements: Vec<Stmt> = serde_json::from_str(&json).unwrap();
    println!("{:?}", statements);

    // Statement
    let ast = engine.compile("return 42;")?;
    let json = serde_json::to_string(ast.statements()).unwrap();
    assert_eq!(
        json,
        r#"[{"type":"return","flag":0,"body":{"type":"int","body":42,"pos":[1,8]},"pos":[1,1]}]"#
    );

    let statements: Vec<Stmt> = serde_json::from_str(&json).unwrap();
    println!("{:?}", statements);

    // Statement
    let ast = engine.compile("for (x, i) in [1,2,3] { if true { 42 } else { 0 } }")?;
    let json = serde_json::to_string(ast.statements()).unwrap();
    assert_eq!(
        json,
        r#"[{"type":"for","name":{"name":"x","pos":[1,6]},"name2":{"name":"i","pos":[1,9]},"cond":{"type":"array","body":[{"type":"int","body":1,"pos":[1,16]},{"type":"int","body":2,"pos":[1,18]},{"type":"int","body":3,"pos":[1,20]}],"pos":[1,15]},"body":[{"type":"if","cond":{"type":"true","pos":[1,28]},"lhs":[{"type":"expr","body":{"type":"int","body":42,"pos":[1,35]}}],"pos2":[1,33],"rhs":[{"type":"expr","body":{"type":"int","body":0,"pos":[1,47]}}],"pos2":[1,45],"pos":[1,25]}],"pos2":[1,23],"pos":[1,1]}]"#
    );

    let statements: Vec<Stmt> = serde_json::from_str(&json).unwrap();
    println!("{:?}", statements);

    Ok(())
}
