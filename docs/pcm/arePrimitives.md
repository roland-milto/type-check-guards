# arePrimitives

## Description

`arePrimitives` dey check whether all elements inside one provided, non-empty array na primitive types.

### Use case

Validate say incoming data (e.g., query parameters, CSV row values, or list of IDs/tags) get only primitive values
before you serialize am, hash am, log am, or pass am to APIs wey no suppose receive objects.

> **Note for TypeScript users:**
>
> Use `arePrimitives` when you need make sure say one `unknown[]` get only primitive values (string, number, bigint,
> boolean, symbol, undefined, or null) before you process am further.

### Advantages

- E dey return `true` only when every element na primitive value, so e dey act like strict guard for “no
  objects/functions” arrays.
- E dey fail fast: e go return `false` immediately as e see non-primitive element.
- E still dey return `false` for non-arrays and empty arrays (through the filled-array check), so e no go mistakenly
  accept invalid input.

## Usage

### Syntax

Function:

- `arePrimitives(array)`

Parameters:

- `array`: Di array wey dem wan check say e get only primitive-type elements.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.arePrimitives(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 00:06:01 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>