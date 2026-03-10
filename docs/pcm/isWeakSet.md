# isWeakSet

## Description

E dey determine whether di given `value` be `WeakSet` of objects.

### Use case

Use `isWeakSet` when you dey accept input wey no get type (e.g., from external APIs, dynamic configuration, or `unknown`
values) and you need verify say e be `WeakSet` before you use `WeakSet`-specific operations.

> **Note for TypeScript users:**
>
> Use `isWeakSet` to narrow an `unknown` value to `WeakSet<object>` for runtime; note say `WeakSet` fit only contain
> object references.

### Advantages

- E give simple runtime check to know if one value be `WeakSet`.
- E dey help prevent type error by make sure say na only `WeakSet` instances dem dey treat like that.
- E work with any `unknown` input and e return clear boolean result (`true`/`false`).

## Usage

### Syntax

Function:

- `isWeakSet(value)`

Parameters:

- `value`: Di value wey you wan check.

### Local function import

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a na WeakSet for runtime
}
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isWeakSet(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 14:18:44 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>