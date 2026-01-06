# areSymbols

Checks if all values within an array are of type `symbol`.

## Use Case

This function validates a list to ensure it consists exclusively of `Symbol` values.
It is useful for managing lists of internal object keys or when defining special protocol markers.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `symbol[]` within conditional
> blocks.

## Behavior

`areSymbols` returns `true` if every element in the array is of type `symbol`.
If even a single element is not a symbol (e.g., a string or a number), the result is `false`.

| Input                        | Output  |
|------------------------------|---------|
| `[Symbol(), Symbol("test")]` | `true`  |
| `[Symbol(), "test"]`         | `false` |
| `[null]`                     | `false` |
| `[]` (empty array)           | `false` |

## Usage

```ts
import {areSymbols} from "@type-check/guards";

const keys = [Symbol("a"), Symbol("b")];
areSymbols(keys); // true

// TypeScript Example
const metaKeys: unknown[] = [Symbol("id"), Symbol("version")];

if (areSymbols(metaKeys)) {
  // metaKeys is automatically narrowed to type 'symbol[]'
  metaKeys.forEach(s => console.log(s.toString()));
}
```