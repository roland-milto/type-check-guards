# arePromises

Checks if all values within an array are `Promises`.

## Use Case

This function validates a list to ensure it consists exclusively of `Promise` objects.
This is particularly useful before applying operations like `Promise.all()` or `Promise.race()` to an array, ensuring
that every element can be handled asynchronously.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `Promise<unknown>[]` within
> conditional blocks.

## Behavior

`arePromises` returns `true` if every element in the array is an instance of `Promise`.
If even a single element is not a promise, the result is `false`.

| Input                                | Output  |
|--------------------------------------|---------|
| `[Promise.resolve(), new Promise()]` | `true`  |
| `[Promise.resolve(), 123]`           | `false` |
| `[null]`                             | `false` |
| `[]` (empty array)                   | `false` |

## Usage

```ts
import {arePromises} from "@type-check/guards";

const tasks = [Promise.resolve(1), Promise.resolve(2)];
arePromises(tasks); // true

// TypeScript Example
const queue: unknown[] = [Promise.resolve(), Promise.resolve()];

if (arePromises(queue)) {
  // queue is automatically narrowed to type 'Promise<unknown>[]'
  Promise.all(queue).then(() => console.log("All tasks completed"));
}
```