# isInteger

Checks if a value is an integer.

## Use Case

This function validates whether an input is a numerical value without fractional parts.
It helps prevent type errors, especially when working with APIs or mathematical operations that strictly require
integers.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `number` within conditional blocks.

## Behavior

`isInteger` returns `true` if the value is of type `number` and represents a whole number.
In all other cases (e.g., strings, objects, NaN, infinity), it returns `false`.

| Input          | Output  |
|----------------|---------|
| `1337`         | `true`  |
| `42.0`         | `true`  |
| `-7`           | `true`  |
| `3.14`         | `false` |
| `"21"`         | `false` |
| `10n` (BigInt) | `false` |
| `NaN`          | `false` |
| `Infinity`     | `false` |
| `null`         | `false` |
| `undefined`    | `false` |

## Usage

```ts
import {isInteger} from "@type-check/guards";

isInteger(42);       // true
isInteger(42.5);     // false
isInteger("42");     // false (strict type check)

// TypeScript Example
const value: unknown = 10;

if (isInteger(value)) {
 // value is automatically narrowed to type 'number'
 console.log(value.toFixed(0));
}
```