# areRegExes

Checks if all values within an array are regular expressions.

## Use Case

This function validates a list to ensure it consists exclusively of `RegExp` objects.
It is helpful for validating plugin configurations or filters that expect a series of patterns for text analysis.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `RegExp[]` within conditional
> blocks.

## Behavior

`areRegExes` returns `true` if every element in the array is an instance of `RegExp`.
If even a single element is not a regular expression (e.g., a string or `null`), the result is `false`.

| Input                    | Output  |
|--------------------------|---------|
| `[/a/, /b/, /c/]`        | `true`  |
| `[/abc/, "not-a-regex"]` | `false` |
| `[null]`                 | `false` |
| `[]` (empty array)       | `false` |

## Usage

```ts
import {areRegExes} from "@type-check/strict";

areRegExes([/[a-z]/, /[0-9]/]); // true
areRegExes([/[a-z]/, ".*"]);    // false

// TypeScript Example
const filters: unknown[] = [/error/i, /warning/i];

if (areRegExes(filters)) {
  // filters is automatically narrowed to type 'RegExp[]'
  const matches = filters.some(f => f.test("Error occurred"));
  console.log(matches);
}
```