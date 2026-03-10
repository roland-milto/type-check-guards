# isTrue

## Description

`isTrue` dey determine whether one value dey strictly equal to `true`.

### Use case

Use `isTrue` to validate flags, feature toggles, or configuration values wey na only literal `true` dem suppose accept,
and everything else you go treat as `false`.

> **Note for TypeScript users:**
>
> Use `isTrue` when you need accept only di boolean literal `true`, no be just truthy values.

### Advantages

- E dey give strict check for boolean literal `true` (no coercion).
- E dey help you separate `true` from truthy values like `1`, `"true"`, or `{}`.
- Simple, predictable behavior wey good for guards and validation pipelines.

## Usage

### Syntax

Function:

- `isTrue(value)`

Parameters:

- `value`: Di value wey you wan check.

### Local function import

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // true
const b = isTrue(1);         // false
const c = isTrue("true");   // false

if (isTrue(a)) {
  // a na true for here
}
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isTrue(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 13:45:47 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>