# areValidDates

## Description

Determines whether an array is non-empty and consists entirely of valid `Date` objects.

### Use case

Use `areValidDates` to validate user-provided or API-provided arrays before performing date-based operations (sorting,
range checks, formatting), ensuring all entries are real, valid `Date` objects and that the list is not empty.

> **Note for TypeScript users:**
>
> `areValidDates` returns `false` for an empty array; ensure the array is intended to be non-empty before relying on it
> as a validation step.

### Advantages

- Returns `true` only when every element is a valid `Date` instance (no invalid dates like `new Date('invalid')`).
- Rejects empty input by returning `false`, ensuring you only accept meaningful, non-empty date lists.
- Provides a simple boolean guard-style check that is easy to compose with other validations.

## Usage

### Syntax

Function:

- `areValidDates(array)`

Parameters:

- `array`: The array to check, potentially containing `Date` objects.

### Local function import

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // true
console.log(areValidDates(b)); // false
console.log(areValidDates(c)); // false
console.log(areValidDates(d)); // false

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areValidDates(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>The file was generated on 30 January 2026 at 16:50:10 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>