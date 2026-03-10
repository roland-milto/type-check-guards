# areBuffers

## Description

`areBuffers` dey check whether di value wey you provide na non-empty, filled array wey every element inside am na
`Buffer`, e go return `true` if na so and `false` if no be so.

### Use case

Validate incoming chunk arrays (e.g., from streams, file uploads, or network packets) to make sure say all parts na
`Buffer` instances before you concatenate, decode, or pass dem give cryptographic or binary-processing functions.

> **Note for TypeScript users:**
>
> Use `areBuffers` to validate `unknown[]` before calling Buffer-specific APIs like `Buffer.concat`, make sure say di
> function go return `true` only when every element na `Buffer`.

### Advantages

- E make sure say every element wey dey inside di input na Node.js `Buffer` instance, e go return `true` only when di
  whole array match.
- E dey reject wrong inputs early by requiring array wey no empty and wey get values; e go return `false` for empty
  arrays or non-arrays.
- E useful as guard before you do buffer-only operations (e.g., concatenation, hashing, binary protocols).

## Usage

### Syntax

Function:

- `areBuffers(array)`

Parameters:

- `array`: Di array wey dem wan check if e get buffer instances.

### Local function import

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areBuffers(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 16:26:44 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>