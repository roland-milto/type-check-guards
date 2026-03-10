# isNumber

## Description

`isNumber` checks whether a value is a finite, non-`NaN` number.

### Use case

Validate numeric input from untrusted sources (forms, query params, JSON payloads) before calculations, storage, or
range checks, ensuring only finite numbers pass (`true`) and everything else returns `false`.

> **Note for TypeScript users:**
>
> Use `isNumber` to validate `unknown` values before doing arithmetic; it rejects `NaN`, `Infinity`, and `-Infinity`.

### Advantages

- Returns `true` only for real JavaScript numbers (type check plus `NaN` and infinity rejection).
- Prevents common validation bugs where `NaN`, `Infinity`, or `-Infinity` accidentally pass as numbers.
- Works well as a runtime guard for unknown input (e.g., JSON, user input, external APIs).
- Simple, fast, and side-effect free.

## Usage

### Syntax

Function:

- `isNumber(value)`

Parameters:

- `value`: The value to check.

### Local function import

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input is a valid finite number
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isNumber(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>The file was generated on 30 January 2026 at 13:07:54 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>