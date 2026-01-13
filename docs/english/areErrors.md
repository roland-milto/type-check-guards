# areErrors

Checks if a value is a non-empty array of `Error` objects.

## Use Case

This function validates a list to ensure it consists exclusively of functional error objects.
This is particularly useful when multiple validation errors have been collected or when asynchronous operations return a
list of failures.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `Error[]` within conditional blocks.

## Behavior

`areErrors` returns `true` if the main value is a non-empty array and every one of its elements is an instance of
`Error`.
An empty array returns `false`.

| Input                            | Output  |
|----------------------------------|---------|
| `[new Error(), new TypeError()]` | `true`  |
| `[new Error(), "not an error"]`  | `false` |
| `[]` (empty array)               | `false` |
| `[null]`                         | `false` |

## Usage

```ts
import {areErrors} from "@type-check/guards";

areErrors([new Error("A"), new Error("B")]); // true
areErrors([new Error("A"), 123]);             // false

// TypeScript Example
const results: unknown[] = [new Error("First error")];

if (areErrors(results)) {
  // results is automatically narrowed to type 'Error[]'
  results.forEach(err => console.log(err.stack));
}
```