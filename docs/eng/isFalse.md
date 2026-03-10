# isFalse

## Description

`isFalse` checks whether a given value is strictly equal to the boolean literal `false`.

### Use case

Validate unknown data (e.g., from JSON, query params, or user input) where only the explicit boolean value `false`
should be treated as a valid flag, and everything else should be rejected.

> **Note for TypeScript users:**
>
> Use `isFalse` when you need to accept only the literal `false` and reject all other falsy values; it returns `true`
> only for `value === false`.

### Advantages

- Provides a strict check for the boolean literal `false` without coercion.
- Helps distinguish `false` from other falsy values like `0`, `""`, `null`, and `undefined`.
- It improves readability by making intent explicit when validating unknown input.

## Usage

### Syntax

Function:

- `isFalse(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input is exactly false here
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isFalse(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>The file was generated on 31 January 2026 at 16:43:30 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>