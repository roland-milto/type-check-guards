# areSets

## Description

Checks whether a given non-empty array contains only `Set` instances, returning `true` if it does and `false` otherwise.

### Use case

Validate that a value (e.g., from user input, JSON parsing, or external APIs) is a non-empty array of `Set` objects
before processing each set.

> **Note for TypeScript users:**
>
> Use `areSets` to validate unknown input before iterating and calling `Set` APIs (e.g., `.size`, `.has`, `.add`) on
> each element.

### Advantages

- Returns `true` only when the input is a non-empty array and every element is a `Set` instance.
- Prevents false positives for empty arrays by returning `false` when the array has no elements.
- Useful as a runtime guard before performing `Set`-specific operations on each element.

## Usage

### Syntax

Function:

- `areSets(array)`

Parameters:

- `array`: The array to be checked for `Set` instances.

### Local function import

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a is an array of Set instances at runtime
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areSets(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areSets](../_analysis/areSets.md)

<br>

---

<small>The file was generated on 30 January 2026 at 23:12:13 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>