# areIndexesFound

## Description

`areIndexesFound` dey check whether value na array wey no empty and all im elements na valid indexes, e go return `true`
if dem be so and `false` if no be so.

### Use case

Validate data wey user provide or external data (e.g., parsed JSON) wey you expect say na list of indexes before you use
am to access arrays or slice arrays.

> **Note for TypeScript users:**
>
> Use `areIndexesFound` to validate unknown input before you treat im elements as array indexes; e dey return `false`
> for empty arrays and for arrays wey get non-index values.

### Advantages

- E dey return `true` only when di input na array wey get items and every element na correct index.
- E dey fail sharp: e go return `false` immediately e see element wey no be index.
- E useful as guard before you use values as array position or offset.

## Usage

### Syntax

Function:

- `areIndexesFound(array)`

Parameters:

- `array`: Di array wey you wan check say e follow index rule.

### Local function import

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // For here, dem don confirm say `a` na filled array of indexes.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areIndexesFound(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 00:44:11 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>