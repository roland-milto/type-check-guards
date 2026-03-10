# isSet

## Description

E determine whether one given value be `Set`.

### Use case

Validate inputs from external sources (e.g., JSON parsing, user input, or third-party APIs) to make sure say value be
`Set` before you do `Set` operations.

> **Note for TypeScript users:**
>
> Use `isSet` to narrow `unknown` values before you call `Set`-specific APIs like `.add`, `.has`, or `.size`.

### Advantages

- E give simple runtime check to confirm say one value be `Set`.
- E help prevent type error by make you fit branch early when value no be `Set`.
- E work with any `Set` contents (empty or get items inside) and e dey return `true`/`false` steady.

## Usage

### Syntax

Function:

- `isSet(value)`

Parameters:

- `value`: Di value wey you wan check.

### Local function import

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a na Set for runtime
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isSet(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isSet](../_analysis/isSet.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 23:10:48 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>