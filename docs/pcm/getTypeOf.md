# getTypeOf

## Description

`getTypeOf` dey return detailed, human-readable type label for any value wey you give am, e include refined numeric
types and specific object kinds.

### Use case

Use `getTypeOf` to normalize type detection for input validation and diagnostics—for example, to reject `nan`, accept
only `integer` IDs, treat numeric strings like `decimal` different from ordinary `string`, or to log exact object kinds
like `date` and `regexp`.

> **Note for TypeScript users:**
>
> Di return type na `DataTypeAsString | string`. Make you treat am like descriptive label; compare am with known
> literals like `integer`, `float`, `nan`, `array`, `null`, and `undefined` when you wan branch.

### Advantages

- E dey return type string wey dey more detailed pass JavaScript `typeof`, e include numeric subtypes like `integer`,
  `float`, and `nan`.
- E dey separate `null` and `undefined` well-well as `null` and `undefined`.
- E dey detect common numeric string formats and e dey report dem as `binary`, `octal`, `decimal`, or `hexadecimal`
  instead of ordinary `string`.
- E still dey identify arrays as `array` and e dey use `Object.prototype.toString` to give specific object type names (
  e.g., `date`, `regexp`, `map`, `set`).
- E dey very useful for validation, logging, and debugging wey you need consistent, human-readable type labels.

## Usage

### Syntax

Function:

- `getTypeOf(value)`

Parameters:

- `value`: Di value wey you wan use determine di data type.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.getTypeOf(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 13:14:01 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>