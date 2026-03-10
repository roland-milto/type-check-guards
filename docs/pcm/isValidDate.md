# isValidDate

## Description

`isValidDate` dey check whether value wey dem give na valid `Date` object, and e go return `true` only for real dates
wey no invalid.

### Use case

Validate user input or API data wey fit contain dates, make sure say di value na real `Date` instance and no be invalid
date before you do date calculations, formatting, or comparisons.

> **Note for TypeScript users:**
>
> Use `isValidDate` before you call `Date` methods (e.g., `toISOString`, `getTime`) on values wey type be `unknown`,
> make you sure say dem be valid `Date` objects.

### Advantages

- E make sure say value na `Date` instance, no be just date-like string or number.
- E dey reject invalid dates (e.g., `new Date("invalid")`) by checking say time value na `NaN`.
- Simple boolean guard wey easy to use for conditionals and validation pipelines.
- E dey help prevent runtime errors when you wan call date methods by first confirm say the input correct.

## Usage

### Syntax

Function:

- `isValidDate(value)`

Parameters:

- `value`: Di value wey you wan check.

### Local function import

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input na valid Date instance
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isValidDate(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 16:52:17 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>