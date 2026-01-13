# areMaps

Checks if a value is a non-empty array of `Map` objects.

## Use Case

This function validates a list to ensure it consists exclusively of `Map` instances.
This is useful when processing collections of complex data structures, commonly found in caching systems or
configuration layers.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `Map<unknown, unknown>[]` within
> conditional blocks.

## Behavior

`areMaps` returns `true` if the main value is a non-empty array and every one of its elements is an instance of `Map`.
An empty array returns `false`.

| Input                    | Output  |
|--------------------------|---------|
| `[new Map(), new Map()]` | `true`  |
| `[new Map(), {}]`        | `false` |
| `[]` (empty array)       | `false` |
| `[null]`                 | `false` |

## Usage

```ts
import {areMaps} from "@type-check/guards";

const collection = [new Map(), new Map()];
areMaps(collection); // true

// TypeScript Example
const dataStacks: unknown[] = [new Map()];

if (areMaps(dataStacks)) {
  // dataStacks is automatically narrowed to type 'Map<unknown, unknown>[]'
  dataStacks.forEach(stack => console.log(stack.size));
}
```