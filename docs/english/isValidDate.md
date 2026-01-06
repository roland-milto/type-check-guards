# isValidDate

Checks if a value is a valid `Date` object.

## Use Case

In JavaScript, an object can be an instance of `Date` but still represent an invalid point in time (known as an "Invalid
Date", e.g., via `new Date("abc")`).
This function ensures that the object exists **and** represents an actual, usable date.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `Date` within conditional blocks.

## Behavior## Behavior

`isValidDate` returns `true` if the value is an instance of `Date` and possesses a valid timestamp.
In all other cases (invalid dates, strings, numbers, or `null`), it returns `false`.

| Input                    | Output  |
|--------------------------|---------|
| `new Date()`             | `true`  |
| `new Date("2025-12-22")` | `true`  |
| `new Date("invalid")`    | `false` |
| `"2025-12-22"` (String)  | `false` |
| `Date.now()` (Number)    | `false` |
| `null`                   | `false` |

## Usage

```ts
import {isValidDate} from "@type-check/guards";

isValidDate(new Date());             // true
isValidDate(new Date("invalid"));    // false
isValidDate("2025-12-22");           // false (must be a Date object)

// TypeScript Example
const timestamp: unknown = new Date();

if (isValidDate(timestamp)) {
  // timestamp is automatically narrowed to type 'Date'
  console.log(timestamp.toISOString());
}
``````