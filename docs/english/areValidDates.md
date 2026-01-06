# areValidDates

Checks if all values within an array are valid `Date` objects.

## Use Case

This function validates a list of values to ensure it consists exclusively of functional `Date` instances.
It is particularly useful when processing time series, schedules, or log data.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `Date[]` within conditional blocks.

## Behavior

`areValidDates` returns `true` if every element in the array is a valid `Date` object.
If even a single element is not a valid date (e.g., a string, a number, or an "Invalid Date"), the result is `false`.

| Input                                  | Output  |
|----------------------------------------|---------|
| `[new Date(), new Date("2024-01-01")]` | `true`  |
| `[new Date(), "2024-01-01"]`           | `false` |
| `[new Date(), new Date("abc")]`        | `false` |
| `[]` (empty array)                     | `false` |

## Usage

```ts
import { areValidDates } from "@type-check/strict";

const dates = [new Date(), new Date("2025-12-22")];
areValidDates(dates); // true

// TypeScript Example
const schedule: unknown[] = [new Date(), new Date()];

if (areValidDates(schedule)) {
  // schedule is automatically narrowed to type 'Date[]'
  const sorted = schedule.sort((a, b) => a.getTime() - b.getTime());
  console.log(sorted);
}
```