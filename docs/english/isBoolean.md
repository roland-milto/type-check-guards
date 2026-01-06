# isBoolean

Checks if a value is a boolean (`true` or `false`).

## Use Case

This function validates whether a value is of type `boolean`.
It is particularly useful for ensuring that configurations, flags, or status variables are strictly `true` or `false`,
rather than relying on "truthy" or "falsy" values (such as `1`, `0`, `null`, or `"true"`).

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `boolean` within conditional blocks.

## Behavior

`isBoolean` returns `true` if the value is of type `boolean`.
In all other cases (e.g., numbers, strings, or `null`), it returns `false`.

| Input       | Output  |
|-------------|---------|
| `true`      | `true`  |
| `false`     | `true`  |
| `1`         | `false` |
| `0`         | `false` |
| `"true"`    | `false` |
| `null`      | `false` |
| `undefined` | `false` |

## Usage

```ts
import { isBoolean } from "@type-check/strict";

isBoolean(true);    // true
isBoolean(1);       // false

// TypeScript Example
const flag: unknown = false;

if (isBoolean(flag)) {
  // flag is automatically narrowed to type 'boolean'
  const result = !flag;
  console.log(`The inverted status is: ${result}`);
}
```