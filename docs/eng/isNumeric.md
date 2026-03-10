# isNumeric

## Description

`isNumeric` determines whether a given `value` is considered numeric by checking its resolved type against
`NUMERIC_TYPES`.

### Use case

Use `isNumeric` to validate inputs (e.g., API payloads, form values, configuration) before performing numeric
operations, and to consistently accept numeric-like types (such as `BigInt`) according to `NUMERIC_TYPES`.

> **Note for TypeScript users:**
>
> `isNumeric` is a boolean-returning predicate; treat it as a runtime check for whether a value belongs to the
> library-defined numeric type set.

### Advantages

- Uses `getTypeOf` plus `NUMERIC_TYPES` to centralize numeric detection logic and keep checks consistent across a
  codebase.
- Returns a simple boolean (`true`/`false`) for easy branching and guard-style usage.
- Supports multiple numeric representations (e.g., `number`, `BigInt`) as defined by `NUMERIC_TYPES`.

## Usage

### Syntax

Function:

- `isNumeric(value)`

Parameters:

- `value`: The value to check for numeric type.

### Local function import

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v is considered numeric by the library's type rules
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isNumeric(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>The file was generated on 6 February 2026 at 15:51:24 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>