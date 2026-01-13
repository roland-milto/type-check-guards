# isWeakSet

Checks if a value is an instance of `WeakSet`.

## Use Case

This function validates whether a value is a `WeakSet` object.
Unlike regular `Sets`, a `WeakSet` holds weak references to objects.
This means that objects within the `WeakSet` can be garbage-collected if no other references to them exist.
This check ensures that methods like `.add()` or `.has()` can be called safely.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `WeakSet<object>` within conditional
> blocks.

## Behavior

`isWeakSet` returns `true` if the value is an instance of `WeakSet`.
Other collections (like `Set` or `Map`) or plain objects return `false`.

| Input           | Output  |
|-----------------|---------|
| `new WeakSet()` | `true`  |
| `new Set()`     | `false` |
| `{}`            | `false` |
| `null`          | `false` |

## Usage

```ts
import {isWeakSet} from "@type-check/guards";

isWeakSet(new WeakSet()); // true
isWeakSet(new Set());     // false

// TypeScript Example
const tracking: unknown = new WeakSet();

if (isWeakSet(tracking)) {
  // tracking is automatically narrowed to type 'WeakSet<object>' here
  const obj = {id: 1};
  tracking.add(obj);
  console.log(tracking.has(obj));
}
```