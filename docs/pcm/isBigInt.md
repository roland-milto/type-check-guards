# isBigInt

## Description

`isBigInt` dey check whether di value wey you give am na type `bigint`, e go return `true` for BigInt primitives and
`false` if no be so.

### Use case

Validate and narrow values wey dey come from sources wey no get type (e.g., JSON parsing, user input, external APIs)
before you do BigInt-specific calculations or store dem for BigInt-only fields.

> **Note for TypeScript users:**
>
> Use `isBigInt` to narrow `unknown` to `bigint` before you do BigInt arithmetic (e.g., `+`, `*`) wey need BigInt
> operands.

### Advantages

- E give simple, reliable runtime check for di `bigint` primitive type.
- E help narrow `unknown` values before you do BigInt-only operations.
- E avoid false positives: normal numbers, strings, and oda types go return `false`.

## Usage

### Syntax

Function:

- `isBigInt(value)`

Parameters:

- `value`: Di value wey you wan check.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isBigInt(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 23:32:53 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>