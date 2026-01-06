# isOfType

Checks if a value matches a specific data type.

## Use Case

This function allows for precise type checking against a predefined list of `DataTypes`.
It is more robust than the standard `typeof` operator as it correctly identifies complex types like `array`, `date`, or
`regexp` while maintaining high performance for primitive types.

## Behavior

`isOfType` returns `true` if the type of the value exactly matches the provided type parameter.
For complex types, an internal utility is used for exact determination.

| Input        | Type Parameter | Output                |
|--------------|----------------|-----------------------|
| `"Hello"`    | `"string"`     | `true`                |
| `[]`         | `"array"`      | `true`                |
| `null`       | `"null"`       | `true`                |
| `42`         | `"string"`     | `false`               |
| `new Date()` | `"object"`     | `false` (is `"date"`) |

## Usage

```ts
import {isOfType} from "@type-check/guards";

isOfType("Roland Milto", "string"); // true
isOfType([], "array");              // true
isOfType(null, "null");             // true

// TypeScript Example
const input: unknown = [1, 2, 3];

if (isOfType(input, "array")) {
  // input is treated as the matching type here
  console.log(`The array has ${input.length} elements.`);
}
```