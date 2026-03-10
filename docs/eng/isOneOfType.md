# isOneOfType

## Description

`isOneOfType` determines whether a given `value` matches at least one of the provided type strings, returning `true` if
any match is found and `false` otherwise.

### Use case

Validate loosely-typed or external data (e.g., parsed JSON, query parameters) by allowing multiple acceptable runtime
types (such as `number` or `string`) before proceeding with further logic.

> **Note for TypeScript users:**
>
> Use `isOneOfType` when you want a runtime check that a value matches any of several allowed types; it returns `true`
> if at least one type matches, otherwise `false`.

### Advantages

- Checks a value against multiple allowed types in a single call, returning `true` on the first match.
- It provides a simple boolean result that composes well with conditional logic and early returns.
- It works with `unknown` inputs, making it useful at runtime boundaries (e.g., external data, user input).

## Usage

### Syntax

Function:

- `isOneOfType(value, types)`

Parameters:

- `value`: The value to be checked against the specified types.
- `types`: An array of type strings representing the potential types of the value.

### Local function import

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input is an object at runtime
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isOneOfType(value, types)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>The file was generated on 6 February 2026 at 13:59:11 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>