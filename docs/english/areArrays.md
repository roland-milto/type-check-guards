# areArrays

Checks if a value is a two-dimensional array (an array of arrays).

## Use Case

This function validates whether a structure is a matrix or a list of lists.
It ensures that both the main value is an array and every element within it is also an array.
This is useful for processing tabular data or coordinate systems.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `unknown[][]` within conditional blocks.

## Behavior

`areArrays` returns `true` if the value is an array and every one of its elements is also an array.
An empty array returns `false`.
If even a single element is not an array, the result is `false`.

| Input              | Output  |
|--------------------|---------|
| `[[1], [2]]`       | `true`  |
| `[[], []]`         | `true`  |
| `[[1], 2]`         | `false` |
| `[]` (empty array) | `false` |
| `["text"]`         | `false` |

## Usage

```ts
import {areArrays} from "@type-check/guards";

areArrays([[1, 2], [3, 4]]); // true
areArrays([1, 2, 3]);        // false

// TypeScript Example
const matrix: unknown = [[10], [20, 30]];

if (areArrays(matrix)) {
  // matrix is automatically narrowed to type 'unknown[][]'
  const firstElement = matrix[0][0];
  console.log(firstElement);
}
```