# isOfType

## Description

Determines whether a given `value` matches a specified type string, using `typeof` for primitives and a fallback for
complex types.

### Use case

Validate and narrow `unknown` inputs (e.g., API responses, user input, parsed JSON) by checking whether a value is of an
expected type string before performing type-specific operations.

> **Note for TypeScript users:**
>
> Use `isOfType` to branch on runtime types when working with `unknown` values; it returns `true`/`false` and treats
`null` and `undefined` explicitly.

### Advantages

- Checks primitives via direct `typeof` for speed and clarity.
- Correctly handles `null` and `undefined`, which `typeof` alone cannot distinguish as intended.
- It supports complex or custom type strings via a fallback comparison using `getTypeOf`.
- It returns a simple boolean result (`true`/`false`) suitable for guards and branching.

## Usage

### Syntax

Function:

- `isOfType(value, type)`

Parameters:

- `value`: The value to test against the `type`.
- `type`: The string representation of the type to check against.

### Local function import

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input is a number here
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input is a string here
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isOfType(value, type)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>The file was generated on 30 January 2026 at 17:04:47 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>