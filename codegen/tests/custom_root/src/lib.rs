#[test]
fn custom_root_test() {
    #[derive(Clone, oldrhai::CustomType)]
    #[rhai_type(name = "MyBar", extra = Self::build_extra, root=oldrhai)]
    pub struct Bar(
        #[rhai_type(skip)] f32,
        u32,
        #[rhai_type(name = "boo", readonly)] String,
        Vec<u32>,
    );

    impl Bar {
        fn build_extra(builder: &mut oldrhai::TypeBuilder<Self>) {
            builder.with_fn("new_int", || 42);
        }
    }

    let mut engine = oldrhai::Engine::new();
    engine.build_type::<Bar>();

    assert_eq!(
        engine
            .eval::<i32>(
                "
                        new_int()
                    "
            )
            .unwrap(),
        42
    );
}

#[test]
fn custom_root_module_test() -> Result<(), Box<oldrhai::EvalAltResult>> {
    #[oldrhai::plugin::export_module(root = "oldrhai")]
    pub mod advanced_math {
        use oldrhai::FLOAT;
        pub fn get_mystic_number() -> FLOAT {
            42.0 as FLOAT
        }
    }

    let mut engine = oldrhai::Engine::new();
    let m = oldrhai::exported_module!(advanced_math);
    engine.register_static_module("Math::Advanced", m.into());

    assert_eq!(
        engine.eval::<oldrhai::FLOAT>(r#"let m = Math::Advanced::get_mystic_number();m"#)?,
        42.0
    );
    panic!();
    Ok(())
}
