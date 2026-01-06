# isObject

Checks if a value is a real object.

## Use Case

This function validates whether a value is a structural object.
Unlike standard JavaScript `typeof === 'object'`, this function excludes `null`, as `null` is technically an object type
but lacks object properties. This prevents runtime errors when accessing properties.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `object` within conditional blocks.

## Behavior

`isObject` returns `true` if the value is an object (including arrays, functions, Date objects, etc.) and is not `null`.
In all other cases (primitives like strings, numbers, booleans, or `null`), it returns `false`.

| Input               | Output  |
|---------------------|---------|
| `{}`                | `true`  |
| `[]`                | `true`  |
| `new Date()`        | `true`  |
| `null`              | `false` |
| `"Object"` (String) | `false` |
| `42`                | `false` |

## Usage

```ts
import { isObject } from "@type-check/strict";

isObject({ a: 1 }); // true
isObject(null);     // false
isObject([]);       // true

// TypeScript Example
const config: unknown = { timeout: 1000 };

if (isObject(config)) {
  // config is automatically narrowed to type 'object'
  console.log(Object.keys(config));
}
```