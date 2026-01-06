# isStream

Checks if a value is a stream (Node.js or Web Stream).

## Use Case

This function validates whether a value is a functional stream.
It recognizes both classic Node.js streams (by checking for `.pipe()` and `.on()`) and modern Web Streams (
`ReadableStream`, `WritableStream`).
This is essential for handling I/O operations and data flows.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `Stream | ReadableStream | WritableStream`
> within conditional blocks.

## Behavior

`isStream` returns `true` if the value is an object possessing the required stream methods or is an instance of a Web
Stream.
In all other cases (plain objects, strings, `null`), it returns `false`.

| Input                      | Output                  |
|----------------------------|-------------------------|
| `fs.createReadStream(...)` | `true`                  |
| `new ReadableStream()`     | `true`                  |
| `new WritableStream()`     | `true`                  |
| `{ pipe: () => {} }`       | `false` (missing `.on`) |
| `null`                     | `false`                 |
| `{}`                       | `false`                 |

## Usage

```ts
import { isStream } from "@type-check/strict";
import fs from "node:fs";

isStream(fs.createReadStream("test.txt")); // true
isStream({});                              // false

// TypeScript Example
const data: unknown = fs.createReadStream("input.txt");

if (isStream(data)) {
  // data is correctly narrowed here
  data.on("data", (chunk) => console.log(chunk));
}
```