# isMap

Checks if a value is an instance of `Map`.

## Use Case

This function validates whether a value is a `Map` object.
Maps are specialized key-value stores that, unlike plain objects, allow any data type as keys and maintain insertion
order.
This check ensures that methods like `.set()`, `.get()`, or `.has()` can be called safely.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `Map<unknown, unknown>` within conditional
> blocks.

## Behavior

`isMap` returns `true` if the value is an instance of `Map`.
Other collections (like `Set`) or plain objects return `false`.

| Input                 | Output  |
|-----------------------|---------|
| `new Map()`           | `true`  |
| `new Map([[1, "a"]])` | `true`  |
| `new Set()`           | `false` |
| `{}`                  | `false` |
| `null`                | `false` |

## Usage

```ts
import {isMap} from "@type-check/guards";

isMap(new Map()); // true
isMap({});        // false

// TypeScript Example
const registry: unknown = new Map();

if (isMap(registry)) {
  // registry is automatically narrowed to type 'Map' here
  registry.set("id", 123);
  console.log(registry.get("id"));
}
```