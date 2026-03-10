# areNull

## Description

Checks whether all elements in the given `array` are `null`.

### Use case

Validate that a dataset column, API field list, or placeholder array contains only `null` values before applying logic
that assumes all entries are intentionally empty.

> **Note for TypeScript users:**
>
> Use `areNull` when you need a strict check that an input is a non-empty array and every element is exactly `null` (not
`undefined`, not falsy values).

### Advantages

- Returns `true` only when every element is `null`, making it a strict “all match” guard.
- Rejects non-arrays and empty arrays by returning `false`, preventing accidental truthy results on invalid input.
- Works well as a precondition check before processing data that must be entirely `null`.

## Usage

### Syntax

Function:

- `areNull(array)`

Parameters:

- `array`: The input array to check for `null` elements.

### Local function import

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // true
const allNullB = areNull(b); // false

const notAnArray = areNull(123 as unknown as unknown[]); // false
const empty = areNull([]); // false

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areNull(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areNull](../_analysis/areNull.md)

<br>

---

<small>The file was generated on 31 January 2026 at 15:42:11 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>