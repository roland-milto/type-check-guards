# areNaNs

## Description

`areNaNs` dey check whether all elements for an array be `NaN` and e dey return `true` only if every element be `NaN`.

### Use case

Validate incoming data wey `NaN` dey act as sentinel value and you must ensure say di whole array na only `NaN` (e.g.,
to detect numeric series wey all values missing).

> **Note for TypeScript users:**
>
> Use `areNaNs` when you need validate say an array get only di numeric `NaN` value (without string-to-number coercion).

### Advantages

- E dey return `true` only when every element be `NaN` (strict check for all elements).
- E no dey force strings turn to numbers; values like "NaN" go still remain non-`NaN` and go make result `false`.
- E dey return `false` for arrays wey no get any element, so e go prevent mistake `true` for empty input.

## Usage

### Syntax

Function:

- `areNaNs(array)`

Parameters:

- `array`: Di array wey you wan check for `NaN` values.

### Local function import

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // true
const b = areNaNs([NaN, 1, NaN]); // false
const c = areNaNs([NaN, "NaN", NaN]); // false
const d = areNaNs([NaN, null, NaN]); // false
const e = areNaNs([] as unknown[]); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areNaNs(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 15:52:59 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>