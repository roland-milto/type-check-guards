# areJson

## Description

Checks whether all elements of an array are JSON strings, returning `true` only if the array is filled and every item is
valid JSON; otherwise returns `false`.

### Use case

Validate incoming data (e.g., from query params, environment variables, or external APIs) where you expect an array of
JSON-encoded strings and want to reject empty arrays or any non-JSON entries.

> **Note for TypeScript users:**
>
> Use `areJson` when you need to validate that an `unknown[]` contains only JSON strings before parsing them (e.g., with
`JSON.parse`).

### Advantages

- Returns `true` only when every element is a valid JSON string; otherwise returns `false`.
- Fails fast: stops checking as soon as a non-JSON element is found.
- Rejects empty arrays by design, returning `false` for non-filled input.

## Usage

### Syntax

Function:

- `areJson(array)`

Parameters:

- `array`: The array to be checked for JSON string elements.

### Local function import

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // true
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // false
const empty = areJson([]); // false

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areJson(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areJson](../_analysis/areJson.md)

<br>

---

<small>The file was generated on 30 January 2026 at 16:24:07 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>