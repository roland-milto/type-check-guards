# isDate

## Description

`isDate` determines whether a provided value is a `Date`, returning `true` for `Date` instances and `false` otherwise.

### Use case

Validate and narrow unknown values (e.g., request data, config values, or parsed JSON) before performing `Date`
operations such as formatting, comparisons, or calling `toISOString()`.

> **Note for TypeScript users:**
>
> Use `isDate` to narrow `unknown` to `Date` at runtime; it returns `true` only for actual `Date` instances (not date
> strings).

### Advantages

- It provides a simple runtime guard to verify whether a value is a `Date`.
- It helps to prevent type errors by ensuring only `Date` instances pass validation.
- It is useful for validating unknown inputs (e.g., API payloads) before using date-specific methods.

## Usage

### Syntax

Function:

- `isDate(value)`

Parameters:

- `value`: The value to be checked for `Date` type.

### Local function import

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input is a Date here
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isDate(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isDate](../_analysis/isDate.md)

<br>

---

<small>The file was generated on 31 January 2026 at 16:03:12 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>