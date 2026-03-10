# isError

## Description

Checks whether a given `value` is an instance of `Error`.

### Use case

Use `isError` when you receive an `unknown` value (such as from a `catch` block, a callback, or an external library) and
you need to safely determine whether it is an `Error` before reading `message`, `name`, or `stack`.

> **Note for TypeScript users:**
>
> Use `isError` to guard `unknown` values (e.g., from `catch`) before treating them as an `Error`.

### Advantages

- Provides a simple runtime check for whether a value is an `Error` instance.
- Helps narrow unknown inputs before accessing `Error` properties like `message` or `stack`.
- Reduces the risk of runtime exceptions when handling values from `catch`, external APIs, or untyped sources.

## Usage

### Syntax

Function:

- `isError(value)`

Parameters:

- `value`: The value to check against the `Error` type.

### Local function import

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isError(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isError](../_analysis/isError.md)

<br>

---

<small>The file was generated on 6 February 2026 at 12:44:29 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>