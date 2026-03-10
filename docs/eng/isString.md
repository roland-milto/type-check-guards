# isString

## Description

`isString` determines whether a given value is a string.

### Use case

Validate user input, API payload fields, or configuration values at runtime to ensure a value is a string before
applying string operations (e.g., trimming, splitting, case conversion).

> **Note for TypeScript users:**
>
> Use `isString` to validate `unknown` or loosely typed values before calling string methods; it returns `true` only
> when `typeof value === "string"`.

### Advantages

- Simple and fast check using `typeof`.
- Returns a predictable boolean result: `true` for strings, otherwise `false`.
- Works for both empty and non-empty strings.
- Useful as a lightweight runtime guard before performing string-specific operations.

## Usage

### Syntax

Function:

- `isString(value)`

Parameters:

- `value`: The value to be tested for string type.

### Local function import

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input is a string here
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isString(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isString](../_analysis/isString.md)

<br>

---

<small>The file was generated on 30 January 2026 at 13:12:59 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>