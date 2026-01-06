# areFunctions

Checks if all values within an array are functions.

## Use Case

This function validates a list to ensure it consists exclusively of executable functions.
This is useful for validating middleware stacks, listener lists, or task queues.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `Function[]` within conditional
> blocks.

## Behavior

`areFunctions` returns `true` if every element in the array is a function.
If even a single element is not a function (e.g., a string or `undefined`), the result is `false`.

| Input                       | Output  |
|-----------------------------|---------|
| `[() => {}, function() {}]` | `true`  |
| `[() => {}, null]`          | `false` |
| `[() => {}, "text"]`        | `false` |
| `[]` (empty array)          | `false` |

## Usage

```ts
import {areFunctions} from "@type-check/guards";

const tasks = [() => 1, () => 2];
areFunctions(tasks); // true

// TypeScript Example
const handlers: unknown[] = [() => "A", () => "B"];

if (areFunctions(handlers)) {
  // handlers is automatically narrowed to type 'Function[]'
  const results = handlers.map(fn => fn());
  console.log(results);
}
```