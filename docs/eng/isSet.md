# isSet

## Description

Determines whether a given value is a `Set`.

### Use case

Validate inputs from external sources (e.g., JSON parsing, user input, or third-party APIs) to ensure a value is a `Set`
before performing `Set` operations.

> **Note for TypeScript users:**
>
> Use `isSet` to narrow `unknown` values before calling `Set`-specific APIs like `.add`, `.has`, or `.size`.

### Advantages

- Provides a simple runtime check to confirm whether a value is a `Set`.
- Helps prevent type errors by allowing early branching when a value is not a `Set`.
- Works with any `Set` contents (empty or populated) and returns `true`/`false` consistently.

## Usage

### Syntax

Function:

- `isSet(value)`

Parameters:

- `value`: The value to check.

### Local function import

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a is a Set at runtime
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isSet(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isSet](../_analysis/isSet.md)

<br>

---

<small>The file was generated on 30 January 2026 at 23:08:38 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>