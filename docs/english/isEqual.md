# isEqual

Checks if two values are strictly identical.

## Use Case

This function performs a strict comparison (`===`) between two values.
It is useful to ensure a value exactly matches a requirement without JavaScript performing implicit type coercion (e.g.,
`0` will not be treated as `false`).

> **Note for TypeScript users:**
> If the second parameter is a literal value, this function acts as a Type Guard and automatically narrows the type of
> the first value.

## Behavior

`isEqual` returns `true` if both values have the same type and content.

| Value 1 | Value 2     | Output                         |
|---------|-------------|--------------------------------|
| `10`    | `10`        | `true`                         |
| `"A"`   | `"A"`       | `true`                         |
| `true`  | `true`      | `true`                         |
| `10`    | `"10"`      | `false`                        |
| `null`  | `undefined` | `false`                        |
| `{}`    | `{}`        | `false` (different references) |

## Usage

```ts
import {isEqual} from "@type-check/guards";

isEqual(1337, 1337);   // true
isEqual(1337, "1337"); // false

// TypeScript Example
const input: unknown = "status_active";

if (isEqual(input, "status_active")) {
  // input is automatically narrowed to the literal string "status_active"
  console.log("The status is correct.");
}
```