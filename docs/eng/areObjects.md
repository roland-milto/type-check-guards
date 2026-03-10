# areObjects

## Description

`areObjects` checks whether a provided filled array contains only objects.

### Use case

Use `areObjects` when you receive an unknown array (e.g., from JSON parsing or external APIs) and need to ensure it is
non-empty and that every element is an object before iterating and accessing object properties.

> **Note for TypeScript users:**
>
> Use `areObjects` to validate `unknown[]` before treating items as objects; it returns `false` for empty arrays.

### Advantages

- Returns `true` only when the input is a filled array and every element is an object.
- Stops early and returns `false` as soon as a non-object element is found.
- Helps validate unknown input before performing object-specific operations.

## Usage

### Syntax

Function:

- `areObjects(array)`

Parameters:

- `array`: The array to be checked for object elements.

### Local function import

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value is a filled array of objects
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areObjects(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>The file was generated on 31 January 2026 at 00:07:47 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>