# isBuffer

Checks if a value is a Node.js `Buffer`.

## Use Case

This function validates whether a value is a Buffer object used for handling binary data.
This is particularly important for file operations, network streaming, or working with cryptographic data in a Node.js
environment.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `Buffer` within conditional blocks.

## Behavior

`isBuffer` returns `true` if the value is an instance of `Buffer`.
In all other cases (e.g., `Uint8Array`, strings, or `null`), it returns `false`.

| Input                | Output  |
|----------------------|---------|
| `Buffer.from("abc")` | `true`  |
| `Buffer.alloc(10)`   | `true`  |
| `new Uint8Array(10)` | `false` |
| `"abc"` (String)     | `false` |
| `null`               | `false` |

## Usage

```ts
import { isBuffer } from "@type-check/strict";

isBuffer(Buffer.from("Hello")); // true
isBuffer("Hello");              // false

// TypeScript Example
const data: unknown = Buffer.from("Binary Data");

if (isBuffer(data)) {
  // data is automatically narrowed to type 'Buffer'
  console.log(data.toString("utf-8"));
}
```