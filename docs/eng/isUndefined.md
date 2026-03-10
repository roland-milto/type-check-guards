# isUndefined

## Description

Checks whether a given value is `undefined`.

### Use case

Use `isUndefined` to guard optional inputs, detect missing properties, or differentiate between “not provided” (
`undefined`) and “explicitly empty” (`null`).

> **Note for TypeScript users:**
>
> Use `isUndefined` when you specifically need to detect `undefined` (not `null`). It is safe because it relies on
`typeof value === "undefined"`.

### Advantages

- Provides a clear, explicit check for `undefined` using `typeof`, avoiding edge cases with undeclared variables.
- Returns a simple boolean result (`true`/`false`) suitable for guards, branching, and validation logic.
- Helps distinguish `undefined` from other “empty” values like `null`, `0`, `""`, or `NaN`.

## Usage

### Syntax

Function:

- `isUndefined(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x is undefined here
} else {
  // x is not undefined here
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isUndefined(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>The file was generated on 30 January 2026 at 14:01:40 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>