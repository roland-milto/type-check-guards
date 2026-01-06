# isFinite

Checks if a value is a finite number.

## Use Case

This function validates whether a value is of type `number` and is neither `NaN` nor positive/negative `Infinity`.
It is a safer alternative to the global `isFinite()` function because it does not perform implicit type coercion (e.g.,
strings are not converted to numbers).

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `number` within conditional blocks.

## Behavior

`isFinite` returns `true` if the value is of type `number` and is finite.
In all other cases (e.g., `NaN`, `Infinity`, strings, or `null`), it returns `false`.

| Input         | Output  |
|---------------|---------|
| `42`          | `true`  |
| `3.14`        | `true`  |
| `-10`         | `true`  |
| `NaN`         | `false` |
| `Infinity`    | `false` |
| `"-Infinity"` | `false` |
| `"42"`        | `false` |
| `null`        | `false` |

## Usage

```ts
import { isFinite } from "@type-check/strict";

isFinite(100);      // true
isFinite(Infinity); // false
isFinite("100");    // false

// TypeScript Example
const score: unknown = 95.5;

if (isFinite(score)) {
  // score is automatically narrowed to type 'number'
  console.log(`Score: ${score.toFixed(1)}`);
}
```