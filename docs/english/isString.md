# isString

Checks if a value is of type `string`.

## Use Case

This function validates whether a value is a character string.
It is essential for processing user input, text from APIs, or ensuring that string methods like `.split()`, `.trim()`,
or `.toLowerCase()` can be called safely.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `string` within conditional blocks.

## Behavior

`isString` returns `true` if the value is of type `string`.
In all other cases (e.g., numbers, objects, `null`, or `undefined`), it returns `false`.

| Input          | Output  |
|----------------|---------|
| `"Hello"`      | `true`  |
| `""` (empty)   | `true`  |
| `"123"`        | `true`  |
| `123` (Number) | `false` |
| `null`         | `false` |
| `undefined`    | `false` |

## Usage

```ts
import { isString } from "@type-check/strict";

isString("Roland Milto"); // true
isString(2026);           // false

// TypeScript Example
const input: unknown = "  Hello World  ";

if (isString(input)) {
  // input is automatically narrowed to type 'string'
  console.log(input.trim());
}
```