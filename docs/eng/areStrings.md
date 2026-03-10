# areStrings

## Description

`areStrings` checks whether an array is non-empty and all its elements are strings, returning `true` only in that case.

### Use case

Validate external or user-provided data (e.g., query params, JSON payloads, CSV fields) to ensure you have a non-empty
list of strings before processing.

> **Note for TypeScript users:**
>
> Use `areStrings` to validate unknown arrays before applying string-only logic; it returns `false` for empty arrays.

### Advantages

- Ensures every element is a string and rejects mixed-type arrays by returning `false`.
- Rejects empty arrays, so `true` only indicates a non-empty list of strings.
- Useful as a quick runtime guard before performing string-only operations (e.g., `trim`, `toLowerCase`).

## Usage

### Syntax

Function:

- `areStrings(value)`

Parameters:

- `value`: Expected type `string[]`.

### Local function import

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input is a non-empty string[] at runtime
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areStrings(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>The file was generated on 30 January 2026 at 13:16:59 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>