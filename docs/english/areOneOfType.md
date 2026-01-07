# areOneOfType

Checks if all values within an array match at least one of the specified data types.

## Use Case

This function validates a collection of values against a set of allowed types.
It is particularly useful for checking mixed arrays, such as a list of IDs that are permitted to be either strings or
numbers.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, validating that every element of the array matches one of the target types.

## Behavior

`areOneOfType` returns `true` if every single element in the array matches at least one of the specified types.
An empty array returns `false`.
If even a single element does not match any of the types, the result is `false`.

| Input               | Type Array (`DataTypes[]`) | Output  |
|---------------------|----------------------------|---------|
| `["a", 1, "b"]`     | `["string", "number"]`     | `true`  |
| `[1, true]`         | `["number", "string"]`     | `false` |
| `[null, undefined]` | `["null", "undefined"]`    | `true`  |
| `[]` (empty array)  | `["string"]`               | `false` |

## Usage

```ts
import {areOneOfType} from "@type-check/strict";

areOneOfType(["ts", 42], ["string", "number"]); // true
areOneOfType([1, true], ["number", "string"]);  // false

// TypeScript Example
const mixedData: unknown[] = ["User1", 101, "User2"];

if (areOneOfType(mixedData, ["string", "number"])) {
  // Every element in the array is either a string or a number
  mixedData.forEach(item => console.log(typeof item));
}
```