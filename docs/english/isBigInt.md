# isBigInt

Checks if a value is of type `bigint`.

## Use Case

This function validates whether a value is an arbitrarily large integer (`BigInt`).
This is essential when working with numbers exceeding the safe integer limit of standard JavaScript numbers (
`Number.MAX_SAFE_INTEGER`) to prevent precision loss.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `bigint` within conditional blocks.

## Behavior

`isBigInt` returns `true` if the value is of type `bigint`.
In all other cases (e.g., standard numbers, strings, objects, or `null`), it returns `false`.

| Input             | Output  |
|-------------------|---------|
| `10n`             | `true`  |
| `BigInt(9007199)` | `true`  |
| `0n`              | `true`  |
| `42` (Number)     | `false` |
| `"10"` (String)   | `false` |
| `null`            | `false` |

## Usage

```ts
import {isBigInt} from "@type-check/guards";

isBigInt(9007199254740991n); // true
isBigInt(42);                // false

// TypeScript Example
const value: unknown = 100n;

if (isBigInt(value)) {
  // value is automatically narrowed to type 'bigint'
  console.log(value.toString() + "n");
}
```