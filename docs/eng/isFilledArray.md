# isFilledArray

## Description

Checks whether `value` is an array with at least one element, returning `true` or `false`.

### Use case

Use `isFilledArray` to validate incoming data (e.g., API payloads, form values, configuration) before iterating,
accessing the first element, or applying logic that requires at least one item.

> **Note for TypeScript users:**
>
> `isFilledArray` is a runtime guard that returns a boolean; it does not narrow element types beyond confirming the
> array is non-empty.

### Advantages

- Simple, fast check for a non-empty array using `Array.isArray` and a length check.
- Helps avoid runtime errors when code assumes an array has at least one element.
- Clear boolean result: returns `true` for non-empty arrays and `false` otherwise.

## Usage

### Syntax

Function:

- `isFilledArray(value)`

Parameters:

- `value`: The value to check if it is a non-empty array.

### Local function import

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input is a non-empty array at runtime
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isFilledArray(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>The file was generated on 6 February 2026 at 11:46:04 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>