# arePromises

## Description

`arePromises` determines whether all elements in an array are `Promise` instances.

### Use case

Validate that a dynamically built or externally provided list contains only promises before aggregating them (e.g., with
`Promise.all`).

> **Note for TypeScript users:**
>
> Use `arePromises` to validate `unknown[]` before calling `Promise.all` or other promise-only operations; it returns
`false` for empty arrays.

### Advantages

- Ensures every element is a `Promise` before you proceed with promise-specific logic.
- Returns `false` for non-filled arrays, preventing ambiguous results for empty inputs.
- Useful as a runtime guard when working with `unknown[]` from external sources.

## Usage

### Syntax

Function:

- `arePromises(array)`

Parameters:

- `array`: The array to check for Promise instances.

### Local function import

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values is an array of Promise instances at runtime
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.arePromises(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>The file was generated on 30 January 2026 at 23:47:18 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>