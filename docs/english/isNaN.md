# isNaN

Checks if a value is exactly `NaN` (Not-a-Number).

## Use Case

This function identifies invalid numerical results.

**Crucial difference from global JavaScript `isNaN()`:**
The built-in global `isNaN()` function performs type coercion, leading to confusing results (e.g., `isNaN("Hello")`
returns `true`).
This `@type-check/guards` version is **strict**: it only returns `true` if the value is actually of type `number` AND is
`NaN`.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, narrowing the type to `number` within conditional blocks.

## Behavior

| Input       | Output  | Explanation                   |
|-------------|---------|-------------------------------|
| `NaN`       | `true`  | Correct identification        |
| `0 / 0`     | `true`  | Mathematically invalid result |
| `"Text"`    | `false` | **Safe:** No type coercion    |
| `undefined` | `false` | **Safe:** No type coercion    |
| `123`       | `false` | Valid number                  |

## Usage

```ts
import {isNaN} from "@type-check/guards";

isNaN(NaN);          // true
isNaN("not a number"); // false (Global isNaN() would return true!)

// TypeScript Example
const result: unknown = Number("abc"); // results in NaN

if (isNaN(result)) {
  // result is narrowed to type 'number' here
  console.log("The calculation did not yield a valid number.");
}
```