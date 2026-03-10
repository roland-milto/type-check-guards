# isMap

## Description

E check whether di given `value` be `Map`, e go return `true` if na so, and `false` if no be so.

### Use case

Use `isMap` when you receive `unknown` value (e.g., from JSON parsing, external APIs, or user input) and you need make
sure say e be `Map` before you do `Map` operations.

> **Note for TypeScript users:**
>
> `isMap` na runtime guard wey dey return `true` when di value be `Map` and `false` if no be so; use am to narrow
`unknown` before you call `Map` APIs.

### Advantages

- E give quick runtime check to know if one value be `Map`.
- E dey help prevent type error by guarding code paths wey need `Map` methods like `get`, `set`, and `has`.
- E work well as light validation step when you dey handle `unknown` inputs.

## Usage

### Syntax

Function:

- `isMap(value)`

Parameters:

- `value`: Di value wey you wan check.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isMap(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isMap](../_analysis/isMap.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 16:29:17 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>