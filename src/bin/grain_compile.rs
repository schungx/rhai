//! Compile a Rhai script to Grain bytecodes and print the disassembly.
//!
//! `cargo run --features grain --example grain_dump -- script.rhai`

fn main() -> Result<(), Box<dyn std::error::Error>> {
    #[cfg(not(feature = "no_ast"))]
    {
        use rhai::grain::Compiler;
        use rhai::Engine;

        let path = std::env::args()
            .nth(1)
            .ok_or("usage: grain_dump <script.rhai>")?;
        let source = std::fs::read_to_string(&path)?;

        let path = std::env::args()
            .nth(2)
            .ok_or("usage: grain_dump <script.rhai>")?;

        let engine = Engine::new();
        let ast = engine.compile(&source)?;
        let program = Compiler::new().compile(&ast);

        println!("{program:?}");
        println!(
            "\nresiduals (AST fragments left over): {}",
            program.residual_count()
        );

        let buf = program
            .write()
            .map_err(|e| format!("failed to write program: {e}"))?;

        std::fs::write(&path, &buf)?;

        println!("wrote {} bytes to {path}", buf.len());

        return Ok(());
    }

    #[cfg(feature = "no_ast")]
    return Err("the 'no_ast' feature must be disabled to compile a script".into());
}
