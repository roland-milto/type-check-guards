# isStream

## Description

`isStream` checks whether a given value is a stream object (Node.js stream-like, `ReadableStream`, or `WritableStream`).

### Use case

Validate inputs that may be either plain objects or streams (e.g., file uploads, HTTP bodies, or processing pipelines)
and branch logic based on whether the value is a stream.

> **Note for TypeScript users:**
>
> Use `isStream` to narrow `unknown` before calling stream methods; it recognizes Node.js stream-like objects (via
`pipe`/`on`) and Web Streams (`ReadableStream`/`WritableStream`) when those globals exist.

### Advantages

- Safely detects common Node.js stream-like objects by checking for `pipe` and `on` functions.
- Also supports Web Streams by recognizing `ReadableStream` and `WritableStream` when available.
- Returns a simple boolean result (`true`/`false`) suitable for guards and branching logic.

## Usage

### Syntax

Function:

- `isStream(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream is stream-like; you can safely use common stream APIs
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isStream(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isStream](../_analysis/isStream.md)

<br>

---

<small>The file was generated on 30 January 2026 at 23:41:39 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>