# isArray

Checks if a value is an array.

## Use Case

This function ensures that a value is a list of elements (Array).
This is essential for ensuring that array methods like `.map()`, `.filter()`, or `.forEach()` can be called safely
without causing runtime errors.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `unknown[]` within conditional blocks.

## Behavior

`isArray` returns `true` if the value is an array.
In all other cases (e.g., objects, strings, `null`, or `undefined`), it returns `false`.

| Input       | Output  |
|-------------|---------|
| `[]`        | `true`  |
| `[1, 2, 3]` | `true`  |
| `{}`        | `false` |
| `"Array"`   | `false` |
| `null`      | `false` |

## Usage

```ts
import {isArray} from "@type-check/guards";

isArray([1, 2, 3]); // true
isArray({});        // false

// TypeScript Example
const data: unknown = ["Apple", "Banana"];

if (isArray(data)) {
  // data is automatically narrowed to type 'unknown[]'
  console.log(`Element count: ${data.length}`);
}
```