# isBuffer

## Description

E dey check whether value na Node.js `Buffer` and e go return `true` or `false`.

### Use case

Validate input for runtime (like API payloads, file data, or message buffers) make you sure say value na `Buffer` before
you process am, and make you dey get `false` well-well when you run outside Node.js where `Buffer` fit no dey.

> **Note for TypeScript users:**
>
> Use `isBuffer` to narrow `unknown` values to `Buffer` before you call methods wey na Buffer get.

### Advantages

- E dey detect Node.js `Buffer` instances well-well using `Buffer.isBuffer`.
- E dey return `false` for environment wey `Buffer` no dey, so e no go cause runtime error.
- E dey work with `unknown` input, so e good for runtime validation and to narrow type.

## Usage

### Syntax

Function:

- `isBuffer(value)`

Parameters:

- `value`: Di value wey you wan test.

### Local function import

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a na Buffer for here
  console.log(a.toString("utf8"));
}
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isBuffer(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 16:32:48 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>