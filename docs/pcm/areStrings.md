# areStrings

## Description

`areStrings` dey check whether array no empty and all im elements na strings, e go return `true` only for dat case.

### Use case

Validate external or user-provided data (e.g., query params, JSON payloads, CSV fields) to make sure say you get
non-empty list of strings before you process am.

> **Note for TypeScript users:**
>
> Use `areStrings` to validate unknown arrays before you apply string-only logic; e return `false` for empty arrays.

### Advantages

- E make sure say every element na string and e no gree mixed-type arrays by return `false`.
- E no gree empty arrays, so `true` mean say na only non-empty list of strings.
- E dey useful as quick runtime guard before you do string-only operations (e.g., `trim`, `toLowerCase`).

## Usage

### Syntax

Function:

- `areStrings(value)`

Parameters:

- `value`: Expected type `string[]`.

### Local function import

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input na string[] wey no empty for runtime
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areStrings(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 13:19:59 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>