# isOneOfType

Checks if a value matches at least one of the specified data types.

## Use Case

This function is ideal for validating values that can take multiple forms (union types).
It allows you to check in a single call whether a value is, for example, either a `string` or a `number`, without having
to manually chain multiple individual checks.

> **Important Note:**
> All type identifiers in the `types` array must be **lowercase** (e.g., `"nan"` instead of `"NaN"`).

## Behavior

`isOneOfType` returns `true` as soon as the value matches one of the types defined in the array (OR logic). If none of
the types match, it returns `false`.

| Input      | Type Array (`DataTypes[]`) | Output  |
|------------|----------------------------|---------|
| `"Roland"` | `["string", "number"]`     | `true`  |
| `42`       | `["string", "number"]`     | `true`  |
| `true`     | `["string", "number"]`     | `false` |
| `null`     | `["null", "undefined"]`    | `true`  |
| `NaN`      | `["nan", "number"]`        | `true`  |

## Usage

```ts
import {isOneOfType} from "@type-check/strict";

isOneOfType(42, ["number", "string"]); // true
isOneOfType(true, ["number", "string"]); // false

// TypeScript Example
const id: unknown = "A123";

if (isOneOfType(id, ["string", "number"])) {
  // id is narrowed to the allowed types here
  console.log(`Valid ID: ${id}`);
}
```