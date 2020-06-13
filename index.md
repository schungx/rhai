Rhai - Embedded Scripting for Rust
=================================

![GitHub last commit](https://img.shields.io/github/last-commit/jonathandturner/rhai)
[![Travis (.org)](https://img.shields.io/travis/jonathandturner/rhai)](http://travis-ci.org/jonathandturner/rhai)
[![license](https://img.shields.io/github/license/jonathandturner/rhai)](https://github.com/license/jonathandturner/rhai)
[![crates.io](https://img.shields.io/crates/v/rhai.svg)](https::/crates.io/crates/rhai/)
![crates.io](https://img.shields.io/crates/d/rhai)
[![API Docs](https://docs.rs/rhai/badge.svg)](https://docs.rs/rhai/)

Rhai is an embedded scripting language and evaluation engine for Rust that gives a safe and easy way
to add scripting to any application.

Features
--------

* Easy-to-use language similar to JS+Rust with dynamic typing but _no_ garbage collector.
* Tight integration with native Rust [functions](#working-with-functions) and [types](#custom-types-and-methods),
  including [getters/setters](#getters-and-setters), [methods](#members-and-methods) and [indexers](#indexers).
* Freely pass Rust variables/constants into a script via an external [`Scope`].
* Easily [call a script-defined function](#calling-rhai-functions-from-rust) from Rust.
* Fairly low compile-time overhead.
* Fairly efficient evaluation (1 million iterations in 0.25 sec on a single core, 2.3 GHz Linux VM).
* Relatively little `unsafe` code (yes there are some for performance reasons, and most `unsafe` code is limited to
  one single source file, all with names starting with `"unsafe_"`).
* Re-entrant scripting [`Engine`] can be made `Send + Sync` (via the [`sync`] feature).
* Sand-boxed - the scripting [`Engine`], if declared immutable, cannot mutate the containing environment unless explicitly permitted (e.g. via a `RefCell`).
* Rugged (protection against [stack-overflow](#maximum-call-stack-depth) and [runaway scripts](#maximum-number-of-operations) etc.).
* Track script evaluation [progress](#tracking-progress-and-force-terminate-script-run) and manually terminate a script run.
* [`no-std`](#optional-features) support.
* [Function overloading](#function-overloading).
* [Operator overloading](#operator-overloading).
* Organize code base with dynamically-loadable [Modules].
* Scripts are [optimized](#script-optimization) (useful for template-based machine-generated scripts) for repeated evaluations.
* Support for [minimal builds](#minimal-builds) by excluding unneeded language [features](#optional-features).
* Very few additional dependencies (right now only [`num-traits`](https://crates.io/crates/num-traits/)
  to do checked arithmetic operations); for [`no-std`](#optional-features) builds, a number of additional dependencies are
  pulled in to provide for functionalities that used to be in `std`.

**Note:** Currently, the version is `0.15.1`, so the language and API's may change before they stabilize.

What Rhai doesn't do
--------------------

Rhai's purpose is to provide a dynamic layer over Rust code, in the same spirit of _zero cost abstractions_.
It doesn't attempt to be a new language. For example:

* No classes.  Well, Rust doesn't either. On the other hand...
* No traits...  so it is also not Rust. Do your Rusty stuff in Rust.
* No structures/records - define your types in Rust instead; Rhai can seamlessly work with _any Rust type_.
  There is, however, a built-in [object map] type which is adequate for most uses.
* No first-class functions - Code your functions in Rust instead, and register them with Rhai.
* No garbage collection - this should be expected, so...
* No closures - do your closure magic in Rust instead; [turn a Rhai scripted function into a Rust closure](#calling-rhai-functions-from-rust).
* No byte-codes/JIT - Rhai has an AST-walking interpreter which will not win any speed races. The purpose of Rhai is not
  to be extremely _fast_, but to make it as easy as possible to integrate with native Rust programs.

Due to this intended usage, Rhai deliberately keeps the language simple and small by omitting advanced language features
such as classes, inheritance, first-class functions, closures, concurrency, byte-codes, JIT etc.
Avoid the temptation to write full-fledge program logic entirely in Rhai - that use case is best fulfilled by
more complete languages such as JS or Lua.

Therefore, in actual practice, it is usually best to expose a Rust API into Rhai for scripts to call.
All your core functionalities should be in Rust.
This is similar to some dynamic languages where most of the core functionalities reside in a C/C++ standard library.

Installation
------------

Install the Rhai crate on [`crates.io`](https::/crates.io/crates/rhai/) by adding this line to `dependencies`:

```toml
[dependencies]
rhai = "0.15.1"
```

Use the latest released crate version on [`crates.io`](https::/crates.io/crates/rhai/):

```toml
[dependencies]
rhai = "*"
```

Crate versions are released on [`crates.io`](https::/crates.io/crates/rhai/) infrequently, so to track the
latest features, enhancements and bug fixes, pull directly from GitHub:

```toml
[dependencies]
rhai = { git = "https://github.com/jonathandturner/rhai" }
```

Beware that in order to use pre-releases (e.g. alpha and beta), the exact version must be specified in the `Cargo.toml`.

Optional features
-----------------

| Feature       | Description                                                                                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `unchecked`   | Disable arithmetic checking (such as over-flows and division by zero), call stack depth limit, operations count limit and modules loading limit. Beware that a bad script may panic the entire system! |
| `sync`        | Restrict all values types to those that are `Send + Sync`. Under this feature, all Rhai types, including [`Engine`], [`Scope`] and `AST`, are all `Send + Sync`.                                       |
| `no_optimize` | Disable the script optimizer.                                                                                                                                                                          |
| `no_float`    | Disable floating-point numbers and math.                                                                                                                                                               |
| `only_i32`    | Set the system integer type to `i32` and disable all other integer types. `INT` is set to `i32`.                                                                                                       |
| `only_i64`    | Set the system integer type to `i64` and disable all other integer types. `INT` is set to `i64`.                                                                                                       |
| `no_index`    | Disable [arrays] and indexing features.                                                                                                                                                                |
| `no_object`   | Disable support for custom types and [object maps].                                                                                                                                                    |
| `no_function` | Disable script-defined functions.                                                                                                                                                                      |
| `no_module`   | Disable loading external modules.                                                                                                                                                                      |
| `no_std`      | Build for `no-std`. Notice that additional dependencies will be pulled in to replace `std` features.                                                                                                   |

By default, Rhai includes all the standard functionalities in a small, tight package.
Most features are here to opt-**out** of certain functionalities that are not needed.
Excluding unneeded functionalities can result in smaller, faster builds
as well as more control over what a script can (or cannot) do.

[`unchecked`]: #optional-features
[`sync`]: #optional-features
[`no_optimize`]: #optional-features
[`no_float`]: #optional-features
[`only_i32`]: #optional-features
[`only_i64`]: #optional-features
[`no_index`]: #optional-features
[`no_object`]: #optional-features
[`no_function`]: #optional-features
[`no_module`]: #optional-features
[`no_std`]: #optional-features

### Performance builds

Some features are for performance.  For example, using `only_i32` or `only_i64` disables all other integer types (such as `u16`).
If only a single integer type is needed in scripts - most of the time this is the case - it is best to avoid registering
lots of functions related to other integer types that will never be used.  As a result, performance will improve.

If only 32-bit integers are needed - again, most of the time this is the case - using `only_i32` disables also `i64`.
On 64-bit targets this may not gain much, but on some 32-bit targets this improves performance due to 64-bit arithmetic
requiring more CPU cycles to complete.

Also, turning on `no_float`, and `only_i32` makes the key [`Dynamic`] data type only 8 bytes small on 32-bit targets
while normally it can be up to 16 bytes (e.g. on x86/x64 CPU's) in order to hold an `i64` or `f64`.
Making [`Dynamic`] small helps performance due to better cache efficiency.

### Minimal builds

In order to compile a _minimal_build - i.e. a build optimized for size - perhaps for embedded targets, it is essential that
the correct linker flags are used in `cargo.toml`:

```toml
[profile.release]
lto = "fat"         # turn on Link-Time Optimizations
codegen-units = 1   # trade compile time with maximum optimization
opt-level = "z"     # optimize for size
```

Opt out of as many features as possible, if they are not needed, to reduce code size because, remember, by default
all code is compiled in as what a script requires cannot be predicted. If a language feature is not needed,
omitting them via special features is a prudent strategy to optimize the build for size.

Omitting arrays (`no_index`) yields the most code-size savings, followed by floating-point support
(`no_float`), checked arithmetic (`unchecked`) and finally object maps and custom types (`no_object`).
Disable script-defined functions (`no_function`) only when the feature is not needed because code size savings is minimal.

[`Engine::new_raw`](#raw-engine) creates a _raw_ engine.
A _raw_ engine supports, out of the box, only a very [restricted set](#built-in-operators) of basic arithmetic and logical operators.
Selectively include other necessary functionalities by loading specific [packages] to minimize the footprint.
Packages are sharable (even across threads via the [`sync`] feature), so they only have to be created once.

Related
-------

Other cool projects to check out:

* [ChaiScript](http://chaiscript.com/) - A strong inspiration for Rhai.  An embedded scripting language for C++ that I helped created many moons ago, now being led by my cousin.
* Check out the list of [scripting languages for Rust](https://github.com/rust-unofficial/awesome-rust#scripting) on [awesome-rust](https://github.com/rust-unofficial/awesome-rust)

Examples
--------

A number of examples can be found in the `examples` folder:

| Example                                                            | Description                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [`arrays_and_structs`](examples/arrays_and_structs.rs)             | shows how to register a custom Rust type and using [arrays] on it           |
| [`custom_types_and_methods`](examples/custom_types_and_methods.rs) | shows how to register a custom Rust type and methods for it                 |
| [`hello`](examples/hello.rs)                                       | simple example that evaluates an expression and prints the result           |
| [`no_std`](examples/no_std.rs)                                     | example to test out `no-std` builds                                         |
| [`reuse_scope`](examples/reuse_scope.rs)                           | evaluates two pieces of code in separate runs, but using a common [`Scope`] |
| [`rhai_runner`](examples/rhai_runner.rs)                           | runs each filename passed to it as a Rhai script                            |
| [`simple_fn`](examples/simple_fn.rs)                               | shows how to register a simple function                                     |
| [`strings`](examples/strings.rs)                                   | shows different ways to register functions taking string arguments          |
| [`repl`](examples/repl.rs)                                         | a simple REPL, interactively evaluate statements from stdin                 |

Examples can be run with the following command:

```bash
cargo run --example {example_name}
```

The `repl` example is a particularly good one as it allows one to interactively try out Rhai's
language features in a standard REPL (**R**ead-**E**val-**P**rint **L**oop).

Example scripts
---------------

There are also a number of examples scripts that showcase Rhai's features, all in the `scripts` folder:

| Language feature scripts                             | Description                                                                   |
| ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`array.rhai`](scripts/array.rhai)                   | [arrays] in Rhai                                                              |
| [`assignment.rhai`](scripts/assignment.rhai)         | variable declarations                                                         |
| [`comments.rhai`](scripts/comments.rhai)             | just comments                                                                 |
| [`for1.rhai`](scripts/for1.rhai)                     | [`for`](#for-loop) loops                                                      |
| [`for2.rhai`](scripts/for2.rhai)                     | [`for`](#for-loop) loops on [arrays]                                          |
| [`function_decl1.rhai`](scripts/function_decl1.rhai) | a [function] without parameters                                               |
| [`function_decl2.rhai`](scripts/function_decl2.rhai) | a [function] with two parameters                                              |
| [`function_decl3.rhai`](scripts/function_decl3.rhai) | a [function] with many parameters                                             |
| [`if1.rhai`](scripts/if1.rhai)                       | [`if`](#if-statement) example                                                 |
| [`loop.rhai`](scripts/loop.rhai)                     | count-down [`loop`](#infinite-loop) in Rhai, emulating a `do` .. `while` loop |
| [`op1.rhai`](scripts/op1.rhai)                       | just simple addition                                                          |
| [`op2.rhai`](scripts/op2.rhai)                       | simple addition and multiplication                                            |
| [`op3.rhai`](scripts/op3.rhai)                       | change evaluation order with parenthesis                                      |
| [`string.rhai`](scripts/string.rhai)                 | [string] operations                                                           |
| [`strings_map.rhai`](scripts/strings_map.rhai)       | [string] and [object map] operations                                          |
| [`while.rhai`](scripts/while.rhai)                   | [`while`](#while-loop) loop                                                   |

| Example scripts                              | Description                                                                        |
| -------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`speed_test.rhai`](scripts/speed_test.rhai) | a simple program to measure the speed of Rhai's interpreter (1 million iterations) |
| [`primes.rhai`](scripts/primes.rhai)         | use Sieve of Eratosthenes to find all primes smaller than a limit                  |
| [`fibonacci.rhai`](scripts/fibonacci.rhai)   | calculate the n-th Fibonacci number using a really dumb algorithm                  |
| [`mat_mul.rhai`](scripts/mat_mul.rhai)       | matrix multiplication test to measure the speed of Rhai's interpreter              |

To run the scripts, either make a tiny program or use of the `rhai_runner` example:

```bash
cargo run --example rhai_runner scripts/any_script.rhai
```

Hello world
-----------

[`Engine`]: #hello-world

To get going with Rhai, create an instance of the scripting engine via `Engine::new` and then call the `eval` method:

```rust
use rhai::{Engine, EvalAltResult};

fn main() -> Result<(), Box<EvalAltResult>>
{
    let engine = Engine::new();

    let result = engine.eval::<i64>("40 + 2")?;
    //                      ^^^^^^^ cast the result to an 'i64', this is required

    println!("Answer: {}", result);             // prints 42

    Ok(())
}
```

`EvalAltResult` is a Rust `enum` containing all errors encountered during the parsing or evaluation process.

### Script evaluation

The type parameter is used to specify the type of the return value, which _must_ match the actual type or an error is returned.
Rhai is very strict here.  Use [`Dynamic`] for uncertain return types.
There are two ways to specify the return type - _turbofish_ notation, or type inference.

```rust
let result = engine.eval::<i64>("40 + 2")?;     // return type is i64, specified using 'turbofish' notation

let result: i64 = engine.eval("40 + 2")?;       // return type is inferred to be i64

result.is::<i64>() == true;

let result: Dynamic = engine.eval("boo()")?;    // use 'Dynamic' if you're not sure what type it'll be!

let result = engine.eval::<String>("40 + 2")?;  // returns an error because the actual return type is i64, not String
```

Evaluate a script file directly:

```rust
let result = engine.eval_file::<i64>("hello_world.rhai".into())?;       // 'eval_file' takes a 'PathBuf'
```

### Compiling scripts (to AST)

To repeatedly evaluate a script, _compile_ it first into an AST (abstract syntax tree) form:

```rust
// Compile to an AST and store it for later evaluations
let ast = engine.compile("40 + 2")?;

for _ in 0..42 {
    let result: i64 = engine.eval_ast(&ast)?;

    println!("Answer #{}: {}", i, result);      // prints 42
}
```

Compiling a script file is also supported:

```rust
let ast = engine.compile_file("hello_world.rhai".into())?;
```

### Calling Rhai functions from Rust

[`private`]: #calling-rhai-functions-from-rust

Rhai also allows working _backwards_ from the other direction - i.e. calling a Rhai-scripted function from Rust via `Engine::call_fn`.
Functions declared with `private` are hidden and cannot be called from Rust (see also [modules]).

```rust
// Define functions in a script.
let ast = engine.compile(true,
    r#"
        // a function with two parameters: string and i64
        fn hello(x, y) {
            x.len + y
        }

        // functions can be overloaded: this one takes only one parameter
        fn hello(x) {
            x * 2
        }

        // this one takes no parameters
        fn hello() {
            42
        }

        // this one is private and cannot be called by 'call_fn'
        private hidden() {
            throw "you shouldn't see me!";
        }
    "#)?;

// A custom scope can also contain any variables/constants available to the functions
let mut scope = Scope::new();

// Evaluate a function defined in the script, passing arguments into the script as a tuple.
// Beware, arguments must be of the correct types because Rhai does not have built-in type conversions.
// If arguments of the wrong types are passed, the Engine will not find the function.

let result: i64 = engine.call_fn(&mut scope, &ast, "hello", ( String::from("abc"), 123_i64 ) )?;
//                                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                                                          put arguments in a tuple

let result: i64 = engine.call_fn(&mut scope, &ast, "hello", (123_i64,) )?;
//                                                          ^^^^^^^^^^ tuple of one

let result: i64 = engine.call_fn(&mut scope, &ast, "hello", () )?;
//                                                          ^^ unit = tuple of zero

// The following call will return a function-not-found error because
// 'hidden' is declared with 'private'.
let result: () = engine.call_fn(&mut scope, &ast, "hidden", ())?;
```

For more control, construct all arguments as `Dynamic` values and use `Engine::call_fn_dynamic`, passing it
anything that implements `IntoIterator<Item = Dynamic>` (such as a simple `Vec<Dynamic>`):

```rust
let result: Dynamic = engine.call_fn_dynamic(&mut scope, &ast, "hello",
                            vec![ String::from("abc").into(), 123_i64.into() ])?;
```

### Creating Rust anonymous functions from Rhai script

[`Func`]: #creating-rust-anonymous-functions-from-rhai-script

It is possible to further encapsulate a script in Rust such that it becomes a normal Rust function.
Such an _anonymous function_ is basically a boxed closure, very useful as call-back functions.
Creating them is accomplished via the `Func` trait which contains `create_from_script`
(as well as its companion method `create_from_ast`):

```rust
use rhai::{Engine, Func};                       // use 'Func' for 'create_from_script'

let engine = Engine::new();                     // create a new 'Engine' just for this

let script = "fn calc(x, y) { x + y.len < 42 }";

// Func takes two type parameters:
//   1) a tuple made up of the types of the script function's parameters
//   2) the return type of the script function
//
// 'func' will have type Box<dyn Fn(i64, String) -> Result<bool, Box<EvalAltResult>>> and is callable!
let func = Func::<(i64, String), bool>::create_from_script(
//                ^^^^^^^^^^^^^ function parameter types in tuple

                engine,                         // the 'Engine' is consumed into the closure
                script,                         // the script, notice number of parameters must match
                "calc"                          // the entry-point function name
)?;

func(123, "hello".to_string())? == false;       // call the anonymous function

schedule_callback(func);                        // pass it as a callback to another function

// Although there is nothing you can't do by manually writing out the closure yourself...
let engine = Engine::new();
let ast = engine.compile(script)?;
schedule_callback(Box::new(move |x: i64, y: String| -> Result<bool, Box<EvalAltResult>> {
    engine.call_fn(&mut Scope::new(), &ast, "calc", (x, y))
}));
```

Raw `Engine`
------------

[raw `Engine`]: #raw-engine

`Engine::new` creates a scripting [`Engine`] with common functionalities (e.g. printing to the console via `print`).
In many controlled embedded environments, however, these are not needed.

Use `Engine::new_raw` to create a _raw_ `Engine`, in which only a minimal set of basic arithmetic and logical operators
are supported.

### Built-in operators

| Operators                | Assignment operators         | Supported for type (see [standard types])                                     |
| ------------------------ | ---------------------------- | ----------------------------------------------------------------------------- |
| `+`,                     | `+=`                         | `INT`, `FLOAT` (if not [`no_float`]), `ImmutableString`                       |
| `-`, `*`, `/`, `%`, `~`, | `-=`, `*=`, `/=`, `%=`, `~=` | `INT`, `FLOAT` (if not [`no_float`])                                          |
| `<<`, `>>`, `^`,         | `<<=`, `>>=`, `^=`           | `INT`                                                                         |
| `&`, `\|`,               | `&=`, `\|=`                  | `INT`, `bool`                                                                 |
| `&&`, `\|\|`             |                              | `bool`                                                                        |
| `==`, `!=`               |                              | `INT`, `FLOAT` (if not [`no_float`]), `bool`, `char`, `()`, `ImmutableString` |
| `>`, `>=`, `<`, `<=`     |                              | `INT`, `FLOAT` (if not [`no_float`]), `char`, `()`, `ImmutableString`         |

### Packages

[package]: #packages
[packages]: #packages

Rhai functional features are provided in different _packages_ that can be loaded via a call to `Engine::load_package`.
Packages reside under `rhai::packages::*` and the trait `rhai::packages::Package` must be loaded in order for
packages to be used.

```rust
use rhai::Engine;
use rhai::packages::Package                     // load the 'Package' trait to use packages
use rhai::packages::CorePackage;                // the 'core' package contains basic functionalities (e.g. arithmetic)

let mut engine = Engine::new_raw();             // create a 'raw' Engine
let package = CorePackage::new();               // create a package - can be shared among multiple `Engine` instances

engine.load_package(package.get());             // load the package manually. 'get' returns a reference to the shared package
```

The follow packages are available:

| Package                | Description                                                                                            | In `CorePackage` | In `StandardPackage` |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | :--------------: | :------------------: |
| `ArithmeticPackage`    | Arithmetic operators (e.g. `+`, `-`, `*`, `/`) for numeric types that are not built in (e.g. `u16`)    |       Yes        |         Yes          |
| `BasicIteratorPackage` | Numeric ranges (e.g. `range(1, 10)`)                                                                   |       Yes        |         Yes          |
| `LogicPackage`         | Logical and comparison operators (e.g. `==`, `>`) for numeric types that are not built in (e.g. `u16`) |       Yes        |         Yes          |
| `BasicStringPackage`   | Basic string functions (e.g. `print`, `debug`, `len`) that are not built in                            |       Yes        |         Yes          |
| `BasicTimePackage`     | Basic time functions (e.g. [timestamps])                                                               |       Yes        |         Yes          |
| `MoreStringPackage`    | Additional string functions, including converting common types to string                               |        No        |         Yes          |
| `BasicMathPackage`     | Basic math functions (e.g. `sin`, `sqrt`)                                                              |        No        |         Yes          |
| `BasicArrayPackage`    | Basic [array] functions (not available under `no_index`)                                               |        No        |         Yes          |
| `BasicMapPackage`      | Basic [object map] functions (not available under `no_object`)                                         |        No        |         Yes          |
| `EvalPackage`          | Disable [`eval`]                                                                                       |        No        |          No          |
| `CorePackage`          | Basic essentials                                                                                       |       Yes        |         Yes          |
| `StandardPackage`      | Standard library                                                                                       |        No        |         Yes          |

Packages typically contain Rust functions that are callable within a Rhai script.
All functions registered in a package is loaded under the _global namespace_ (i.e. they're available without module qualifiers).
Once a package is created (e.g. via `new`), it can be _shared_ (via `get`) among multiple instances of [`Engine`],
even across threads (under [`sync`]). Therefore, a package only has to be created _once_.

Packages are actually implemented as [modules], so they share a lot of behavior and characteristics.
The main difference is that a package loads under the _global_ namespace, while a module loads under its own
namespace alias specified in an [`import`] statement (see also [modules]).
A package is _static_ (i.e. pre-loaded into an [`Engine`]), while a module is _dynamic_ (i.e. loaded with
the `import` statement).

Custom packages can also be created.  See the macro [`def_package!`](https://docs.rs/rhai/0.13.0/rhai/macro.def_package.html).

Evaluate expressions only
-------------------------

[`eval_expression`]: #evaluate-expressions-only
[`eval_expression_with_scope`]: #evaluate-expressions-only

Sometimes a use case does not require a full-blown scripting _language_, but only needs to evaluate _expressions_.
In these cases, use the `compile_expression` and `eval_expression` methods or their `_with_scope` variants.

```rust
let result = engine.eval_expression::<i64>("2 + (10 + 10) * 2")?;
```

When evaluating _expressions_, no full-blown statement (e.g. `if`, `while`, `for`) - not even variable assignments -
is supported and will be considered parse errors when encountered.

```rust
// The following are all syntax errors because the script is not an expression.
engine.eval_expression::<()>("x = 42")?;
let ast = engine.compile_expression("let x = 42")?;
let result = engine.eval_expression_with_scope::<i64>(&mut scope, "if x { 42 } else { 123 }")?;
```

Values and types
----------------

[`type_of()`]: #values-and-types
[`to_string()`]: #values-and-types
[`()`]: #values-and-types
[standard types]: #values-and-types

The following primitive types are supported natively:

| Category                                                                      | Equivalent Rust types                                                                                | `type_of()`           | `to_string()`         |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------- | --------------------- |
| **Integer number**                                                            | `u8`, `i8`, `u16`, `i16`, <br/>`u32`, `i32` (default for [`only_i32`]),<br/>`u64`, `i64` _(default)_ | `"i32"`, `"u64"` etc. | `"42"`, `"123"` etc.  |
| **Floating-point number** (disabled with [`no_float`])                        | `f32`, `f64` _(default)_                                                                             | `"f32"` or `"f64"`    | `"123.4567"` etc.     |
| **Boolean value**                                                             | `bool`                                                                                               | `"bool"`              | `"true"` or `"false"` |
| **Unicode character**                                                         | `char`                                                                                               | `"char"`              | `"A"`, `"x"` etc.     |
| **Immutable Unicode string**                                                  | `rhai::ImmutableString` (implemented as `Rc<String>` or `Arc<String>`)                               | `"string"`            | `"hello"` etc.        |
| **Array** (disabled with [`no_index`])                                        | `rhai::Array`                                                                                        | `"array"`             | `"[ ?, ?, ? ]"`       |
| **Object map** (disabled with [`no_object`])                                  | `rhai::Map`                                                                                          | `"map"`               | `#{ "a": 1, "b": 2 }` |
| **Timestamp** (implemented in the [`BasicTimePackage`](#packages))            | `std::time::Instant`                                                                                 | `"timestamp"`         | _not supported_       |
| **Dynamic value** (i.e. can be anything)                                      | `rhai::Dynamic`                                                                                      | _the actual type_     | _actual value_        |
| **System integer** (current configuration)                                    | `rhai::INT` (`i32` or `i64`)                                                                         | `"i32"` or `"i64"`    | `"42"`, `"123"` etc.  |
| **System floating-point** (current configuration, disabled with [`no_float`]) | `rhai::FLOAT` (`f32` or `f64`)                                                                       | `"f32"` or `"f64"`    | `"123.456"` etc.      |
| **Nothing/void/nil/null** (or whatever it is called)                          | `()`                                                                                                 | `"()"`                | `""` _(empty string)_ |

All types are treated strictly separate by Rhai, meaning that `i32` and `i64` and `u32` are completely different -
they even cannot be added together. This is very similar to Rust.

The default integer type is `i64`. If other integer types are not needed, it is possible to exclude them and make a
smaller build with the [`only_i64`] feature.

If only 32-bit integers are needed, enabling the [`only_i32`] feature will remove support for all integer types other than `i32`, including `i64`.
This is useful on some 32-bit targets where using 64-bit integers incur a performance penalty.

If no floating-point is needed or supported, use the [`no_float`] feature to remove it.

[Strings] in Rhai are _immutable_, meaning that they can be shared but not modified.  In actual, the `ImmutableString` type
is an alias to `Rc<String>` or `Arc<String>` (depending on the [`sync`] feature).
Any modification done to a Rhai string will cause the string to be cloned and the modifications made to the copy.

The `to_string` function converts a standard type into a [string] for display purposes.

The `type_of` function detects the actual type of a value. This is useful because all variables are [`Dynamic`] in nature.

```rust
// Use 'type_of()' to get the actual types of values
type_of('c') == "char";
type_of(42) == "i64";

let x = 123;
x.type_of() == "i64";                           // method-call style is also OK
type_of(x) == "i64";

x = 99.999;
type_of(x) == "f64";

x = "hello";
if type_of(x) == "string" {
    do_something_with_string(x);
}
```

`Dynamic` values
----------------

[`Dynamic`]: #dynamic-values

A `Dynamic` value can be _any_ type. However, under [`sync`], all types must be `Send + Sync`.

Because [`type_of()`] a `Dynamic` value returns the type of the actual value, it is usually used to perform type-specific
actions based on the actual value's type.

```rust
let mystery = get_some_dynamic_value();

if type_of(mystery) == "i64" {
    print("Hey, I got an integer here!");
} else if type_of(mystery) == "f64" {
    print("Hey, I got a float here!");
} else if type_of(mystery) == "string" {
    print("Hey, I got a string here!");
} else if type_of(mystery) == "bool" {
    print("Hey, I got a boolean here!");
} else if type_of(mystery) == "array" {
    print("Hey, I got an array here!");
} else if type_of(mystery) == "map" {
    print("Hey, I got an object map here!");
} else if type_of(mystery) == "TestStruct" {
    print("Hey, I got the TestStruct custom type here!");
} else {
    print("I don't know what this is: " + type_of(mystery));
}
```

In Rust, sometimes a `Dynamic` forms part of a returned value - a good example is an [array] with `Dynamic` elements,
or an [object map] with `Dynamic` property values.  To get the _real_ values, the actual value types _must_ be known in advance.
There is no easy way for Rust to decide, at run-time, what type the `Dynamic` value is (short of using the `type_name`
function and match against the name).

A `Dynamic` value's actual type can be checked via the `is` method.
The `cast` method then converts the value into a specific, known type.
Alternatively, use the `try_cast` method which does not panic but returns `None` when the cast fails.

```rust
let list: Array = engine.eval("...")?;          // return type is 'Array'
let item = list[0];                             // an element in an 'Array' is 'Dynamic'

item.is::<i64>() == true;                       // 'is' returns whether a 'Dynamic' value is of a particular type

let value = item.cast::<i64>();                 // if the element is 'i64', this succeeds; otherwise it panics
let value: i64 = item.cast();                   // type can also be inferred

let value = item.try_cast::<i64>().unwrap();    // 'try_cast' does not panic when the cast fails, but returns 'None'
```

The `type_name` method gets the name of the actual type as a static string slice, which can be `match`-ed against.

```rust
let list: Array = engine.eval("...")?;          // return type is 'Array'
let item = list[0];                             // an element in an 'Array' is 'Dynamic'

match item.type_name() {                        // 'type_name' returns the name of the actual Rust type
    "i64" => ...
    "alloc::string::String" => ...
    "bool" => ...
    "path::to::module::TestStruct" => ...
}
```

The following conversion traits are implemented for `Dynamic`:

* `From<i64>` (`i32` if [`only_i32`])
* `From<f64>` (if not [`no_float`])
* `From<bool>`
* `From<rhai::ImmutableString>`
* `From<String>`
* `From<char>`
* `From<Vec<T>>` (into an [array])
* `From<HashMap<String, T>>` (into an [object map]).

Value conversions
-----------------

[`to_int`]: #value-conversions
[`to_float`]: #value-conversions

The `to_float` function converts a supported number to `FLOAT` (`f32` or `f64`),
and the `to_int` function converts a supported number to `INT` (`i32` or `i64`).
That's about it. For other conversions, register custom conversion functions.

```rust
let x = 42;
let y = x * 100.0;                              // <- error: cannot multiply i64 with f64
let y = x.to_float() * 100.0;                   // works
let z = y.to_int() + x;                         // works

let c = 'X';                                    // character
print("c is '" + c + "' and its code is " + c.to_int());    // prints "c is 'X' and its code is 88"
```

Traits
------

A number of traits, under the `rhai::` module namespace, provide additional functionalities.

| Trait              | Description                                                                              | Methods                                 |
| ------------------ | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| `RegisterFn`       | Trait for registering functions                                                          | `register_fn`                           |
| `RegisterResultFn` | Trait for registering fallible functions returning `Result<Dynamic, Box<EvalAltResult>>` | `register_result_fn`                    |
| `Func`             | Trait for creating anonymous functions from script                                       | `create_from_ast`, `create_from_script` |
| `ModuleResolver`   | Trait implemented by module resolution services                                          | `resolve`                               |

Working with functions
----------------------

Rhai's scripting engine is very lightweight.  It gets most of its abilities from functions.
To call these functions, they need to be registered with the [`Engine`].

```rust
use rhai::{Dynamic, Engine, EvalAltResult, ImmutableString};
use rhai::RegisterFn;                           // use 'RegisterFn' trait for 'register_fn'
use rhai::RegisterResultFn;                     // use 'RegisterResultFn' trait for 'register_result_fn'

// Normal function that returns a standard type
// Remember to use 'ImmutableString' and not 'String'
fn add_len(x: i64, s: ImmutableString) -> i64 {
    x + s.len()
}
// Alternatively, '&str' maps directly to 'ImmutableString'
fn add_len_str(x: i64, s: &str) -> i64 {
    x + s.len()
}

// Function that returns a 'Dynamic' value - must return a 'Result'
fn get_any_value() -> Result<Dynamic, Box<EvalAltResult>> {
    Ok((42_i64).into())                         // standard types can use 'into()'
}

fn main() -> Result<(), Box<EvalAltResult>>
{
    let engine = Engine::new();

    engine.register_fn("add", add_len);
    engine.register_fn("add_str", add_len_str);

    let result = engine.eval::<i64>(r#"add(40, "xx")"#)?;

    println!("Answer: {}", result);             // prints 42

    let result = engine.eval::<i64>(r#"add_str(40, "xx")"#)?;

    println!("Answer: {}", result);             // prints 42

    // Functions that return Dynamic values must use register_result_fn()
    engine.register_result_fn("get_any_value", get_any_value);

    let result = engine.eval::<i64>("get_any_value()")?;

    println!("Answer: {}", result);             // prints 42

    Ok(())
}
```

To create a [`Dynamic`] value, use the `Dynamic::from` method.
[Standard types] in Rhai can also use `into()`.

```rust
use rhai::Dynamic;

let x = (42_i64).into();                        // 'into()' works for standard types

let y = Dynamic::from("hello!".to_string());    // remember &str is not supported by Rhai
```

Functions registered with the [`Engine`] can be _overloaded_ as long as the _signature_ is unique,
i.e. different functions can have the same name as long as their parameters are of different types
and/or different number.
New definitions _overwrite_ previous definitions of the same name and same number/types of parameters.

### `String` parameters

Functions accepting a parameter of `String` should use `&str` instead because it maps directly to `ImmutableString`
which is the type that Rhai uses to represent strings internally.

```rust
fn get_len1(s: String) -> i64 { s.len() as i64 }            // <- Rhai will not find this function
fn get_len2(s: &str) -> i64 { s.len() as i64 }              // <- Rhai finds this function fine
fn get_len3(s: ImmutableString) -> i64 { s.len() as i64 }   // <- the above is equivalent to this

engine.register_fn("len1", get_len1);
engine.register_fn("len2", get_len2);
engine.register_fn("len3", get_len3);

let len = engine.eval::<i64>("x.len1()")?;                  // error: function 'len1 (string)' not found
let len = engine.eval::<i64>("x.len2()")?;                  // works fine
let len = engine.eval::<i64>("x.len3()")?;                  // works fine
```

Generic functions
-----------------

Rust generic functions can be used in Rhai, but separate instances for each concrete type must be registered separately.
This essentially overloads the function with different parameter types (Rhai does not natively support generics).

```rust
use std::fmt::Display;

use rhai::{Engine, RegisterFn};

fn show_it<T: Display>(x: &mut T) -> () {
    println!("put up a good show: {}!", x)
}

fn main()
{
    let engine = Engine::new();

    engine.register_fn("print", show_it as fn(x: &mut i64)->());
    engine.register_fn("print", show_it as fn(x: &mut bool)->());
    engine.register_fn("print", show_it as fn(x: &mut String)->());
}
```

The above example shows how to register multiple functions (or, in this case, multiple overloaded versions of the same function)
under the same name.

Fallible functions
------------------

If a function is _fallible_ (i.e. it returns a `Result<_, Error>`), it can be registered with `register_result_fn`
(using the `RegisterResultFn` trait).

The function must return `Result<Dynamic, Box<EvalAltResult>>`. `Box<EvalAltResult>` implements `From<&str>` and `From<String>` etc.
and the error text gets converted into `Box<EvalAltResult::ErrorRuntime>`.

The error values are `Box`-ed in order to reduce memory footprint of the error path, which should be hit rarely.

```rust
use rhai::{Engine, EvalAltResult, Position};
use rhai::RegisterResultFn;                     // use 'RegisterResultFn' trait for 'register_result_fn'

// Function that may fail - the result type must be 'Dynamic'
fn safe_divide(x: i64, y: i64) -> Result<Dynamic, Box<EvalAltResult>> {
    if y == 0 {
        // Return an error if y is zero
        Err("Division by zero!".into())         // short-cut to create Box<EvalAltResult::ErrorRuntime>
    } else {
        Ok((x / y).into())                      // convert result into 'Dynamic'
    }
}

fn main()
{
    let engine = Engine::new();

    // Fallible functions that return Result values must use register_result_fn()
    engine.register_result_fn("divide", safe_divide);

    if let Err(error) = engine.eval::<i64>("divide(40, 0)") {
       println!("Error: {:?}", *error);         // prints ErrorRuntime("Division by zero detected!", (1, 1)")
    }
}
```

Overriding built-in functions
----------------------------

Any similarly-named function defined in a script overrides any built-in function and any registered
native Rust function of the same name and number of parameters.

```rust
// Override the built-in function 'to_int'
fn to_int(num) {
    print("Ha! Gotcha! " + num);
}

print(to_int(123));     // what happens?
```

A registered function, in turn, overrides any built-in function of the same name and number/types of parameters.

Operator overloading
--------------------

In Rhai, a lot of functionalities are actually implemented as functions, including basic operations such as arithmetic calculations.
For example, in the expression "`a + b`", the `+` operator is _not_ built in, but calls a function named "`+`" instead!

```rust
let x = a + b;
let x = +(a, b);        // <- the above is equivalent to this function call
```

Similarly, comparison operators including `==`, `!=` etc. are all implemented as functions, with the stark exception of `&&` and `||`.
Because they [_short-circuit_](#boolean-operators), `&&` and `||` are handled specially and _not_ via a function; as a result,
overriding them has no effect at all.

Operator functions cannot be defined as a script function (because operators syntax are not valid function names).
However, operator functions _can_ be registered to the [`Engine`] via the methods `Engine::register_fn`, `Engine::register_result_fn` etc.
When a custom operator function is registered with the same name as an operator, it overrides the built-in version.

```rust
use rhai::{Engine, EvalAltResult, RegisterFn};

let mut engine = Engine::new();

fn strange_add(a: i64, b: i64) -> i64 { (a + b) * 42 }

engine.register_fn("+", strange_add);               // overload '+' operator for two integers!

let result: i64 = engine.eval("1 + 0");             // the overloading version is used

println!("result: {}", result);                     // prints 42

let result: f64 = engine.eval("1.0 + 0.0");         // '+' operator for two floats not overloaded

println!("result: {}", result);                     // prints 1.0

fn mixed_add(a: i64, b: f64) -> f64 { (a as f64) + b }

engine.register_fn("+", mixed_add);                 // register '+' operator for an integer and a float

let result: i64 = engine.eval("1 + 1.0");           // prints 2.0 (normally an error)
```

Use operator overloading for custom types (described below) only.
Be very careful when overriding built-in operators because script authors expect standard operators to behave in a
consistent and predictable manner, and will be annoyed if a calculation for '`+`' turns into a subtraction, for example.

Operator overloading also impacts script optimization when using [`OptimizationLevel::Full`].
See the [relevant section](#script-optimization) for more details.

Custom types and methods
-----------------------

A more complete example of working with Rust:

```rust
use rhai::{Engine, EvalAltResult};
use rhai::RegisterFn;

#[derive(Clone)]
struct TestStruct {
    field: i64
}

impl TestStruct {
    fn update(&mut self) {
        self.field += 41;
    }

    fn new() -> Self {
        TestStruct { field: 1 }
    }
}

fn main() -> Result<(), Box<EvalAltResult>>
{
    let engine = Engine::new();

    engine.register_type::<TestStruct>();

    engine.register_fn("update", TestStruct::update);
    engine.register_fn("new_ts", TestStruct::new);

    let result = engine.eval::<TestStruct>("let x = new_ts(); x.update(); x")?;

    println!("result: {}", result.field);           // prints 42

    Ok(())
}
```

All custom types must implement `Clone` as this allows the [`Engine`] to pass by value.
Support for custom types can be turned off via the [`no_object`] feature.

```rust
#[derive(Clone)]
struct TestStruct {
    field: i64
}
```

Next, create a few methods for later use in scripts.
Notice that the custom type needs to be _registered_ with the [`Engine`].

```rust
impl TestStruct {
    fn update(&mut self) {                          // methods take &mut as first parameter
        self.field += 41;
    }

    fn new() -> Self {
        TestStruct { field: 1 }
    }
}

let engine = Engine::new();

engine.register_type::<TestStruct>();
```

To use native types, methods and functions with the [`Engine`], simply register them using one of the `Engine::register_XXX` API.
Below, the `update` and `new` methods are registered using `Engine::register_fn`.

***Note**: Rhai follows the convention that methods of custom types take a `&mut` first parameter so that invoking methods
can update the custom types. All other parameters in Rhai are passed by value (i.e. clones).*

```rust
engine.register_fn("update", TestStruct::update);   // registers 'update(&mut TestStruct)'
engine.register_fn("new_ts", TestStruct::new);      // registers 'new()'
```

The custom type is then ready for use in scripts.  Scripts can see the functions and methods registered earlier.
Get the evaluation result back out from script-land just as before, this time casting to the custom type:

```rust
let result = engine.eval::<TestStruct>("let x = new_ts(); x.update(); x")?;

println!("result: {}", result.field);               // prints 42
```

In fact, any function with a first argument that is a `&mut` reference can be used as method calls because
internally they are the same thing: methods on a type is implemented as a functions taking a `&mut` first argument.

```rust
fn foo(ts: &mut TestStruct) -> i64 {
    ts.field
}

engine.register_fn("foo", foo);                     // register ad hoc function with correct signature

let result = engine.eval::<i64>(
    "let x = new_ts(); x.foo()"                     // 'foo' can be called like a method on 'x'
)?;

println!("result: {}", result);                     // prints 1
```

Under [`no_object`], however, the _method_ style of function calls (i.e. calling a function as an object-method)
is no longer supported.

```rust
// Below is a syntax error under 'no_object' because 'clear' cannot be called in method style.
let result = engine.eval::<()>("let x = [1, 2, 3]; x.clear()")?;
```

[`type_of()`] works fine with custom types and returns the name of the type.
If `Engine::register_type_with_name` is used to register the custom type
with a special "pretty-print" name, [`type_of()`] will return that name instead.

```rust
engine.register_type::<TestStruct>();
engine.register_fn("new_ts", TestStruct::new);
let x = new_ts();
print(x.type_of());                                 // prints "path::to::module::TestStruct"

engine.register_type_with_name::<TestStruct>("Hello");
engine.register_fn("new_ts", TestStruct::new);
let x = new_ts();
print(x.type_of());                                 // prints "Hello"
```

### Getters and setters

Similarly, custom types can expose members by registering a `get` and/or `set` function.

```rust
#[derive(Clone)]
struct TestStruct {
    field: String
}

impl TestStruct {
    // Returning a 'String' is OK - Rhai converts it into 'ImmutableString'
    fn get_field(&mut self) -> String {
        self.field.clone()
    }

    // Remember Rhai uses 'ImmutableString' or '&str' instead of 'String'
    fn set_field(&mut self, new_val: ImmutableString) {
        // Get a 'String' from an 'ImmutableString'
        self.field = (*new_val).clone();
    }

    fn new() -> Self {
        TestStruct { field: "hello" }
    }
}

let engine = Engine::new();

engine.register_type::<TestStruct>();

engine.register_get_set("xyz", TestStruct::get_field, TestStruct::set_field);
engine.register_fn("new_ts", TestStruct::new);

// Return result can be 'String' - Rhai will automatically convert it from 'ImmutableString'
let result = engine.eval::<String>(r#"let a = new_ts(); a.xyz = "42"; a.xyz"#)?;

println!("Answer: {}", result);                     // prints 42
```

### Indexers

Custom types can also expose an _indexer_ by registering an indexer function.
A custom type with an indexer function defined can use the bracket '`[]`' notation to get a property value

```rust
#[derive(Clone)]
struct TestStruct {
    fields: Vec<i64>
}

impl TestStruct {
    fn get_field(&mut self, index: i64) -> i64 {
        self.fields[index as usize]
    }
    fn set_field(&mut self, index: i64, value: i64) {
        self.fields[index as usize] = value
    }

    fn new() -> Self {
        TestStruct { fields: vec![1, 2, 3, 4, 5] }
    }
}

let engine = Engine::new();

engine.register_type::<TestStruct>();

engine.register_fn("new_ts", TestStruct::new);

// Shorthand: engine.register_indexer_get_set(TestStruct::get_field, TestStruct::set_field);
engine.register_indexer_get(TestStruct::get_field);
engine.register_indexer_set(TestStruct::set_field);

let result = engine.eval::<i64>("let a = new_ts(); a[2] = 42; a[2]")?;

println!("Answer: {}", result);                     // prints 42
```

For efficiency reasons, indexers **cannot** be used to overload (i.e. override) built-in indexing operations for
[arrays] and [object maps].

### Disabling custom types

The custom types API `register_type`, `register_type_with_name`, `register_get`, `register_set`, `register_get_set`,
`register_indexer_get`, `register_indexer_set` and `register_indexer_get_set` are not available under [`no_object`].

The indexers API `register_indexer_get`, `register_indexer_set` and `register_indexer_get_set` are also
not available under [`no_index`].

### Printing for custom types

To use custom types for `print` and `debug`, or convert its value into a [string], it is necessary that the following
functions be registered (assuming the custom type is `T : Display + Debug`):

| Function    | Signature                                        | Typical implementation                | Usage                                                                                   |
| ----------- | ------------------------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------- |
| `to_string` | `|s: &mut T| -> ImmutableString`                 | `s.to_string().into()`                | Converts the custom type into a [string]                                                |
| `print`     | `|s: &mut T| -> ImmutableString`                 | `s.to_string().into()`                | Converts the custom type into a [string] for the [`print`](#print-and-debug) statement  |
| `debug`     | `|s: &mut T| -> ImmutableString`                 | `format!("{:?}", s).into()`           | Converts the custom type into a [string] for the [`debug`](#print-and-debug) statement  |
| `+`         | `|s1: ImmutableString, s: T| -> ImmutableString` | `s1 + s`                              | Append the custom type to another [string], for `print("Answer: " + type);` usage       |
| `+`         | `|s: T, s2: ImmutableString| -> ImmutableString` | `s.to_string().push_str(&s2).into();` | Append another [string] to the custom type, for `print(type + " is the answer");` usage |
| `+=`        | `|s1: &mut ImmutableString, s: T|`               | `s1 += s.to_string()`                 | Append the custom type to an existing [string], for `s += type;` usage                  |

`Scope` - Initializing and maintaining state
-------------------------------------------

[`Scope`]: #scope---initializing-and-maintaining-state

By default, Rhai treats each [`Engine`] invocation as a fresh one, persisting only the functions that have been defined
but no global state. This gives each evaluation a clean starting slate. In order to continue using the same global state
from one invocation to the next, such a state must be manually created and passed in.

All `Scope` variables are [`Dynamic`], meaning they can store values of any type.  Under [`sync`], however,
only types that are `Send + Sync` are supported, and the entire `Scope` itself will also be `Send + Sync`.
This is extremely useful in multi-threaded applications.

In this example, a global state object (a `Scope`) is created with a few initialized variables, then the same state is
threaded through multiple invocations:

```rust
use rhai::{Engine, Scope, EvalAltResult};

fn main() -> Result<(), Box<EvalAltResult>>
{
    let engine = Engine::new();

    // First create the state
    let mut scope = Scope::new();

    // Then push (i.e. add) some initialized variables into the state.
    // Remember the system number types in Rhai are i64 (i32 if 'only_i32') ond f64.
    // Better stick to them or it gets hard working with the script.
    scope.push("y", 42_i64);
    scope.push("z", 999_i64);

    // 'set_value' adds a variable when one doesn't exist
    scope.set_value("s", "hello, world!".to_string());  // remember to use 'String', not '&str'

    // First invocation
    engine.eval_with_scope::<()>(&mut scope, r"
        let x = 4 + 5 - y + z + s.len;
        y = 1;
    ")?;

    // Second invocation using the same state
    let result = engine.eval_with_scope::<i64>(&mut scope, "x")?;

    println!("result: {}", result);                     // prints 979

    // Variable y is changed in the script - read it with 'get_value'
    assert_eq!(scope.get_value::<i64>("y").expect("variable y should exist"), 1);

    // We can modify scope variables directly with 'set_value'
    scope.set_value("y", 42_i64);
    assert_eq!(scope.get_value::<i64>("y").expect("variable y should exist"), 42);

    Ok(())
}
```

Engine configuration options
---------------------------

| Method                   | Description                                                                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `set_optimization_level` | Set the amount of script _optimizations_ performed. See [script optimization].                                                                      |
| `set_max_expr_depths`    | Set the maximum nesting levels of an expression/statement. See [maximum statement depth](#maximum-statement-depth).                                 |
| `set_max_call_levels`    | Set the maximum number of function call levels (default 50) to avoid infinite recursion. See [maximum call stack depth](#maximum-call-stack-depth). |
| `set_max_operations`     | Set the maximum number of _operations_ that a script is allowed to consume. See [maximum number of operations](#maximum-number-of-operations).      |
| `set_max_modules`        | Set the maximum number of [modules] that a script is allowed to load. See [maximum number of modules](#maximum-number-of-modules).                  |

-------

Rhai Language Guide
===================

Comments
--------

Comments are C-style, including '`/*` ... `*/`' pairs and '`//`' for comments to the end of the line.
Comments can be nested.

```rust
let /* intruder comment */ name = "Bob";

// This is a very important comment

/* This comment spans
   multiple lines, so it
   only makes sense that
   it is even more important */

/* Fear not, Rhai satisfies all nesting needs with nested comments:
   /*/*/*/*/**/*/*/*/*/
*/
```

Keywords
--------

The following are reserved keywords in Rhai:

| Keywords                                          | Usage                 | Not available under feature |
| ------------------------------------------------- | --------------------- | :-------------------------: |
| `true`, `false`                                   | Boolean constants     |                             |
| `let`, `const`                                    | Variable declarations |                             |
| `if`, `else`                                      | Control flow          |                             |
| `while`, `loop`, `for`, `in`, `continue`, `break` | Looping               |                             |
| `fn`, `private`                                   | Functions             |       [`no_function`]       |
| `return`                                          | Return values         |                             |
| `throw`                                           | Return errors         |                             |
| `import`, `export`, `as`                          | Modules               |        [`no_module`]        |

Keywords cannot be the name of a [function] or [variable], unless the relevant exclusive feature is enabled.
For example, `fn` is a valid variable name under [`no_function`].

Statements
----------

Statements are terminated by semicolons '`;`' and they are mandatory,
except for the _last_ statement in a _block_ (enclosed by '`{`' .. '`}`' pairs) where it can be omitted.

A statement can be used anywhere where an expression is expected. These are called, for lack of a more
creative name, "statement expressions."  The _last_ statement of a statement block is _always_ the block's
return value when used as a statement.
If the last statement has no return value (e.g. variable definitions, assignments) then it is assumed to be [`()`].

```rust
let a = 42;             // normal assignment statement
let a = foo(42);        // normal function call statement
foo < 42;               // normal expression as statement

let a = { 40 + 2 };     // 'a' is set to the value of the statement block, which is the value of the last statement
//              ^ the last statement does not require a terminating semicolon (although it also works with it)
//                ^ semicolon required here to terminate the assignment statement; it is a syntax error without it

4 * 10 + 2              // a statement which is just one expression; no ending semicolon is OK
                        // because it is the last statement of the whole block
```

Variables
---------

[variable]: #variables
[variables]: #variables

Variables in Rhai follow normal C naming rules (i.e. must contain only ASCII letters, digits and underscores '`_`').

Variable names must start with an ASCII letter or an underscore '`_`', must contain at least one ASCII letter,
and must start with an ASCII letter before a digit.
Therefore, names like '`_`', '`_42`', '`3a`' etc. are not legal variable names, but '`_c3po`' and '`r2d2`' are.
Variable names are also case _sensitive_.

Variables are defined using the `let` keyword. A variable defined within a statement block is _local_ to that block.

```rust
let x = 3;              // ok
let _x = 42;            // ok
let x_ = 42;            // also ok
let _x_ = 42;           // still ok

let _ = 123;            // <- syntax error: illegal variable name
let _9 = 9;             // <- syntax error: illegal variable name

let x = 42;             // variable is 'x', lower case
let X = 123;            // variable is 'X', upper case
x == 42;
X == 123;

{
    let x = 999;        // local variable 'x' shadows the 'x' in parent block
    x == 999;           // access to local 'x'
}
x == 42;                // the parent block's 'x' is not changed
```

Constants
---------

Constants can be defined using the `const` keyword and are immutable.  Constants follow the same naming rules as [variables].

```rust
const x = 42;
print(x * 2);           // prints 84
x = 123;                // <- syntax error: cannot assign to constant
```

Constants must be assigned a _value_, not an expression.

```rust
const x = 40 + 2;       // <- syntax error: cannot assign expression to constant
```

Numbers
-------

Integer numbers follow C-style format with support for decimal, binary ('`0b`'), octal ('`0o`') and hex ('`0x`') notations.

The default system integer type (also aliased to `INT`) is `i64`. It can be turned into `i32` via the [`only_i32`] feature.

Floating-point numbers are also supported if not disabled with [`no_float`]. The default system floating-point type is `i64`
(also aliased to `FLOAT`).

'`_`' separators can be added freely and are ignored within a number.

| Format           | Type             |
| ---------------- | ---------------- |
| `123_345`, `-42` | `i64` in decimal |
| `0o07_76`        | `i64` in octal   |
| `0xabcd_ef`      | `i64` in hex     |
| `0b0101_1001`    | `i64` in binary  |
| `123_456.789`    | `f64`            |

Numeric operators
-----------------

Numeric operators generally follow C styles.

| Operator | Description                                          | Integers only |
| -------- | ---------------------------------------------------- | :-----------: |
| `+`      | Plus                                                 |               |
| `-`      | Minus                                                |               |
| `*`      | Multiply                                             |               |
| `/`      | Divide (integer division if acting on integer types) |               |
| `%`      | Modulo (remainder)                                   |               |
| `~`      | Power                                                |               |
| `&`      | Binary _And_ bit-mask                                |      Yes      |
| `\|`     | Binary _Or_ bit-mask                                 |      Yes      |
| `^`      | Binary _Xor_ bit-mask                                |      Yes      |
| `<<`     | Left bit-shift                                       |      Yes      |
| `>>`     | Right bit-shift                                      |      Yes      |

```rust
let x = (1 + 2) * (6 - 4) / 2;  // arithmetic, with parentheses
let reminder = 42 % 10;         // modulo
let power = 42 ~ 2;             // power (i64 and f64 only)
let left_shifted = 42 << 3;     // left shift
let right_shifted = 42 >> 3;    // right shift
let bit_op = 42 | 99;           // bit masking
```

Unary operators
---------------

| Operator | Description |
| -------- | ----------- |
| `+`      | Plus        |
| `-`      | Negative    |

```rust
let number = -5;
number = -5 - +5;
```

Numeric functions
-----------------

The following standard functions (defined in the [`BasicMathPackage`](#packages) but excluded if using a [raw `Engine`]) operate on
`i8`, `i16`, `i32`, `i64`, `f32` and `f64` only:

| Function     | Description                       |
| ------------ | --------------------------------- |
| `abs`        | absolute value                    |
| [`to_float`] | converts an integer type to `f64` |

Floating-point functions
------------------------

The following standard functions (defined in the [`BasicMathPackage`](#packages) but excluded if using a [raw `Engine`]) operate on `f64` only:

| Category         | Functions                                                             |
| ---------------- | --------------------------------------------------------------------- |
| Trigonometry     | `sin`, `cos`, `tan`, `sinh`, `cosh`, `tanh` in degrees                |
| Arc-trigonometry | `asin`, `acos`, `atan`, `asinh`, `acosh`, `atanh` in degrees          |
| Square root      | `sqrt`                                                                |
| Exponential      | `exp` (base _e_)                                                      |
| Logarithmic      | `ln` (base _e_), `log10` (base 10), `log` (any base)                  |
| Rounding         | `floor`, `ceiling`, `round`, `int`, `fraction` methods and properties |
| Conversion       | [`to_int`]                                                            |
| Testing          | `is_nan`, `is_finite`, `is_infinite` methods and properties           |

Strings and Chars
-----------------

[string]: #strings-and-chars
[strings]: #strings-and-chars
[char]: #strings-and-chars

All strings in Rhai are implemented as `ImmutableString` (see [standard types]).
`ImmutableString` should be used in place of the standard Rust type `String` when registering functions.

String and character literals follow C-style formatting, with support for Unicode ('`\u`_xxxx_' or '`\U`_xxxxxxxx_')
and hex ('`\x`_xx_') escape sequences.

Hex sequences map to ASCII characters, while '`\u`' maps to 16-bit common Unicode code points and '`\U`' maps the full,
32-bit extended Unicode code points.

Standard escape sequences:

| Escape sequence | Meaning                        |
| --------------- | ------------------------------ |
| `\\`            | back-slash `\`                 |
| `\t`            | tab                            |
| `\r`            | carriage-return `CR`           |
| `\n`            | line-feed `LF`                 |
| `\"`            | double-quote `"` in strings    |
| `\'`            | single-quote `'` in characters |
| `\x`_xx_        | Unicode in 2-digit hex         |
| `\u`_xxxx_      | Unicode in 4-digit hex         |
| `\U`_xxxxxxxx_  | Unicode in 8-digit hex         |

Internally Rhai strings are stored as UTF-8 just like Rust (they _are_ Rust `String`'s!), but there are major differences.
In Rhai a string is the same as an array of Unicode characters and can be directly indexed (unlike Rust).
This is similar to most other languages where strings are internally represented not as UTF-8 but as arrays of multi-byte
Unicode characters.
Individual characters within a Rhai string can also be replaced just as if the string is an array of Unicode characters.
In Rhai, there is also no separate concepts of `String` and `&str` as in Rust.

Rhai strings are _immutable_ and can be shared.
Modifying a Rhai string actually causes it first to be cloned, and then the modification made to the copy.

Strings can be built up from other strings and types via the `+` operator (provided by the [`MoreStringPackage`](#packages)
but excluded if using a [raw `Engine`]). This is particularly useful when printing output.

[`type_of()`] a string returns `"string"`.

```rust
let name = "Bob";
let middle_initial = 'C';
let last = "Davis";

let full_name = name + " " + middle_initial + ". " + last;
full_name == "Bob C. Davis";

// String building with different types
let age = 42;
let record = full_name + ": age " + age;
record == "Bob C. Davis: age 42";

// Unlike Rust, Rhai strings can be indexed to get a character
// (disabled with 'no_index')
let c = record[4];
c == 'C';

ts.s = record;                          // custom type properties can take strings

let c = ts.s[4];
c == 'C';

let c = "foo"[0];                       // indexing also works on string literals...
c == 'f';

let c = ("foo" + "bar")[5];             // ... and expressions returning strings
c == 'r';

// Escape sequences in strings
record += " \u2764\n";                  // escape sequence of '❤' in Unicode
record == "Bob C. Davis: age 42 ❤\n";   // '\n' = new-line

// Unlike Rust, Rhai strings can be directly modified character-by-character
// (disabled with 'no_index')
record[4] = '\x58'; // 0x58 = 'X'
record == "Bob X. Davis: age 42 ❤\n";

// Use 'in' to test if a substring (or character) exists in a string
"Davis" in record == true;
'X' in record == true;
'C' in record == false;
```

### Built-in functions

The following standard methods (mostly defined in the [`MoreStringPackage`](#packages) but excluded if using a [raw `Engine`]) operate on strings:

| Function                  | Parameter(s)                                                 | Description                                                                                       |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `len` method and property | _none_                                                       | returns the number of characters (not number of bytes) in the string                              |
| `pad`                     | character to pad, target length                              | pads the string with an character to at least a specified length                                  |
| `+=` operator, `append`   | character/string to append                                   | Adds a character or a string to the end of another string                                         |
| `clear`                   | _none_                                                       | empties the string                                                                                |
| `truncate`                | target length                                                | cuts off the string at exactly a specified number of characters                                   |
| `contains`                | character/sub-string to search for                           | checks if a certain character or sub-string occurs in the string                                  |
| `index_of`                | character/sub-string to search for, start index _(optional)_ | returns the index that a certain character or sub-string occurs in the string, or -1 if not found |
| `sub_string`              | start index, length _(optional)_                             | extracts a sub-string (to the end of the string if length is not specified)                       |
| `crop`                    | start index, length _(optional)_                             | retains only a portion of the string (to the end of the string if length is not specified)        |
| `replace`                 | target character/sub-string, replacement character/string    | replaces a sub-string with another                                                                |
| `trim`                    | _none_                                                       | trims the string of whitespace at the beginning and end                                           |

### Examples

```rust
let full_name == " Bob C. Davis ";
full_name.len == 14;

full_name.trim();
full_name.len == 12;
full_name == "Bob C. Davis";

full_name.pad(15, '$');
full_name.len == 15;
full_name == "Bob C. Davis$$$";

let n = full_name.index_of('$');
n == 12;

full_name.index_of("$$", n + 1) == 13;

full_name.sub_string(n, 3) == "$$$";

full_name.truncate(6);
full_name.len == 6;
full_name == "Bob C.";

full_name.replace("Bob", "John");
full_name.len == 7;
full_name == "John C.";

full_name.contains('C') == true;
full_name.contains("John") == true;

full_name.crop(5);
full_name == "C.";

full_name.crop(0, 1);
full_name == "C";

full_name.clear();
full_name.len == 0;
```

Arrays
------

[array]: #arrays
[arrays]: #arrays
[`Array`]: #arrays

Arrays are first-class citizens in Rhai. Like C, arrays are accessed with zero-based, non-negative integer indices.
Array literals are built within square brackets '`[`' ... '`]`' and separated by commas '`,`'.
All elements stored in an array are [`Dynamic`], and the array can freely grow or shrink with elements added or removed.

The Rust type of a Rhai array is `rhai::Array`. [`type_of()`] an array returns `"array"`.

Arrays are disabled via the [`no_index`] feature.

### Built-in functions

The following methods (mostly defined in the [`BasicArrayPackage`](#packages) but excluded if using a [raw `Engine`]) operate on arrays:

| Function                  | Parameter(s)                                                          | Description                                                                                          |
| ------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `push`                    | element to insert                                                     | inserts an element at the end                                                                        |
| `+=` operator, `append`   | array to append                                                       | concatenates the second array to the end of the first                                                |
| `+` operator              | first array, second array                                             | concatenates the first array with the second                                                         |
| `insert`                  | element to insert, position<br/>(beginning if <= 0, end if >= length) | insert an element at a certain index                                                                 |
| `pop`                     | _none_                                                                | removes the last element and returns it ([`()`] if empty)                                            |
| `shift`                   | _none_                                                                | removes the first element and returns it ([`()`] if empty)                                           |
| `remove`                  | index                                                                 | removes an element at a particular index and returns it, or returns [`()`] if the index is not valid |
| `len` method and property | _none_                                                                | returns the number of elements                                                                       |
| `pad`                     | element to pad, target length                                         | pads the array with an element to at least a specified length                                        |
| `clear`                   | _none_                                                                | empties the array                                                                                    |
| `truncate`                | target length                                                         | cuts off the array at exactly a specified length (discarding all subsequent elements)                |

### Examples

```rust
let y = [2, 3];         // array literal with 2 elements

y.insert(0, 1);         // insert element at the beginning
y.insert(999, 4);       // insert element at the end

y.len == 4;

y[0] == 1;
y[1] == 2;
y[2] == 3;
y[3] == 4;

(1 in y) == true;       // use 'in' to test if an item exists in the array
(42 in y) == false;     // 'in' uses the '==' operator (which users can override)
                        // to check if the target item exists in the array

y[1] = 42;              // array elements can be reassigned

(42 in y) == true;

y.remove(2) == 3;       // remove element

y.len == 3;

y[2] == 4;              // elements after the removed element are shifted

ts.list = y;            // arrays can be assigned completely (by value copy)
let foo = ts.list[1];
foo == 42;

let foo = [1, 2, 3][0];
foo == 1;

fn abc() {
    [42, 43, 44]        // a function returning an array
}

let foo = abc()[0];
foo == 42;

let foo = y[0];
foo == 1;

y.push(4);              // 4 elements
y.push(5);              // 5 elements

y.len == 5;

let first = y.shift();  // remove the first element, 4 elements remaining
first == 1;

let last = y.pop();     // remove the last element, 3 elements remaining
last == 5;

y.len == 3;

for item in y {         // arrays can be iterated with a 'for' statement
    print(item);
}

y.pad(10, "hello");     // pad the array up to 10 elements

y.len == 10;

y.truncate(5);          // truncate the array to 5 elements

y.len == 5;

y.clear();              // empty the array

y.len == 0;
```

`push` and `pad` are only defined for standard built-in types. For custom types, type-specific versions must be registered:

```rust
engine.register_fn("push", |list: &mut Array, item: MyType| list.push(Box::new(item)) );
```

Object maps
-----------

[`Map`]: #object-maps
[object map]: #object-maps
[object maps]: #object-maps

Object maps are dictionaries. Properties are all [`Dynamic`] and can be freely added and retrieved.
Object map literals are built within braces '`#{`' ... '`}`' (_name_ `:` _value_ syntax similar to Rust)
and separated by commas '`,`'.  The property _name_ can be a simple variable name following the same
naming rules as [variables], or an arbitrary [string] literal.

Property values can be accessed via the dot notation (_object_ `.` _property_) or index notation (_object_ `[` _property_ `]`).
The dot notation allows only property names that follow the same naming rules as [variables].
The index notation allows setting/getting properties of arbitrary names (even the empty [string]).

**Important:** Trying to read a non-existent property returns [`()`] instead of causing an error.

The Rust type of a Rhai object map is `rhai::Map`. [`type_of()`] an object map returns `"map"`.

Object maps are disabled via the [`no_object`] feature.

### Built-in functions

The following methods (defined in the [`BasicMapPackage`](#packages) but excluded if using a [raw `Engine`]) operate on object maps:

| Function               | Parameter(s)                        | Description                                                                                                                              |
| ---------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `has`                  | property name                       | does the object map contain a property of a particular name?                                                                             |
| `len`                  | _none_                              | returns the number of properties                                                                                                         |
| `clear`                | _none_                              | empties the object map                                                                                                                   |
| `remove`               | property name                       | removes a certain property and returns it ([`()`] if the property does not exist)                                                        |
| `+=` operator, `mixin` | second object map                   | mixes in all the properties of the second object map to the first (values of properties with the same names replace the existing values) |
| `+` operator           | first object map, second object map | merges the first object map with the second                                                                                              |
| `keys`                 | _none_                              | returns an [array] of all the property names (in random order), not available under [`no_index`]                                         |
| `values`               | _none_                              | returns an [array] of all the property values (in random order), not available under [`no_index`]                                        |

### Examples

```rust
let y = #{              // object map literal with 3 properties
    a: 1,
    bar: "hello",
    "baz!$@": 123.456,  // like JS, you can use any string as property names...
    "": false,          // even the empty string!

    a: 42               // <- syntax error: duplicated property name
};

y.a = 42;               // access via dot notation
y.baz!$@ = 42;          // <- syntax error: only proper variable names allowed in dot notation
y."baz!$@" = 42;        // <- syntax error: strings not allowed in dot notation

y.a == 42;

y["baz!$@"] == 123.456; // access via index notation

"baz!$@" in y == true;  // use 'in' to test if a property exists in the object map
("z" in y) == false;

ts.obj = y;             // object maps can be assigned completely (by value copy)
let foo = ts.list.a;
foo == 42;

let foo = #{ a:1, b:2, c:3 }["a"];
foo == 1;

fn abc() {
    #{ a:1, b:2, c:3 }  // a function returning an object map
}

let foo = abc().b;
foo == 2;

let foo = y["a"];
foo == 42;

y.has("a") == true;
y.has("xyz") == false;

y.xyz == ();            // a non-existing property returns '()'
y["xyz"] == ();

y.len() == 3;

y.remove("a") == 1;     // remove property

y.len() == 2;
y.has("a") == false;

for name in keys(y) {   // get an array of all the property names via the 'keys' function
    print(name);
}

for val in values(y) {  // get an array of all the property values via the 'values' function
    print(val);
}

y.clear();              // empty the object map

y.len() == 0;
```

### Parsing from JSON

The syntax for an object map is extremely similar to JSON, with the exception of `null` values which can
technically be mapped to [`()`].  A valid JSON string does not start with a hash character `#` while a
Rhai object map does - that's the major difference!

JSON numbers are all floating-point while Rhai supports integers (`INT`) and floating-point (`FLOAT`) if
the [`no_float`] feature is not enabled.  Most common generators of JSON data distinguish between
integer and floating-point values by always serializing a floating-point number with a decimal point
(i.e. `123.0` instead of `123` which is assumed to be an integer).  This style can be used successfully
with Rhai object maps.

Use the `parse_json` method to parse a piece of JSON into an object map:

```rust
// JSON string - notice that JSON property names are always quoted
//               notice also that comments are acceptable within the JSON string
let json = r#"{
                "a": 1,                 // <- this is an integer number
                "b": true,
                "c": 123.0,             // <- this is a floating-point number
                "$d e f!": "hello",     // <- any text can be a property name
                "^^^!!!": [1,42,"999"], // <- value can be array or another hash
                "z": null               // <- JSON 'null' value
              }
"#;

// Parse the JSON expression as an object map
// Set the second boolean parameter to true in order to map 'null' to '()'
let map = engine.parse_json(json, true)?;

map.len() == 6;                         // 'map' contains all properties in the JSON string

// Put the object map into a 'Scope'
let mut scope = Scope::new();
scope.push("map", map);

let result = engine.eval_with_scope::<INT>(r#"map["^^^!!!"].len()"#)?;

result == 3;                            // the object map is successfully used in the script
```

`timestamp`'s
-------------

[`timestamp`]: #timestamps
[timestamp]: #timestamps
[timestamps]: #timestamps

Timestamps are provided by the [`BasicTimePackage`](#packages) (excluded if using a [raw `Engine`]) via the `timestamp`
function.

The Rust type of a timestamp is `std::time::Instant`. [`type_of()`] a timestamp returns `"timestamp"`.

### Built-in functions

The following methods (defined in the [`BasicTimePackage`](#packages) but excluded if using a [raw `Engine`]) operate on timestamps:

| Function                      | Parameter(s)                       | Description                                              |
| ----------------------------- | ---------------------------------- | -------------------------------------------------------- |
| `elapsed` method and property | _none_                             | returns the number of seconds since the timestamp        |
| `-` operator                  | later timestamp, earlier timestamp | returns the number of seconds between the two timestamps |

### Examples

```rust
let now = timestamp();

// Do some lengthy operation...

if now.elapsed > 30.0 {
    print("takes too long (over 30 seconds)!")
}
```

Comparison operators
--------------------

Comparing most values of the same data type work out-of-the-box for all [standard types] supported by the system.

However, if using a [raw `Engine`] without loading any [packages], comparisons can only be made between a limited
set of types (see [built-in operators](#built-in-operators)).

```rust
42 == 42;               // true
42 > 42;                // false
"hello" > "foo";        // true
"42" == 42;             // false
```

Comparing two values of _different_ data types, or of unknown data types, always results in `false`,
except for '`!=`' (not equals) which results in `true`. This is in line with intuition.

```rust
42 == 42.0;             // false - i64 cannot be compared with f64
42 != 42.0;             // true - i64 cannot be compared with f64

42 > "42";              // false - i64 cannot be compared with string
42 <= "42";             // false - i64 cannot be compared with string

let ts = new_ts();      // custom type
ts == 42;               // false - types cannot be compared
ts != 42;               // true - types cannot be compared
```

Boolean operators
-----------------

| Operator | Description                           |
| -------- | ------------------------------------- |
| `!`      | Boolean _Not_                         |
| `&&`     | Boolean _And_ (short-circuits)        |
| `\|\|`   | Boolean _Or_ (short-circuits)         |
| `&`      | Boolean _And_ (doesn't short-circuit) |
| `\|`     | Boolean _Or_ (doesn't short-circuit)  |

Double boolean operators `&&` and `||` _short-circuit_, meaning that the second operand will not be evaluated
if the first one already proves the condition wrong.

Single boolean operators `&` and `|` always evaluate both operands.

```rust
this() || that();       // that() is not evaluated if this() is true
this() && that();       // that() is not evaluated if this() is false

this() | that();        // both this() and that() are evaluated
this() & that();        // both this() and that() are evaluated
```

Compound assignment operators
----------------------------

```rust
let number = 5;
number += 4;            // number = number + 4
number -= 3;            // number = number - 3
number *= 2;            // number = number * 2
number /= 1;            // number = number / 1
number %= 3;            // number = number % 3
number <<= 2;           // number = number << 2
number >>= 1;           // number = number >> 1
```

The `+=` operator can also be used to build [strings]:

```rust
let my_str = "abc";
my_str += "ABC";
my_str += 12345;

my_str == "abcABC12345"
```

`if` statement
--------------

```rust
if foo(x) {
    print("It's true!");
} else if bar == baz {
    print("It's true again!");
} else if ... {
        :
} else if ... {
        :
} else {
    print("It's finally false!");
}
```

All branches of an `if` statement must be enclosed within braces '`{`' .. '`}`', even when there is only one statement.
Like Rust, there is no ambiguity regarding which `if` clause a statement belongs to.

```rust
if (decision) print("I've decided!");
//            ^ syntax error, expecting '{' in statement block
```

Like Rust, `if` statements can also be used as _expressions_, replacing the `? :` conditional operators in other C-like languages.

```rust
// The following is equivalent to C: int x = 1 + (decision ? 42 : 123) / 2;
let x = 1 + if decision { 42 } else { 123 } / 2;
x == 22;

let x = if decision { 42 }; // no else branch defaults to '()'
x == ();
```

`while` loop
------------

```rust
let x = 10;

while x > 0 {
    x = x - 1;
    if x < 6 { continue; }  // skip to the next iteration
    print(x);
    if x == 5 { break; }    // break out of while loop
}
```

Infinite `loop`
---------------

```rust
let x = 10;

loop {
    x = x - 1;
    if x > 5 { continue; }  // skip to the next iteration
    print(x);
    if x == 0 { break; }    // break out of loop
}
```

`for` loop
----------

Iterating through a range or an [array] is provided by the `for` ... `in` loop.

```rust
let array = [1, 3, 5, 7, 9, 42];

// Iterate through array
for x in array {
    if x > 10 { continue; } // skip to the next iteration
    print(x);
    if x == 42 { break; }   // break out of for loop
}

// The 'range' function allows iterating from first to last-1
for x in range(0, 50) {
    if x > 10 { continue; } // skip to the next iteration
    print(x);
    if x == 42 { break; }   // break out of for loop
}

// The 'range' function also takes a step
for x in range(0, 50, 3) {  // step by 3
    if x > 10 { continue; } // skip to the next iteration
    print(x);
    if x == 42 { break; }   // break out of for loop
}

// Iterate through object map
let map = #{a:1, b:3, c:5, d:7, e:9};

// Property names are returned in random order
for x in keys(map) {
    if x > 10 { continue; } // skip to the next iteration
    print(x);
    if x == 42 { break; }   // break out of for loop
}

// Property values are returned in random order
for val in values(map) {
    print(val);
}
```

`return`-ing values
-------------------

```rust
return;                     // equivalent to return ();

return 123 + 456;           // returns 579
```

Errors and `throw`-ing exceptions
--------------------------------

All of [`Engine`]'s evaluation/consuming methods return `Result<T, Box<rhai::EvalAltResult>>` with `EvalAltResult`
holding error information. To deliberately return an error during an evaluation, use the `throw` keyword.

```rust
if some_bad_condition_has_happened {
    throw error;            // 'throw' takes a string as the exception text
}

throw;                      // defaults to empty exception text: ""
```

Exceptions thrown via `throw` in the script can be captured by matching `Err(EvalAltResult::ErrorRuntime(` _reason_ `,` _position_ `))`
with the exception text captured by the first parameter.

```rust
let result = engine.eval::<i64>(r#"
    let x = 42;

    if x > 0 {
        throw x + " is too large!";
    }
"#);

println!(result);           // prints "Runtime error: 42 is too large! (line 5, position 15)"
```

Functions
---------

[function]: #functions
[functions]: #functions

Rhai supports defining functions in script (unless disabled with [`no_function`]):

```rust
fn add(x, y) {
    return x + y;
}

print(add(2, 3));
```

### Implicit return

Just like in Rust, an implicit return can be used. In fact, the last statement of a block is _always_ the block's return value
regardless of whether it is terminated with a semicolon `';'`. This is different from Rust.

```rust
fn add(x, y) {              // implicit return:
    x + y;                  // value of the last statement (no need for ending semicolon)
                            // is used as the return value
}

fn add2(x) {
    return x + 2;           // explicit return
}

print(add(2, 3));           // prints 5
print(add2(42));            // prints 44
```

### No access to external scope

Functions are not _closures_. They do not capture the calling environment and can only access their own parameters.
They cannot access variables external to the function itself.

```rust
let x = 42;

fn foo() { x }              // <- syntax error: variable 'x' doesn't exist
```

### Passing arguments by value

Functions defined in script always take [`Dynamic`] parameters (i.e. the parameter can be of any type).
It is important to remember that all arguments are passed by _value_, so all functions are _pure_
(i.e. they never modify their arguments).
Any update to an argument will **not** be reflected back to the caller.
This can introduce subtle bugs, if not careful, especially when using the _method-call_ style.

```rust
fn change(s) {              // 's' is passed by value
    s = 42;                 // only a COPY of 's' is changed
}

let x = 500;
x.change();                 // de-sugars to 'change(x)'
x == 500;                   // 'x' is NOT changed!
```

### Global definitions only

Functions can only be defined at the global level, never inside a block or another function.

```rust
// Global level is OK
fn add(x, y) {
    x + y
}

// The following will not compile
fn do_addition(x) {
    fn add_y(n) {           // <- syntax error: functions cannot be defined inside another function
        n + y
    }

    add_y(x)
}
```

Unlike C/C++, functions can be defined _anywhere_ within the global level. A function does not need to be defined
prior to being used in a script; a statement in the script can freely call a function defined afterwards.
This is similar to Rust and many other modern languages.

### Function overloading

Functions defined in script can be _overloaded_ by _arity_ (i.e. they are resolved purely upon the function's _name_
and _number_ of parameters, but not parameter _types_ since all parameters are the same type - [`Dynamic`]).
New definitions _overwrite_ previous definitions of the same name and number of parameters.

```rust
fn foo(x,y,z) { print("Three!!! " + x + "," + y + "," + z) }
fn foo(x) { print("One! " + x) }
fn foo(x,y) { print("Two! " + x + "," + y) }
fn foo() { print("None.") }
fn foo(x) { print("HA! NEW ONE! " + x) }    // overwrites previous definition

foo(1,2,3);                 // prints "Three!!! 1,2,3"
foo(42);                    // prints "HA! NEW ONE! 42"
foo(1,2);                   // prints "Two!! 1,2"
foo();                      // prints "None."
```

Members and methods
-------------------

Properties and methods in a Rust custom type registered with the [`Engine`] can be called just like in Rust.
Unlike functions defined in script (for which all arguments are passed by _value_),
native Rust functions may mutate the object (or the first argument if called in normal function call style).

```rust
let a = new_ts();           // constructor function
a.field = 500;              // property setter
a.update();                 // method call, 'a' can be modified

update(a);                  // <- this de-sugars to 'a.update()' this if 'a' is a simple variable
                            //    unlike scripted functions, 'a' can be modified and is not a copy

let array = [ a ];

update(array[0]);           // <- 'array[0]' is an expression returning a calculated value,
                            //    a transient (i.e. a copy) so this statement has no effect
                            //    except waste a lot of time cloning

array[0].update();          // <- call this method-call style will update 'a'
```

Custom types, properties and methods can be disabled via the [`no_object`] feature.

`print` and `debug`
-------------------

The `print` and `debug` functions default to printing to `stdout`, with `debug` using standard debug formatting.

```rust
print("hello");             // prints hello to stdout
print(1 + 2 + 3);           // prints 6 to stdout
print("hello" + 42);        // prints hello42 to stdout
debug("world!");            // prints "world!" to stdout using debug formatting
```

### Overriding `print` and `debug` with callback functions

When embedding Rhai into an application, it is usually necessary to trap `print` and `debug` output
(for logging into a tracking log, for example) with the `Engine::on_print` and `Engine::on_debug` methods:

```rust
// Any function or closure that takes an '&str' argument can be used to override
// 'print' and 'debug'
engine.on_print(|x| println!("hello: {}", x));
engine.on_debug(|x| println!("DEBUG: {}", x));

// Example: quick-'n-dirty logging
let logbook = Arc::new(RwLock::new(Vec::<String>::new()));

// Redirect print/debug output to 'log'
let log = logbook.clone();
engine.on_print(move |s| log.write().unwrap().push(format!("entry: {}", s)));

let log = logbook.clone();
engine.on_debug(move |s| log.write().unwrap().push(format!("DEBUG: {}", s)));

// Evaluate script
engine.eval::<()>(script)?;

// 'logbook' captures all the 'print' and 'debug' output
for entry in logbook.read().unwrap().iter() {
    println!("{}", entry);
}
```

Modules
-------

[module]: #modules
[modules]: #modules

Rhai allows organizing code (functions, both Rust-based or script-based, and variables) into _modules_.
Modules can be disabled via the [`no_module`] feature.

### Exporting variables and functions from modules

A _module_ is a single script (or pre-compiled `AST`) containing global variables and functions.
The `export` statement, which can only be at global level, exposes selected variables as members of a module.
Variables not exported are _private_ and invisible to the outside.
On the other hand, all functions are automatically exported, _unless_ it is explicitly opt-out with the [`private`] prefix.
Functions declared [`private`] are invisible to the outside.

Everything exported from a module is **constant** (**read-only**).

```rust
// This is a module script.

fn inc(x) { x + 1 }         // script-defined function - default public

private fn foo() {}         // private function - invisible to outside

let private = 123;          // variable not exported - default invisible to outside
let x = 42;                 // this will be exported below

export x;                   // the variable 'x' is exported under its own name

export x as answer;         // the variable 'x' is exported under the alias 'answer'
                            // another script can load this module and access 'x' as 'module::answer'
```

### Importing modules

[`import`]: #importing-modules

A module can be _imported_ via the `import` statement, and its members are accessed via '`::`' similar to C++.

```rust
import "crypto" as crypto;  // import the script file 'crypto.rhai' as a module

crypto::encrypt(secret);    // use functions defined under the module via '::'

crypto::hash::sha256(key);  // sub-modules are also supported

print(crypto::status);      // module variables are constants

crypto::status = "off";     // <- runtime error - cannot modify a constant
```

`import` statements are _scoped_, meaning that they are only accessible inside the scope that they're imported.
They can appear anywhere a normal statement can be, but in the vast majority of cases `import` statements are
group at the beginning of a script.  It is not advised to deviate from this common practice unless there is
a _Very Good Reason™_. Especially, do not place an `import` statement within a loop; doing so will repeatedly
re-load the same module during every iteration of the loop!

```rust
let mod = "crypto";

if secured {                // new block scope
    import mod as crypto;   // import module (the path needs not be a constant string)

    crypto::encrypt(key);   // use a function in the module
}                           // the module disappears at the end of the block scope

crypto::encrypt(others);    // <- this causes a run-time error because the 'crypto' module
                            //    is no longer available!

for x in range(0, 1000) {
    import "crypto" as c;   // <- importing a module inside a loop is a Very Bad Idea™

    c.encrypt(something);
}
```

### Creating custom modules with Rust

To load a custom module (written in Rust) into an [`Engine`], first create a `Module` type, add variables/functions into it,
then finally push it into a custom [`Scope`].  This has the equivalent effect of putting an `import` statement
at the beginning of any script run.

```rust
use rhai::{Engine, Scope, Module, i64};

let mut engine = Engine::new();
let mut scope = Scope::new();

let mut module = Module::new();             // new module
module.set_var("answer", 41_i64);           // variable 'answer' under module
module.set_fn_1("inc", |x: i64| Ok(x+1));   // use the 'set_fn_XXX' API to add functions

// Push the module into the custom scope under the name 'question'
// This is equivalent to 'import "..." as question;'
scope.push_module("question", module);

// Use module-qualified variables
engine.eval_expression_with_scope::<i64>(&scope, "question::answer + 1")? == 42;

// Call module-qualified functions
engine.eval_expression_with_scope::<i64>(&scope, "question::inc(question::answer)")? == 42;
```

### Creating a module from an `AST`

It is easy to convert a pre-compiled `AST` into a module: just use `Module::eval_ast_as_new`.
Don't forget the `export` statement, otherwise there will be no variables exposed by the module
other than non-[`private`] functions (unless that's intentional).

```rust
use rhai::{Engine, Module};

let engine = Engine::new();

// Compile a script into an 'AST'
let ast = engine.compile(r#"
    // Functions become module functions
    fn calc(x) {
        x + 1
    }
    fn add_len(x, y) {
        x + y.len
    }

    // Imported modules can become sub-modules
    import "another module" as extra;

    // Variables defined at global level can become module variables
    const x = 123;
    let foo = 41;
    let hello;

    // Variable values become constant module variable values
    foo = calc(foo);
    hello = "hello, " + foo + " worlds!";

    // Finally, export the variables and modules
    export
        x as abc,           // aliased variable name
        foo,
        hello,
        extra as foobar;    // export sub-module
"#)?;

// Convert the 'AST' into a module, using the 'Engine' to evaluate it first
let module = Module::eval_ast_as_new(Scope::new(), &ast, &engine)?;

// 'module' now can be loaded into a custom 'Scope' for future use.  It contains:
//   - sub-module: 'foobar' (renamed from 'extra')
//   - functions: 'calc', 'add_len'
//   - variables: 'abc' (renamed from 'x'), 'foo', 'hello'
```

### Module resolvers

When encountering an `import` statement, Rhai attempts to _resolve_ the module based on the path string.
_Module Resolvers_ are service types that implement the [`ModuleResolver`](#traits) trait.
There are a number of standard resolvers built into Rhai, the default being the `FileModuleResolver`
which simply loads a script file based on the path (with `.rhai` extension attached) and execute it to form a module.

Built-in module resolvers are grouped under the `rhai::module_resolvers` module namespace.

| Module Resolver        | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FileModuleResolver`   | The default module resolution service, not available under [`no_std`]. Loads a script file (based off the current directory) with `.rhai` extension.<br/>The base directory can be changed via the `FileModuleResolver::new_with_path()` constructor function.<br/>`FileModuleResolver::create_module()` loads a script file and returns a module. |
| `StaticModuleResolver` | Loads modules that are statically added. This can be used under [`no_std`].                                                                                                                                                                                                                                                                        |

An [`Engine`]'s module resolver is set via a call to `Engine::set_module_resolver`:

```rust
// Use the 'StaticModuleResolver'
let resolver = rhai::module_resolvers::StaticModuleResolver::new();
engine.set_module_resolver(Some(resolver));

// Effectively disable 'import' statements by setting module resolver to 'None'
engine.set_module_resolver(None);
```

Ruggedization - protect against DoS attacks
------------------------------------------

For scripting systems open to user-land scripts, it is always best to limit the amount of resources used by a script
so that it does not consume more resources that it is allowed to.

The most important resources to watch out for are:

* **Memory**: A malicous script may continuously grow an [array] or [object map] until all memory is consumed.
  It may also create a large [array] or [object map] literal that exhausts all memory during parsing.
* **CPU**: A malicous script may run an infinite tight loop that consumes all CPU cycles.
* **Time**: A malicous script may run indefinitely, thereby blocking the calling system which is waiting for a result.
* **Stack**: A malicous script may attempt an infinite recursive call that exhausts the call stack.
  Alternatively, it may create a degenerated deep expression with so many levels that the parser exhausts the call stack
  when parsing the expression; or even deeply-nested statement blocks, if nested deep enough.
* **Overflows**: A malicous script may deliberately cause numeric over-flows and/or under-flows, divide by zero, and/or
  create bad floating-point representations, in order to crash the system.
* **Files**: A malicous script may continuously [`import`] an external module within an infinite loop,
  thereby putting heavy load on the file-system (or even the network if the file is not local).
  Furthermore, the module script may simply [`import`] itself in an infinite recursion.
  Even when modules are not created from files, they still typically consume a lot of resources to load.
* **Data**: A malicous script may attempt to read from and/or write to data that it does not own. If this happens,
  it is a severe security breach and may put the entire system at risk.

### Maximum number of operations

Rhai by default does not limit how much time or CPU a script consumes.
This can be changed via the `Engine::set_max_operations` method, with zero being unlimited (the default).

```rust
let mut engine = Engine::new();

engine.set_max_operations(500);             // allow only up to 500 operations for this script

engine.set_max_operations(0);               // allow unlimited operations
```

The concept of one single _operation_ in Rhai is volatile - it roughly equals one expression node,
loading one variable/constant, one operator call, one iteration of a loop, or one function call etc.
with sub-expressions, statements and function calls executed inside these contexts accumulated on top.
A good rule-of-thumb is that one simple non-trivial expression consumes on average 5-10 operations.

One _operation_ can take an unspecified amount of time and real CPU cycles, depending on the particulars.
For example, loading a constant consumes very few CPU cycles, while calling an external Rust function,
though also counted as only one operation, may consume much more computing resources.
To help visualize, think of an _operation_ as roughly equals to one _instruction_ of a hypothetical CPU
which includes _specialized_ instructions, such as _function call_, _load module_ etc., each taking up
one CPU cycle to execute.

The _operations count_ is intended to be a very course-grained measurement of the amount of CPU that a script
has consumed, allowing the system to impose a hard upper limit on computing resources.

A script exceeding the maximum operations count terminates with an error result.
This can be disabled via the [`unchecked`] feature for higher performance (but higher risks as well).

### Tracking progress and force-terminate script run

It is impossible to know when, or even whether, a script run will end
(a.k.a. the [Halting Problem](http://en.wikipedia.org/wiki/Halting_problem)).
When dealing with third-party un-trusted scripts that may be malicious, to track evaluation progress and
to force-terminate a script prematurely (for any reason), provide a closure to the `Engine::on_progress` method:

```rust
let mut engine = Engine::new();

engine.on_progress(|&count| {               // parameter is '&u64' - number of operations already performed
    if count % 1000 == 0 {
        println!("{}", count);              // print out a progress log every 1,000 operations
    }
    true                                    // return 'true' to continue running the script
                                            // return 'false' to immediately terminate the script
});
```

The closure passed to `Engine::on_progress` will be called once for every operation.
Return `false` to terminate the script immediately.

Notice that the _operations count_ value passed into the closure does not indicate the _percentage_ of work
already done by the script (and thus it is not real _progress_ tracking), because it is impossible to determine
how long a script may run.  It is possible, however, to calculate this percentage based on an estimated
total number of operations for a typical run.

### Maximum number of modules

Rhai by default does not limit how many [modules] can be loaded via [`import`] statements.
This can be changed via the `Engine::set_max_modules` method, with zero being unlimited (the default).

```rust
let mut engine = Engine::new();

engine.set_max_modules(5);                  // allow loading only up to 5 modules

engine.set_max_modules(0);                  // allow unlimited modules
```

A script attempting to load more than the maximum number of modules will terminate with an error result.
This check can be disabled via the [`unchecked`] feature for higher performance
(but higher risks as well).

### Maximum call stack depth

Rhai by default limits function calls to a maximum depth of 128 levels (16 levels in debug build).
This limit may be changed via the `Engine::set_max_call_levels` method.

When setting this limit, care must be also taken to the evaluation depth of each _statement_
within the function. It is entirely possible for a malicous script to embed a recursive call deep
inside a nested expression or statement block (see [maximum statement depth](#maximum-statement-depth)).

The limit can be disabled via the [`unchecked`] feature for higher performance
(but higher risks as well).

```rust
let mut engine = Engine::new();

engine.set_max_call_levels(10);             // allow only up to 10 levels of function calls

engine.set_max_call_levels(0);              // allow no function calls at all (max depth = zero)
```

A script exceeding the maximum call stack depth will terminate with an error result.
This check can be disabled via the [`unchecked`] feature for higher performance
(but higher risks as well).

### Maximum statement depth

Rhai by default limits statements and expressions nesting to a maximum depth of 128
(which should be plenty) when they are at _global_ level, but only a depth of 32
when they are within function bodies.  For debug builds, these limits are set further
downwards to 32 and 16 respectively.

That is because it is possible to overflow the [`Engine`]'s stack when it tries to
recursively parse an extremely deeply-nested code stream.

```rust
// The following, if long enough, can easily cause stack overflow during parsing.
let a = (1+(1+(1+(1+(1+(1+(1+(1+(1+(1+(...)+1)))))))))));
```

This limit may be changed via the `Engine::set_max_expr_depths` method.  There are two limits to set,
one for the maximum depth at global level, and the other for function bodies.

```rust
let mut engine = Engine::new();

engine.set_max_expr_depths(50, 5);          // allow nesting up to 50 layers of expressions/statements
                                            // at global level, but only 5 inside functions
```

Beware that there may be multiple layers for a simple language construct, even though it may correspond
to only one AST node. That is because the Rhai _parser_ internally runs a recursive chain of function calls
and it is important that a malicous script does not panic the parser in the first place.

Functions are placed under stricter limits because of the multiplicative effect of recursion.
A script can effectively call itself while deep inside an expression chain within the function body,
thereby overflowing the stack even when the level of recursion is within limit.

Make sure that `C x ( 5 + F ) + S` layered calls do not cause a stack overflow, where:

* `C` = maximum call stack depth,
* `F` = maximum statement depth for functions,
* `S` = maximum statement depth at global level.

A script exceeding the maximum nesting depths will terminate with a parsing error.
The malicous `AST` will not be able to get past parsing in the first place.

This check can be disabled via the [`unchecked`] feature for higher performance
(but higher risks as well).

### Checked arithmetic

By default, all arithmetic calculations in Rhai are _checked_, meaning that the script terminates
with an error whenever it detects a numeric over-flow/under-flow condition or an invalid
floating-point operation, instead of crashing the entire system.

This checking can be turned off via the [`unchecked`] feature for higher performance
(but higher risks as well).

### Blocking access to external data

Rhai is _sand-boxed_ so a script can never read from outside its own environment.
Furthermore, an [`Engine`] created non-`mut` cannot mutate any state outside of itself;
so it is highly recommended that [`Engine`]'s are created immutable as much as possible.

```rust
let mut engine = Engine::new();             // create mutable 'Engine'

engine.register_get("add", add);            // configure 'engine'

let engine = engine;                        // shadow the variable so that 'engine' is now immutable
```

Script optimization
===================

[script optimization]: #script-optimization

Rhai includes an _optimizer_ that tries to optimize a script after parsing.
This can reduce resource utilization and increase execution speed.
Script optimization can be turned off via the [`no_optimize`] feature.

For example, in the following:

```rust
{
    let x = 999;            // NOT eliminated: variable may be used later on (perhaps even an 'eval')
    123;                    // eliminated: no effect
    "hello";                // eliminated: no effect
    [1, 2, x, x*2, 5];      // eliminated: no effect
    foo(42);                // NOT eliminated: the function 'foo' may have side-effects
    666                     // NOT eliminated: this is the return value of the block,
                            // and the block is the last one so this is the return value of the whole script
}
```

Rhai attempts to eliminate _dead code_ (i.e. code that does nothing, for example an expression by itself as a statement,
which is allowed in Rhai). The above script optimizes to:

```rust
{
    let x = 999;
    foo(42);
    666
}
```

Constants propagation is used to remove dead code:

```rust
const ABC = true;
if ABC || some_work() { print("done!"); }   // 'ABC' is constant so it is replaced by 'true'...
if true || some_work() { print("done!"); }  // since '||' short-circuits, 'some_work' is never called
if true { print("done!"); }                 // <- the line above is equivalent to this
print("done!");                             // <- the line above is further simplified to this
                                            //    because the condition is always true
```

These are quite effective for template-based machine-generated scripts where certain constant values
are spliced into the script text in order to turn on/off certain sections.
For fixed script texts, the constant values can be provided in a user-defined [`Scope`] object
to the [`Engine`] for use in compilation and evaluation.

Beware, however, that most operators are actually function calls, and those functions can be overridden,
so they are not optimized away:

```rust
const DECISION = 1;

if DECISION == 1 {          // NOT optimized away because you can define
    :                       // your own '==' function to override the built-in default!
    :
} else if DECISION == 2 {   // same here, NOT optimized away
    :
} else if DECISION == 3 {   // same here, NOT optimized away
    :
} else {
    :
}
```

because no operator functions will be run (in order not to trigger side-effects) during the optimization process
(unless the optimization level is set to [`OptimizationLevel::Full`]). So, instead, do this:

```rust
const DECISION_1 = true;
const DECISION_2 = false;
const DECISION_3 = false;

if DECISION_1 {
    :                       // this branch is kept and promoted to the parent level
} else if DECISION_2 {
    :                       // this branch is eliminated
} else if DECISION_3 {
    :                       // this branch is eliminated
} else {
    :                       // this branch is eliminated
}
```

In general, boolean constants are most effective for the optimizer to automatically prune
large `if`-`else` branches because they do not depend on operators.

Alternatively, turn the optimizer to [`OptimizationLevel::Full`].

Here be dragons!
================

Optimization levels
-------------------

[`OptimizationLevel::Full`]: #optimization-levels
[`OptimizationLevel::Simple`]: #optimization-levels
[`OptimizationLevel::None`]: #optimization-levels

There are actually three levels of optimizations: `None`, `Simple` and `Full`.

* `None` is obvious - no optimization on the AST is performed.

* `Simple` (default) performs only relatively _safe_ optimizations without causing side-effects
  (i.e. it only relies on static analysis and will not actually perform any function calls).

* `Full` is _much_ more aggressive, _including_ running functions on constant arguments to determine their result.
  One benefit to this is that many more optimization opportunities arise, especially with regards to comparison operators.

An [`Engine`]'s optimization level is set via a call to `Engine::set_optimization_level`:

```rust
// Turn on aggressive optimizations
engine.set_optimization_level(rhai::OptimizationLevel::Full);
```

If it is ever needed to _re_-optimize an `AST`, use the `optimize_ast` method:

```rust
// Compile script to AST
let ast = engine.compile("40 + 2")?;

// Create a new 'Scope' - put constants in it to aid optimization if using 'OptimizationLevel::Full'
let scope = Scope::new();

// Re-optimize the AST
let ast = engine.optimize_ast(&scope, &ast, OptimizationLevel::Full);
```

When the optimization level is [`OptimizationLevel::Full`], the [`Engine`] assumes all functions to be _pure_ and will _eagerly_
evaluated all function calls with constant arguments, using the result to replace the call. This also applies to all operators
(which are implemented as functions). For instance, the same example above:

```rust
// When compiling the following with OptimizationLevel::Full...

const DECISION = 1;
                            // this condition is now eliminated because 'DECISION == 1'
if DECISION == 1 {          // is a function call to the '==' function, and it returns 'true'
    print("hello!");        // this block is promoted to the parent level
} else {
    print("boo!");          // this block is eliminated because it is never reached
}

print("hello!");            // <- the above is equivalent to this
                            //    ('print' and 'debug' are handled specially)
```

Because of the eager evaluation of functions, many constant expressions will be evaluated and replaced by the result.
This does not happen with [`OptimizationLevel::Simple`] which doesn't assume all functions to be _pure_.

```rust
// When compiling the following with OptimizationLevel::Full...

let x = (1+2)*3-4/5%6;      // <- will be replaced by 'let x = 9'
let y = (1>2) || (3<=4);    // <- will be replaced by 'let y = true'
```

Side-effect considerations
--------------------------

All of Rhai's built-in functions (and operators which are implemented as functions) are _pure_ (i.e. they do not mutate state
nor cause any side-effects, with the exception of `print` and `debug` which are handled specially) so using
[`OptimizationLevel::Full`] is usually quite safe _unless_ custom types and functions are registered.

If custom functions are registered, they _may_ be called (or maybe not, if the calls happen to lie within a pruned code block).
If custom functions are registered to overload built-in operators, they will also be called when the operators are used
(in an `if` statement, for example) causing side-effects.

Therefore, the rule-of-thumb is: _always_ register custom types and functions _after_ compiling scripts if
 [`OptimizationLevel::Full`] is used.  _DO NOT_ depend on knowledge that the functions have no side-effects,
 because those functions can change later on and, when that happens, existing scripts may break in subtle ways.

Volatility considerations
-------------------------

Even if a custom function does not mutate state nor cause side-effects, it may still be _volatile_,
i.e. it _depends_ on the external environment and is not _pure_.
A perfect example is a function that gets the current time - obviously each run will return a different value!
The optimizer, when using [`OptimizationLevel::Full`], will _merrily assume_ that all functions are _pure_,
so when it finds constant arguments (or none) it eagerly executes the function call and replaces it with the result.
This causes the script to behave differently from the intended semantics.

Therefore, **avoid using [`OptimizationLevel::Full`]** if non-_pure_ custom types and/or functions are involved.

Subtle semantic changes
-----------------------

Some optimizations can alter subtle semantics of the script.  For example:

```rust
if true {                   // condition always true
    123.456;                // eliminated
    hello;                  // eliminated, EVEN THOUGH the variable doesn't exist!
    foo(42)                 // promoted up-level
}

foo(42)                     // <- the above optimizes to this
```

Nevertheless, if the original script were evaluated instead, it would have been an error - the variable `hello` doesn't exist,
so the script would have been terminated at that point with an error return.

In fact, any errors inside a statement that has been eliminated will silently _disappear_:

```rust
print("start!");
if my_decision { /* do nothing... */ }  // eliminated due to no effect
print("end!");

// The above optimizes to:

print("start!");
print("end!");
```

In the script above, if `my_decision` holds anything other than a boolean value, the script should have been terminated due to
a type error. However, after optimization, the entire `if` statement is removed (because an access to `my_decision` produces
no side-effects), thus the script silently runs to completion without errors.

Turning off optimizations
-------------------------

It is usually a bad idea to depend on a script failing or such kind of subtleties, but if it turns out to be necessary
(why? I would never guess), turn it off by setting the optimization level to [`OptimizationLevel::None`].

```rust
let engine = rhai::Engine::new();

// Turn off the optimizer
engine.set_optimization_level(rhai::OptimizationLevel::None);
```

Alternatively, turn off optimizations via the [`no_optimize`] feature.

`eval` - or "How to Shoot Yourself in the Foot even Easier"
---------------------------------------------------------

[`eval`]: #eval---or-how-to-shoot-yourself-in-the-foot-even-easier

Saving the best for last: in addition to script optimizations, there is the ever-dreaded... `eval` function!

```rust
let x = 10;

fn foo(x) { x += 12; x }

let script = "let y = x;";  // build a script
script +=    "y += foo(y);";
script +=    "x + y";

let result = eval(script);  // <- look, JS, we can also do this!

print("Answer: " + result); // prints 42

print("x = " + x);          // prints 10: functions call arguments are passed by value
print("y = " + y);          // prints 32: variables defined in 'eval' persist!

eval("{ let z = y }");      // to keep a variable local, use a statement block

print("z = " + z);          // <- error: variable 'z' not found

"print(42)".eval();         // <- nope... method-call style doesn't work
```

Script segments passed to `eval` execute inside the current [`Scope`], so they can access and modify _everything_,
including all variables that are visible at that position in code! It is almost as if the script segments were
physically pasted in at the position of the `eval` call. But because of this, new functions cannot be defined
within an `eval` call, since functions can only be defined at the global level, not inside a function call!

```rust
let script = "x += 32";
let x = 10;
eval(script);               // variable 'x' in the current scope is visible!
print(x);                   // prints 42

// The above is equivalent to:
let script = "x += 32";
let x = 10;
x += 32;
print(x);
```

For those who subscribe to the (very sensible) motto of ["`eval` is evil"](http://linterrors.com/js/eval-is-evil),
disable `eval` by overloading it, probably with something that throws.

```rust
fn eval(script) { throw "eval is evil! I refuse to run " + script }

let x = eval("40 + 2");     // 'eval' here throws "eval is evil! I refuse to run 40 + 2"
```

Or overload it from Rust:

```rust
fn alt_eval(script: String) -> Result<(), Box<EvalAltResult>> {
    Err(format!("eval is evil! I refuse to run {}", script).into())
}

engine.register_result_fn("eval", alt_eval);
```

There is even a package named [`EvalPackage`](#packages) which implements the disabling override:

```rust
use rhai::Engine;
use rhai::packages::Package                     // load the 'Package' trait to use packages
use rhai::packages::EvalPackage;                // the 'eval' package disables 'eval'

let mut engine = Engine::new();
let package = EvalPackage::new();               // create the package

engine.load_package(package.get());             // load the package
```
