# isNull

## Description

E dey check whether di `value` wey dem give you na `null`.

### Use case

Use `isNull` to validate inputs or API payload fields wey `null` mean something as special sentinel value and you must
handle am different from `undefined` or other values.

> **Note for TypeScript users:**
>
> Use `isNull` when you need to tell `null` different from `undefined` and other falsy values; e go return `true` only
> for `null`.

### Advantages

- E give correct check for `null` without mix am with `undefined`.
- E dey work well for any kind input because e accept `unknown`.
- E simple, e fast, and e no get side effect; e go return only `true` or `false`.

## Usage

### Syntax

Function:

- `isNull(value)`

Parameters:

- `value`: Di value wey you wan check if na `null`.

### Local function import

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a na null for here
}
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isNull(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isNull](../_analysis/isNull.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 15:40:27 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>