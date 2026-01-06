# areNumbers

Checks if all values within an array are finite numbers.

## Use Case

This function validates a list of values to ensure it consists exclusively of valid, finite numbers.
It is ideal for checking datasets for mathematical calculations or charts where invalid values like `NaN` or `Infinity`
must be excluded.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `number[]` within conditional
> blocks.

## Behavior

`areNumbers` returns `true` if every element in the array is of type `number` and is finite.
An empty array returns `true`. If any element is `NaN`, `Infinity`, a string, or any other non-number type, the result
is `false`.

| Input               | Output  |
|---------------------|---------|
| `[1, 2.5, -3]`      | `true`  |
| `[0, 10, 100]`      | `true`  |
| `[1, NaN, 3]`       | `false` |
| `[1, Infinity, 3]`  | `false` |
| `[1, "2", 3]`       | `false` |
| `[]` (empty array)  | `true`  |
| `[null, undefined]` | `false` |

## Usage

```ts
import {areNumbers} from "@type-check/strict";

areNumbers([1.1, 2.2, 3.3]); // true
areNumbers([1, NaN]);        // false
areNumbers([1, "2"]);        // false

// TypeScript Example
const values: unknown[] = [10.5, 20.1];

if (areNumbers(values)) {
  // values is automatically narrowed to type 'number[]'
  const average = values.reduce((a, b) => a + b, 0) / values.length;
  console.log(average);
}
```