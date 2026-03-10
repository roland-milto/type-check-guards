# areFilledArrays

## Description

`areFilledArrays` dey check whether two-dimensional array no empty and all im subarrays no empty.

### Use case

Use `areFilledArrays` to validate tabular or matrix-like input (e.g., CSV rows, grid data, grouped results) so you fit
safely assume say e get at least one subarray and none of di subarrays empty.

> **Note for TypeScript users:**
>
> Use `areFilledArrays` when you need make sure say 2D array get at least one row and every row get at least one element
> before you iterate or index enter am.

### Advantages

- E validate say di outer array no empty, and say every inner array sef no empty, e go return `true` only when both
  conditions meet.
- E dey work with any kind element wey dey inside di subarrays (e.g., numbers, strings, objects, nested arrays) because
  e only dey check whether array “full”, no be di element content.
- E give simple boolean result (`true`/`false`) wey you fit use as guard before you process two-dimensional data.

## Usage

### Syntax

Function:

- `areFilledArrays(array)`

Parameters:

- `array`: Di two-dimensional array wey you wan check.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areFilledArrays(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 11:58:26 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>