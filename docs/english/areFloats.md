# areFloats

Checks if all values within an array are floating-point numbers.

## Use Case

This function validates a list to ensure it consists exclusively of decimal numbers.
It is helpful for checking datasets for statistical analysis or geospatial data to ensure no pure integers are included
in the series.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `number[]` within conditional
> blocks.

## Behavior

`areFloats` returns `true` if every element in the array is a floating-point number.
An empty array returns `false`.
If even a single element is an integer, a string, or any other non-number type, the result is `false`.

| Input              | Output                     |
|--------------------|----------------------------|
| `[1.1, 2.2, 3.3]`  | `true`                     |
| `[1.5, 2]`         | `false` (contains integer) |
| `[1.1, NaN]`       | `false`                    |
| `[]` (empty array) | `false`                    |
| `[null]`           | `false`                    |

## Usage

```ts
import {areFloats} from "@type-check/strict";

areFloats([1.1, 0.99, -1.5]); // true
areFloats([1.1, 2]);          // false

// TypeScript Example
const measurements: unknown[] = [10.5, 11.2, 9.8];

if (areFloats(measurements)) {
  // measurements is automatically narrowed to type 'number[]'
  const sum = measurements.reduce((a, b) => a + b, 0);
  console.log(`Total measurement sum: ${sum}`);
}
```