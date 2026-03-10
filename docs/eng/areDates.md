# areDates

## Description

`areDates` determines whether a given array is filled and contains only `Date` objects, returning `true` only when all
elements are valid dates.

### Use case

Use `areDates` to validate unknown input (e.g., parsed JSON, form data, API payloads) before running date-specific logic
like sorting by time, formatting, or computing ranges.

> **Note for TypeScript users:**
>
> Returns `true` only for non-empty arrays where every element is a `Date`; empty arrays yield `false`.

### Advantages

- Ensures an array is non-empty before validating its contents, preventing `true` for empty inputs.
- Verifies every element is a `Date` instance, returning `false` immediately on the first mismatch.
- Useful as a guard-style check before performing date-specific operations on array items.

## Usage

### Syntax

Function:

- `areDates(array)`

Parameters:

- `array`: The array to be checked for `Date` objects.

### Local function import

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // true
console.log(areDates(b)); // false
console.log(areDates(c)); // false

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areDates(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areDates](../_analysis/areDates.md)

<br>

---

<small>The file was generated on 31 January 2026 at 15:29:11 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>