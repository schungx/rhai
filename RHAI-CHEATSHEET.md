# Rhai Language Cheat Sheet

Quick reference for AI agents writing or reviewing Rhai scripts.

Rhai looks familiar to JavaScript, Rust, and C-family languages, but similar syntax does not always
mean similar semantics.

This page focuses on script language behavior; [_The Rhai Book_](https://rhai.rs/book/ref) is the
full language reference.

## Values and variables

```rhai
let count = 0;                 // variables are dynamically typed and mutable
count = "now a string";
const LIMIT = 10;              // constants cannot be reassigned
let uninitialized;             // defaults to ()
let nothing = ();
let values = [1, "two", true]; // arrays can mix value types
let record = #{name: "Ada", score: 42};
```

- Variables are block-local; a nested `let` can shadow an outer variable.
- `()` is Rhai's single unit/no-value value; do not assume JavaScript's separate `null` and
  `undefined` semantics or coercions.
- Rhai values are dynamically typed, but operations are still type-specific. An unsupported
  operation is an evaluation error; do not assume JavaScript coercions.
- The default system integer is `i64`. Numeric types are distinct and are not generally implicitly
  converted, as in Rust. `42` and `42.0` are different types even though some comparisons support
  integer/float interoperability.
- Integer literals support decimal, binary (`0b`), octal (`0o`), hex (`0x`), and `_` separators.
- A block always has a value.  Its final statement supplies its value whether or not it ends in `;`.
  If the final statement has no value (such as an assignment or declaration), it evaluates to `()`.

```rhai
let result = {
    let x = 20;
    x + 22;                    // block result is 42, semicolon or not
};
```

## IMPORTANT: Assignment, cloning, and mutation

**Assume value semantics, not JavaScript object identity.**

Assigning a value **clones** it, including arrays, maps, and function arguments.

Mutating a scripted function's parameter does **not** mutate the caller's value.

```rhai
let original = [1, 2];
let copy = original;           // clone
copy[0] = 99;
original[0] == 1;              // still unchanged

fn change_local(items) {
    items[0] = 99;             // edits only the function's value-copy
}
change_local(original);
original[0] == 1;
```

**Mutate a collection through its variable-rooted index/property path** when the intent is to change
that collection:

```rhai
original[0] = 7;               // edits original
let user = #{settings: #{theme: "light"}};
user.settings.theme = "dark";  // edits the nested map property
```

Object-map properties have special reference-based access: traversing `map.a.b` or assigning through
`map.a.b = value` does not first copy each property.

This is not general aliasing: assigning `let settings = user.settings` still clones the assigned value.
Do not assume custom-type property getters or arbitrary function results have the same reference behavior.
This behavior exists only for built-in types: arrays, BLOB's and maps.

Use `take(value)` when a large value should be moved rather than cloned; the source variable becomes
`()`. `take` is supplied by the standard language package and may be absent with a raw `Engine`.

## Arrays and maps

```rhai
let items = [10, 20, 30,];     // trailing comma is allowed
items[0] == 10;                // zero-based
items[-1] == 30;               // negative index counts from the end
items.push(40);
items[1] = 25;

let options = #{mode: "fast", "not-an-identifier": true};
options.mode = "safe";
options["not-an-identifier"] == true;
options.missing == ();         // absent map property reads as ()
"mode" in options;             // test map-key existence
```

- Reading an out-of-range array index is an error (unless the host customizes that behavior).
- Dot notation on maps requires an identifier-like key; bracket notation handles arbitrary string keys.
- `?.` and `?[...]` is Elvis access/call: it short-circuits when the receiver is `()`.
- `??` returns the left value unless it is `()`, otherwise evaluates and returns the right value.
- `get` returns a copy of an array element; do not confuse it with writing through an indexed
  assignment path.

## Strings and literals

```rhai
let name = "Rhai";             // escaped, single-line string
let path = #"C:\scripts\main"#; // raw string: backslashes are literal
let text = `Hello, ${name}!`;  // interpolated backtick string
let letter = 'R';              // Unicode character, not a one-character string
```

Normal strings use double quotes and escapes.

Backtick strings interpolate `${expression}` but do not process normal escape sequences.

Raw strings use matching `#` delimiters and do not interpret escapes.

Strings are immutable; string-producing operations return values rather than mutating a
string in place.

## Operators and conditions

```rhai
let is_ready = count > 0 && options.mode == "safe";
let selected = options.timeout ?? 30;
let remainder = 17 % 5;
```

- `&&` and `||` short-circuit.
- Single `&` and `|` on booleans evaluate both sides.
- There is no JavaScript-style truthiness: use a boolean condition, not a number/string/container
  as a truthy/falsy value.
- Comparing different non-numeric types generally defaults to `false` (`!=` to `true`) if no
  comparison is defined. Comparing distinct numeric types can instead fail; never rely on implicit
  numeric conversion.
- `if` conditions omit parentheses, but braces around every branch are mandatory. `if` can be an
  expression; an omitted `else` yields `()`.

```rhai
let label = if is_ready { "go" } else { "wait" };
```

## Control flow

```rhai
for item in items {
    if item == 20 { continue; }
    if item > 30 { break; }
}

let sum = 0;
while sum < 3 {
    sum += 1;
}
```

- `for x in range` and `for x in array` are common iteration forms. `for (item, index) in array`
  also provides a zero-based counter.
- `break` and `continue` work in loops. Loop expressions evaluate to `()` unless `break value`
  supplies a result.
- Rhai also has `loop` and `switch`; see the reference for their exact forms.
- `while`, `loop`, `for` and `switch` can all be used as expressions, returning a value, just
  like `if`.

## Functions, closures, and function pointers

```rhai
fn add(a, b) {
    a + b                      // final statement is the result
}

let offset = 2;
let add_offset = |n| n + offset; // anonymous closure captures offset

fn double(n) { n * 2 }
let operation = double;          // same as Fn("double"), a function pointer

add(1, 2) == 3;
add_offset.call(3) == 5;
operation.call(3) == 6;
offset = 10;
add_offset.call(3) == 13;        // closure sees the updated shared capture
```

**Do not conflate a function pointer with a capturing closure:**

- A named script function is declared with `fn`. Script functions are global-level definitions,
  cannot be nested, do not capture local variables, and receive arguments by value.
- A function pointer (`Fn("double")`, or the `double` shorthand for a script function in the same
  script) stores a function name for later dispatch. It is not a first-class function body or a
  captured environment; the named function must be resolvable when called. Function pointers
  cannot name functions inside imported modules.
- A closure (`|x| expression`, `|| expression`, or a braced body) is an anonymous function that can
  capture variables from where it is created. Captures are shared values: later changes to a
  captured variable are visible to the closure, and closures can outlive the scope that created
  them.
- Because captures are genuinely shared, closures created in a loop can all see the same final
  loop-variable value. Avoid using a shared captured value as both a closure capture and that
  closure's `this` receiver; Rhai can report a data-race error (and `sync` builds can deadlock).
- Script functions and closures return the final statement of their body. `return value;` is also
  available.

## `this` and method-style calls

Rhai script functions can be called as methods: `receiver.function(arguments)`.

In that form, `this` is bound to the receiver and can be reassigned or mutated. This is Rhai's
explicit method-call mechanism, not JavaScript's general `this`/dynamic-binding rules.

```rhai
fn increase(amount) {
    this += amount;
}

let score = 10;
score.increase(5);
score == 15;
```

- A function that reads or writes `this` must be called with a receiver (`score.increase(5)`).
  Calling `increase(5)` leaves `this` unbound and errors.
- `fn int.increase(amount) { ... }` restricts a script method to an integer receiver; the type name
  must match `type_of()` (with `int`/`float` aliases for portable system numeric types).
- Closures stored as object-map properties can also use method-call syntax and `this`:

```rhai
let counter = #{
    value: 0,
    increment: || this.value += 1
};
counter.increment();
counter.value == 1;
```

The function body may be a closure, but using `this` does not itself make it a capturing closure:
lexical capture of surrounding variables is a separate behavior.

## Modules and host-dependent behavior

```rhai
import "math_tools" as math;
let value = math::double(21);
```

`import` and `export` organize script functions and constants; imported names use `::`.

Some functions and types are supplied by the host application rather than by Rhai syntax itself.

Available operations also depend on engine configuration and compile-time features (for example,
`no_index`, `no_object`, `no_function`, `no_closure`, and `no_module`).

When a script example seems to lack a built-in, check the embedding's registered packages and
feature configuration.

## Coding style

Scripting languages are different from compiled languages.  Function calls do not get inlined,
and module trees do not get flattened. Functions and modules are expensive.

Therefore, avoid deep module structures or trivial functions.  Always inline simple
functions at call sites to avoid the overhead of a function call.

## Full reference

- [Rhai Language Reference](https://rhai.rs/book/ref)
- [Values and types](https://rhai.rs/book/language/values-and-types.html)
- [Assignments and cloning](https://rhai.rs/book/language/assignment.html)
- [Arrays](https://rhai.rs/book/language/arrays.html) and [object maps](https://rhai.rs/book/language/object-maps.html)
- [Functions](https://rhai.rs/book/language/functions.html), [method-style `this`](https://rhai.rs/book/language/fn-method.html), [closures](https://rhai.rs/book/language/fn-closure.html), and [function pointers](https://rhai.rs/book/language/fn-ptr.html)
- [Operators and logic](https://rhai.rs/book/language/logic.html), [strings and characters](https://rhai.rs/book/language/strings-chars.html), and [modules](https://rhai.rs/book/language/modules/)
