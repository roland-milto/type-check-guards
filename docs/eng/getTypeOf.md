# getTypeOf

## Description

`getTypeOf` returns a detailed, human-readable type label for a given value, including refined numeric types and
specific object kinds.

### Use case

Use `getTypeOf` to normalize type detection in input validation and diagnostics—for example, to reject `nan`, accept
only `integer` IDs, treat numeric strings like `decimal` differently from plain `string`, or to log precise object kinds
such as `date` and `regexp`.

> **Note for TypeScript users:**
>
> The return type is `DataTypeAsString | string`. Treat it as a descriptive label; compare against known literals like
`integer`, `float`, `nan`, `array`, `null`, and `undefined` when branching.

### Advantages

- Returns a more granular type string than JavaScript’s `typeof`, including numeric subtypes like `integer`, `float`,
  and `nan`.
- Distinguishes `null` and `undefined` explicitly as `null` and `undefined`.
- It detects common numeric string formats and reports them as `binary`, `octal`, `decimal`, or `hexadecimal` instead of
  plain `string`.
- Also identifies arrays as `array` and uses `Object.prototype.toString` to provide specific object type names (e.g.,
  `date`, `regexp`, `map`, `set`).
- It is very useful for validation, logging, and debugging where consistent, human-readable type labels are needed.

## Usage

### Syntax

Function:

- `getTypeOf(value)`

Parameters:

- `value`: The value for which to determine the data type.

### Local function import

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Example checks
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.getTypeOf(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>The file was generated on 6 February 2026 at 13:12:42 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>