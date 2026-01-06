# isFunction

Checks if a value is a function.

## Use Case

This function ensures that a value is executable.
This is essential when working with callbacks, event handlers, or implementing plugin systems to ensure that calling the
value does not cause runtime errors.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to a generic function signature within
> conditional blocks.

## Behavior

`isFunction` returns `true` if the value is of type `function`.
This includes arrow functions, classes, and standard functions. In all other cases, it returns `false`.

| Input           | Output  |
|-----------------|---------|
| `() => {}`      | `true`  |
| `function() {}` | `true`  |
| `class A {}`    | `true`  |
| `Math.sin`      | `true`  |
| `null`          | `false` |
| `{}`            | `false` |

## Usage

```ts
import { isFunction } from "@type-check/strict";

isFunction(() => console.log("Hi")); // true
isFunction("not a function");        // false

// TypeScript Example
const callback: unknown = () => "done";

if (isFunction(callback)) {
  // callback is automatically narrowed to a function type here
  console.log(callback());
}
```