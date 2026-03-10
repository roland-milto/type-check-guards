# areStreams

## Description

`areStreams` dey determine whether one value na array wey no empty and every element inside na `Stream`.

### Use case

Validate collections wey user provide or wey you build dynamically (e.g., plenty file read streams) before you pipe dem,
resume dem, or do any other operation on dem together.

> **Note for TypeScript users:**
>
> Use `areStreams` to validate unknown input before you treat am as `Stream[]`; e go return `true` only when di value na
> array wey no empty and every element na `Stream`.

### Advantages

- E make sure say input na correct array wey get something inside, and every element na `Stream`.
- E give simple `true`/`false` guard to validate stream collections before you process dem.
- E dey fail sharp: e go return `false` immediately e see any element wey no be `Stream`.
- E help prevent runtime errors when code dey assume say all items na `Stream` instances.

## Usage

### Syntax

Function:

- `areStreams(array)`

Parameters:

- `array`: Di array wey dem wan check if e get Stream objects.

### Local function import

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input na full array of Stream objects
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areStreams(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 23:35:10 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>