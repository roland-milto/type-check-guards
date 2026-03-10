# isFloat

## Description

`isFloat` dey determine whether given `value` na finite floating-point number (one `number` wey no be integer).

### Use case

Validate numeric input wey user provide where fractional values dey required (e.g., prices, measurements, rates) and
reject integers, `NaN`, and infinities.

> **Note for TypeScript users:**
>
> Use `isFloat` when you need accept only finite, non-integer numeric inputs; e dey reject integers and non-finite
> numbers.

### Advantages

- E dey return `true` only for finite, non-integer numbers (e no include integers, `NaN`, `Infinity`, and `-Infinity`).
- E dey work with any input type (`unknown`) and e dey safely narrow am by checking `typeof value === "number"`.
- E dey use built-in numeric guards (`Number.isInteger`, `Number.isFinite`) so behavior go dey predictable.

## Usage

### Syntax

Function:

- `isFloat(value)`

Parameters:

- `value`: Di value wey dem wan check if e be floating-point number.

### Local function import

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value na number for runtime; e dey finite and e no be integer
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isFloat(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 16:09:13 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>