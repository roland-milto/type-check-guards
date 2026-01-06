# areStrings

Checks if all values within an array are of type `string`.

## Use Case

This function validates a list to ensure it consists exclusively of character strings.
It is useful for checking lists of names, tags, or configuration arrays.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `string[]` within conditional
> blocks.

## Behavior

`areStrings` returns `true` if every element in the array is of type `string`.
If even a single element is not a string (e.g., a number, an object, or `null`), the result is `false`.

| Input              | Output  |
|--------------------|---------|
| `["a", "b", "c"]`  | `true`  |
| `["a", 1, "c"]`    | `false` |
| `[]` (empty array) | `true`  |

## Usage

```ts
import { areStrings } from "@type-check/strict";

areStrings(["Roland", "Milto"]);  // true
areStrings(["Code", 404]);        // false

// TypeScript Example
const tags: unknown[] = ["ts", "js", "web"];

if (areStrings(tags)) {
  // tags is automatically narrowed to type 'string[]'
  const upperTags = tags.map(t => t.toUpperCase());
  console.log(upperTags);
}
```