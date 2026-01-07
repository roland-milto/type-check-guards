# areFalse

Checks if all values within an array are strictly equal to `false`.

## Use Case

This function validates a list to ensure it consists exclusively of the boolean value `false`.
It is useful for verifying that in a series of status flags or validation results, not a single element has the value
`true` (or any other type).

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `false[]` within conditional blocks.

## Behavior

`areFalse` returns `true` if every single element in the array is strictly equal to `false`.
An empty array returns `false`.
If even a single element is not `false` (e.g., `true`, `0`, or `undefined`), the result is `false`.

| Input                   | Output  |
|-------------------------|---------|
| `[false, false, false]` | `true`  |
| `[false, true]`         | `false` |
| `[false, 0]`            | `false` |
| `[]` (empty array)      | `false` |
| `[null]`                | `false` |

## Usage

```ts
import {areFalse} from "@type-check/guards";

areFalse([false, false]); // true
areFalse([false, 0]);     // false

// TypeScript Example
const errorFlags: unknown[] = [false, false];

if (areFalse(errorFlags)) {
  // errorFlags is automatically narrowed to type 'false[]'
  console.log("All error markers are disabled.");
}
```