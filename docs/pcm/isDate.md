# isDate

## Description

`isDate` dey determine if di value wey dem provide be `Date`, e dey return `true` for `Date` instances and `false` if no
be so.

### Use case

Validate and narrow unknown values (e.g., request data, config values, or parsed JSON) before you do `Date` operations
like formatting, comparisons, or call `toISOString()`.

> **Note for TypeScript users:**
>
> Use `isDate` to narrow `unknown` to `Date` for runtime; e dey return `true` only for real `Date` instances (no be date
> strings).

### Advantages

- E give simple runtime guard to check if one value be `Date`.
- E dey help prevent type error by make sure say only `Date` instances pass validation.
- E dey useful to validate unknown inputs (e.g., API payloads) before you use date-specific methods.

## Usage

### Syntax

Function:

- `isDate(value)`

Parameters:

- `value`: Di value wey you wan check if e be `Date` type.

### Local function import

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input na Date for here
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isDate(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isDate](../_analysis/isDate.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 15:47:18 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>