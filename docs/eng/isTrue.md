# isTrue

## Description

`isTrue` determines whether a given value is strictly equal to `true`.

### Use case

Use `isTrue` to validate flags, feature toggles, or configuration values where only the literal `true` should be
accepted and everything else must be treated as `false`.

> **Note for TypeScript users:**
>
> Use `isTrue` when you need to accept only the boolean literal `true`, not merely truthy values.

### Advantages

- Provides a strict check for the boolean literal `true` (no coercion).
- Helps distinguish `true` from truthy values like `1`, `"true"`, or `{}`.
- Simple, predictable behavior suitable for guards and validation pipelines.

## Usage

### Syntax

Function:

- `isTrue(value)`

Parameters:

- `value`: The value to check.

### Local function import

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // true
const b = isTrue(1);         // false
const c = isTrue("true");   // false

if (isTrue(a)) {
  // a is true here
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isTrue(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>The file was generated on 30 January 2026 at 13:45:07 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>