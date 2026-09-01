#[cfg(feature = "grain")]
use rhai::grain::{Program, Vm};
use rhai::Engine;
#[cfg(not(feature = "no_ast"))]
use rhai::{EvalAltResult, Position};
use std::{env, fs::File, io::Read, path::Path, process::exit};

#[cfg(all(feature = "no_ast", not(feature = "grain")))]
compile_error!("`rhai-run` requires the `grain` feature when `no_ast` is enabled");

#[cfg(not(feature = "no_ast"))]
fn eprint_error(input: &str, mut err: EvalAltResult) {
    fn eprint_line(lines: &[&str], pos: Position, err_msg: &str) {
        let line = pos.line().unwrap();
        let line_no = format!("{line}: ");

        eprintln!("{line_no}{}", lines[line - 1]);

        for (i, err_line) in err_msg.to_string().lines().enumerate() {
            // Display position marker
            println!(
                "{0:>1$}{err_line}",
                if i > 0 { "| " } else { "^ " },
                line_no.len() + pos.position().unwrap() + 1,
            );
        }
        eprintln!();
    }

    // Do not use `line` because it "eats" the last empty line if the script ends with a newline.
    let lines: Vec<_> = input.split('\n').collect();

    // Print error
    let pos = err.take_position();

    if pos.is_none() {
        // No position
        eprintln!("{err}");
    } else {
        // Specific position
        eprint_line(&lines, pos, &err.to_string())
    }
}

#[cfg(feature = "grain")]
fn is_grain_bytecode(filename: &Path) -> bool {
    filename
        .extension()
        .and_then(|ext| ext.to_str())
        .map_or(false, |ext| ext.eq_ignore_ascii_case("rgrn"))
}

#[cfg(feature = "grain")]
fn run_grain_bytecode(filename: &Path) -> Result<(), String> {
    #[allow(unused_mut)]
    let mut engine = Engine::new();

    #[cfg(not(feature = "no_optimize"))]
    engine.set_optimization_level(rhai::OptimizationLevel::Simple);

    let mut file = File::open(filename).map_err(|err| {
        format!(
            "Error reading Grain bytecode file: {}\n{err}",
            filename.to_string_lossy()
        )
    })?;

    let mut bytes = Vec::new();
    file.read_to_end(&mut bytes).map_err(|err| {
        format!(
            "Error reading Grain bytecode file: {}\n{err}",
            filename.to_string_lossy()
        )
    })?;

    let program = Program::read(&bytes).map_err(|err| {
        format!(
            "Error loading Rhai Grain bytecode: {}\n{err}",
            filename.to_string_lossy()
        )
    })?;

    let mut scope = rhai::Scope::new();
    let mut vm = Vm::new(&engine);

    let result = if program.makes_fn_pointers() {
        let program = program.into_shared();
        vm.eval_with_callbacks(&mut scope, &program)
    } else {
        vm.eval_with_scope(&mut scope, &program)
    };

    match result {
        Err(err) => Err(format!(
            "Error executing Rhai Grain bytecode: {}\n{err}",
            filename.to_string_lossy()
        )),
        Ok(_) => Ok(()),
    }
}

#[cfg(not(feature = "no_ast"))]
fn walk_ast(contents: &mut String, filename: std::path::PathBuf) {
    // Initialize scripting engine
    #[allow(unused_mut)]
    let mut engine = Engine::new();

    #[cfg(not(feature = "no_optimize"))]
    engine.set_optimization_level(rhai::OptimizationLevel::Simple);

    let mut f = match File::open(&filename) {
        Err(err) => {
            eprintln!(
                "Error reading script file: {}\n{}",
                filename.to_string_lossy(),
                err
            );
            exit(1);
        }
        Ok(f) => f,
    };

    contents.clear();

    if let Err(err) = f.read_to_string(contents) {
        eprintln!(
            "Error reading script file: {}\n{}",
            filename.to_string_lossy(),
            err
        );
        exit(1);
    }

    let contents = if contents.starts_with("#!") {
        // Skip shebang
        &contents[contents.find('\n').unwrap_or(0)..]
    } else {
        &contents[..]
    };

    if let Err(err) = {
        engine
            .compile(contents)
            .map_err(|err| err.into())
            .and_then(|mut ast| {
                ast.set_source(filename.to_string_lossy().to_string());
                engine.run_ast(&ast)
            })
    } {
        let filename = filename.to_string_lossy();

        eprintln!("{:=<1$}", "", filename.len());
        eprintln!("{filename}");
        eprintln!("{:=<1$}", "", filename.len());
        eprintln!();

        eprint_error(contents, *err);
    }
}

fn main() {
    #[cfg(not(feature = "no_ast"))]
    let mut contents = String::new();

    for filename in env::args().skip(1) {
        let filename = match Path::new(&filename).canonicalize() {
            Err(err) => {
                eprintln!("Error script file path: {filename}\n{err}");
                exit(1);
            }
            Ok(f) => match f.strip_prefix(std::env::current_dir().unwrap().canonicalize().unwrap())
            {
                Ok(f) => f.into(),
                _ => f,
            },
        };

        #[cfg(feature = "grain")]
        if is_grain_bytecode(&filename) {
            if let Err(err) = run_grain_bytecode(&filename) {
                eprintln!("{err}");
                exit(1);
            }
            continue;
        }

        #[cfg(not(feature = "no_ast"))]
        walk_ast(&mut contents, filename);

        #[cfg(feature = "no_ast")]
        {
            let filename = filename.to_string_lossy();
            eprintln!(
                "Error script file: {filename}\n`no_ast` builds only support Rhai Grain bytecode files (.rgrn)"
            );
            exit(1);
        }
    }
}
