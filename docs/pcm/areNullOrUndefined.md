# areNullOrUndefined

## Description

E dey check whether all elements inside di array wey dem give you na `null` or `undefined`.

### Use case

Validate say list of optional fields no get any real values (na only `null`/`undefined`) before you decide to skip
processing or show one “no values provided” state.

> **Note for TypeScript users:**
>
> Use `areNullOrUndefined` when you need to verify say one array get only missing values (`null`/`undefined`). Note say
> e dey return `false` for empty array.

### Advantages

- E dey return `true` only when every element na `null` or `undefined`.
- E dey return `false` for empty arrays, e dey help you tell difference between “no data” and “all missing values”.
- E dey work with `unknown[]`, so e safe to use before you narrow types.

## Usage

### Syntax

Function:

- `areNullOrUndefined(array)`

Parameters:

- `array`: Di array wey you wan check.

### Local function import

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areNullOrUndefined(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 00:30:46 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>