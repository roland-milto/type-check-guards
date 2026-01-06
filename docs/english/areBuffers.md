# areBuffers

Checks if all values within an array are Node.js `Buffers`.

## Use Case

This function validates a list to ensure it consists exclusively of Buffer objects.
It is useful for verifying that a collection of data packets or file chunks is ready for binary operations.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `Buffer[]` within conditional
> blocks.

## Behavior

`areBuffers` returns `true` if every element in the array is a valid `Buffer`.
If even a single element is not a Buffer (e.g., a string or a plain array), the result is `false`.
An empty array also returns `false`.

| Input                                 | Output  |
|---------------------------------------|---------|
| `[Buffer.alloc(1), Buffer.alloc(2)]`  | `true`  |
| `[Buffer.alloc(1), "not-a-buffer"]`   | `false` |
| `[Buffer.alloc(1), new Uint8Array()]` | `false` |
| `[]` (empty array)                    | `false` |
| `[null]`                              | `false` |

## Usage

```ts
import { areBuffers } from "@type-check/strict";

areBuffers([Buffer.from("A"), Buffer.from("B")]); // true
areBuffers([Buffer.from("A"), "B"]);              // false

// TypeScript Example
const chunks: unknown[] = [Buffer.from("Part 1"), Buffer.from("Part 2")];

if (areBuffers(chunks)) {
  // chunks is automatically narrowed to type 'Buffer[]'
  const totalLength = chunks.reduce((acc, buf) => acc + buf.length, 0);
  console.log(`Total length: ${totalLength} bytes`);
}
```