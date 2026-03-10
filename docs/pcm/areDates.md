# areDates

## Description

`areDates` dey determine whether one given array full and e get only `Date` objects, e go return `true` only when all
elements na valid dates.

### Use case

Use `areDates` to validate unknown input (like parsed JSON, form data, API payloads) before you run date-specific logic
like sort by time, format am, or calculate ranges.

> **Note for TypeScript users:**
>
> E dey return `true` only for arrays wey no empty and wey every element na `Date`; empty arrays go give `false`.

### Advantages

- E make sure say array no empty before e validate wetin dey inside, so e no go return `true` for empty input.
- E dey check say every element na `Date` instance, e go return `false` sharp-sharp once e see first one wey no match.
- E dey useful as guard-style check before you do date-specific operations for array items.

## Usage

### Syntax

Function:

- `areDates(array)`

Parameters:

- `array`: Di array wey dem wan check for `Date` objects.

### Local function import

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // true
console.log(areDates(b)); // false
console.log(areDates(c)); // false

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areDates(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areDates](../_analysis/areDates.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 15:31:51 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>