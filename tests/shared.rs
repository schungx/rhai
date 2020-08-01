#![cfg(not(feature = "no_shared"))]

use rhai::{Array, Dynamic, Engine, EvalAltResult, FnPtr, Module, RegisterFn, INT};
use std::any::TypeId;

#[test]
fn test_shared() -> Result<(), Box<EvalAltResult>> {
    let mut engine = Engine::new();

    assert_eq!(engine.eval::<INT>("shared(42)")?, 42);

    assert_eq!(engine.eval::<bool>("shared(true)")?, true);

    #[cfg(not(feature = "no_float"))]
    assert_eq!(engine.eval::<f64>("shared(4.2)")?, 4.2);

    assert_eq!(engine.eval::<String>(r#"shared("test")"#)?, "test");

    assert_eq!(engine.eval::<char>("shared('x')")?, 'x');

    assert!(engine.eval::<bool>("is_shared(shared(42))")?);

    #[cfg(not(feature = "no_object"))]
    assert!(engine.eval::<bool>("shared(42).is_shared()")?);

    #[cfg(not(feature = "no_index"))]
    {
        assert_eq!(
            engine.eval::<String>(
                r#"
                    let s = shared("test");
                    let i = shared(0);
                    i = 2;
                    s[i] = 'S';

                    s
                "#
            )?,
            "teSt"
        );

        assert_eq!(
            engine
                .eval::<Array>(
                    r#"
                    let x = shared([1, 2, 3]);
                    let y = shared([4, 5]);
                    x + y
                "#
                )?
                .len(),
            5
        );

        #[cfg(not(feature = "no_object"))]
        assert_eq!(
            engine.eval::<INT>(
                r"
                    let x = shared([2, 9]);
                    x.insert(-1, 1);
                    x.insert(999, 3);

                    let r = x.remove(2);

                    let y = shared([4, 5]);
                    x.append(y);

                    x.len + r
               "
            )?,
            14
        );

        assert_eq!(
            engine.eval::<bool>(
                r#"
                    let x = shared([1, 2, 3]);

                    if x[0] + x[2] == 4 {
                        true
                    } else {
                        false
                    }
                "#
            )?,
            true
        );

        #[cfg(not(feature = "no_function"))]
        #[cfg(not(feature = "no_object"))]
        assert_eq!(
            engine.eval::<INT>(
                r#"
                    let x = shared([1, 2, 3]);
                    let y = shared(());

                    (|| {
                        for i in x {
                            y = i * 10;
                        }
                    }).call();

                    y
                "#
            )?,
            30
        );
    }

    #[cfg(not(feature = "no_object"))]
    assert_eq!(
        engine.eval::<INT>(
            r#"
                let y = shared(#{a: 1, b: 2, c: 3});
                y.c = shared(5);
                y.c
            "#
        )?,
        5
    );

    #[cfg(not(feature = "no_object"))]
    assert_eq!(
        engine.eval::<INT>(
            r#"
                let y = shared(#{a: 1, b: 2, c: shared(3)});
                let c = y.c;
                c = 5;// "c" holds Dynamic Shared
                y.c
            "#
        )?,
        5
    );

    #[cfg(not(feature = "no_function"))]
    #[cfg(not(feature = "no_capture"))]
    assert_eq!(
        engine.eval::<INT>(
            r#"
                let x = shared(1);
                (|| x = x + 41).call();
                x
            "#
        )?,
        42
    );

    #[cfg(not(feature = "no_function"))]
    #[cfg(not(feature = "no_object"))]
    #[cfg(not(feature = "no_capture"))]
    assert_eq!(
        engine.eval::<INT>(
            r#"
                let x = shared(#{a: 1, b: shared(2), c: 3});
                let a = x.a;
                let b = x.b;
                a = 100; // does not hold reference to x.a
                b = 20; // does hold reference to x.b

                let f = |a| {
                    x.c = x.a + x.b + a;
                };

                f.call(21);

                x.c
            "#
        )?,
        42
    );

    // Register a binary function named `foo`
    engine.register_fn("custom_addition", |x: INT, y: INT| x + y);

    assert_eq!(
        engine.eval::<INT>("custom_addition(shared(20), shared(22))")?,
        42
    );

    #[cfg(not(feature = "no_object"))]
    {
        #[derive(Clone)]
        struct TestStruct {
            x: INT,
        }

        impl TestStruct {
            fn update(&mut self) {
                self.x += 1000;
            }

            fn merge(&mut self, other: Self) {
                self.x += other.x;
            }

            fn get_x(&mut self) -> INT {
                self.x
            }

            fn set_x(&mut self, new_x: INT) {
                self.x = new_x;
            }

            fn new() -> Self {
                TestStruct { x: 1 }
            }
        }

        engine
            .register_type::<TestStruct>()
            .register_get_set("x", TestStruct::get_x, TestStruct::set_x)
            .register_fn("update", TestStruct::update)
            .register_fn("merge", TestStruct::merge)
            .register_fn("new_ts", TestStruct::new)
            .register_raw_fn(
                "mutate_with_cb",
                &[
                    TypeId::of::<TestStruct>(),
                    TypeId::of::<INT>(),
                    TypeId::of::<FnPtr>(),
                ],
                move |engine: &Engine, lib: &Module, args: &mut [&mut Dynamic]| {
                    let fp = std::mem::take(args[2]).cast::<FnPtr>();
                    let mut value = args[1].clone();
                    {
                        let mut lock = value.write_lock::<INT>().unwrap();
                        *lock = *lock + 1;
                    }
                    let this_ptr = args.get_mut(0).unwrap();

                    fp.call_dynamic(engine, lib, Some(this_ptr), [value])
                },
            );

        assert_eq!(
            engine.eval::<INT>(
                r"
                    let a = shared(new_ts());

                    a.x = 100;
                    a.update();
                    a.merge(a.take()); // take is important to prevent a deadlock

                    a.x
                "
            )?,
            2200
        );

        assert_eq!(
            engine.eval::<INT>(
                r"
                    let a = shared(new_ts());
                    let b = shared(100);

                    a.mutate_with_cb(b, |param| {
                        this.x = param;
                        param = 50;
                        this.update();
                    });

                    a.update();
                    a.x += b;

                    a.x
                "
            )?,
            2151
        );
    }

    Ok(())
}

#[test]
fn test_shared_refs() -> Result<(), Box<EvalAltResult>> {
    let mut engine = Engine::new();

    assert_eq!(
        engine.eval::<INT>(r"
            let x = shared(42);

            x = x;

            x
        ")?,
        42
    );

    Ok(())
}
