#![cfg(feature = "internals")]

use rhai::{Dynamic, Engine, INT};

#[test]
#[cfg(not(feature = "no_object"))]
fn test_missing_function_basic() {
    let mut engine = Engine::new();
    #[allow(deprecated)]
    engine.on_missing_function(|name, _args, _is_method_call, _ctx| {
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
#[cfg(not(feature = "no_object"))]
fn test_missing_function_fallthrough() {
    let mut engine = Engine::new();
    #[allow(deprecated)]
    engine.on_missing_function(|_name, _args, _is_method_call, _ctx| Ok(None));

    let result = engine.eval::<Dynamic>("let x = 42; x.nope()");
    assert!(result.is_err());
}

#[test]
#[cfg(not(feature = "no_object"))]
fn test_missing_function_receives_args() {
    let mut engine = Engine::new();
    #[allow(deprecated)]
    engine.on_missing_function(|name, args, _is_method_call, _ctx| {
        if name == "add" && args.len() == 3 {
            let a = args[1].as_int().unwrap();
            let b = args[2].as_int().unwrap();
            Ok(Some(Dynamic::from(a + b)))
        } else {
            Ok(None)
        }
    });

    let result: INT = engine.eval("let x = 0; x.add(3, 4)").unwrap();
    assert_eq!(result, 7);
}

#[test]
#[cfg(not(feature = "no_object"))]
fn test_missing_function_not_called_for_existing() {
    use std::sync::atomic::{AtomicBool, Ordering};
    use std::sync::Arc;

    let called = Arc::new(AtomicBool::new(false));
    let called_clone = called.clone();

    let mut engine = Engine::new();
    engine.register_fn("my_existing", |x: INT| x * 2);
    #[allow(deprecated)]
    engine.on_missing_function(move |_name, _args, _is_method_call, _ctx| {
        called_clone.store(true, Ordering::SeqCst);
        Ok(None)
    });

    let result: INT = engine.eval("let x = 21; x.my_existing()").unwrap();
    assert_eq!(result, 42);
    assert!(!called.load(Ordering::SeqCst));
}

#[test]
#[cfg(not(feature = "no_object"))]
fn test_missing_function_error_propagation() {
    let mut engine = Engine::new();
    #[allow(deprecated)]
    engine.on_missing_function(|_name, _args, _is_method_call, _ctx| {
        Err("custom error".into())
    });

    let result = engine.eval::<Dynamic>("let x = 42; x.test()");
    assert!(result.is_err());
}

#[test]
#[cfg(not(feature = "no_object"))]
fn test_missing_function_custom_type() {
    #[derive(Debug, Clone)]
    struct MyType(INT);

    let mut engine = Engine::new();
    engine.register_type_with_name::<MyType>("MyType");
    engine.register_fn("new_my", || MyType(10));
    #[allow(deprecated)]
    engine.on_missing_function(|name, args, _is_method_call, _ctx| {
        if name == "value" {
            if let Some(obj) = args[0].read_lock::<MyType>() {
                return Ok(Some(Dynamic::from(obj.0)));
            }
        }
        Ok(None)
    });

    let result: INT = engine.eval("let x = new_my(); x.value()").unwrap();
    assert_eq!(result, 10);
}

#[test]
#[cfg(not(feature = "no_object"))]
fn test_missing_function_multiple_arities() {
    let mut engine = Engine::new();
    #[allow(deprecated)]
    engine.on_missing_function(|name, args, _is_method_call, _ctx| {
        if name == "count" {
            // args[0] is self, remaining are the actual arguments
            Ok(Some(Dynamic::from((args.len() - 1) as INT)))
        } else {
            Ok(None)
        }
    });

    let r1: INT = engine.eval("let x = 0; x.count()").unwrap();
    assert_eq!(r1, 0);
    let r2: INT = engine.eval("let x = 0; x.count(1)").unwrap();
    assert_eq!(r2, 1);
    let r3: INT = engine.eval("let x = 0; x.count(1, 2, 3)").unwrap();
    assert_eq!(r3, 3);
}

#[test]
#[cfg(not(feature = "no_object"))]
fn test_missing_function_is_method_call_flag() {
    use std::sync::atomic::{AtomicBool, Ordering};
    use std::sync::Arc;

    let saw_method = Arc::new(AtomicBool::new(false));
    let saw_method_clone = saw_method.clone();

    let mut engine = Engine::new();
    #[allow(deprecated)]
    engine.on_missing_function(move |name, _args, is_method_call, _ctx| {
        if name == "greet" {
            saw_method_clone.store(is_method_call, Ordering::SeqCst);
            Ok(Some(Dynamic::from("hello")))
        } else {
            Ok(None)
        }
    });

    // Method-style call: is_method_call should be true
    let _: String = engine.eval(r#"let x = 42; x.greet()"#).unwrap();
    assert!(
        saw_method.load(Ordering::SeqCst),
        "method-style call should set is_method_call=true"
    );
}
