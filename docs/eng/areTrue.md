# areTrue

## Description

Checks whether a non-empty array contains only the boolean `true` values.

### Use case

Use `areTrue` to validate that a set of preconditions or feature flags are all enabled (all values are `true`) before
continuing, while treating empty or malformed inputs as not satisfied (`false`).

> **Note for TypeScript users:**
>
> `areTrue` returns `false` for an empty array and for arrays containing any value that is not strictly `true`.

### Advantages

- Returns `true` only when every element is strictly `true` and the array is non-empty.
- Fails fast: returns `false` as soon as a non-`true` value is found.
- Rejects invalid inputs (non-arrays or empty arrays) by returning `false`.

## Usage

### Syntax

Function:

- `areTrue(array)`

Parameters:

- `array`: The array to check for all `true` values.

### Local function import

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areTrue(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>The file was generated on 30 January 2026 at 13:50:11 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>