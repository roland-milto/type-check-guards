# isBigInt

## Description

`isBigInt` checks whether a given value is of type `bigint`, returning `true` for BigInt primitives and `false`
otherwise.

### Use case

Validate and narrow values coming from untyped sources (e.g., JSON parsing, user input, external APIs) before performing
BigInt-specific calculations or storing them in BigInt-only fields.

> **Note for TypeScript users:**
>
> Use `isBigInt` to narrow `unknown` to `bigint` before doing BigInt arithmetic (e.g., `+`, `*`) which requires BigInt
> operands.

### Advantages

- Provides a simple, reliable runtime check for the `bigint` primitive type.
- Helps narrow `unknown` values before performing BigInt-only operations.
- Avoids false positives: regular numbers, strings, and other types return `false`.

## Usage

### Syntax

Function:

- `isBigInt(value)`

Parameters:

- `value`: The value to check.

### Local function import

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // true
console.log(isBigInt(10));  // false
console.log(isBigInt("10")); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isBigInt(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>The file was generated on 31 January 2026 at 23:30:57 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>