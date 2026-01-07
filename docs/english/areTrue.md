# areTrue

Checks if all values within an array are strictly equal to `true`.

## Use Case

This function validates a list to ensure it consists exclusively of the boolean value `true`.
This is useful for verifying that a series of conditions, checks, or permissions have been met without exception.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `true[]`.

## Behavior

`areTrue` returns `true` if every single element in the array is strictly equal to `true`.
An empty array returns `false`.
If even a single element is not `true` (e.g., `false`, `1`, or `null`), the result is `false`.

| Input                | Output  |
|----------------------|---------|
| `[true, true, true]` | `true`  |
| `[true, false]`      | `false` |
| `[true, 1]`          | `false` |
| `[]` (empty array)   | `false` |
| `[null]`             | `false` |

## Usage

```ts
import {areTrue} from "@type-check/guards";

areTrue([true, true]);  // true
areTrue([true, false]); // false

// TypeScript Example
const checks: unknown[] = [true, true, true];

if (areTrue(checks)) {
  // checks is automatically narrowed to type 'true[]'
  console.log("All checks passed successfully.");
}
```