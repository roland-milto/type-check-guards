# areNumbers

## Description

`areNumbers` dey check whether one value na non-empty array wey all elements na numbers.

### Use case

Validate data wey user provide or API provide to make sure say e be non-empty array of numbers before you compute
totals, averages, or other numeric aggregations.

> **Note for TypeScript users:**
>
> Use `areNumbers` to validate unknown arrays before you do numeric calculations; e dey return `false` for empty arrays
> and for arrays wey get any value wey no be number.

### Advantages

- E dey return `true` only when di input na array wey no empty and every element na number.
- E dey prevent false positives by reject empty arrays and inputs wey no be array.
- E useful as guard before numeric operations (e.g., summing, averaging) make runtime errors no happen.

## Usage

### Syntax

Function:

- `areNumbers(array)`

Parameters:

- `array`: Di array wey dem go check say e get number elements.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areNumbers(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 13:05:32 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>