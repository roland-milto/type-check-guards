# isFalse

## Description

`isFalse` dey check whether one value dey strictly equal to di boolean literal `false`.

### Use case

Validate unknown data (e.g., from JSON, query params, or user input) wey only di explicit boolean value `false` suppose
count as valid flag, and everything else suppose reject.

> **Note for TypeScript users:**
>
> Use `isFalse` when you need accept only di literal `false` and reject all oda falsy values; e go return `true` only
> for `value === false`.

### Advantages

- E dey give strict check for di boolean literal `false` without coercion.
- E dey help you tell `false` apart from oda falsy values like `0`, `""`, `null`, and `undefined`.
- E dey improve readability by make your intention clear when you dey validate unknown input.

## Usage

### Syntax

Function:

- `isFalse(value)`

Parameters:

- `value`: Di value wey you wan check.

### Local function import

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input na exactly false for here
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isFalse(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 16:44:07 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>