# isTrue

Checks if a value is strictly equal to `true`.

## Use Case

This function validates whether a value is exactly the boolean value `true`.
It is essential for strict logic checks where "truthy" values like `1`, `"true"`, or non-empty objects should explicitly
not be considered valid.

> **Note for TypeScript users:** This function acts as a **Type Guard**, automatically narrowing the type to the literal
> value `true`.

## Behavior

`isTrue` returns `true` only if the value is of type `boolean` and is equal to `true`.
All other values (including `1`, `"true"`, or `false`) return `false`.

| Input    | Output  |
|----------|---------|
| `true`   | `true`  |
| `false`  | `false` |
| `1`      | `false` |
| `"true"` | `false` |
| `[]`     | `false` |
| `null`   | `false` |

## Usage

```ts
import {isTrue} from "@type-check/guards";

isTrue(true);    // true
isTrue(1);       // false
isTrue("true");  // false

// TypeScript Example
const isActive: unknown = true;

if (isTrue(isActive)) {
  // isActive is narrowed to the literal type 'true' here
  console.log("Status is active.");
}
```