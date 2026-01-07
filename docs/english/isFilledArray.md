# isFilledArray

Checks if a value is an array containing at least one element.

## Use Case

This function combines a type check for `Array` with length verification.
It is helpful to ensure that data structures are not only present but also populated with content before performing
iterations or calculations.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `unknown[]` within conditional blocks.

## Behavior

`isFilledArray` returns `true` if the value is an array and the `.length` property is greater than 0.

| Input    | Output  |
|----------|---------|
| `[1, 2]` | `true`  |
| `["a"]`  | `true`  |
| `[]`     | `false` |
| `{}`     | `false` |
| `null`   | `false` |

## Usage

```ts
import {isFilledArray} from "@type-check/guards";

isFilledArray([42]); // true
isFilledArray([]);   // false

// TypeScript Example
const data: unknown = [1, 2, 3];

if (isFilledArray(data)) {
  // data is narrowed to unknown[] and is guaranteed to be non-empty
  console.log(`First element: ${data[0]}`);
}
```