# areSymbols

## Description

E dey check whether input na filled array wey all im elements na symbols, e go return `true` or `false`.

### Use case

Validate say configuration field (e.g., list of unique keys wey dem represent as symbols) na non-empty array wey contain
only symbols before you use am for APIs wey require `symbol[]`.

> **Note for TypeScript users:**
>
> Use `areSymbols` to validate unknown input before you treat am as `symbol[]`; e dey return `false` for non-arrays and
> empty arrays.

### Advantages

- E dey return `true` only when di input na array wey no empty and every element na symbol.
- E dey prevent false positives by reject non-arrays and empty arrays through di internal filled-array check.
- E useful as runtime type guard to validate list wey na only symbol before you process am further.

## Usage

### Syntax

Function:

- `areSymbols(array)`

Parameters:

- `array`: Di array wey dem wan check say e get symbol elements.

### Local function import

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a na array wey get only symbol for runtime
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areSymbols(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 14:23:15 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>