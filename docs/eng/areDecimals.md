# areDecimals

## Description

Checks whether all elements in an array are decimal numbers and the array is filled, returning `true` or `false`.

### Use case

Validate user-provided lists (e.g., CSV columns or form inputs) to ensure the array is not empty and every entry is a
decimal value before parsing or calculations.

> **Note for TypeScript users:**
>
> Use `areDecimals` when you need a quick boolean check that an `unknown[]` is non-empty and every element is a decimal
> representation.

### Advantages

- Ensures the input is a filled array before validating items, preventing accidental acceptance of empty lists.
- Validates every element with `isDecimal`, so mixed or invalid values cause an immediate `false` result.
- Provides a simple boolean outcome (`true`/`false`) suitable for guards and early-return validation flows.

## Usage

### Syntax

Function:

- `areDecimals(array)`

Parameters:

- `array`: The array to be checked.

### Local function import

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // true
console.log(areDecimals(b)); // false
console.log(areDecimals(c)); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areDecimals(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>The file was generated on 31 January 2026 at 15:56:05 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>