# areMaps

## Description

`areMaps` dey determine whether one given array no empty and all im elements na `Map` instances.

### Use case

Validate unknown input (e.g., from JSON parsing, external APIs, or dynamic sources) before you treat am as non-empty
list of `Map` objects.

> **Note for TypeScript users:**
>
> E dey return `false` for empty array; e go only return `true` when di array full and every element na `Map`.

### Advantages

- E make sure say every element na `Map` instance, e go return `true` only when di whole array pass di check.
- E dey reject empty arrays by design, so e no go allow mistake wey go accept “no data” as valid input.
- E useful as guard before you do `Map`-specific operations (e.g., `.get()`, `.set()`, iteration) across one collection.

## Usage

### Syntax

Function:

- `areMaps(array)`

Parameters:

- `array`: Di array wey you wan check.

### Local function import

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items don sure say na array wey no empty, and e get Map instances for runtime
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // e go be false for: empty arrays, or arrays wey get any value wey no be Map
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areMaps(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 16:14:03 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>