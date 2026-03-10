# areIndexesFound

## Description

`areIndexesFound` checks whether a value is a non-empty array whose elements are all valid indexes, returning `true` if
they are and `false` otherwise.

### Use case

Validate user-provided or external data (e.g., parsed JSON) that is expected to be a list of indexes before using it to
access or slice arrays.

> **Note for TypeScript users:**
>
> Use `areIndexesFound` to validate unknown input before treating its elements as array indexes; it returns `false` for
> empty arrays and for arrays containing non-index values.

### Advantages

- It returns `true` only when the input is a filled array and every element is a valid index.
- Fails fast: returns `false` as soon as a non-index element is encountered.
- Useful as a guard before using values as array positions or offsets.

## Usage

### Syntax

Function:

- `areIndexesFound(array)`

Parameters:

- `array`: The array to be checked for index compliance.

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
  // Here, `a` is confirmed to be a filled array of indexes.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areIndexesFound(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>The file was generated on 31 January 2026 at 01:03:37 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>