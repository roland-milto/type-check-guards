# isStream

## Description

`isStream` dey check whether one value na stream object (Node.js stream-like, `ReadableStream`, or `WritableStream`).

### Use case

Validate inputs wey fit be plain objects or streams (like file uploads, HTTP bodies, or processing pipelines) and make
your logic branch based on whether di value na stream.

> **Note for TypeScript users:**
>
> Use `isStream` to narrow `unknown` before you call stream methods; e dey recognize Node.js stream-like objects (via
`pipe`/`on`) and Web Streams (`ReadableStream`/`WritableStream`) when those globals dey exist.

### Advantages

- E dey detect common Node.js stream-like objects well-well by checking say dem get `pipe` and `on` functions.
- E still support Web Streams by recognizing `ReadableStream` and `WritableStream` when dem dey available.
- E dey return simple boolean result (`true`/`false`) wey you fit use for guards and branching logic.

## Usage

### Syntax

Function:

- `isStream(value)`

Parameters:

- `value`: Di value wey dem wan check.

### Local function import

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream be like stream; you fit use common stream API dem without wahala
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isStream(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isStream](../_analysis/isStream.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 23:42:28 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>