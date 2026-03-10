# isPlainObject

## Description

Checks whether a given `value` is a plain object and returns `true` if it is, otherwise `false`.

### Use case

Validate that an `unknown` input (e.g., parsed JSON, external data, or function arguments) is a plain object before
reading keys or mapping it into a typed configuration object.

> **Note for TypeScript users:**
>
> `isPlainObject` is useful for narrowing `unknown` before treating it as a record-like object; it returns `true` only
> for values whose internal tag is `[object Object]`.

### Advantages

- Provides a simple, reliable check for whether a value is a plain object (i.e., `Object` / `{}`), returning `true` or
  `false`.
- Helps distinguish plain objects from arrays, functions, `null`, and other non-plain object types.
- Useful as a type guard in TypeScript to narrow `unknown` values before accessing object properties.

## Usage

### Syntax

Function:

- `isPlainObject(value)`

Parameters:

- `value`: The value to test for plain object status.

### Local function import

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input is a plain object here
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isPlainObject(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>The file was generated on 6 February 2026 at 12:16:10 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>