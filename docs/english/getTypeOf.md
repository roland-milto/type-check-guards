# getTypeOf

Determines the precise data type of a value as a *lowercase* string.

## Use Case

In JavaScript, the standard `typeof` operator often yields imprecise results (e.g., `typeof null` is `"object"`,
`typeof []` is also `"object"`).
`getTypeOf` resolves these issues and uniquely identifies complex types like `array`, `date`, `regexp`, or `null`.
Additionally, it distinguishes between valid numbers and `NaN`.

> **Important Note:**
> All return values of this function are strictly **lowercase** (e.g., `"nan"` instead of `"NaN"`) to ensure consistent
> data processing.

## Behavior

`getTypeOf` returns a string representing the exact data type.

| Input              | Output (DataTypes) |
|--------------------|--------------------|
| `"Text"`           | `"string"`         |
| `42`               | `"number"`         |
| `NaN`              | `"nan"`            |
| `null`             | `"null"`           |
| `[]`               | `"array"`          |
| `new Date()`       | `"date"`           |
| `/abc/`            | `"regexp"`         |
| `new Promise(...)` | `"promise"`        |

## Usage

```ts
import {getTypeOf} from "@type-check/guards";

getTypeOf("Hello");      // "string"
getTypeOf(NaN);          // "nan"
getTypeOf(null);         // "null"
getTypeOf([1, 2]);       // "array"
getTypeOf(new Date());   // "date"

// TypeScript Example
const data: unknown = NaN;
const type = getTypeOf(data);

if (type === "nan") {
  console.log("The value is not a valid number.");
}
```