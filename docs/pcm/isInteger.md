# isInteger

## Description

E dey determine whether one given `value` na safe integer number.

### Use case

Validate input wey you no trust (e.g., query params, JSON payloads, environment variables) before you use am as integer
for array indices, pagination, counters, or database IDs.

> **Note for TypeScript users:**
>
> Use `isInteger` to validate unknown input before you treat am as numeric integer; e go return `true` only for values
> wey `typeof value === "number"` and `Number.isSafeInteger(value)`.

### Advantages

- E check both type and numeric safety: e go return `true` only when di input na number and safe integer.
- E dey prevent common wahala with numeric coercion: strings like "5" go correct return `false`.
- E dey reject non-integers and unsafe integers, so e good for IDs, counters, and array indexing.

## Usage

### Syntax

Function:

- `isInteger(value)`

Parameters:

- `value`: Di value wey you wan check if e be integer.

### Local function import

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // true
const b = isInteger(-100);   // true
const c = isInteger("5");    // false
const d = isInteger(5.5);    // false
const e = isInteger(null);   // false

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isInteger(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 00:51:02 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>