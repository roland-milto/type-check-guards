# isPrimitive

## Description

`isPrimitive` determines whether a given value is a primitive (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Use case

Validate inputs at runtime (e.g., API payload fields, configuration values, or user-provided data) to ensure a value is
a primitive before serializing, logging, or applying primitive-only operations.

> **Note for TypeScript users:**
>
> Use `isPrimitive` to guard `unknown` inputs before treating them as objects or functions; it returns `true` for
> primitives and `false` for objects and functions.

### Advantages

- Fast, allocation-free check for whether a value is a JavaScript primitive.
- Correctly treats `null` as primitive (even though `typeof null` is `"object"`).
- Helps narrow `unknown` values before performing object-only operations.

## Usage

### Syntax

Function:

- `isPrimitive(value)`

Parameters:

- `value`: The value to check for primitive type.

### Local function import

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isPrimitive(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>The file was generated on 30 January 2026 at 23:55:16 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>