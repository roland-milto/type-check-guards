# isSet

Checks if a value is an instance of `Set`.

## Use Case

This function validates whether a value is a `Set` object.
Sets are collections of values where each element can occur only once.
This check ensures that methods like `.add()`, `.has()`, or the `.size` property can be used safely.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `Set<unknown>` within conditional blocks.

## Behavior

`isSet` returns `true` if the value is an instance of `Set`.
Other collections (like `Map`) or plain objects return `false`.

| Input                | Output  |
|----------------------|---------|
| `new Set()`          | `true`  |
| `new Set([1, 2, 3])` | `true`  |
| `new Map()`          | `false` |
| `[]` (Array)         | `false` |
| `null`               | `false` |

## Usage

```ts
import {isSet} from "@type-check/guards";

isSet(new Set()); // true
isSet([]);        // false

// TypeScript Example
const tags: unknown = new Set(["typescript", "guards"]);

if (isSet(tags)) {
  // tags is automatically narrowed to type 'Set<unknown>' here
  console.log(`Tag count: ${tags.size}`);
}
```