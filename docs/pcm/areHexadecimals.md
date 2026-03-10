# areHexadecimals

## Description

E dey check whether all elements for one array na hexadecimal strings, e dey return `true` only for non-empty arrays wey
every item valid.

### Use case

Use `areHexadecimals` to validate user input or external data (e.g., IDs, checksums, color codes without a leading '#')
before you do hexadecimal parsing or further processing.

> **Note for TypeScript users:**
>
> Use `areHexadecimals` to validate unknown input before you parse or convert values (for example, before
`parseInt(value, 16)` or BigInt conversions).

### Advantages

- E dey validate say every element na hexadecimal string and e go return `true` only when all items match.
- E dey reject empty arrays by design, e dey return `false` when input data no dey.
- E dey give simple boolean result (`true`/`false`) wey fit for guards and early-return validation.

## Usage

### Syntax

Function:

- `areHexadecimals(array)`

Parameters:

- `array`: Di array wey dem wan check if e get hexadecimal string elements.

### Local function import

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areHexadecimals(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 23:07:26 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>