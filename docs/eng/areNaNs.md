# areNaNs

## Description

`areNaNs` checks whether all elements in an array are `NaN` and returns `true` only if every element is `NaN`.

### Use case

Validate incoming data where `NaN` is used as a sentinel value and you must ensure the entire array consists exclusively
of `NaN` (e.g., detecting an all-missing numeric series).

> **Note for TypeScript users:**
>
> Use `areNaNs` when you need to validate that an array contains only the numeric `NaN` value (without string-to-number
> coercion).

### Advantages

- Returns `true` only when every element is `NaN` (strict all-elements check).
- Does not coerce strings to numbers; values like "NaN" remain non-`NaN` and make the result `false`.
- Returns `false` for non-filled arrays, preventing accidental `true` on empty input.

## Usage

### Syntax

Function:

- `areNaNs(array)`

Parameters:

- `array`: The array to check for `NaN` values.

### Local function import

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // true
const b = areNaNs([NaN, 1, NaN]); // false
const c = areNaNs([NaN, "NaN", NaN]); // false
const d = areNaNs([NaN, null, NaN]); // false
const e = areNaNs([] as unknown[]); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areNaNs(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>The file was generated on 30 January 2026 at 15:50:09 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>