# Purpose

Rhai Grain is a bytecodes transpiler and VM for the Rhai scripting language.

It uses an `Engine` for configuration, functions registration/dispatch, and other operations.

# Repository structure

* `src/grain` - Grain bytecode compiler, format, and VM
* `src/grain/bytecode` - Grain opcodes and bytecodes definition
* `src/grain/compile` - Grain bytecode compiler - transpile Rhai AST into Grain bytecodes
* `src/grain/format` - Grain bytecodes artifact and wire format read/write
* `src/grain/pos` - Grain bytecode mapping to AST positions
* `src/grain/vm` - Grain bytecodes VM for execution
* `src/grain/program.rs` - Compiled Grain bytecodes program
* `tests/grain` - Grain tests, including comparisons with the AST walker
* `tests/grain/corpus` - generated and fixed scripts used by Grain tests
* `tests/grain/fixtures` - fixtures for Grain bytecode format/version checks

# Code modifications

* Avoid changing the artifacts wire format unless it significantly simplifies the change.
* Avoid adding new Opcodes or new op tags unless it significantly simplifies the change.
* No need to bump `const VERSION` in `src/grain/format/mod.rs` for every new feature that alters the wire format. One `VERSION` bump per public release is enough.
* Keep Grain behavior equivalent to the AST walker for the same AST; add or update differential tests when changing behavior that affects Grain.
* Avoid fragmenting any non-lowerable AST nodes into residuals; seek instructions first.
* Opcode widths should be minimal, so avoid adding fields, especially long ones.
* When opcodes are added, prefer new tag variants instead of lengthening the opcode encoded width.

# Checks and tests

* The `internals` feature flag is necessary as many Grain tests rely on internal APIs.
* For changes that may affect Grain, run tests with `--features internals,grain`.
* `cargo test --features internals,grain --test grain` runs only the Grain test suite.
* Regenerate the `GOLDEN` artifact if necessary to handle wire format changes.
