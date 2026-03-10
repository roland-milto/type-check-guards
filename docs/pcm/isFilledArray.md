# isFilledArray

## Description

E dey check whether `value` na array wey get at least one element, e go return `true` or `false`.

### Use case

Use `isFilledArray` to validate data wey dey come in (e.g., API payloads, form values, configuration) before you iterate
am, access di first element, or apply logic wey need at least one item.

> **Note for TypeScript users:**
>
> `isFilledArray` na runtime guard wey dey return boolean; e no dey narrow element types pass to confirm say array no
> empty.

### Advantages

- E easy, quick way to check say array no empty using `Array.isArray` plus length check.
- E dey help you avoid runtime error when code dey assume say array get at least one element.
- Clear boolean result: e go return `true` for array wey no empty and `false` for other cases.

## Usage

### Syntax

Function:

- `isFilledArray(value)`

Parameters:

- `value`: Di value wey you wan check if e be array wey no empty.

### Local function import

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input na array wey no empty for runtime
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isFilledArray(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 11:48:22 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>