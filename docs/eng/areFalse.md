# areFalse

## Description

`areFalse` checks whether all elements in a provided array are strictly the boolean `false`.

### Use case

Validate that a list of feature flags, checks, or guard results are all `false` before proceeding (e.g., confirm that no
blocking conditions are present).

> **Note for TypeScript users:**
>
> Use `areFalse` when you need a strict validation that an array is non-empty and contains only the boolean value
`false`.

### Advantages

- Ensures every element is strictly `false` (no truthy/falsey coercion).
- Returns `false` for non-arrays or empty arrays by requiring a filled array via `isFilledArray`.
- Stops early on the first non-`false` element for efficiency.

## Usage

### Syntax

Function:

- `areFalse(array)`

Parameters:

- `array`: The array to check, containing elements of any type.

### Local function import

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // true
const b = areFalse([false, true, false]);  // false
const c = areFalse([false, "false", false]); // false
const d = areFalse([]); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areFalse(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>The file was generated on 31 January 2026 at 16:16:00 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>