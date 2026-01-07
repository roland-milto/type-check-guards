# isFalse

Checks if a value is strictly equal to `false`.

## Use Case

This function validates whether a value is exactly the boolean value `false`.
It prevents misinterpretation of "falsy" values like `0`, `null`, `undefined`, or empty strings, which are often
erroneously treated as logical false in JavaScript.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to the literal value `false`.

## Behavior

`isFalse` returns `true` only if the value is of type `boolean` and is equal to `false`.
All other values (including `0`, `null`, or `true`) return `false`.

| Input       | Output  |
|-------------|---------|
| `false`     | `true`  |
| `true`      | `false` |
| `0`         | `false` |
| `""`        | `false` |
| `null`      | `false` |
| `undefined` | `false` |

## Usage

```ts
import {isFalse} from "@type-check/guards";

isFalse(false); // true
isFalse(0);     // false
isFalse(null);  // false

// TypeScript Example
const isError: unknown = false;

if (isFalse(isError)) {
  // isError is automatically narrowed to type 'false' here
  console.log("No error detected.");
}
```