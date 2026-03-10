# areUndefined

## Description

`areUndefined` dey check whether every element inside di array wey dem give am na `undefined`.

### Use case

Validate say list of optional results no get any real values (na only `undefined`), e.g., after you map lookups wey
missing entries dem represent as `undefined`, and you wan confirm say all di lookups fail.

> **Note for TypeScript users:**
>
> Use `areUndefined` when you need to assert say one `unknown[]` get only `undefined` values; e dey return `false` for
> empty arrays and non-array/invalid inputs because of di internal `isFilledArray` check.

### Advantages

- E dey return `false` for things wey no be array and for empty array because e dey require make array get something
  inside via `isFilledArray`.
- E dey make sure say every element na `undefined`, no be say na only some; e make the meaning clear well-well.
- E useful as guard-style predicate when you dey validate unknown input collections.

## Usage

### Syntax

Function:

- `areUndefined(array)`

Parameters:

- `array`: Di array wey you wan check for `undefined` elements.

### Local function import

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Note: e dey return false for empty array
const r4 = areUndefined([]); // false

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areUndefined(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 13:57:22 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>