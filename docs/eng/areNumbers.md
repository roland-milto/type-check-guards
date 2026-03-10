# areNumbers

## Description

`areNumbers` checks whether a value is a non-empty array where all elements are numbers.

### Use case

Validate user-provided or API-provided data to ensure it is a non-empty array of numbers before computing totals,
averages, or other numeric aggregations.

> **Note for TypeScript users:**
>
> Use `areNumbers` to validate unknown arrays before performing numeric calculations; it returns `false` for empty
> arrays and for arrays containing any non-number value.

### Advantages

- Returns `true` only when the input is a non-empty array and every element is a number.
- Prevents false positives by rejecting empty arrays and non-array inputs.
- Useful as a guard before numeric operations (e.g., summing, averaging) to avoid runtime errors.

## Usage

### Syntax

Function:

- `areNumbers(array)`

Parameters:

- `array`: The array to be checked for number elements.

### Local function import

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areNumbers(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>The file was generated on 30 January 2026 at 13:03:14 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>