# areOneOfType

## Description

`areOneOfType` checks whether all elements in a non-empty array are of one of the specified runtime types.

### Use case

Validate incoming data (e.g., parsed JSON) where a field must be a non-empty array whose items are restricted to a known
set of primitive types; return `false` when the array is empty or contains any disallowed type.

> **Note for TypeScript users:**
>
> This function returns a boolean and does not narrow the array element types at compile time; use it as a runtime
> validation step before further processing.

### Advantages

- Ensures every element in an array matches at least one allowed runtime type, returning `true` only when the whole
  array passes.
- Rejects invalid inputs early: returns `false` when `array` or `types` is empty or not a filled array.
- Useful for validating mixed-type collections (e.g., numbers and strings) with a single call to `areOneOfType`.

## Usage

### Syntax

Function:

- `areOneOfType(array, types)`

Parameters:

- `array`: An array of elements to verify against the provided types.
- `types`: An array of strings representing the data types to check against.

### Local function import

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areOneOfType(array, types)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>The file was generated on 6 February 2026 at 12:31:27 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>