# arePlainObjects

## Description

Checks whether all elements of an array are plain objects, returning `true` only if every element qualifies.

### Use case

Validate external or untyped data (e.g., parsed JSON, API payloads, form submissions) to ensure you received a non-empty
array where every entry is a plain object before iterating and reading properties.

> **Note for TypeScript users:**
>
> Use `arePlainObjects` to validate unknown input before treating it as `Record<string, unknown>[]` (or a stricter
> object shape) in TypeScript.

### Advantages

- Ensures every element in the input array is a plain object, returning `true` only when all items match.
- Rejects invalid inputs early (non-arrays or empty arrays) by returning `false`.
- Treats both object-literal objects and `Object.create(null)` objects as valid plain objects.

## Usage

### Syntax

Function:

- `arePlainObjects(array)`

Parameters:

- `array`: The array to be checked for plain object elements.

### Local function import

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // true
const b = arePlainObjects([{}, Object.create(null)]); // true
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // false
const d = arePlainObjects([] as unknown[]); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.arePlainObjects(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>The file was generated on 30 January 2026 at 16:54:24 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>