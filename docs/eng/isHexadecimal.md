# isHexadecimal

## Description

`isHexadecimal` checks whether a given value is a hexadecimal string literal with a mandatory `0x`/`0X` prefix.

### Use case

Use `isHexadecimal` to validate configuration values, API payload fields, or CLI arguments that must be provided as
hexadecimal string literals (e.g., IDs, masks, or addresses) and must not contain surrounding whitespace.

> **Note for TypeScript users:**
>
> Use `isHexadecimal` when you need to validate user input or serialized data as a strict hexadecimal literal string (
> including the `0x`/`0X` prefix) before parsing or converting it.

### Advantages

- Validates that a value is a string and matches a strict hexadecimal literal format (requires the `0x`/`0X` prefix).
- Rejects strings with leading or trailing whitespace, helping avoid accidental acceptance of padded input.
- Supports optional sign and is case-insensitive for the prefix and digits, returning `true`/`false` predictably.

## Usage

### Syntax

Function:

- `isHexadecimal(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (missing prefix)
isHexadecimal(" 0x1A2B"); // false (leading whitespace)
isHexadecimal(0x1a2b); // false (not a string)
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isHexadecimal(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>The file was generated on 31 January 2026 at 22:57:31 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>