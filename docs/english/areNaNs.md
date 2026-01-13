# areNaNs

Checks if a value is a non-empty array consisting exclusively of `NaN`.

## Use Case

This function is useful for validating datasets that are the result of failed bulk calculations.
It ensures that a list exists and that every single element represents an invalid number.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `number[]`.

## Behavior

`areNaNs` returns `true` if the main value is a non-empty array and every one of its elements is exactly `NaN`.
An empty array returns `false`.

| Input              | Output  |
|--------------------|---------|
| `[NaN, NaN]`       | `true`  |
| `[NaN, 123]`       | `false` |
| `[NaN, "NaN"]`     | `false` |
| `[]` (empty array) | `false` |

## Usage

```ts
import {areNaNs} from "@type-check/guards";

areNaNs([NaN, NaN]); // true
areNaNs([NaN, 0]);   // false

// TypeScript Example
const dataPoints: unknown[] = [NaN, NaN];

if (areNaNs(dataPoints)) {
  // dataPoints is automatically narrowed to type 'number[]'
  console.log("The entire dataset is invalid.");
}
```