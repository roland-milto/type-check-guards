# isPromise

Checks if a value is a `Promise`.

## Use Case

This function ensures that a value is an asynchronous promise.
It is important to verify that you can use `await` or call `.then()`/`.catch()` without causing program crashes if the
value is not a promise.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `Promise<unknown>` within conditional
> blocks.

## Behavior

`isPromise` returns `true` if the value is an instance of the `Promise` class.
In all other cases (e.g., plain objects, functions, or "thenables"), it returns `false`.

| Input                   | Output                                     |
|-------------------------|--------------------------------------------|
| `Promise.resolve()`     | `true`                                     |
| `new Promise(() => {})` | `true`                                     |
| `async () => {}`        | `false` (is the function, not the promise) |
| `{ then: () => {} }`    | `false` (not a real Promise instance)      |
| `null`                  | `false`                                    |

## Usage

```ts
import { isPromise } from "@type-check/strict";

isPromise(Promise.resolve(42)); // true
isPromise("not a promise");     // false

// TypeScript Example
const job: unknown = Promise.resolve("Success");

if (isPromise(job)) {
  // job is automatically narrowed to type 'Promise<unknown>'
  job.then(console.log);
}
```