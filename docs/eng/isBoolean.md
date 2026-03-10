# isBoolean

## Description

Determines whether a given value is a `boolean`.

### Use case

Validate external or untyped data (e.g., environment variables, JSON payloads, query parameters) to ensure a value is a
`boolean` before using it in conditional logic.

> **Note for TypeScript users:**
>
> Use `isBoolean` to narrow `unknown` to `boolean` before applying boolean operations.

### Advantages

- Simple and fast runtime check using `typeof`.
- Helps validate unknown input before boolean-specific logic.
- Returns a predictable `boolean` result (`true`/`false`).

## Usage

### Syntax

Function:

- `isBoolean(value)`

Parameters:

- `value`: The value to be checked.

### Local function import

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input is boolean here
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isBoolean(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>The file was generated on 30 January 2026 at 14:39:06 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>