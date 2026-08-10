# Sample Applications

## Standard Examples

| Example                                                   | Description                                                                                                                                         |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`arrays_and_structs`](arrays_and_structs.rs)             | shows how to register a Rust type and using it with arrays                                                                                          |
| [`callback`](callback.rs)                                 | shows how to store a Rhai closure and call it later within Rust                                                                                     |
| [`custom_types_and_methods`](custom_types_and_methods.rs) | shows how to register a Rust type and methods/getters/setters for it                                                                                |
| [`custom_types`](custom_types.rs)                         | shows how to register a Rust type and methods/getters/setters using the `CustomType` trait.                                                         |
| [`definitions`](./definitions)                            | shows how to generate definition files for use with the [Rhai Language Server](https://github.com/rhaiscript/lsp) (requires the `metadata` feature) |
| [`grain_bench`](grain_bench.rs)                           | comparison benchmarks for Rhai Grain bytecodes VM                                                                                                   |
| [`hello`](hello.rs)                                       | simple example that evaluates an expression and prints the result                                                                                   |
| [`pause_and_resume`](pause_and_resume.rs)                 | shows how to pause/resume/stop an `Engine` running in a separate thread via an MPSC channel                                                         |
| [`reuse_scope`](reuse_scope.rs)                           | evaluates two pieces of code in separate runs, but using a common `Scope`                                                                           |
| [`serde`](serde.rs)                                       | example to serialize and deserialize Rust types with [`serde`](https://crates.io/crates/serde) (requires the `serde` feature)                       |
| [`simple_fn`](simple_fn.rs)                               | shows how to register a simple Rust function                                                                                                        |
| [`strings`](strings.rs)                                   | shows different ways to register Rust functions taking string arguments                                                                             |
| [`threading`](threading.rs)                               | shows how to communicate in duplex with an `Engine` running in a separate thread via a pair of MPSC channels                                        |

## Scriptable Event Handler With State Examples

Because of its popularity, included are sample implementations for the pattern
[_Scriptable Event Handler With State_](https://rhai.rs/book/patterns/events.html) in different styles.

| Example                                    | Handler Script                                                     |                         Description                         |
| ------------------------------------------ | ------------------------------------------------------------------ | :---------------------------------------------------------: |
| [`event_handler_main`](event_handler_main) | [`event_handler_main/script.rhai`](event_handler_main/script.rhai) | [_Main Style_](https://rhai.rs/book/patterns/events-1.html) |
| [`event_handler_js`](event_handler_js)     | [`event_handler_js/script.rhai`](event_handler_js/script.rhai)     |  [_JS Style_](https://rhai.rs/book/patterns/events-2.html)  |
| [`event_handler_map`](event_handler_map)   | [`event_handler_map/script.rhai`](event_handler_map/script.rhai)   | [_Map Style_](https://rhai.rs/book/patterns/events-3.html)  |

## Running Examples

Examples can be run with the following command:

```sh
cargo run --example {example_name}
```
