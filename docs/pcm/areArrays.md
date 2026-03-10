# areArrays

## Description

`areArrays` dey determine whether one value na filled two-dimensional array wey all im items na arrays.

### Use case

Use `areArrays` to validate tabular or matrix-like inputs (e.g., CSV rows, grid data, or grouped lists) before you do
row/column operations; e go return `false` if di input no be array, e empty, or e get any element wey no be array.

> **Note for TypeScript users:**
>
> Use `areArrays` when you need to make sure say one value na non-empty 2D array and say each row na array before you
> iterate or index inside nested arrays.

### Advantages

- E dey validate say di input na non-empty two-dimensional array wey every element na array.
- E dey return simple boolean result (`true`/`false`) wey good for guards and early exits.
- E dey help prevent runtime errors when later code dey assume nested array operations (e.g., mapping rows).

## Usage

### Syntax

Function:

- `areArrays(array)`

Parameters:

- `array`: Di input wey dem wan check.

### Local function import

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value na 2D array wey get arrays as elements
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areArrays(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 13:40:58 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>