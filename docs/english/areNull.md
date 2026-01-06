# areNull

Checks if all values within an array are `null`.

## Use Case

This function validates a list to ensure it consists exclusively of `null` values.
This is useful for checking data structures that have been initialized but not yet filled with actual objects or values.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `null[]` within conditional blocks.

## Behavior

`areNull` returns `true` if every element in the array is exactly `null`.
If even a single element is not `null` (e.g., `undefined` or an object), the result is `false`.

| Input                | Output  |
|----------------------|---------|
| `[null, null, null]` | `true`  |
| `[null, undefined]`  | `false` |
| `[null, 0]`          | `false` |
| `[]` (empty array)   | `false` |

## Usage

```ts
import {areNull} from "@type-check/guards";

areNull([null, null]); // true
areNull([null, 1]);    // false

// TypeScript Example
const slots: unknown[] = [null, null];

if (areNull(slots)) {
  // slots is automatically narrowed to type 'null[]'
  console.log(`Array consists of ${slots.length} empty slots.`);
}
```