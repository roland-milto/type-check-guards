# areFalse

## Description

`areFalse` dey check whether all elements inside array wey you provide na strictly di boolean `false`.

### Use case

Validate say list of feature flags, checks, or guard results na all `false` before you continue (e.g., confirm say no
blocking conditions dey).

> **Note for TypeScript users:**
>
> Use `areFalse` when you need strict validation say array no empty and e contain only di boolean value `false`.

### Advantages

- E dey make sure say every element na strictly `false` (no truthy/falsey coercion).
- E dey return `false` for non-arrays or empty arrays because e require array wey don full via `isFilledArray`.
- E dey stop early for first element wey no be `false` so e go fast.

## Usage

### Syntax

Function:

- `areFalse(array)`

Parameters:

- `array`: Di array wey you wan check, wey get elements of any type.

### Local function import

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // true
const b = areFalse([false, true, false]);  // false
const c = areFalse([false, "false", false]); // false
const d = areFalse([]); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areFalse(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 16:18:13 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>