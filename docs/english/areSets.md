# areSets

Checks if a value is a non-empty array of `Set` objects.

## Use Case

This function validates a list to ensure it consists exclusively of `Set` instances.
This is useful when working with collections of unique values, such as lists of categories for different data domains.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `Set<unknown>[]` within conditional
> blocks.

## Behavior

`areSets` returns `true` if the main value is a non-empty array and every one of its elements is an instance of `Set`.
An empty array returns `false`.

| Input                    | Output  |
|--------------------------|---------|
| `[new Set(), new Set()]` | `true`  |
| `[new Set(), []]`        | `false` |
| `[]` (empty array)       | `false` |
| `[null]`                 | `false` |

## Usage

```ts
import {areSets} from "@type-check/guards";

const collections = [new Set([1]), new Set([2])];
areSets(collections); // true

// TypeScript Example
const dataGroups: unknown[] = [new Set()];

if (areSets(dataGroups)) {
  // dataGroups is automatically narrowed to type 'Set<unknown>[]'
  dataGroups.forEach(group => console.log(group.size));
}
```