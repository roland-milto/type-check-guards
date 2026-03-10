# areObjects

## Description

`areObjects` dey check whether array wey dem provide (wey get items) contain only objects.

### Use case

Use `areObjects` when you receive unknown array (e.g., from JSON parsing or external APIs) and you need make sure say e
no empty and say every element na object before you iterate and access object properties.

> **Note for TypeScript users:**
>
> Use `areObjects` to validate `unknown[]` before you treat items like objects; e dey return `false` for empty arrays.

### Advantages

- E dey return `true` only when di input na array wey get items and every element na object.
- E go stop quick and return `false` once e see any element wey no be object.
- E dey help you validate unknown input before you do operations wey be for objects.

## Usage

### Syntax

Function:

- `areObjects(array)`

Parameters:

- `array`: Di array wey you wan check say e get object elements.

### Local function import

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value na full array of objects
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areObjects(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 00:09:57 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>