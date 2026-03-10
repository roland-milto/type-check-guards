# isBinary

## Description

`isBinary` determines whether a value is a binary string (optionally prefixed with `0b`/`0B`) and returns `true` or
`false`.

### Use case

Validate user-provided strings (e.g., form fields, CLI args, config values) to ensure they represent binary digits only,
optionally with a `0b`/`0B` prefix, before further processing.

> **Note for TypeScript users:**
>
> Use `isBinary` as a type guard before parsing or converting a string to `BigInt`/`Number` to avoid invalid input.

### Advantages

- Accepts binary strings with or without the `0b`/`0B` prefix.
- Rejects empty strings and strings with leading/trailing whitespace (ASCII ≤ 32).
- Returns `true`/`false` without throwing, making it safe for unknown inputs.

## Usage

### Syntax

Function:

- `isBinary(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // true
const b = isBinary("1010");   // true
const c = isBinary("0b1020"); // false
const d = isBinary(0b1010);     // false

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isBinary(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>The file was generated on 31 January 2026 at 23:08:58 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>