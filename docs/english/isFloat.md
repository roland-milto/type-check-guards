# isFloat

Checks if a value is a floating-point number (decimal).

## Use Case

This function ensures that a value is a number with fractional parts.
It is useful for precise calculations, coordinates, or scientific data where integers should be explicitly excluded.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `number` within conditional blocks.

## Behavior

`isFloat` returns `true` if the value is of type `number`, is finite, and has decimal places. Integers (e.g., `10` or
`10.0`) return `false`.

| Input    | Output                       |
|----------|------------------------------|
| `3.14`   | `true`                       |
| `-0.5`   | `true`                       |
| `10`     | `false`                      |
| `10.0`   | `false` (treated as integer) |
| `"3.14"` | `false`                      |
| `NaN`    | `false`                      |

## Usage

```ts
import {isFloat} from "@type-check/strict";

isFloat(1.5); // true
isFloat(10);  // false

// TypeScript Example
const value: unknown = 42.7;

if (isFloat(value)) {
  // value is automatically narrowed to type 'number'
  console.log(`Decimal value: ${value.toFixed(2)}`);
}
```