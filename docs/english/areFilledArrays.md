# areFilledArrays

Checks if a value is an array of non-empty arrays.

## Use Case

This function validates two-dimensional data structures (such as matrices or tabular data) to ensure that both the main
structure and every substructure contain at least one element.
This prevents errors during deep data access.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `unknown[][]` within conditional blocks.

## Behavior

`areFilledArrays` returns `true` if the main value is a non-empty array and every one of its elements is also a
non-empty array.

| Input              | Output                            |
|--------------------|-----------------------------------|
| `[[1], [2, 3]]`    | `true`                            |
| `[[1], []]`        | `false` (contains empty array)    |
| `[]` (empty array) | `false`                           |
| `[1, 2]`           | `false` (elements are not arrays) |

## Usage

```ts
import {areFilledArrays} from "@type-check/guards";

areFilledArrays([[1], [2]]); // true
areFilledArrays([[1], []]);  // false

// TypeScript Example
const table: unknown = [["Header1"], ["Data1"]];

if (areFilledArrays(table)) {
  // table is automatically narrowed to type 'unknown[][]'
  console.log(`Row count: ${table.length}`);
}
```