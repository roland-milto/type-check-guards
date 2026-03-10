# isWeakMap

## Description

Determines whether a given `value` is a `WeakMap` instance.

### Use case

Use `isWeakMap` when you accept an `unknown` value (e.g., from a public API, plugin system, or dynamic configuration)
and need to verify it is a `WeakMap` before using `WeakMap`-specific behavior.

> **Note for TypeScript users:**
>
> `isWeakMap` performs an `instanceof WeakMap` check; it is a runtime guard that returns `true` only for actual
`WeakMap` instances.

### Advantages

- Simple runtime check for whether a value is a `WeakMap`.
- Helps prevent misuse of APIs that require a `WeakMap` by returning `true`/`false` instead of throwing.
- Works with `unknown` inputs, making it convenient at module boundaries (e.g., parsing, external data, or untyped
  code).

## Usage

### Syntax

Function:

- `isWeakMap(value)`

Parameters:

- `value`: The value to check.

### Local function import

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a is a WeakMap at runtime
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isWeakMap(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>The file was generated on 30 January 2026 at 13:35:07 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>