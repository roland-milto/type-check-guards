# arePlainObjects

## Description

E dey check whether all elements for an array na plain objects, e go return `true` only if every element qualify.

### Use case

Validate external or untyped data (e.g., parsed JSON, API payloads, form submissions) to make sure say you receive
non-empty array wey every entry inside na plain object before you begin loop am and read properties.

> **Note for TypeScript users:**
>
> Use `arePlainObjects` to validate unknown input before you treat am as `Record<string, unknown>[]` (or one stricter
> object shape) for TypeScript.

### Advantages

- E make sure say every element wey dey inside di input array na plain object, e go return `true` only when all di items
  match.
- E dey reject bad inputs sharp-sharp (no be arrays or empty arrays) by returning `false`.
- E dey treat both object-literal objects and `Object.create(null)` objects as valid plain objects.

## Usage

### Syntax

Function:

- `arePlainObjects(array)`

Parameters:

- `array`: Di array wey dem wan check say e get plain object elements.

### Local function import

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // true
const b = arePlainObjects([{}, Object.create(null)]); // true
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // false
const d = arePlainObjects([] as unknown[]); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.arePlainObjects(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 16:55:21 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>