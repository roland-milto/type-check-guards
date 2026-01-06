# areBigInts

Checks if all values within an array are of type `bigint`.

## Use Case

This function validates a list of values to ensure it consists exclusively of `BigInt` values.
It is useful for processing datasets containing large IDs or high-precision cryptographic values.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `bigint[]` within conditional
> blocks.

## Behavior

`areBigInts` returns `true` if every element in the array is of type `bigint`.
If even a single element is not a `BigInt` (e.g., a standard number or a string), the result is `false`.

| Input                 | Output  |
|-----------------------|---------|
| `[10n, 20n, 30n]`     | `true`  |
| `[BigInt(1), 0n]`     | `true`  |
| `[10n, 20]` (mixture) | `false` |
| `[10n, "20n"]`        | `false` |
| `[]` (empty array)    | `false` |
| `[null]`              | `false` |

## Usage

```ts
import {areBigInts} from "@type-check/guards";

areBigInts([10n, 20n]); // true
areBigInts([10n, 20]);  // false

// TypeScript Example
const bigNumbers: unknown[] = [100n, 200n];

if (areBigInts(bigNumbers)) {
  // bigNumbers is automatically narrowed to type 'bigint[]'
  const sum = bigNumbers.reduce((a, b) => a + b, 0n);
  console.log(sum);
}
```