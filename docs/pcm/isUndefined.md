# isUndefined

## Description

E dey check whether value wey you give na `undefined`.

### Use case

Use `isUndefined` to guard optional inputs, detect missing properties, or take know difference between “no provide am” (
`undefined`) and “dem put am empty on purpose” (`null`).

> **Note for TypeScript users:**
>
> Use `isUndefined` when you specifically need to detect `undefined` (no be `null`). E safe because e dey rely on
`typeof value === "undefined"`.

### Advantages

- E give clear, explicit check for `undefined` with `typeof`, e dey avoid edge cases wey fit happen with variables wey
  no declare.
- E dey return simple boolean result (`true`/`false`) wey you fit use for guards, branching, and validation logic.
- E dey help you separate `undefined` from other “empty” values like `null`, `0`, `""`, or `NaN`.

## Usage

### Syntax

Function:

- `isUndefined(value)`

Parameters:

- `value`: Di value wey dem wan check.

### Local function import

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x dey undefined for here
} else {
  // x no dey undefined for here
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isUndefined(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 14:03:57 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>