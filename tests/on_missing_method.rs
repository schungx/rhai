#![cfg(feature = "internals")]

use rhai::{Dynamic, Engine};

#[test]
fn test_missing_method_basic() {
    let mut engine = Engine::new();
    engine.on_missing_method(|name, _args, _ctx| {
        if name == "greet" {
            Ok(Some(Dynamic::from("hello")))
        } else {
            Ok(None)
        }
    });

    let result: String = engine.eval(r#"let x = 42; x.greet()"#).unwrap();
    assert_eq!(result, "hello");
}

#[test]
fn test_missing_method_fallthrough() {
    let mut engine = Engine::new();
    engine.on_missing_method(|_name, _args, _ctx| Ok(None));

    let result = engine.eval::<Dynamic>("let x = 42; x.nope()");
    assert!(result.is_err());
}

#[test]
fn test_missing_method_receives_args() {
    let mut engine = Engine::new();
    engine.on_missing_method(|name, args, _ctx| {
        if name == "add" && args.len() == 3 {
            let a = args[1].as_int().unwrap();
            let b = args[2].as_int().unwrap();
            Ok(Some(Dynamic::from(a + b)))
        } else {
            Ok(None)
        }
    });

    let result: i64 = engine.eval("let x = 0; x.add(3, 4)").unwrap();
    assert_eq!(result, 7);
}

#[test]
fn test_missing_method_not_called_for_existing() {
    use std::sync::atomic::{AtomicBool, Ordering};
    use std::sync::Arc;

    let called = Arc::new(AtomicBool::new(false));
    let called_clone = called.clone();

    let mut engine = Engine::new();
    engine.register_fn("my_existing", |x: i64| x * 2);
    engine.on_missing_method(move |_name, _args, _ctx| {
        called_clone.store(true, Ordering::SeqCst);
        Ok(None)
    });

    let result: i64 = engine.eval("let x = 21; x.my_existing()").unwrap();
    assert_eq!(result, 42);
    assert!(!called.load(Ordering::SeqCst));
}

#[test]
fn test_missing_method_error_propagation() {
    let mut engine = Engine::new();
    engine.on_missing_method(|_name, _args, _ctx| {
        Err("custom error".into())
    });

    let result = engine.eval::<Dynamic>("let x = 42; x.test()");
    assert!(result.is_err());
}

#[test]
fn test_missing_method_custom_type() {
    #[derive(Debug, Clone)]
    struct MyType(i64);

    let mut engine = Engine::new();
    engine.register_type_with_name::<MyType>("MyType");
    engine.register_fn("new_my", || MyType(10));
    engine.on_missing_method(|name, args, _ctx| {
        if name == "value" {
            if let Some(obj) = args[0].read_lock::<MyType>() {
                return Ok(Some(Dynamic::from(obj.0)));
            }
        }
        Ok(None)
    });

    let result: i64 = engine.eval("let x = new_my(); x.value()").unwrap();
    assert_eq!(result, 10);
}

#[test]
fn test_missing_method_multiple_arities() {
    let mut engine = Engine::new();
    engine.on_missing_method(|name, args, _ctx| {
        if name == "count" {
            // args[0] is self, remaining are the actual arguments
            Ok(Some(Dynamic::from((args.len() - 1) as i64)))
        } else {
            Ok(None)
        }
    });

    let r1: i64 = engine.eval("let x = 0; x.count()").unwrap();
    assert_eq!(r1, 0);
    let r2: i64 = engine.eval("let x = 0; x.count(1)").unwrap();
    assert_eq!(r2, 1);
    let r3: i64 = engine.eval("let x = 0; x.count(1, 2, 3)").unwrap();
    assert_eq!(r3, 3);
}
