# isRegEx

Checks if a value is a regular expression (`RegExp`).

## Use Case

This function ensures that a value is a valid regular expression object.
This is essential for ensuring that methods like `.test()` or `.exec()` can be called without runtime errors, especially
when patterns are processed dynamically.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `RegExp` within conditional blocks.

## Behavior

`isRegEx` returns `true` if the value is an instance of `RegExp`.
In all other cases (e.g., strings that look like a regex, objects, or `null`), it returns `false`.

| Input               | Output  |
|---------------------|---------|
| `/abc/`             | `true`  |
| `new RegExp("abc")` | `true`  |
| `"/abc/"` (String)  | `false` |
| `{}`                | `false` |
| `null`              | `false` |

## Usage

```ts
import {isRegEx} from "@type-check/guards";

isRegEx(/[a-z]/);      // true
isRegEx("/[a-z]/");    // false

// TypeScript Example
const pattern: unknown = /^[0-9]+$/;

if (isRegEx(pattern)) {
  // pattern is automatically narrowed to type 'RegExp'
  console.log(pattern.test("123"));
}
```