# isWeakMap

Checks if a value is an instance of `WeakMap`.

## Use Case

This function validates whether a value is a `WeakMap` object.
Unlike regular `Maps`, the keys of a `WeakMap` must be objects and are held as weak references.
This allows the garbage collector to remove objects when they are no longer in use elsewhere.
This check ensures that methods like `.set()`, `.get()`, or `.has()` can be called safely.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `WeakMap<object, unknown>` within
> conditional blocks.

## Behavior

`isWeakMap` returns `true` if the value is an instance of `WeakMap`. Other collections (like `Map` or `WeakSet`) or
plain objects return `false`.

| Input           | Output  |
|-----------------|---------|
| `new WeakMap()` | `true`  |
| `new Map()`     | `false` |
| `{}`            | `false` |
| `null`          | `false` |

## Usage

```ts
import {isWeakMap} from "@type-check/guards";

isWeakMap(new WeakMap()); // true
isWeakMap(new Map());     // false

// TypeScript Example
const cache: unknown = new WeakMap();

if (isWeakMap(cache)) {
  // cache is automatically narrowed to type 'WeakMap<object, unknown>' here
  const meta = {version: 1};
  cache.set(meta, "active");
  console.log(cache.get(meta));
}
```