# isPromise

## Description

E determine whether one given value be `Promise`.

### Use case

Use `isPromise` to validate unknown inputs before you treat dem like `Promise`, like when you dey handle values wey
plugins return, dynamic imports, or loosely-typed APIs.

> **Note for TypeScript users:**
>
> `isPromise` dey check with `instanceof Promise`, so e go only return `true` for real `Promise` instances (no be
> generic thenables).

### Advantages

- E give simple runtime check to know if one value be `Promise`.
- E help guard code paths wey need real `Promise` instance, e dey return `true` or `false` in a predictable way.
- E dey avoid false positives from “thenable” objects (e.g., `{ then() {} }`) by requiring actual `Promise` instance.

## Usage

### Syntax

Function:

- `isPromise(value)`

Parameters:

- `value`: Di value wey dem wan check.

### Local function import

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // true
console.log(isPromise(b)); // false
console.log(isPromise(123)); // false
console.log(isPromise(null)); // false

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isPromise(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 23:53:54 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>