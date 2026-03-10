# areFinite

## Description

`areFinite` dey check whether one value na non-empty array wey im elements all be finite numbers, e go return `true` if
na so, and `false` if no be so.

### Use case

Validate numeric input arrays (e.g., chart series, coordinate lists, measurement samples) before you do calculations,
make sure say result go be `true` only when all values na finite numbers.

> **Note for TypeScript users:**
>
> Use `areFinite` when you need make sure say array no empty and e get only finite numbers; e dey return `false` for
> empty arrays and for arrays wey get `NaN` or infinities.

### Advantages

- E dey return `true` only when di input na array wey no empty and every element na finite number.
- E dey reject `Infinity`, `-Infinity`, and `NaN` because e dey rely on `isFinite` checks for each element.
- E dey give simple boolean result (`true`/`false`) wey good for guards and validation flows.

## Usage

### Syntax

Function:

- `areFinite(array)`

Parameters:

- `array`: Di array wey dem wan check say all im elements na finite.

### Local function import

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // true
console.log(areFinite(b)); // false
console.log(areFinite(c)); // false

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areFinite(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 16:36:32 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>