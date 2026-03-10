# isWeakSet

## Description

Determines whether the given `value` is a `WeakSet` of objects.

### Use case

Use `isWeakSet` when accepting untyped input (e.g., from external APIs, dynamic configuration, or `unknown` values) and
you need to verify it is a `WeakSet` before using `WeakSet`-specific operations.

> **Note for TypeScript users:**
>
> Use `isWeakSet` to narrow an `unknown` value to `WeakSet<object>` at runtime; note that `WeakSet` can only contain
> object references.

### Advantages

- Provides a simple runtime check for whether a value is a `WeakSet`.
- Helps prevent type errors by ensuring only `WeakSet` instances are treated as such.
- Works with any `unknown` input and returns a clear boolean result (`true`/`false`).

## Usage

### Syntax

Function:

- `isWeakSet(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a is a WeakSet at runtime
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isWeakSet(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>The file was generated on 30 January 2026 at 14:20:14 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>