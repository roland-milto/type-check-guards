# areWeakSets

Checks if a value is a non-empty array of `WeakSet` objects.

## Use Case

This function validates a list to ensure it consists exclusively of `WeakSet` instances.
This is useful for managing multiple independent object trackers or in complex memory management scenarios.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `WeakSet<object>[]` within
> conditional blocks.

## Behavior

`areWeakSets` returns `true` if the main value is a non-empty array and every one of its elements is an instance of
`WeakSet`.
An empty array returns `false`.

| Input                            | Output  |
|----------------------------------|---------|
| `[new WeakSet(), new WeakSet()]` | `true`  |
| `[new WeakSet(), new Set()]`     | `false` |
| `[]` (empty array)               | `false` |
| `[null]`                         | `false` |

## Usage

```ts
import {areWeakSets} from "@type-check/guards";

const trackers = [new WeakSet(), new WeakSet()];
areWeakSets(trackers); // true

// TypeScript Example
const collections: unknown[] = [new WeakSet()];

if (areWeakSets(collections)) {
  // collections is automatically narrowed to type 'WeakSet<object>[]'
  console.log(`Number of trackers: ${collections.length}`);
}
```