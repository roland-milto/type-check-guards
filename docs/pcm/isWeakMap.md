# isWeakMap

## Description

E dey determine whether di given `value` be `WeakMap` instance.

### Use case

Use `isWeakMap` when you accept `unknown` value (e.g., from public API, plugin system, or dynamic configuration) and you
need confirm say na `WeakMap` before you use `WeakMap`-specific behavior.

> **Note for TypeScript users:**
>
> `isWeakMap` dey do `instanceof WeakMap` check; na runtime guard wey go return `true` only for real `WeakMap`
> instances.

### Advantages

- E easy to check for runtime if one value be `WeakMap`.
- E dey help prevent misuse of APIs wey need `WeakMap` by returning `true`/`false` instead of to throw error.
- E dey work with `unknown` inputs, so e dey convenient for module boundaries (e.g., parsing, external data, or untyped
  code).

## Usage

### Syntax

Function:

- `isWeakMap(value)`

Parameters:

- `value`: Di value wey you wan check.

### Local function import

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a na WeakMap for runtime
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isWeakMap(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 13:26:26 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>