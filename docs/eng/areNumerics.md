# areNumerics

## Description

`areNumerics` checks whether a value is a non-empty array where all elements are numeric.

### Use case

Use `areNumerics` to validate external or untyped data (e.g., JSON payloads, query parameters, form input) before
calculating sums, averages, or other numeric operations, ensuring the input is a non-empty numeric array and returning
`false` otherwise.

> **Note for TypeScript users:**
>
> Use `areNumerics` to guard `unknown` input before treating it as a numeric array; it returns `false` for non-arrays
> and empty arrays.

### Advantages

- Returns `true` only when the input is a non-empty array and every element is numeric.
- Fails fast: stops checking as soon as a non-numeric element is found, returning `false`.
- Helps validate unknown input safely before performing numeric operations.

## Usage

### Syntax

Function:

- `areNumerics(array)`

Parameters:

- `array`: The array to check for numeric elements.

### Local function import

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // true
console.log(areNumerics(b)); // true
console.log(areNumerics(c)); // false
console.log(areNumerics(d)); // false
console.log(areNumerics(e)); // false

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areNumerics(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>The file was generated on 6 February 2026 at 16:03:40 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>