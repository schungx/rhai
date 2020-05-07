#![cfg(not(feature = "no_object"))]

use rhai::{Engine, EvalAltResult, RegisterFn, INT};

#[test]
fn test_get_set() -> Result<(), Box<EvalAltResult>> {
    #[derive(Clone)]
    struct TestStruct {
        x: INT,
        y: INT,
        array: Vec<INT>,
    }

    impl TestStruct {
        fn get_mut_x(&mut self) -> &mut INT {
            &mut self.x
        }

        fn set_x(&mut self, new_x: INT) {
            self.x = new_x;
        }

        fn get_y(&mut self) -> INT {
            self.y
        }

        fn new() -> Self {
            TestStruct {
                x: 1,
                y: 0,
                array: vec![1, 2, 3, 4, 5],
            }
        }
    }

    let mut engine = Engine::new();

    engine.register_type::<TestStruct>();

    engine.register_get_mut("x", TestStruct::get_mut_x);
    // TODO: Make this redundant
    engine.register_get("x", |s: &mut TestStruct| *s.get_mut_x());
    engine.register_set("x", TestStruct::set_x);
    engine.register_get("y", TestStruct::get_y);
    engine.register_fn("add", |value: &mut INT| *value += 41);
    engine.register_fn("new_ts", TestStruct::new);

    #[cfg(not(feature = "no_index"))]
    engine.register_mut_indexer(|value, index| &mut value.array[index as usize]);

    assert_eq!(engine.eval::<INT>("let a = new_ts(); a.x = 500; a.x")?, 500);
    assert_eq!(engine.eval::<INT>("let a = new_ts(); a.x.add(); a.x")?, 42);
    assert_eq!(engine.eval::<INT>("let a = new_ts(); a.y.add(); a.y")?, 0);

    #[cfg(not(feature = "no_index"))]
    assert_eq!(engine.eval::<INT>("let a = new_ts(); a[3]")?, 4);

    Ok(())
}

#[test]
fn test_big_get_set() -> Result<(), Box<EvalAltResult>> {
    #[derive(Clone)]
    struct TestChild {
        x: INT,
    }

    impl TestChild {
        fn get_x(&mut self) -> INT {
            self.x
        }

        fn set_x(&mut self, new_x: INT) {
            self.x = new_x;
        }

        fn new() -> TestChild {
            TestChild { x: 1 }
        }
    }

    #[derive(Clone)]
    struct TestParent {
        child: TestChild,
    }

    impl TestParent {
        fn get_mut_child(&mut self) -> &mut TestChild {
            &mut self.child
        }

        fn new() -> TestParent {
            TestParent {
                child: TestChild::new(),
            }
        }
    }

    let mut engine = Engine::new();

    engine.register_type::<TestChild>();
    engine.register_type_with_name::<TestParent>("TestParent");

    engine.register_get_set("x", TestChild::get_x, TestChild::set_x);
    engine.register_get_mut("child", TestParent::get_mut_child);

    engine.register_fn("new_tp", TestParent::new);

    assert_eq!(
        engine.eval::<INT>("let a = new_tp(); a.child.x = 500; a.child.x")?,
        500
    );

    assert_eq!(
        engine.eval::<String>("let a = new_tp(); type_of(a)")?,
        "TestParent"
    );

    Ok(())
}
