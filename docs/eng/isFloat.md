# isFloat

## Description

`isFloat` determines whether a given `value` is a finite floating-point number (a `number` that is not an integer).

### Use case

Validate user-provided numeric input where fractional values are required (e.g., prices, measurements, rates) and reject
integers, `NaN`, and infinities.

> **Note for TypeScript users:**
>
> Use `isFloat` when you need to accept only finite, non-integer numeric inputs; it rejects integers and non-finite
> numbers.

### Advantages

- Returns `true` only for finite, non-integer numbers (excludes integers, `NaN`, `Infinity`, and `-Infinity`).
- Works with any input type (`unknown`) and safely narrows by checking `typeof value === "number"`.
- Uses built-in numeric guards (`Number.isInteger`, `Number.isFinite`) for predictable behavior.

## Usage

### Syntax

Function:

- `isFloat(value)`

Parameters:

- `value`: The value to be checked if it is a floating-point number.

### Local function import

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value is a number at runtime; it is finite and not an integer
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isFloat(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>The file was generated on 30 January 2026 at 16:06:39 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>