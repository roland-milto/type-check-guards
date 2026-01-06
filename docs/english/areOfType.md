# areOfType

Checks if all values within an array match a specific data type.

## Use Case

This function validates a list to ensure every single element matches the specified data type.
It is ideal for checking homogeneous collections, such as arrays that should only contain Date objects, regular
expressions, or specific objects.

## Behavior

`areOfType` returns `true` if every element in the array matches the target type.
If even a single element does not match the type, or if the first parameter is not an array, the result is `false`.

| Input              | Type Parameter | Output  |
|--------------------|----------------|---------|
| `["a", "b", "c"]`  | `"string"`     | `true`  |
| `[1, 2, "3"]`      | `"number"`     | `false` |
| `[new Date()]`     | `"date"`       | `true`  |
| `[]` (empty array) | `"string"`     | `false` |

## Usage

```ts
import { areOfType } from "@type-check/strict";

areOfType(["ts", "js"], "string"); // true
areOfType([1, "2"], "number");     // false

// TypeScript Example
const rawData: unknown[] = [new RegExp("abc"), /123/];

if (areOfType(rawData, "regexp")) {
  // All elements match the 'regexp' type
  const allTest = rawData.every(re => re.test("abc123"));
  console.log(`Validation: ${allTest}`);
}
```