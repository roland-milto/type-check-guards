# isPrimitive

Checks if a value is a primitive data type.

## Use Case

This function validates whether a value belongs to the basic data types of JavaScript.
Primitive values are immutable and do not have properties or methods of their own.
This is useful for deep-cloning algorithms or serialization logic.

> **Note for TypeScript users:**
> This function acts as a **Type Guard** for the types `string`, `number`, `bigint`, `boolean`, `symbol`, `null`, or
`undefined`.

## Behavior

`isPrimitive` returns `true` if the value is not an object and not a function.

| Input       | Output  |
|-------------|---------|
| `"Text"`    | `true`  |
| `42`        | `true`  |
| `true`      | `true`  |
| `null`      | `true`  |
| `undefined` | `true`  |
| `{}`        | `false` |
| `[]`        | `false` |
| `() => {}`  | `false` |

## Usage

```ts
import {isPrimitive} from "@type-check/guards";

isPrimitive(42);      // true
isPrimitive({a: 1}); // false

// TypeScript Example
const value: unknown = "Hello";

if (isPrimitive(value)) {
  // value is narrowed to primitive types here
  console.log(`Primitive value: ${String(value)}`);
}
```