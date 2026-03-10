# arePrimitives

## Description

`arePrimitives` evaluates whether all elements in a provided, non-empty array are primitive types.

### Use case

Validate that incoming data (e.g., query parameters, CSV row values, or a list of IDs/tags) contains only primitive
values before serializing, hashing, logging, or passing it to APIs that must not receive objects.

> **Note for TypeScript users:**
>
> Use `arePrimitives` when you need to ensure an `unknown[]` contains only primitive values (string, number, bigint,
> boolean, symbol, undefined, or null) before further processing.

### Advantages

- Returns `true` only when every element is a primitive value, making it a strict guard for “no objects/functions”
  arrays.
- Fails fast: returns `false` as soon as a non-primitive element is found.
- Also returns `false` for non-arrays and empty arrays (via the filled-array check), preventing accidental acceptance of
  invalid input.

## Usage

### Syntax

Function:

- `arePrimitives(array)`

Parameters:

- `array`: The array to be checked for elements of primitive type.

### Local function import

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // true
const r2 = arePrimitives(b); // true
const r3 = arePrimitives(c); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.arePrimitives(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>The file was generated on 31 January 2026 at 00:07:37 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>