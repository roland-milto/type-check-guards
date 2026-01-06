# areUndefined

Checks if all values within an array are `undefined`.

## Use Case

This function validates a list to ensure it consists exclusively of `undefined` values.
This can be helpful to verify that an array (e.g., a buffer or a data structure) does not yet contain any actual data.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `undefined[]` within conditional
> blocks.

## Behavior

`areUndefined` returns `true` if every element in the array is of type `undefined`.
If even a single element has a different type (e.g., `null` or `0`), the result is `false`.

| Input                    | Output  |
|--------------------------|---------|
| `[undefined, undefined]` | `true`  |
| `[undefined, null]`      | `false` |
| `[undefined, 0]`         | `false` |
| `[]` (empty array)       | `false` |

## Usage

```ts
import {areUndefined} from "@type-check/guards";

areUndefined([undefined, undefined]); // true
areUndefined([undefined, null]);      // false

// TypeScript Example
const results: unknown[] = [undefined, undefined];

if (areUndefined(results)) {
  // results is automatically narrowed to type 'undefined[]'
  const length = results.length;
  console.log(`Array contains ${length} uninitialized slots.`);
}
```