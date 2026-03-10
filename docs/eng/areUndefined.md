# areUndefined

## Description

`areUndefined` checks whether every element in a provided array is `undefined`.

### Use case

Validate that a list of optional results contains no actual values (only `undefined`), e.g., after mapping lookups where
missing entries are represented as `undefined`, and you want to confirm that all lookups failed.

> **Note for TypeScript users:**
>
> Use `areUndefined` when you need to assert that an `unknown[]` contains only `undefined` values; it returns `false`
> for empty arrays and non-array/invalid inputs due to the internal `isFilledArray` check.

### Advantages

- Returns `false` for non-arrays and empty arrays by requiring a filled array via `isFilledArray`.
- Ensures every element is `undefined`, not just some, making the intent explicit.
- Useful as a guard-style predicate when validating unknown input collections.

## Usage

### Syntax

Function:

- `areUndefined(array)`

Parameters:

- `array`: The array to check for `undefined` elements.

### Local function import

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Note: returns false for empty arrays
const r4 = areUndefined([]); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areUndefined(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>The file was generated on 30 January 2026 at 13:54:30 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>