# isDate

Checks if a value is an instance of `Date`.

## Use Case

This function validates whether a value is of type `Date`.
This is useful to ensure that an object possesses date-specific methods like `.getTime()`, `.toISOString()`, or
`.getFullYear()` before calling them.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `Date` within conditional blocks.

## Behavior

`isDate` returns `true` if the value is an instance of the `Date` class.
In all other cases (e.g., timestamps as numbers, date strings, or `null`), it returns `false`.

> **Note:**
> Even an "Invalid Date" (e.g., `new Date("abc")`) returns `true` because it is technically a `Date` instance.
> Use `isValideDate` to check for invalid dates.

| Input                    | Output  |
|--------------------------|---------|
| `new Date()`             | `true`  |
| `new Date("2026-01-01")` | `true`  |
| `new Date("invalid")`    | `true`  |
| `"2026-01-01"` (String)  | `false` |
| `Date.now()` (Number)    | `false` |
| `null`                   | `false` |

## Usage

```ts
import { isDate } from "@type-check/strict";

isDate(new Date());    // true
isDate("2026-01-01");  // false

// TypeScript Example
const timestamp: unknown = new Date();

if (isDate(timestamp)) {
  // timestamp is automatically narrowed to type 'Date'
  console.log(timestamp.getFullYear());
}
```