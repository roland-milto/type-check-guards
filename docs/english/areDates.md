# areDates

Checks if all values within an array are `Date` objects.

## Use Case

This function validates a list to ensure it consists exclusively of `Date` instances.
It is useful when processing time series or schedules to verify that every element is a valid date object.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `Date[]` within conditional blocks.

## Behavior

`areDates` returns `true` if every element in the array is an instance of `Date`.
If even a single element is a string, a number, or any other type, the result is `false`.
An empty array also returns `false`.

| Input                        | Output  |
|------------------------------|---------|
| `[new Date(), new Date()]`   | `true`  |
| `[new Date(), "2026-01-01"]` | `false` |
| `[new Date(), 1736155555]`   | `false` |
| `[]` (empty array)           | `false` |
| `[null]`                     | `false` |

## Usage

```ts
import {areDates} from "@type-check/guards";

areDates([new Date(), new Date()]); // true
areDates([new Date(), "2026"]);     // false

// TypeScript Example
const events: unknown[] = [new Date(), new Date()];

if (areDates(events)) {
  // events is automatically narrowed to type 'Date[]'
  const years = events.map(d => d.getFullYear());
  console.log(years);
}
```