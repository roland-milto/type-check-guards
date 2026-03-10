# areArrays

## Description

`areArrays` determines whether a value is a filled two-dimensional array whose items are all arrays.

### Use case

Use `areArrays` to validate tabular or matrix-like inputs (e.g., CSV rows, grid data, or grouped lists) before
performing row/column operations; it returns `false` if the input is not an array, is empty, or contains any non-array
element.

> **Note for TypeScript users:**
>
> Use `areArrays` when you need to ensure a value is a non-empty 2D array and that each row is an array before iterating
> or indexing into nested arrays.

### Advantages

- Validates that the input is a non-empty two-dimensional array where every element is an array.
- Returns a simple boolean result (`true`/`false`) suitable for guards and early exits.
- Helps prevent runtime errors when later code assumes nested array operations (e.g., mapping rows).

## Usage

### Syntax

Function:

- `areArrays(array)`

Parameters:

- `array`: The input to be checked.

### Local function import

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value is a 2D array with arrays as elements
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areArrays(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>The file was generated on 6 February 2026 at 13:38:27 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>