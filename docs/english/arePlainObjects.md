# arePlainObjects

Checks if all values within an array are plain objects.

## Use Case

This function validates a list to ensure it consists exclusively of simple key-value structures.
It is often used to ensure that asynchronous API responses or configuration lists do not contain unexpected data types
like arrays or class instances.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `Record<string, unknown>[]` within
> conditional blocks.

## Behavior

`arePlainObjects` returns `true` if every element in the array is a plain object.
If even a single element is not a plain object (e.g., an array, `null`, or a primitive), the result is `false`.

| Input              | Output  |
|--------------------|---------|
| `[{}, { a: 1 }]`   | `true`  |
| `[{}, []]`         | `false` |
| `[{}, null]`       | `false` |
| `[]` (empty array) | `false` |

## Usage

```ts
import { arePlainObjects } from "@type-check/strict";

arePlainObjects([{ x: 1 }, { y: 2 }]); // true
arePlainObjects([{ x: 1 }, [1, 2]]);    // false

// TypeScript Example
const data: unknown[] = [{ id: 1 }, { id: 2 }];

if (arePlainObjects(data)) {
  // data is automatically narrowed to type 'Record<string, unknown>[]'
  data.forEach(item => console.log(item.id));
}
```