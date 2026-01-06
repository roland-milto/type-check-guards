# areBooleans

Checks if all values within an array are booleans.

## Use Case

This function validates a list to ensure it consists exclusively of `true` or `false`.
It is helpful for validating checkbox lists, permission arrays, or results from bulk operations.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the array type to `boolean[]` within conditional
> blocks.

## Behavior

`areBooleans` returns `true` if every element in the array is of type `boolean`.
If even a single element is not a boolean (e.g., a number or a string), the result is `false`.

| Input                 | Output  |
|-----------------------|---------|
| `[true, false, true]` | `true`  |
| `[true, 1]`           | `false` |
| `[false, "false"]`    | `false` |
| `[]` (empty array)    | `false` |
| `[null]`              | `false` |

## Usage

```ts
import {areBooleans} from "@type-check/guards";

areBooleans([true, false]); // true
areBooleans([true, 0]);     // false

// TypeScript Example
const settings: unknown[] = [true, false, true];

if (areBooleans(settings)) {
  // settings is automatically narrowed to type 'boolean[]'
  const allEnabled = settings.every(s => s === true);
  console.log(`All options enabled: ${allEnabled}`);
}
```