# areIntegers

Checks if all values within an array are integers.

## Use Case

This function validates a list of values simultaneously.
It is particularly useful for ensuring that data structures like coordinate lists, arrays of IDs, or mathematical
matrices consist exclusively of valid integers.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `number[]` within conditional
> blocks.

## Behavior

`areIntegers` returns `true` if every element in the array is of type `number` and represents a whole number.
If even a single element fails the check, the result is `false`.

| Input              | Output  |
|--------------------|---------|
| `[1, 2, 3]`        | `true`  |
| `[10, 20.0, -5]`   | `true`  |
| `[1, 2.5, 3]`      | `false` |
| `[1, "2", 3]`      | `false` |
| `[]` (empty array) | `false` |
| `[10, NaN]`        | `false` |
| `[10, null]`       | `false` |

## Usage

```ts
import {areIntegers} from "@type-check/guards";

areIntegers([1, 2, 100]);    // true
areIntegers([1, 2.5]);       // false
areIntegers([1, "2"]);       // false

// TypeScript Example
const values: unknown[] = [1, 2, 3];

if (areIntegers(values)) {
  // values is automatically narrowed to type 'number[]'
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}
```