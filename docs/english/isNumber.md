# isNumber

Checks if a value is a finite number.

## Use Case

This function ensures that a value is a valid, usable number.
Unlike the standard JavaScript `typeof value === 'number'`, this function excludes `NaN` and `Infinity`, which often
cause logic errors in mathematical calculations.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `number` within conditional blocks.

## Behavior

`isNumber` returns `true` if the value is of type `number` and is finite.

| Input          | Output  |
|----------------|---------|
| `42`           | `true`  |
| `3.14`         | `true`  |
| `-10.5`        | `true`  |
| `"42"`         | `false` |
| `NaN`          | `false` |
| `Infinity`     | `false` |
| `10n` (BigInt) | `false` |
| `null`         | `false` |
| `undefined`    | `false` |

## Usage

```ts
import { isNumber } from "@type-checks/strict";

isNumber(123);          // true
isNumber(NaN);          // false
isNumber(Infinity);     // false
isNumber("123");        // false

// TypeScript Example
const value: unknown = 42.5;

if (isNumber(value)) {
 // value is automatically narrowed to type 'number'
 console.log(value.toFixed(2));
}
```