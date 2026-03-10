# isNullOrUndefined

## Description

Checks whether a given value is `null` or `undefined`.

### Use case

Use `isNullOrUndefined` when you need to treat both `null` and `undefined` as “no value”, such as validating optional
inputs, normalizing API payloads, or guarding code paths before dereferencing a potentially missing value.

> **Note for TypeScript users:**
>
> Use `isNullOrUndefined` to guard against missing values before accessing properties or calling methods; it returns
`true` only for `null` and `undefined`.

### Advantages

- Provides a clear, reusable guard for detecting `null` and `undefined` in one place.
- Returns a simple boolean (`true`/`false`) that is easy to compose in conditions and validations.
- Helps avoid common runtime errors by checking for missing values before accessing properties or calling methods.

## Usage

### Syntax

Function:

- `isNullOrUndefined(value)`

Parameters:

- `value`: The value to be checked for `null` or `undefined`.

### Local function import

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // handle missing value
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isNullOrUndefined(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>The file was generated on 31 January 2026 at 00:32:47 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>