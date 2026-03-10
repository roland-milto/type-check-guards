# isNullOrUndefined

## Description

E check whether one value na `null` or `undefined`.

### Use case

Use `isNullOrUndefined` when you need treat both `null` and `undefined` as “no value”, like when you dey validate
optional inputs, normalize API payloads, or guard code paths before you dereference value wey fit no dey.

> **Note for TypeScript users:**
>
> Use `isNullOrUndefined` to guard against missing values before you access properties or call methods; e return `true`
> only for `null` and `undefined`.

### Advantages

- E give you clear, reusable guard to detect `null` and `undefined` for one place.
- E return simple boolean (`true`/`false`) wey easy to join for conditions and validations.
- E help you avoid common runtime errors by checking say value no dey before you access properties or call methods.

## Usage

### Syntax

Function:

- `isNullOrUndefined(value)`

Parameters:

- `value`: Di value wey dem wan check if e be `null` or `undefined`.

### Local function import

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // handle value wey no dey
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isNullOrUndefined(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 00:34:54 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>