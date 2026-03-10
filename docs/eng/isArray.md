# isArray

## Description

`isArray` checks whether a given value is an array and returns `true` if it is, otherwise `false`.

### Use case

Validate unknown data (e.g., parsed JSON or API responses) to ensure a value is an array before iterating, indexing, or
accessing `.length`.

> **Note for TypeScript users:**
>
> Use `isArray` when you need a runtime check for arrays; it returns a boolean and is safe to call with `unknown`
> values.

### Advantages

- Uses the built-in `Array.isArray` for reliable array detection across realms (e.g., iframes).
- Returns a simple boolean result (`true`/`false`) suitable for guards and branching logic.
- Works with any input type because the parameter is `unknown`.

## Usage

### Syntax

Function:

- `isArray(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input is an array at runtime
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isArray(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isArray](../_analysis/isArray.md)

<br>

---

<small>The file was generated on 6 February 2026 at 11:29:26 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>