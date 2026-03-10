# areNullOrUndefined

## Description

Checks whether all elements in the given array are `null` or `undefined`.

### Use case

Validate that a list of optional fields contains no actual values (only `null`/`undefined`) before deciding to skip
processing or to show a “no values provided” state.

> **Note for TypeScript users:**
>
> Use `areNullOrUndefined` when you need to verify that an array contains only missing values (`null`/`undefined`). Note
> that it returns `false` for an empty array.

### Advantages

- Returns `true` only when every element is `null` or `undefined`.
- Returns `false` for empty arrays, helping distinguish “no data” from “all missing values”.
- Works with `unknown[]`, making it safe to use before narrowing types.

## Usage

### Syntax

Function:

- `areNullOrUndefined(array)`

Parameters:

- `array`: The array to check.

### Local function import

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areNullOrUndefined(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>The file was generated on 31 January 2026 at 00:28:54 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>