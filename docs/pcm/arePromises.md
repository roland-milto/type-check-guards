# arePromises

## Description

`arePromises` dey determine whether all elements for one array na `Promise` instances.

### Use case

Validate say list wey you build dynamically or wey external source provide get only promises before you aggregate dem (
e.g. with `Promise.all`).

> **Note for TypeScript users:**
>
> Use `arePromises` to validate `unknown[]` before calling `Promise.all` or other promise-only operations; e dey return
`false` for empty arrays.

### Advantages

- E dey make sure say every element na `Promise` before you continue with promise-specific logic.
- E dey return `false` for array wey never full, so e no go give confusing result for empty input.
- E dey useful as runtime guard when you dey work with `unknown[]` wey come from external sources.

## Usage

### Syntax

Function:

- `arePromises(array)`

Parameters:

- `array`: Di array wey you wan check if e get Promise instances.

### Local function import

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values na array of Promise instances for runtime
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.arePromises(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 23:49:27 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>