# areFilledArrays

## Description

`areFilledArrays` checks whether a two-dimensional array is non-empty and all of its subarrays are non-empty.

### Use case

Use `areFilledArrays` to validate tabular or matrix-like input (e.g., CSV rows, grid data, grouped results) so you can
safely assume there is at least one subarray and none of the subarrays are empty.

> **Note for TypeScript users:**
>
> Use `areFilledArrays` when you need to ensure a 2D array has at least one row and every row has at least one element
> before iterating or indexing into it.

### Advantages

- Validates that the outer array is non-empty and that every inner array is also non-empty, returning `true` only when
  both conditions are met.
- Works with any element types inside the subarrays (e.g., numbers, strings, objects, nested arrays) because it only
  checks array “filled” status, not element content.
- Provides a simple boolean result (`true`/`false`) suitable for guards before processing two-dimensional data.

## Usage

### Syntax

Function:

- `areFilledArrays(array)`

Parameters:

- `array`: The two-dimensional array to check.

### Local function import

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // true
console.log(areFilledArrays(b)); // true
console.log(areFilledArrays(c)); // true
console.log(areFilledArrays(d)); // false
console.log(areFilledArrays(e)); // false
console.log(areFilledArrays(f)); // false

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areFilledArrays(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>The file was generated on 6 February 2026 at 11:55:12 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>