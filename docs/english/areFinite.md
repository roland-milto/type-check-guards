# areFinite

Checks if all values within an array are finite numbers.

## Use Case

This function validates a list to ensure it consists exclusively of valid, finite numbers.
It ensures that mathematical operations can be performed safely on the entire dataset without encountering infinite
values or type errors.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `number[]` within conditional
> blocks.

## Behavior

`areFinite` returns `true` if every element in the array is of type `number` and is finite.
If even a single element is `NaN`, `Infinity`, or not a number type, the result is `false`.

| Input              | Output  |
|--------------------|---------|
| `[1, 2, 3]`        | `true`  |
| `[1.5, -10, 0]`    | `true`  |
| `[1, NaN, 3]`      | `false` |
| `[1, Infinity]`    | `false` |
| `[1, "2"]`         | `false` |
| `[]` (empty array) | `false` |
| `[null]`           | `false` |

## Usage

```ts
import {areFinite} from "@type-check/guards";

areFinite([1, 2, 3]);       // true
areFinite([1, Infinity]);    // false

// TypeScript Example
const coordinates: unknown[] = [10.5, 20.0, -5.2];

if (areFinite(coordinates)) {
  // coordinates is automatically narrowed to type 'number[]'
  const sum = coordinates.reduce((acc, val) => acc + val, 0);
  console.log(`Total coordinates sum: ${sum}`);
}
```