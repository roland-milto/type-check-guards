# isPrimitive

## Description

`isPrimitive` dey determine if value wey dem give you na primitive (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Use case

Validate inputs for runtime (e.g., API payload fields, configuration values, or data wey user provide) to make sure say
value na primitive before you serialize am, log am, or apply operations wey na only primitive fit do.

> **Note for TypeScript users:**
>
> Use `isPrimitive` to guard `unknown` inputs before you treat dem like objects or functions; e dey return `true` for
> primitives and `false` for objects and functions.

### Advantages

- Fast, no dey allocate memory check to know if value na JavaScript primitive.
- E dey treat `null` correct as primitive (even though `typeof null` be `"object"`).
- E dey help narrow `unknown` values before you do operations wey na only object fit do.

## Usage

### Syntax

Function:

- `isPrimitive(value)`

Parameters:

- `value`: Di value wey you wan check if e be primitive type.

### Local function import

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isPrimitive(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 23:57:18 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>