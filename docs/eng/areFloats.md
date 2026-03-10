# areFloats

## Description

`areFloats` checks whether a given array is filled and all its elements are floats.

### Use case

Use `areFloats` when you receive an `unknown[]` (e.g., from JSON, query parameters, or external APIs) and you need to
ensure it is a filled array where every item is a float before running numeric logic such as averaging, interpolation,
or statistical calculations.

> **Note for TypeScript users:**
>
> Use `areFloats` to guard `unknown[]` before treating it as `number[]` containing only floats; it returns `false` for
> empty arrays and for any non-float element.

### Advantages

- Returns `true` only when the input is a non-empty array and every element is a float.
- Fails fast: returns `false` as soon as a non-float element is found.
- Helps validate unknown input before performing float-specific calculations.

## Usage

### Syntax

Function:

- `areFloats(array)`

Parameters:

- `array`: The array to check for float elements.

### Local function import

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // true
console.log(areFloats(b)); // false
console.log(areFloats(c)); // false

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areFloats(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>The file was generated on 30 January 2026 at 15:56:09 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>