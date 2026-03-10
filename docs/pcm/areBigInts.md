# areBigInts

## Description

`areBigInts` dey determine whether one value na non-empty array wey get only `bigint` values.

### Use case

Validate unknown input (e.g., parsed JSON-like data, API payloads, or function parameters typed as `unknown`) to make
sure say e be non-empty array of `bigint` values before you process am; e go return `true` only when all elements na
`bigint`, if no be so, `false`.

> **Note for TypeScript users:**
>
> Use `areBigInts` as runtime guard before you do `bigint`-only operations (e.g., arithmetic, comparisons) on unknown
> input.

### Advantages

- E make sure say every element na `bigint`, e go return `true` only when di whole array match.
- E dey reject non-array and empty array by design (via `isFilledArray`), so e no go mistakenly accept invalid input.
- Fast fail: e go return `false` immediately as e see any element wey no be `bigint`.

## Usage

### Syntax

Function:

- `areBigInts(array)`

Parameters:

- `array`: Di value wey you wan check.

### Local function import

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // true
console.log(areBigInts(b)); // false
console.log(areBigInts(c)); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areBigInts(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 23:26:59 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>