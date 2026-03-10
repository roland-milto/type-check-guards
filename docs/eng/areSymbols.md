# areSymbols

## Description

Checks whether an input is a filled array whose elements are all symbols, returning `true` or `false`.

### Use case

Validate that a configuration field (e.g., a list of unique keys represented as symbols) is a non-empty array containing
only symbols before using it in APIs that require `symbol[]`.

> **Note for TypeScript users:**
>
> Use `areSymbols` to validate unknown input before treating it as `symbol[]`; it returns `false` for non-arrays and
> empty arrays.

### Advantages

- Returns `true` only when the input is a non-empty array and every element is a symbol.
- Prevents false positives by rejecting non-arrays and empty arrays via the internal filled-array check.
- Useful as a runtime type guard for validating symbol-only lists before further processing.

## Usage

### Syntax

Function:

- `areSymbols(array)`

Parameters:

- `array`: The array to be checked for symbol elements.

### Local function import

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a is a symbol-only array at runtime
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areSymbols(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>The file was generated on 30 January 2026 at 14:20:30 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>