# areBuffers

## Description

`areBuffers` checks whether the provided value is a non-empty, filled array where every element is a `Buffer`, returning
`true` if so and `false` otherwise.

### Use case

Validate incoming chunk arrays (e.g., from streams, file uploads, or network packets) to ensure all parts are `Buffer`
instances before concatenating, decoding, or passing them to cryptographic or binary-processing functions.

> **Note for TypeScript users:**
>
> Use `areBuffers` to validate `unknown[]` before calling Buffer-specific APIs like `Buffer.concat`, ensuring the
> function returns `true` only when every element is a `Buffer`.

### Advantages

- Ensures every element in the input is a Node.js `Buffer` instance, returning `true` only when the entire array
  matches.
- Rejects invalid inputs early by requiring a non-empty, filled array; returns `false` for empty arrays or non-arrays.
- Useful as a guard before performing buffer-only operations (e.g., concatenation, hashing, binary protocols).

## Usage

### Syntax

Function:

- `areBuffers(array)`

Parameters:

- `array`: The array to be checked for buffer instances.

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

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areBuffers(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>The file was generated on 31 January 2026 at 16:24:01 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>