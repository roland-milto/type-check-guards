# areTrue

## Description

E dey check whether one non-empty array get only di boolean `true` values.

### Use case

Use `areTrue` to validate say one set of preconditions or feature flags all dey enabled (all values na `true`) before
you continue, while you dey treat empty or malformed inputs as not satisfied (`false`).

> **Note for TypeScript users:**
>
> `areTrue` go return `false` for empty array and for arrays wey get any value wey no be strictly `true`.

### Advantages

- E go return `true` only when every element na strictly `true` and di array no empty.
- E dey fail fast: e go return `false` as soon as e see value wey no be `true`.
- E dey reject invalid inputs (no be arrays or empty arrays) by returning `false`.

## Usage

### Syntax

Function:

- `areTrue(array)`

Parameters:

- `array`: Di array wey you wan check say all values na `true`.

### Local function import

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areTrue(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 13:52:20 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>