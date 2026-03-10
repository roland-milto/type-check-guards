# isObject

## Description

Determines whether a given `value` is an `object` (excluding `null`).

### Use case

Use `isObject` to validate unknown inputs (e.g., parsed JSON, API responses, event payloads) before accessing
properties, ensuring the value is an object and not `null`.

> **Note for TypeScript users:**
>
> `isObject` is a runtime guard that returns a boolean; it does not narrow to a specific object shape. Combine it with
> additional checks (e.g., property existence) when you need stronger typing.

### Advantages

- Returns `true` only for non-`null` values whose `typeof` is `"object"`.
- Prevents the common JavaScript pitfall where `null` would otherwise be treated as an object.
- It works for plain objects and built-in object instances (e.g., `Date`, `RegExp`).
- Simple, fast runtime check suitable for defensive programming and input validation.

## Usage

### Syntax

Function:

- `isObject(value)`

Parameters:

- `value`: The value to be checked for being an `object`.

### Local function import

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input is a non-null object at runtime
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isObject(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isObject](../_analysis/isObject.md)

<br>

---

<small>The file was generated on 31 January 2026 at 00:25:59 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>