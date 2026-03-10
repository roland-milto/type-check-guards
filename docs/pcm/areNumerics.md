# areNumerics

## Description

`areNumerics` dey check whether one value na non-empty array wey all elements inside na number.

### Use case

Use `areNumerics` to validate external or untyped data (e.g., JSON payloads, query parameters, form input) before you
calculate sum, average, or other numeric operations, make sure say di input na non-empty numeric array, and return
`false` if e no be so.

> **Note for TypeScript users:**
>
> Use `areNumerics` to guard `unknown` input before you treat am like numeric array; e dey return `false` for things wey
> no be array and for empty arrays.

### Advantages

- E dey return `true` only when di input na array wey no empty and every element inside na number.
- E dey fail sharp: e go stop to check as soon as e see element wey no be number, con return `false`.
- E dey help you validate unknown input well-well before you do any numeric operations.

## Usage

### Syntax

Function:

- `areNumerics(array)`

Parameters:

- `array`: Di array wey you wan check say all elements inside na number.

### Local function import

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // true
console.log(areNumerics(b)); // true
console.log(areNumerics(c)); // false
console.log(areNumerics(d)); // false
console.log(areNumerics(e)); // false

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areNumerics(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 16:06:48 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>