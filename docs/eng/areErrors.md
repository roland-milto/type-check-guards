# areErrors

## Description

Checks whether an array is non-empty and contains only `Error` objects, returning `true` or `false`.

### Use case

Validate that a runtime-provided `unknown[]` (e.g., aggregated failures, validation results, or deserialized data) is a
non-empty list of `Error` objects before iterating, logging, or rethrowing.

> **Note for TypeScript users:**
>
> `areErrors` returns `true` only for a filled array where every item is an `Error`; it returns `false` for an empty
> array or if any element is not an `Error`.

### Advantages

- Ensures every element is an `Error` instance, enabling safe error handling and logging.
- Rejects empty arrays, preventing accidental “no errors” states from being treated as valid error lists.
- Works well as a runtime guard when dealing with `unknown[]` inputs (e.g., from APIs or `catch` blocks).

## Usage

### Syntax

Function:

- `areErrors(array)`

Parameters:

- `array`: The array to check for `Error` objects.

### Local function import

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value is a non-empty array of Error objects
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areErrors(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>The file was generated on 6 February 2026 at 12:32:27 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>