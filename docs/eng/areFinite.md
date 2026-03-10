# areFinite

## Description

`areFinite` checks whether a value is a non-empty array whose elements are all finite numbers, returning `true` if so
and `false` otherwise.

### Use case

Validate numeric input arrays (e.g., chart series, coordinate lists, measurement samples) before performing
calculations, ensuring the result is `true` only when all values are finite numbers.

> **Note for TypeScript users:**
>
> Use `areFinite` when you need to ensure an array is non-empty and contains only finite numbers; it returns `false` for
> empty arrays and for arrays containing `NaN` or infinities.

### Advantages

- Returns `true` only when the input is a non-empty array and every element is a finite number.
- Rejects `Infinity`, `-Infinity`, and `NaN` by relying on `isFinite` checks for each element.
- Provides a simple boolean result (`true`/`false`) suitable for guards and validation flows.

## Usage

### Syntax

Function:

- `areFinite(array)`

Parameters:

- `array`: The array to be checked for finiteness of all its elements.

### Local function import

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // true
console.log(areFinite(b)); // false
console.log(areFinite(c)); // false

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areFinite(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>The file was generated on 30 January 2026 at 16:33:21 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>