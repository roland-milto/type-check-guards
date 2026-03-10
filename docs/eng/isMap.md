# isMap

## Description

Checks whether the given `value` is a `Map`, returning `true` if it is and `false` otherwise.

### Use case

Use `isMap` when you receive an `unknown` value (e.g., from JSON parsing, external APIs, or user input) and need to
ensure it is a `Map` before performing `Map` operations.

> **Note for TypeScript users:**
>
> `isMap` is a runtime guard that returns `true` when the value is a `Map` and `false` otherwise; use it to narrow
`unknown` before calling `Map` APIs.

### Advantages

- Provides a quick runtime check for whether a value is a `Map`.
- Helps prevent type errors by guarding code paths that require `Map` methods like `get`, `set`, and `has`.
- It works well as a lightweight validation step when handling `unknown` inputs.

## Usage

### Syntax

Function:

- `isMap(value)`

Parameters:

- `value`: The value to check.

### Local function import

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isMap(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isMap](../_analysis/isMap.md)

<br>

---

<small>The file was generated on 31 January 2026 at 16:42:13 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>