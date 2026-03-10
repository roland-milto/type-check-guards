# isNaN

## Description

Determines whether the provided `value` is a `NaN` of type `number` without converting strings.

### Use case

Validate untrusted or loosely typed input (e.g. API payloads, form values, parsed JSON) to detect the special `NaN`
value and handle it explicitly, while treating non-number inputs as not `NaN`.

> **Note for TypeScript users:**
>
> Use `isNaN` when you need to detect the special numeric value `NaN` while ensuring the input is actually a `number` (
> no string-to-number conversion).

### Advantages

- Checks whether a value is `NaN` without coercing non-numbers (e.g. strings) into numbers.
- Returns `true` only for values that are both of type `number` and `NaN`.
- Safe for `unknown` inputs and avoids false positives from implicit conversions.

## Usage

### Syntax

Function:

- `isNaN(value)`

Parameters:

- `value`: The value to be checked if it is a `NaN` of type `number`.

### Local function import

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // true
console.log(isNaN(b)); // false
console.log(isNaN(c)); // false

if (isNaN(a)) {
  // a is a number and specifically NaN
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isNaN(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>The file was generated on 30 January 2026 at 15:49:59 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>