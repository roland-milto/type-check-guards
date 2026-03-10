# areFloats

## Description

`areFloats` dey check whether array wey dem give you no empty and all di elements inside na floats.

### Use case

Use `areFloats` when you receive `unknown[]` (like from JSON, query parameters, or external APIs) and you need make sure
say e be array wey no empty and every item inside na float before you run numeric logic like average, interpolation, or
statistical calculations.

> **Note for TypeScript users:**
>
> Use `areFloats` to guard `unknown[]` before you treat am as `number[]` wey get only floats; e dey return `false` for
> empty arrays and for any element wey no be float.

### Advantages

- E dey return `true` only when di input na array wey no empty and every element na float.
- E dey fail sharp: e go return `false` as soon as e see element wey no be float.
- E dey help you validate unknown input before you do calculations wey need float.

## Usage

### Syntax

Function:

- `areFloats(array)`

Parameters:

- `array`: Di array wey you wan check say e get float elements.

### Local function import

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // true
console.log(areFloats(b)); // false
console.log(areFloats(c)); // false

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areFloats(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 15:59:11 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>