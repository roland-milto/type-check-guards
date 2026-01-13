# isError

Checks if a value is an instance of `Error`.

## Use Case

In JavaScript, technically any value can be thrown.
This function ensures that an object is actually an instance of the `Error` class (or its subclasses like `TypeError`,
`SyntaxError`, etc.).
This is crucial for safely accessing properties like `.message` or `.stack`.

> **Note for TypeScript users:**
> This function acts as a **Type Guard**, automatically narrowing the type to `Error` within conditional blocks.

## Behavior

`isError` returns `true` if the value is an instance of `Error`.
Plain objects that look like errors or simple strings will return `false`.

| Input                        | Output  |
|------------------------------|---------|
| `new Error("Failure")`       | `true`  |
| `new TypeError("Type Fail")` | `true`  |
| `{ message: "Error" }`       | `false` |
| `"An error occurred"`        | `false` |
| `null`                       | `false` |

## Usage

```ts
import {isError} from "@type-check/guards";

isError(new Error()); // true
isError("Error");     // false

// TypeScript Example
try {
  // Some logic
} catch (err: unknown) {
  if (isError(err)) {
    // err is automatically narrowed to type 'Error' here
    console.error(err.message);
  }
}
```