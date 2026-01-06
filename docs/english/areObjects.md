# areObjects

Checks if all values within an array are real objects.

## Use Case

This function validates a list to ensure it consists exclusively of objects.
This is particularly useful when processing datasets from APIs where you need to ensure every element contains
structural data and is not `null` or a primitive.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `object[]` within conditional
> blocks.

## Behavior

`areObjects` returns `true` if every element in the array is an object and is not `null`.
If even a single element is `null` or a primitive (string, number, boolean), the result is `false`.

| Input                   | Output  |
|-------------------------|---------|
| `[{}, { a: 1 }]`        | `true`  |
| `[[], new Date()]`      | `true`  |
| `[{}, null]`            | `false` |
| `[{}, "not-an-object"]` | `false` |
| `[]` (empty array)      | `false` |

## Usage

```ts
import { areObjects } from "@type-check/strict";

areObjects([{}, { id: 1 }]); // true
areObjects([{}, null]);      // false

// TypeScript Example
const dataSet: unknown[] = [{ x: 10 }, { x: 20 }];

if (areObjects(dataSet)) {
  // dataSet is automatically narrowed to type 'object[]'
  const totalKeys = dataSet.reduce((acc, obj) => acc + Object.keys(obj).length, 0);
  console.log(`Total number of keys: ${totalKeys}`);
}
```