# isValidDate

## Description

`isValidDate` checks whether a given value is a valid `Date` object and returns `true` only for real, non-invalid dates.

### Use case

Validate user input or API data that may contain dates, ensuring the value is a real `Date` instance and not an invalid
date before performing date calculations, formatting, or comparisons.

> **Note for TypeScript users:**
>
> Use `isValidDate` before calling `Date` methods (e.g., `toISOString`, `getTime`) on values typed as `unknown` to
> ensure they are valid `Date` objects.

### Advantages

- Ensures a value is a `Date` instance and not just a date-like string or number.
- Rejects invalid dates (e.g., `new Date("invalid")`) by checking for `NaN` time values.
- Simple boolean guard that is easy to use in conditionals and validation pipelines.
- Helps prevent runtime errors when calling date methods by verifying the input first.

## Usage

### Syntax

Function:

- `isValidDate(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input is a valid Date instance
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isValidDate(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>The file was generated on 30 January 2026 at 16:51:20 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>