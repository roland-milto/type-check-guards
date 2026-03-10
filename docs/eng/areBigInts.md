# areBigInts

## Description

`areBigInts` determines whether a value is a non-empty array containing only `bigint` values.

### Use case

Validate unknown input (e.g., parsed JSON-like data, API payloads, or function parameters typed as `unknown`) to ensure
it is a non-empty array of `bigint` values before processing; returns `true` only when all elements are `bigint`,
otherwise `false`.

> **Note for TypeScript users:**
>
> Use `areBigInts` as a runtime guard before performing `bigint`-only operations (e.g., arithmetic, comparisons) on
> unknown input.

### Advantages

- Ensures every element is a `bigint`, returning `true` only when the entire array matches.
- Rejects non-arrays and empty arrays by design (via `isFilledArray`), preventing accidental acceptance of invalid
  inputs.
- Fast fail: returns `false` as soon as a non-`bigint` element is found.

## Usage

### Syntax

Function:

- `areBigInts(array)`

Parameters:

- `array`: The value to check.

### Local function import

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // true
console.log(areBigInts(b)); // false
console.log(areBigInts(c)); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areBigInts(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>The file was generated on 31 January 2026 at 23:25:01 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>