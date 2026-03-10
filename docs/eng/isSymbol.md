# isSymbol

## Description

`isSymbol` determines whether a given value is of type `symbol`, returning `true` for symbols and `false` otherwise.

### Use case

Validate that an `unknown` value is a `symbol` before using it as a unique identifier, a registry key, or a computed
property key in objects and maps.

> **Note for TypeScript users:**
>
> Use `isSymbol` to narrow `unknown` to `symbol` before calling symbol-related functions or using it as a computed
> property key.

### Advantages

- Provides a simple, reliable runtime check for the JavaScript `symbol` primitive type.
- Helps narrow `unknown` values before using symbol-specific APIs or storing them as keys.
- Avoids false positives by using `typeof`, which is the canonical way to detect `symbol` values.

## Usage

### Syntax

Function:

- `isSymbol(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input is a symbol here
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isSymbol(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>The file was generated on 30 January 2026 at 14:25:39 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>