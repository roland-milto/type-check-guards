# isBinary

## Description

`isBinary` dey determine whether value na binary string (e fit get `0b`/`0B` prefix) and e dey return `true` or `false`.

### Use case

Validate string wey user provide (e.g., form fields, CLI args, config values) make you sure say dem represent only
binary digits, and e fit get `0b`/`0B` prefix, before you process am further.

> **Note for TypeScript users:**
>
> Use `isBinary` as type guard before you parse or convert string to `BigInt`/`Number` make you avoid invalid input.

### Advantages

- E dey accept binary string wey get `0b`/`0B` prefix or wey no get am.
- E dey reject empty string and string wey get space for front/back (ASCII ≤ 32).
- E dey return `true`/`false` without to throw error, so e safe for input wey you no sure of.

## Usage

### Syntax

Function:

- `isBinary(value)`

Parameters:

- `value`: Di value wey dem wan check.

### Local function import

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // true
const b = isBinary("1010");   // true
const c = isBinary("0b1020"); // false
const d = isBinary(0b1010);     // false

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isBinary(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 23:10:58 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>