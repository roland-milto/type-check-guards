# isIndexFound

## Description

`isIndexFound` determines whether a given value is a non-negative integer, indicating an index is found.

### Use case

Validate that a search result represents a usable index (integer `>= 0`) before indexing into an array or string,
preventing accidental use of `-1` or non-numeric values.

> **Note for TypeScript users:**
>
> Use `isIndexFound` after operations like `indexOf`, `findIndex`, or custom searches where `-1` (or other invalid
> values) can indicate “not found”. When it returns `true`, the value is a number and safe to use as an array/string
> index.

### Advantages

- Provides a simple type guard to detect whether an index was found by checking for a non-negative integer.
- Returns `true` only for valid index-like values (integers `>= 0`), rejecting negatives, non-integers, and non-numbers.
- Helps avoid off-by-one and sentinel-value mistakes when working with APIs that return `-1` for “not found”.

## Usage

### Syntax

Function:

- `isIndexFound(value)`

Parameters:

- `value`: The value to check for being a non-negative integer.

### Local function import

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx is a number here and is >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Typical usage with indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isIndexFound(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>The file was generated on 31 January 2026 at 00:44:41 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>