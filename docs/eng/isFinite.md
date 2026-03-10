# isFinite

## Description

Determines whether a given `value` is a finite `number`.

### Use case

Use `isFinite` to validate unknown input (e.g., from JSON, forms, or APIs) before performing numeric calculations,
ensuring the value is a real, finite number.

> **Note for TypeScript users:**
>
> `isFinite` returns `true` only for finite numbers; it returns `false` for `NaN`, `Infinity`, and any non-number value.

### Advantages

- Uses the built-in `Number.isFinite` for a reliable finiteness check.
- Returns `true` only for finite numbers; returns `false` for `NaN`, `Infinity`, and non-number inputs.
- Simple, side-effect-free predicate suitable for validation and guarding logic.

## Usage

### Syntax

Function:

- `isFinite(value)`

Parameters:

- `value`: The value to check for finiteness.

### Local function import

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers is: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value is a finite number here
  const doubled = value * 2;
  console.log(doubled);
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isFinite(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>The file was generated on 30 January 2026 at 16:28:42 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>