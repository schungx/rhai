#![cfg(not(feature = "no_std"))]

#[cfg(feature = "debugging")]
use rhai::{Dynamic, Engine, EvalAltResult, ImmutableString, Position, Scope};

#[cfg(feature = "debugging")]
use rhai::debugger::DebuggerCommand;

#[cfg(feature = "debugging")]
use std::{
    env,
    fs::File,
    io::{stdin, stdout, Read, Write},
    path::Path,
    process::exit,
};

/// Pretty-print source line.
#[cfg(feature = "debugging")]
fn print_source(lines: &[String], pos: Position, offset: usize) {
    let line_no = if lines.len() > 1 {
        if pos.is_none() {
            "".to_string()
        } else {
            format!("{}: ", pos.line().unwrap())
        }
    } else {
        "".to_string()
    };

    // Print error position
    if pos.is_none() {
        // No position
        println!();
    } else {
        // Specific position - print line text
        println!("{}{}", line_no, lines[pos.line().unwrap() - 1]);

        // Display position marker
        if let Some(pos) = pos.position() {
            println!("{0:>1$}", "^", line_no.len() + pos + offset);
        }
    }
}

/// Pretty-print error.
#[cfg(feature = "debugging")]
fn print_error(input: &str, mut err: EvalAltResult) {
    let lines: Vec<_> = input.trim().split('\n').collect();
    let pos = err.take_position();

    let line_no = if lines.len() > 1 {
        if pos.is_none() {
            "".to_string()
        } else {
            format!("{}: ", pos.line().unwrap())
        }
    } else {
        "".to_string()
    };

    // Print error position
    if pos.is_none() {
        // No position
        println!("{}", err);
    } else {
        // Specific position - print line text
        println!("{}{}", line_no, lines[pos.line().unwrap() - 1]);

        // Display position marker
        println!(
            "{0:>1$} {2}",
            "^",
            line_no.len() + pos.position().unwrap(),
            err
        );
    }
}

/// Print debug help.
#[cfg(feature = "debugging")]
fn print_debug_help() {
    println!("help                  => print this help");
    println!("quit, exit, kill      => quit");
    println!("scope                 => print the scope");
    println!("print                 => print all variables de-duplicated");
    println!("print <variable>      => print the current value of a variable");
    #[cfg(not(feature = "no_module"))]
    println!("imports               => print all imported modules");
    println!("node                  => print the current AST node");
    println!("backtrace             => print the current call-stack");
    println!("breakpoints           => print all break-points");
    println!("enable <bp#>          => enable a break-point");
    println!("disable <bp#>         => disable a break-point");
    println!("delete <bp#>          => delete a break-point");
    println!("clear                 => delete all break-points");
    #[cfg(not(feature = "no_position"))]
    println!("break                 => set a new break-point at the current position");
    #[cfg(not(feature = "no_position"))]
    println!("break <line#>         => set a new break-point at a line number");
    #[cfg(not(feature = "no_object"))]
    println!("break .<prop>         => set a new break-point for a property access");
    println!("break <func>          => set a new break-point for a function call");
    println!(
        "break <func> <#args>  => set a new break-point for a function call with #args arguments"
    );
    println!("throw [message]       => throw an exception (message optional)");
    println!("run                   => restart the script evaluation from beginning");
    println!("step                  => go to the next expression, diving into functions");
    println!("over                  => go to the next expression, skipping oer functions");
    println!("next                  => go to the next statement, skipping over functions");
    println!("continue              => continue normal execution");
    println!();
}

/// Display the scope.
#[cfg(feature = "debugging")]
fn print_scope(scope: &Scope, dedup: bool) {
    let flattened_clone;
    let scope = if dedup {
        flattened_clone = scope.clone_visible();
        &flattened_clone
    } else {
        scope
    };

    for (i, (name, constant, value)) in scope.iter_raw().enumerate() {
        #[cfg(not(feature = "no_closure"))]
        let value_is_shared = if value.is_shared() { " (shared)" } else { "" };
        #[cfg(feature = "no_closure")]
        let value_is_shared = "";

        if dedup {
            println!(
                "{}{}{} = {:?}",
                if constant { "const " } else { "" },
                name,
                value_is_shared,
                *value.read_lock::<Dynamic>().unwrap(),
            );
        } else {
            println!(
                "[{}] {}{}{} = {:?}",
                i + 1,
                if constant { "const " } else { "" },
                name,
                value_is_shared,
                *value.read_lock::<Dynamic>().unwrap(),
            );
        }
    }

    println!();
}

