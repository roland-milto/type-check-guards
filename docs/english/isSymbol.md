# isSymbol

Checks if a value is of type `symbol`.

## Use Case

This function validates whether a value is a unique identifier (`Symbol`).
Symbols are commonly used to create unique property keys in objects that cannot collide with other keys and are
invisible to standard iteration methods.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `symbol` within conditional blocks.

## Behavior

`isSymbol` returns `true` if the value is of type `symbol`.
In all other cases (e.g., strings, numbers, objects, or `null`), it returns `false`.

| Input              | Output  |
|--------------------|---------|
| `Symbol()`         | `true`  |
| `Symbol.for("id")` | `true`  |
| `Symbol.iterator`  | `true`  |
| `"id"` (String)    | `false` |
| `null`             | `false` |
| `{}`               | `false` |

## Usage

```ts
import { isSymbol } from "@type-check/strict";

isSymbol(Symbol("key")); // true
isSymbol("key");        // false

// TypeScript Example
const key: unknown = Symbol("internal");

if (isSymbol(key)) {
  // key is automatically narrowed to type 'symbol'
  const obj = { [key]: "secret" };
  console.log(obj[key]);
}
```