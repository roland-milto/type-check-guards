# areOctals

## Description

`areOctals` determines whether the provided value is a non-empty array of valid octal strings.

### Use case

Use `areOctals` when validating user input, configuration values, or API payloads that must contain octal literals (
e.g., file permission modes like `0o755`) and you want to reject empty arrays or any invalid entries by returning
`false`.

> **Note for TypeScript users:**
>
> Use `areOctals` to ensure you have a non-empty `unknown[]` where each entry is a valid octal string before
> converting (e.g., via `Number(...)` or custom parsing).

### Advantages

- Validates that a value is a non-empty array where every element is an octal string, returning `true` only when all
  items pass.
- Fails fast: returns `false` as soon as a non-octal element is found.
- Useful as a guard before parsing or converting octal strings to avoid runtime errors and inconsistent input handling.

## Usage

### Syntax

Function:

- `areOctals(array)`

Parameters:

- `array`: The value to be checked.

### Local function import

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value is a non-empty array of octal strings
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areOctals(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>The file was generated on 30 January 2026 at 14:52:40 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>