#[cfg(feature = "debugging")]
fn main() {
    let title = format!("Rhai Debugger (version {})", env!("CARGO_PKG_VERSION"));
    println!("{}", title);
    println!("{0:=<1$}", "", title.len());

    // Initialize scripting engine
    let mut engine = Engine::new();

    let mut script = String::new();
    let main_ast;

    {
        // Load init scripts
        if let Some(filename) = env::args().skip(1).next() {
            let filename = match Path::new(&filename).canonicalize() {
                Err(err) => {
                    eprintln!("Error script file path: {}\n{}", filename, err);
                    exit(1);
                }
                Ok(f) => {
                    match f.strip_prefix(std::env::current_dir().unwrap().canonicalize().unwrap()) {
                        Ok(f) => f.into(),
                        _ => f,
                    }
                }
            };

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

            if let Err(err) = f.read_to_string(&mut script) {
                println!(
                    "Error reading script file: {}\n{}",
                    filename.to_string_lossy(),
                    err
                );
                exit(1);
            }

            let script = if script.starts_with("#!") {
                // Skip shebang
                &script[script.find('\n').unwrap_or(0)..]
            } else {
                &script[..]
            };

            main_ast = match engine
                .compile(&script)
                .map_err(Into::<Box<EvalAltResult>>::into)
            {
                Err(err) => {
                    print_error(&script, *err);
                    exit(1);
                }
                Ok(ast) => ast,
            };

            println!("Script '{}' loaded.", filename.to_string_lossy());
            println!();
        } else {
            eprintln!("No script file specified.");
            exit(1);
        }
    }

    // Hook up debugger
    let lines: Vec<_> = script.trim().split('\n').map(|s| s.to_string()).collect();

    engine.on_debugger(
        // Store the current source in the debugger state
        || "".into(),
        // Main debugging interface
        move |context, node, source, pos| {
            {
                let current_source = &mut *context
                    .global_runtime_state_mut()
                    .debugger
                    .state_mut()
                    .write_lock::<ImmutableString>()
                    .unwrap();

                let src = source.unwrap_or("");

                // Check source
                if src != current_source {
                    println!(">>> Source => {}", source.unwrap_or("main script"));
                    *current_source = src.into();
                }

                if !src.is_empty() {
                    // Print just a line number for imported modules
                    println!("{} @ {:?}", src, pos);
                } else {
                    // Print the current source line
                    print_source(&lines, pos, 0);
                }
            }

            // Read stdin for commands
            let mut input = String::new();

            loop {
                print!("rhai-dbg> ");
                stdout().flush().expect("couldn't flush stdout");

                input.clear();

                match stdin().read_line(&mut input) {
                    Ok(0) => break Ok(DebuggerCommand::Continue),
                    Ok(_) => match input
                        .trim()
                        .split_whitespace()
                        .collect::<Vec<_>>()
                        .as_slice()
                    {
                        ["help", ..] => print_debug_help(),
                        ["exit", ..] | ["quit", ..] | ["kill", ..] => {
                            println!("Script terminated. Bye!");
                            exit(0);
                        }
                        ["node", ..] => {
                            println!("{:?} {}@{:?}", node, source.unwrap_or_default(), pos);
                            println!();
                        }
                        ["continue", ..] => break Ok(DebuggerCommand::Continue),
                        [] | ["step", ..] => break Ok(DebuggerCommand::StepInto),
                        ["over", ..] => break Ok(DebuggerCommand::StepOver),
                        ["next", ..] => break Ok(DebuggerCommand::Next),
                        ["scope", ..] => print_scope(context.scope(), false),
                        ["print", var_name, ..] => {
                            if let Some(value) = context.scope().get_value::<Dynamic>(var_name) {
                                if value.is::<()>() {
                                    println!("=> ()");
                                } else {
                                    println!("=> {}", value);
                                }
                            } else {
                                eprintln!("Variable not found: {}", var_name);
                            }
                        }
                        ["print", ..] => print_scope(context.scope(), true),
                        #[cfg(not(feature = "no_module"))]
                        ["imports", ..] => {
                            for (i, (name, module)) in context
                                .global_runtime_state()
                                .scan_imports_raw()
                                .enumerate()
                            {
                                println!(
                                    "[{}] {} = {}",
                                    i + 1,
                                    name,
                                    module.id().unwrap_or("<unknown>")
                                );
                            }

                            println!();
                        }
                        #[cfg(not(feature = "no_function"))]
                        ["backtrace", ..] => {
                            for frame in context
                                .global_runtime_state()
                                .debugger
                                .call_stack()
                                .iter()
                                .rev()
                            {
                                println!("{}", frame)
                            }
                        }
                        ["clear", ..] => {
                            context
                                .global_runtime_state_mut()
                                .debugger
                                .break_points_mut()
                                .clear();
                            println!("All break-points cleared.");
                        }
                        ["breakpoints", ..] => Iterator::for_each(
                            context
                                .global_runtime_state()
                                .debugger
                                .break_points()
                                .iter()
                                .enumerate(),
                            |(i, bp)| match bp {
                                #[cfg(not(feature = "no_position"))]
                                rhai::debugger::BreakPoint::AtPosition { pos, .. } => {
                                    let line_num = format!("[{}] line ", i + 1);
                                    print!("{}", line_num);
                                    print_source(&lines, *pos, line_num.len());
                                }
                                _ => println!("[{}] {}", i + 1, bp),
                            },
                        ),
                        ["enable", n, ..] => {
                            if let Ok(n) = n.parse::<usize>() {
                                let range = 1..=context
                                    .global_runtime_state_mut()
                                    .debugger
                                    .break_points()
                                    .len();
                                if range.contains(&n) {
                                    context
                                        .global_runtime_state_mut()
                                        .debugger
                                        .break_points_mut()
                                        .get_mut(n - 1)
                                        .unwrap()
                                        .enable(true);
                                    println!("Break-point #{} enabled.", n)
                                } else {
                                    eprintln!("Invalid break-point: {}", n);
                                }
                            } else {
                                eprintln!("Invalid break-point: '{}'", n);
                            }
                        }
                        ["disable", n, ..] => {
                            if let Ok(n) = n.parse::<usize>() {
                                let range = 1..=context
                                    .global_runtime_state_mut()
                                    .debugger
                                    .break_points()
                                    .len();
                                if range.contains(&n) {
                                    context
                                        .global_runtime_state_mut()
                                        .debugger
                                        .break_points_mut()
                                        .get_mut(n - 1)
                                        .unwrap()
                                        .enable(false);
                                    println!("Break-point #{} disabled.", n)
                                } else {
                                    eprintln!("Invalid break-point: {}", n);
                                }
                            } else {
                                eprintln!("Invalid break-point: '{}'", n);
                            }
                        }
                        ["delete", n, ..] => {
                            if let Ok(n) = n.parse::<usize>() {
                                let range = 1..=context
                                    .global_runtime_state_mut()
                                    .debugger
                                    .break_points()
                                    .len();
                                if range.contains(&n) {
                                    context
                                        .global_runtime_state_mut()
                                        .debugger
                                        .break_points_mut()
                                        .remove(n - 1);
                                    println!("Break-point #{} deleted.", n)
                                } else {
                                    eprintln!("Invalid break-point: {}", n);
                                }
                            } else {
                                eprintln!("Invalid break-point: '{}'", n);
                            }
                        }
                        ["break", fn_name, args, ..] => {
                            if let Ok(args) = args.parse::<usize>() {
                                let bp = rhai::debugger::BreakPoint::AtFunctionCall {
                                    name: fn_name.trim().into(),
                                    args,
                                    enabled: true,
                                };
                                println!("Break-point added for {}", bp);
                                context
                                    .global_runtime_state_mut()
                                    .debugger
                                    .break_points_mut()
                                    .push(bp);
                            } else {
                                eprintln!("Invalid number of arguments: '{}'", args);
                            }
                        }
                        // Property name
                        #[cfg(not(feature = "no_object"))]
                        ["break", param] if param.starts_with('.') && param.len() > 1 => {
                            let bp = rhai::debugger::BreakPoint::AtProperty {
                                name: param[1..].into(),
                                enabled: true,
                            };
                            println!("Break-point added for {}", bp);
                            context
                                .global_runtime_state_mut()
                                .debugger
                                .break_points_mut()
                                .push(bp);
                        }
                        // Numeric parameter
                        #[cfg(not(feature = "no_position"))]
                        ["break", param] if param.parse::<usize>().is_ok() => {
                            let n = param.parse::<usize>().unwrap();
                            let range = if source.is_none() {
                                1..=lines.len()
                            } else {
                                1..=(u16::MAX as usize)
                            };

                            if range.contains(&n) {
                                let bp = rhai::debugger::BreakPoint::AtPosition {
                                    source: source.unwrap_or("").into(),
                                    pos: Position::new(n as u16, 0),
                                    enabled: true,
                                };
                                println!("Break-point added {}", bp);
                                context
                                    .global_runtime_state_mut()
                                    .debugger
                                    .break_points_mut()
                                    .push(bp);
                            } else {
                                eprintln!("Invalid line number: {}", n);
                            }
                        }
                        // Function name parameter
                        ["break", param] => {
                            let bp = rhai::debugger::BreakPoint::AtFunctionName {
                                name: param.trim().into(),
                                enabled: true,
                            };
                            println!("Break-point added for {}", bp);
                            context
                                .global_runtime_state_mut()
                                .debugger
                                .break_points_mut()
                                .push(bp);
                        }
                        #[cfg(not(feature = "no_position"))]
                        ["break", ..] => {
                            let bp = rhai::debugger::BreakPoint::AtPosition {
                                source: source.unwrap_or("").into(),
                                pos,
                                enabled: true,
                            };
                            println!("Break-point added {}", bp);
                            context
                                .global_runtime_state_mut()
                                .debugger
                                .break_points_mut()
                                .push(bp);
                        }
                        ["throw"] => {
                            break Err(EvalAltResult::ErrorRuntime(Dynamic::UNIT, pos).into())
                        }
                        ["throw", _msg, ..] => {
                            let msg = input.trim().splitn(2, ' ').skip(1).next().unwrap_or("");
                            break Err(EvalAltResult::ErrorRuntime(msg.trim().into(), pos).into());
                        }
                        ["run", ..] => {
                            println!("Restarting script...");
                            break Err(EvalAltResult::ErrorTerminated(Dynamic::UNIT, pos).into());
                        }
                        [cmd, ..] => eprintln!("Invalid debugger command: '{}'", cmd),
                    },
                    Err(err) => panic!("input error: {}", err),
                }
            }
        },
    );

    // Set a file module resolver without caching
    #[cfg(not(feature = "no_module"))]
    #[cfg(not(feature = "no_std"))]
    {
        let mut resolver = rhai::module_resolvers::FileModuleResolver::new();
        resolver.enable_cache(false);
        engine.set_module_resolver(resolver);
    }

    print_debug_help();

    // Evaluate
    while let Err(err) = engine.run_ast_with_scope(&mut Scope::new(), &main_ast) {
        match *err {
            // Loop back to restart
            EvalAltResult::ErrorTerminated(_, _) => (),
            // Break evaluation
            _ => {
                print_error(&script, *err);
                break;
            }
        }
    }
}

#[cfg(not(feature = "debugging"))]
fn main() {
    panic!("rhai-dbg requires the 'debugging' feature.")
}
