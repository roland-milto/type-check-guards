# areWeakSets

## Description

Checks whether an input is a non-empty array where every element is a `WeakSet`, returning `true` only in that case.

### Use case

Validate runtime input (e.g., from APIs, configuration, or user-provided data) to ensure you have a non-empty list of
`WeakSet` instances before proceeding with logic that depends on `WeakSet` behavior.

> **Note for TypeScript users:**
>
> Use `areWeakSets` to validate unknown input before treating it as `WeakSet[]`. It returns `false` for empty arrays and
> non-arrays.

### Advantages

- Ensures every element in the input array is a `WeakSet`.
- Returns `false` for empty arrays, preventing accidental “all valid” results on missing data.
- Fails safely by returning `false` when the input is not a filled array (including `null`).
- Useful as a guard before performing operations that require `WeakSet` instances.

## Usage

### Syntax

Function:

- `areWeakSets(array)`

Parameters:

- `array`: The array to be checked for `WeakSet` objects.

### Local function import

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a is a non-empty array of WeakSet instances
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areWeakSets(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>The file was generated on 30 January 2026 at 14:20:20 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>