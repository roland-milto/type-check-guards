# isHexadecimal

## Description

`isHexadecimal` dey check whether given value na hexadecimal string literal wey must get `0x`/`0X` prefix.

### Use case

Use `isHexadecimal` to validate configuration values, API payload fields, or CLI arguments wey dem must provide as
hexadecimal string literals (e.g., IDs, masks, or addresses) and wey no suppose get whitespace around am.

> **Note for TypeScript users:**
>
> Use `isHexadecimal` when you need validate user input or serialized data as strict hexadecimal literal string (
> including di `0x`/`0X` prefix) before you parse or convert am.

### Advantages

- E dey validate say value na string and e match strict hexadecimal literal format (e need `0x`/`0X` prefix).
- E dey reject strings wey get whitespace for front or back, so e go help you avoid mistake wey fit make padded input
  pass.
- E support optional sign and e no dey mind case for prefix and digits, e dey return `true`/`false` in a predictable
  way.

## Usage

### Syntax

Function:

- `isHexadecimal(value)`

Parameters:

- `value`: Di value wey dem wan check.

### Local function import

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (prefix no dey)
isHexadecimal(" 0x1A2B"); // false (space dey front)
isHexadecimal(0x1a2b); // false (no be string)

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isHexadecimal(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 23:00:15 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>