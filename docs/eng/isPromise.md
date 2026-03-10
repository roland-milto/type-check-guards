# isPromise

## Description

Determines whether a given value is a `Promise`.

### Use case

Use `isPromise` to validate unknown inputs before treating them as a `Promise`, such as when handling values returned
from plugins, dynamic imports, or loosely-typed APIs.

> **Note for TypeScript users:**
>
> `isPromise` checks via `instanceof Promise`, so it only returns `true` for real `Promise` instances (not generic
> thenables).

### Advantages

- Provides a simple runtime check for whether a value is a `Promise`.
- Helps guard code paths that require a real `Promise` instance, returning `true` or `false` predictably.
- Avoids false positives from “thenable” objects (e.g., `{ then() {} }`) by requiring an actual `Promise` instance.

## Usage

### Syntax

Function:

- `isPromise(value)`

Parameters:

- `value`: The value to be checked.

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

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isPromise(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>The file was generated on 30 January 2026 at 23:51:55 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>