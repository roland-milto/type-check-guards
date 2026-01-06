# isNullOrUndefined

Checks if a value is either `null` or `undefined`.

## Use Case

This function provides a convenient way to check for the absence of a value.
In JavaScript, `null` (explicit emptiness) and `undefined` (uninitialized) are two distinct types.
This function combines both cases, which is often required when validating optional data or API responses.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `null | undefined` within conditional
> blocks.

## Behavior

`isNullOrUndefined` returns `true` if the value is exactly `null` or `undefined`.
For all other values (including "falsy" values like `0`, `false`, or `""`), it returns `false`.

| Input       | Output  |
|-------------|---------|
| `null`      | `true`  |
| `undefined` | `true`  |
| `0`         | `false` |
| `""`        | `false` |
| `false`     | `false` |
| `{}`        | `false` |

## Usage

```ts
import {isNullOrUndefined} from "@type-check/guards";

isNullOrUndefined(null);      // true
isNullOrUndefined(undefined); // true
isNullOrUndefined(0);         // false

// TypeScript Example
const value: string | null | undefined = null;

if (isNullOrUndefined(value)) {
  // value is automatically narrowed to type 'null | undefined'
  console.log("No valid value present.");
}
```