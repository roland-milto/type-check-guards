# isInteger

## Description

Determines whether a given `value` is a safe integer number.

### Use case

Validate untrusted input (e.g., query params, JSON payloads, environment variables) before using it as an integer for
array indices, pagination, counters, or database IDs.

> **Note for TypeScript users:**
>
> Use `isInteger` to validate unknown input before treating it as a numeric integer; it returns `true` only for values
> where `typeof value === "number"` and `Number.isSafeInteger(value)`.

### Advantages

- Checks both type and numeric safety: returns `true` only when the input is a number and a safe integer.
- Prevents common pitfalls with numeric coercion: strings like "5" correctly return `false`.
- Rejects non-integers and unsafe integers, making it suitable for IDs, counters, and array indexing.

## Usage

### Syntax

Function:

- `isInteger(value)`

Parameters:

- `value`: The value to check for integer status.

### Local function import

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // true
const b = isInteger(-100);   // true
const c = isInteger("5");    // false
const d = isInteger(5.5);    // false
const e = isInteger(null);   // false

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isInteger(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>The file was generated on 31 January 2026 at 00:48:56 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>