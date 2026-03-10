# isOctal

## Description

Determines whether a value is a valid octal literal string (e.g. `0o755`).

### Use case

Validate user input or configuration values that must be expressed as an octal literal string (for example, file
permission modes like `0o644`) before parsing or converting them.

> **Note for TypeScript users:**
>
> `isOctal` is a type guard (`value is string`). After a `true` result, TypeScript narrows the checked variable to
`string`.

### Advantages

- Provides a strict type guard: returns `true` only when the input is a string that matches an octal literal format.
- Rejects empty strings and strings with leading/trailing whitespace (ASCII control/space), reducing accidental matches.
- Supports optional sign and is case-insensitive for the `0o`/`0O` prefix.
- Lenient for non-string inputs by returning `false` instead of throwing.

## Usage

### Syntax

Function:

- `isOctal(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // true
console.log(isOctal(b)); // true
console.log(isOctal(c)); // false
console.log(isOctal(d)); // false

if (isOctal(a)) {
  // a is string here
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isOctal(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>The file was generated on 30 January 2026 at 15:41:10 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>