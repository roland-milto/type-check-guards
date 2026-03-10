# areWeakMaps

## Description

`areWeakMaps` checks whether a value is a non-empty array where every element is a `WeakMap`, returning `true` only in
that case and `false` otherwise.

### Use case

Validate runtime data (e.g., parsed JSON, plugin inputs, or loosely typed configuration) to ensure it is a non-empty
array of `WeakMap` instances before iterating and calling `WeakMap` methods; returns `false` when any element is not a
`WeakMap` or when the array is empty.

> **Note for TypeScript users:**
>
> Use `areWeakMaps` to validate unknown input before treating it as a non-empty `WeakMap[]`; it returns `false` for
> empty arrays.

### Advantages

- Ensures every element in the provided array is a `WeakMap` instance.
- Returns `false` for empty arrays, preventing accidental acceptance of “no data” as valid input.
- Useful as a guard before performing `WeakMap`-specific operations on all items.

## Usage

### Syntax

Function:

- `areWeakMaps(array)`

Parameters:

- `array`: The array to check for `WeakMap` instances.

### Local function import

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list is a non-empty array of WeakMap instances
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // not a non-empty WeakMap[]
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areWeakMaps(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>The file was generated on 30 January 2026 at 13:35:51 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>