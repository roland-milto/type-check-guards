# isNull

## Description

Determines whether the provided `value` is `null`.

### Use case

Use `isNull` to validate inputs or API payload fields where `null` is a meaningful sentinel value and must be handled
differently than `undefined` or other values.

> **Note for TypeScript users:**
>
> Use `isNull` when you need to distinguish `null` from `undefined` and other falsy values; it returns `true` only for
`null`.

### Advantages

- Provides a precise check for `null` without conflating it with `undefined`.
- Works reliably for any input type because it accepts `unknown`.
- Simple, fast, and side-effect free; returns only `true` or `false`.

## Usage

### Syntax

Function:

- `isNull(value)`

Parameters:

- `value`: The value to check for `null`.

### Local function import

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a is null here
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isNull(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isNull](../_analysis/isNull.md)

<br>

---

<small>The file was generated on 31 January 2026 at 15:38:26 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>