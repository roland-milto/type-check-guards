# areIntegers

## Description

`areIntegers` determines whether all elements in a given array are integers, returning `true` if they are and `false`
otherwise.

### Use case

Use `areIntegers` to validate user-provided or external data (e.g., query parameters, JSON payloads, CSV rows) when your
logic requires a filled list of integer values such as IDs, counters, pagination offsets, or array indices.

> **Note for TypeScript users:**
>
> Use `areIntegers` as a runtime guard for `unknown[]` inputs before treating them as `number[]` containing only
> integers. If it returns `false`, the input is either not a filled array or contains at least one non-integer value.

### Advantages

- Returns `true` only when every element is an integer; otherwise returns `false`.
- Helps validate unknown input before performing integer-only operations (e.g., indexing, counts, IDs).
- Fails fast: stops checking as soon as a non-integer element is found.

## Usage

### Syntax

Function:

- `areIntegers(array)`

Parameters:

- `array`: The array to check for integer elements.

### Local function import

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // true
console.log(areIntegers(b)); // true
console.log(areIntegers(c)); // false

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areIntegers(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>The file was generated on 31 January 2026 at 01:08:10 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>