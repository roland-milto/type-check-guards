# areHexadecimals

## Description

Checks whether all elements in an array are hexadecimal strings, returning `true` only for non-empty arrays where every
item is valid.

### Use case

Use `areHexadecimals` to validate user input or external data (e.g., IDs, checksums, color codes without a leading '#')
before performing hexadecimal parsing or further processing.

> **Note for TypeScript users:**
>
> Use `areHexadecimals` to validate unknown input before parsing or converting values (for example, before
`parseInt(value, 16)` or BigInt conversions).

### Advantages

- Validates that every element is a hexadecimal string and returns `true` only when all items match.
- Rejects empty arrays by design, returning `false` for missing input data.
- Provides a simple boolean result (`true`/`false`) suitable for guards and early-return validation.

## Usage

### Syntax

Function:

- `areHexadecimals(array)`

Parameters:

- `array`: The array to be checked for hexadecimal string elements.

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

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areHexadecimals(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>The file was generated on 31 January 2026 at 23:05:11 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>