# isNull

Checks if a value is strictly `null`.

## Use Case

In JavaScript, `null` represents the intentional absence of an object.
Since `typeof null` incorrectly returns `"object"`, this function provides a safe and explicit check to distinguish
`null` from actual objects or `undefined`.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `null` within conditional blocks.

## Behavior

`isNull` returns `true` if the value is strictly equal to `null`.
In all other cases (including `undefined`, `0`, or `false`), it returns `false`.

| Input       | Output  |
|-------------|---------|
| `null`      | `true`  |
| `undefined` | `false` |
| `0`         | `false` |
| `""`        | `false` |
| `{}`        | `false` |

## Usage

```ts
import { isNull } from "@type-check/strict";

isNull(null);      // true
isNull(undefined); // false

// TypeScript Example
const data: string | null = null;

if (isNull(data)) {
  // data is automatically narrowed to null here
  console.log("Data is explicitly empty.");
}
```