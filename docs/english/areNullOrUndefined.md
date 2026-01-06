# areNullOrUndefined

Checks if all values within an array are either `null` or `undefined`.

## Use Case

This function validates a list to ensure it consists exclusively of empty values.
This is helpful for verifying that an array does not yet contain any actual data or for identifying datasets consisting
entirely of placeholders.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `(null | undefined)[]` within
> conditional blocks.

## Behavior

`areNullOrUndefined` returns `true` if every element in the array is either `null` or `undefined`.
An empty array also returns `true` (vacuous truth).
If even a single element contains any other value (e.g., `0` or `""`), the result is `false`.

| Input                 | Output  |
|-----------------------|---------|
| `[null, undefined]`   | `true`  |
| `[null, null]`        | `true`  |
| `[undefined, "text"]` | `false` |
| `[null, 0]`           | `false` |
| `[]` (empty array)    | `true`  |

## Usage

```ts
import {areNullOrUndefined} from "@type-check/guards";

areNullOrUndefined([null, undefined]); // true
areNullOrUndefined([null, 1]);         // false

// TypeScript Example
const results: unknown[] = [null, undefined, null];

if (areNullOrUndefined(results)) {
  // results is automatically narrowed to type '(null | undefined)[]'
  console.log(`Array contains ${results.length} empty slots.`);
}
```