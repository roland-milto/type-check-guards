# isPlainObject

Checks if a value is a plain object.

## Use Case

A "plain object" is an object created directly via `{}` or `new Object()`.
This function distinguishes such objects from specialized object types like arrays, Date objects, or class instances.
This is particularly important when working with configuration files or JSON data.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `Record<string, unknown>` within
> conditional blocks.

## Behavior

`isPlainObject` returns `true` if the internal `[[Class]]` tag of the value is `[object Object]`.

| Input        | Output  |
|--------------|---------|
| `{}`         | `true`  |
| `{ a: 1 }`   | `true`  |
| `[]` (Array) | `false` |
| `new Date()` | `false` |
| `null`       | `false` |
| `Math`       | `false` |

## Usage

```ts
import { isPlainObject } from "@type-check/strict";

isPlainObject({ name: "WebStorm" }); // true
isPlainObject([1, 2, 3]);            // false

// TypeScript Example
const config: unknown = { mode: "dark" };

if (isPlainObject(config)) {
  // config is automatically narrowed to type 'Record<string, unknown>'
  console.log(config["mode"]);
}
```