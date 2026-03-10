# areJson

## Description

E dey check whether all elements for array na JSON strings, e go return `true` only if di array no empty and every item
na valid JSON; if no be so, e go return `false`.

### Use case

Validate data wey dey come in (e.g., from query params, environment variables, or external APIs) wey you expect say na
array of JSON-encoded strings, and you wan reject empty arrays or any entry wey no be JSON.

> **Note for TypeScript users:**
>
> Use `areJson` when you need to validate say one `unknown[]` get only JSON strings before you parse dem (e.g., with
`JSON.parse`).

### Advantages

- E go return `true` only when every element na correct JSON string; if no be so, e go return `false`.
- E dey fail fast: e go stop to check once e see element wey no be JSON.
- E dey reject empty array by design, e go return `false` for input wey no get anything inside.

## Usage

### Syntax

Function:

- `areJson(array)`

Parameters:

- `array`: Di array wey dem wan check say e get JSON string elements.

### Local function import

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // true
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // false
const empty = areJson([]); // false

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areJson(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areJson](../_analysis/areJson.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 16:17:05 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>