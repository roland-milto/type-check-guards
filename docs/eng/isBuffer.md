# isBuffer

## Description

Checks whether a value is a Node.js `Buffer` and returns `true` or `false`.

### Use case

Validate inputs at runtime (e.g., API payloads, file data, or message buffers) to ensure a value is a `Buffer` before
processing it, and reliably get `false` when running outside Node.js where `Buffer` may not exist.

> **Note for TypeScript users:**
>
> Use `isBuffer` to narrow `unknown` values to `Buffer` before calling Buffer-specific methods.

### Advantages

- Safely detects Node.js `Buffer` instances using `Buffer.isBuffer`.
- Returns `false` in environments where `Buffer` is unavailable, avoiding runtime errors.
- Works with `unknown` input, making it suitable for runtime validation and type narrowing.

## Usage

### Syntax

Function:

- `isBuffer(value)`

Parameters:

- `value`: The value to be tested.

### Local function import

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a is a Buffer here
  console.log(a.toString("utf8"));
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isBuffer(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>The file was generated on 31 January 2026 at 16:30:33 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>