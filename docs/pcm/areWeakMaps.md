# areWeakMaps

## Description

`areWeakMaps` dey check whether one value na non-empty array wey every element inside am na `WeakMap`, e go return
`true` only for dat case and `false` for any other case.

### Use case

Validate runtime data (e.g., parsed JSON, plugin inputs, or loosely typed configuration) to make sure say e be non-empty
array of `WeakMap` instances before you iterate and call `WeakMap` methods; e dey return `false` when any element no be
`WeakMap` or when di array empty.

> **Note for TypeScript users:**
>
> Use `areWeakMaps` to validate unknown input before you treat am as non-empty `WeakMap[]`; e dey return `false` for
> empty arrays.

### Advantages

- E make sure say every element wey dey inside di array wey you provide na `WeakMap` instance.
- E dey return `false` for empty array, so e no go mistakenly accept “no data” as correct input.
- E dey useful as guard before you do `WeakMap`-specific operations for all items.

## Usage

### Syntax

Function:

- `areWeakMaps(array)`

Parameters:

- `array`: Di array wey you wan check if e get `WeakMap` instances.

### Local function import

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list na array wey no empty, e get WeakMap instances
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // e no be WeakMap[] wey no empty
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areWeakMaps(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 13:38:59 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>