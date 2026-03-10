# areStreams

## Description

`areStreams` determines whether a value is a filled array in which every element is a `Stream`.

### Use case

Validate user-provided or dynamically built collections (e.g., multiple file read streams) before piping, resuming, or
otherwise operating on them as a group.

> **Note for TypeScript users:**
>
> Use `areStreams` to validate unknown input before treating it as `Stream[]`; it returns `true` only when the value is
> a non-empty array and every element is a `Stream`.

### Advantages

- Ensures an input is a filled array where every element is a `Stream`.
- Provides a simple `true`/`false` guard for validating stream collections before processing.
- Fails fast: returns `false` as soon as a non-`Stream` element is found.
- Helps prevent runtime errors when code assumes all items are `Stream` instances.

## Usage

### Syntax

Function:

- `areStreams(array)`

Parameters:

- `array`: The array to be checked for Stream objects.

### Local function import

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input is a filled array of Stream objects
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areStreams(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>The file was generated on 30 January 2026 at 23:32:36 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>