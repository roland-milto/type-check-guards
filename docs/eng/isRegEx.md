# isRegEx

## Description

Determines whether a provided value is a `RegExp` instance.

### Use case

Validate user-provided or dynamic values (e.g., configuration, API payloads, plugin inputs) before treating them as a
regular expression.

> **Note for TypeScript users:**
>
> Use `isRegEx` to narrow `unknown` (or union) values before using RegExp-specific properties or methods; it returns
`true` only for values that are instances of `RegExp`.

### Advantages

- Provides a simple runtime type guard to check whether a value is a `RegExp`.
- Helps prevent errors when code expects a regular expression (e.g., before calling `test`, `exec`, or reading
  `source`).
- Works with both regex literals and instances created via `new RegExp(...)`.
- Returns a clear boolean result (`true`/`false`) without throwing for non-regex inputs.

## Usage

### Syntax

Function:

- `isRegEx(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input is a RegExp here
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isRegEx(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>The file was generated on 30 January 2026 at 23:28:21 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>