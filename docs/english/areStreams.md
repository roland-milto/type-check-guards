# areStreams

Checks if all values within an array are streams.

## Use Case

This function validates a list to ensure it consists exclusively of stream objects.
This is useful for orchestrating multiple data sources or building complex stream pipelines.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `Stream[]` within conditional
> blocks.

## Behavior

`areStreams` returns `true` if every element in the array is a valid stream.
If even a single element is not a stream (e.g., a buffer, a string, or a plain object), the result is `false`.

| Input                       | Output  |
|-----------------------------|---------|
| `[streamA, streamB]`        | `true`  |
| `[streamA, "not-a-stream"]` | `false` |
| `[null]`                    | `false` |
| `[]` (empty array)          | `false` |

## Usage

```ts
import {areStreams} from "@type-check/guards";
import fs from "node:fs";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

areStreams([stream1, stream2]); // true

// TypeScript Example
const inputs: unknown[] = [stream1, stream2];

if (areStreams(inputs)) {
  // inputs is automatically narrowed to type 'Stream[]'
  inputs.forEach(s => s.resume());
}
```