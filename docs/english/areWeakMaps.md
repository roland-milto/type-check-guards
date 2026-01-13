# areWeakMaps

Checks if a value is a non-empty array of `WeakMap` objects.

## Use Case

This function validates a list to ensure it consists exclusively of `WeakMap` instances.
This is useful for managing metadata stores across different modules or in advanced architectural scenarios using weak
references to prevent memory leaks.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `WeakMap<object, unknown>[]` within
> conditional blocks.

## Behavior

`areWeakMaps` returns `true` if the main value is a non-empty array and every one of its elements is an instance of
`WeakMap`.
An empty array returns `false`.

| Input                            | Output  |
|----------------------------------|---------|
| `[new WeakMap(), new WeakMap()]` | `true`  |
| `[new WeakMap(), new Map()]`     | `false` |
| `[]` (empty array)               | `false` |
| `[null]`                         | `false` |

## Usage

```ts
import {areWeakMaps} from "@type-check/guards";

const stores = [new WeakMap(), new WeakMap()];
areWeakMaps(stores); // true

// TypeScript Example
const registries: unknown[] = [new WeakMap()];

if (areWeakMaps(registries)) {
  // registries is automatically narrowed to type 'WeakMap<object, unknown>[]'
  console.log(`Number of WeakMaps: ${registries.length}`);
}
```