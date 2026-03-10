# areDecimals

## Description

E dey check whether all elements for array na decimal numbers and di array get something inside, e go return `true` or
`false`.

### Use case

Validate list wey user provide (e.g., CSV columns or form inputs) make you sure say di array no empty and every entry na
decimal value before parsing or calculations.

> **Note for TypeScript users:**
>
> Use `areDecimals` when you need quick boolean check say one `unknown[]` no empty and every element na decimal
> representation.

### Advantages

- E dey make sure say di input na array wey don get something inside before e validate di items, so e no go mistakenly
  accept empty list.
- E dey validate every element with `isDecimal`, so if values mix or no correct, e go return `false` sharp sharp.
- E dey give simple boolean result (`true`/`false`) wey good for guards and early-return validation flow.

## Usage

### Syntax

Function:

- `areDecimals(array)`

Parameters:

- `array`: Di array wey dem wan check.

### Local function import

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // true
console.log(areDecimals(b)); // false
console.log(areDecimals(c)); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areDecimals(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 15:58:38 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>