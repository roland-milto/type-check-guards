# areOneOfType

## Description

`areOneOfType` dey check whether all elements for non-empty array be one of the specified runtime types.

### Use case

Validate incoming data (e.g., parsed JSON) where one field must be non-empty array and the items inside suppose be only
from known set of primitive types; return `false` when the array empty or e get any type wey no allow.

> **Note for TypeScript users:**
>
> This function dey return boolean and e no dey narrow the array element types for compile time; use am as runtime
> validation step before you process am further.

### Advantages

- E make sure say every element wey dey inside array match at least one allowed runtime type, e go return `true` only if
  the whole array pass.
- E dey reject wrong input sharp-sharp: e return `false` when `array` or `types` empty or no be filled array.
- E dey useful to validate collection wey get different types (e.g., numbers and strings) with one call to
  `areOneOfType`.

## Usage

### Syntax

Function:

- `areOneOfType(array, types)`

Parameters:

- `array`: Array of elements wey you wan verify against the types wey you provide.
- `types`: Array of strings wey represent the data types wey you wan check against.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areOneOfType(array, types)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 23:38:12 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>