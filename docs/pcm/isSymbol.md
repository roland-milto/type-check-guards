# isSymbol

## Description

`isSymbol` dey determine whether one value na type `symbol`, e go return `true` for symbols and `false` if no be so.

### Use case

Validate say one `unknown` value na `symbol` before you use am as unique identifier, registry key, or computed property
key for objects and maps.

> **Note for TypeScript users:**
>
> Use `isSymbol` to narrow `unknown` to `symbol` before you call symbol-related functions or use am as computed property
> key.

### Advantages

- E give simple, reliable runtime check for JavaScript `symbol` primitive type.
- E help make `unknown` values clear before you use symbol-specific APIs or store dem as keys.
- E avoid false positives by using `typeof`, wey be di correct way to detect `symbol` values.

## Usage

### Syntax

Function:

- `isSymbol(value)`

Parameters:

- `value`: Di value wey you wan check.

### Local function import

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input na symbol for here
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isSymbol(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 14:28:12 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>