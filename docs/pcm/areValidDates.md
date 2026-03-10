# areValidDates

## Description

E dey determine whether array no empty and e consist entirely of valid `Date` objects.

### Use case

Use `areValidDates` to validate arrays wey user provide or API provide before you do date-based operations (sorting,
range checks, formatting), to ensure say all entries be real, valid `Date` objects and say di list no empty.

> **Note for TypeScript users:**
>
> `areValidDates` go return `false` for empty array; make sure say di array suppose no empty before you rely on am as
> validation step.

### Advantages

- E go return `true` only when every element be valid `Date` instance (no invalid dates like `new Date('invalid')`).
- E dey reject empty input by returning `false`, so you go only accept meaningful, non-empty date lists.
- E give simple boolean guard-style check wey easy to join with other validations.

## Usage

### Syntax

Function:

- `areValidDates(array)`

Parameters:

- `array`: Di array wey you wan check, e fit contain `Date` objects.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areValidDates(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 14:33:22 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>