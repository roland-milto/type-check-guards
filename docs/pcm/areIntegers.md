# areIntegers

## Description

`areIntegers` dey determine whether all elements inside one given array be integers, e dey return `true` if dem be so
and `false` if no be so.

### Use case

Use `areIntegers` to validate data wey user provide or external data (e.g., query parameters, JSON payloads, CSV rows)
when your logic need filled list of integer values like IDs, counters, pagination offsets, or array indices.

> **Note for TypeScript users:**
>
> Use `areIntegers` as runtime guard for `unknown[]` inputs before you treat dem as `number[]` wey get only integers. If
> e return `false`, di input either no be filled array or e get at least one value wey no be integer.

### Advantages

- E dey return `true` only when every element be integer; if no be so, e go return `false`.
- E dey help you validate input wey you no sure about before you do integer-only operations (e.g., indexing, counts,
  IDs).
- E dey fail fast: e go stop to check immediately once e see element wey no be integer.

## Usage

### Syntax

Function:

- `areIntegers(array)`

Parameters:

- `array`: Di array wey you wan check if e get integer elements.

### Local function import

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // true
console.log(areIntegers(b)); // true
console.log(areIntegers(c)); // false

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areIntegers(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 00:59:55 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>