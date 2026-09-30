# Purpose

Rhai is an embedded scripting engine for the Rhai scripting language, written in Rust.

# Architecture

The tokenizer turns script text into tokens, the parser builds an AST, and the optimizer
optimizes the AST before the default recursive AST walker evaluates it.

With the `grain` feature enabled, Rhai can also compile ASTs to Grain bytecode and execute
them in the Grain VM.

# References

* Repository: [GitHub](https://github.com/rhaiscript/Rhai)
* API documentation: [docs.rs](https://docs.rs/rhai)
* Main site: [rhai.rs](https://rhai.rs)
* Tutorial and user guide: [_The Rhai Book_](https://rhai.rs/book)
* [_The Rhai Book_ source](https://github.com/rhaiscript/book)

* [Rhai Grain `AGENTS.md`](src/grain/AGENTS.md)

# Repository structure

* `src` - main crate source
* `src/types` - common and public data types
* `src/ast` - AST definitions
* `src/api` - public engine API
* `src/eval` - AST-walking interpreter
* `src/func` - infrastructure for registering and calling native and script functions
* `src/module` - module and namespace support
* `src/packages` - built-in packages and standard library functionality
* `src/serde` - serialization, deserialization, and metadata support
* `src/grain` - Grain bytecode compiler, format, and VM
* `src/bin` - command-line tools, including the REPL, runner, debugger, Grain compiler, and disassembler
* `codegen` - procedural macros used by Rhai, including plugin macros
* `no_std/no_std_test` - sample application for checking `no_std` builds; when run, it intentionally exits with status 42
* `.github` - CI workflows
* `fuzz` - fuzzing targets
* `benches` - benchmarks
* `examples` - Rust examples; `examples/grain_bench.rs` compares Grain VM and AST-walker performance
* `scripts` - sample Rhai scripts; these do not cover all language features
* `tests` - integration tests
* `tests/grain` - Grain tests, including comparisons with the AST walker
* `build.rs` - build-time support, including a known hashing seed
* `CHANGELOG.md` - project change log

# Code modifications

* Prefer small, isolated changes that preserve the public API; Rhai is a dependency of many projects.
* APIs exposed only under the `internals` feature are volatile. They may change, but avoid doing so unless it significantly simplifies the change.
* Some public APIs are explicitly documented as volatile (and may be marked `#[deprecated]` for that reason). They can change, but prefer not to change them without a good reason.
* Check relevant feature-flag combinations. Conditional features can expose missing imports or other build failures that are not visible with default features.
* Avoid introducing panics. A panic outside the `unchecked` feature is considered a bug.

# Checks and tests

* Format Rust code with `cargo fmt --all`; use `cargo fmt --all -- --check` to check formatting.
* Run the relevant tests:
  `cargo test` runs the default test suite;
  `cargo test --features bin-features` also enables the CLI/debugging-related features used by the documented test suite.
* For changes to procedural macros, test both codegen crates:
  `cd codegen && cargo test --features metadata`.
* For `no-std` changes, use the nightly compiler to build and test the sample:
  `cd no_std/no_std_test && cargo +nightly run`.
* Check additional feature combinations related to the change, especially combinations involving `no_index` `no_object`, `no_float`, `no_closure`, `no_std`, `no_ast`, `grain`, and optional APIs. The CI workflows contain broader feature matrices.
* Use `cargo test --tests` to avoid running doc-tests unless it is relevant to the change; doc-tests take a long time to complete.

# Coding style

* Use default `cargo fmt` formatting.
* Comments and naming variables should be clear and descriptive, but do not over-explain. No need to spend resources because they can be manually refactored later on.
* Warnings in tests are acceptable when they are unused imports caused by feature flags.
* Eliminate dead-code and unused-import warnings in the main crate by using appropriate feature gates.
* When a type is not used in all feature combinations, prefer fully qualified paths (for example, `crate::ImmutableString`) at call sites over feature-gating a `use` statement.
  If there are many call sites and the qualification chain is long, feature-gating a shared `use` statement is reasonable.
