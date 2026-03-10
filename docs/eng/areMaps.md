# areMaps

## Description

`areMaps` determines whether a given array is non-empty and all of its elements are `Map` instances.

### Use case

Validate unknown input (e.g., from JSON parsing, external APIs, or dynamic sources) before treating it as a non-empty
list of `Map` objects.

> **Note for TypeScript users:**
>
> Returns `false` for an empty array; it only returns `true` when the array is filled and every element is a `Map`.

### Advantages

- Ensures every element is a `Map` instance, returning `true` only when the entire array passes the check.
- Rejects empty arrays by design, preventing accidental acceptance of “no data” as valid input.
- Useful as a guard before performing `Map`-specific operations (e.g., `.get()`, `.set()`, iteration) across a
  collection.

## Usage

### Syntax

Function:

- `areMaps(array)`

Parameters:

- `array`: The array to check.

### Local function import

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items is guaranteed to be a non-empty array of Map instances at runtime
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false for: empty arrays, or arrays containing any non-Map value
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areMaps(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>The file was generated on 31 January 2026 at 16:11:21 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>