# isArray

## Description

`isArray` dey check whether value wey you give am na array, and e go return `true` if na array; if no be array, e go
return `false`.

### Use case

Validate unknown data (like parsed JSON or API responses) to make sure say value na array before you iterate, index, or
access `.length`.

> **Note for TypeScript users:**
>
> Use `isArray` when you need runtime check for arrays; e dey return boolean and e safe to call with `unknown` values.

### Advantages

- E dey use di built-in `Array.isArray` wey sure pass to detect array for different realms (like iframes).
- E dey return simple boolean result (`true`/`false`) wey good for guards and branching logic.
- E dey work with any kind input because di parameter na `unknown`.

## Usage

### Syntax

Function:

- `isArray(value)`

Parameters:

- `value`: Di value wey dem wan check.

### Local function import

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input na array for runtime
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isArray(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isArray](../_analysis/isArray.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 11:31:39 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>