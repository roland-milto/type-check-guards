# isUndefined

Checks if a value is `undefined`.

## Use Case

This function ensures that a value is explicitly of type `undefined`.
It is useful for validating optional parameters or ensuring that a variable has not yet been initialized.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `undefined` within conditional blocks.

## Behavior

`isUndefined` returns `true` if the value is of type `undefined`.
In all other cases (e.g., `null`, numbers, strings, or booleans), it returns `false`.

| Input       | Output  |
|-------------|---------|
| `undefined` | `true`  |
| `void 0`    | `true`  |
| `null`      | `false` |
| `0`         | `false` |
| `false`     | `false` |
| `""`        | `false` |

## Usage

```ts
import {isUndefined} from "@type-check/strict";

let x: unknown;
isUndefined(x);         // true
isUndefined(null);      // false

// TypeScript Example
const value: string | undefined = undefined;

if (isUndefined(value)) {
  // value is automatically narrowed to type 'undefined'
  console.log("Value is not set");
}
```