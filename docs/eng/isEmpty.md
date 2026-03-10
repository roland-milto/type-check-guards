# isEmpty

## Description

Determines whether a given value is empty, returning `true` for `null`, `undefined`, empty/whitespace strings, empty
arrays, empty `Map`/`Set`, or objects with no own enumerable properties.

### Use case

Use `isEmpty` to validate inputs and detect missing/blank values across multiple data types (e.g., form fields, API
payloads, configuration objects) where `null`, `undefined`, whitespace strings, empty collections, and property-less
objects should be treated as empty.

> **Note for TypeScript users:**
>
> `isEmpty` is a boolean-returning utility (not a TypeScript type predicate), so it does not narrow types by itself; use
> it for validation/branching rather than compile-time narrowing.

### Advantages

- Treats `null` and `undefined` as `true` for emptiness checks.
- Considers whitespace-only strings empty by trimming before checking length.
- Supports common container types (arrays, `Map`, `Set`) and plain objects with no own enumerable properties.
- Avoids counting inherited properties by using `hasOwnProperty` checks.
- Returns a simple boolean result (`true`/`false`) suitable for guards and validation.

## Usage

### Syntax

Function:

- `isEmpty(value)`

Parameters:

- `value`: The value to check for emptiness.

### Local function import

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isEmpty(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>The file was generated on 6 February 2026 at 16:22:16 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>