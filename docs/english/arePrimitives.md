# arePrimitives

Checks if all values within an array are primitive data types.

## Use Case

This function validates a list to ensure it consists exclusively of basic data types.
This is helpful for verifying that an array is flat and does not contain complex reference types like objects or other
arrays.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, narrowing the array type to a collection of primitive values.

## Behavior

`arePrimitives` returns `true` if every element in the array is a primitive value.
If even a single element is an object, an array, or a function, the result is `false`.
An empty array returns `false`.

| Input               | Output  |
|---------------------|---------|
| `[1, "a", true]`    | `true`  |
| `[null, undefined]` | `true`  |
| `[1, { id: 1 }]`    | `false` |
| `[1, [2]]`          | `false` |
| `[]` (empty array)  | `false` |

## Usage

```ts
import {arePrimitives} from "@type-check/strict";

arePrimitives([1, "two", false]); // true
arePrimitives([1, {}]);            // false

// TypeScript Example
const data: unknown[] = ["ID-1", 100, null];

if (arePrimitives(data)) {
  // data contains only primitive values
  console.log("The array is flat and contains no objects.");
}
```