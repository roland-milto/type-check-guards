# areBooleans

## Description

`areBooleans` checks whether a given non-empty array contains only boolean values, returning `true` if it does and
`false` otherwise.

### Use case

Validate user-provided or external data (e.g., JSON payloads, query params, config arrays) to ensure a non-empty list
contains only booleans before applying boolean logic or passing it to APIs that expect `boolean[]`.

> **Note for TypeScript users:**
>
> Use `areBooleans` to validate `unknown[]` before treating it as `boolean[]`; it returns `false` for empty arrays, so
> handle that case explicitly if an empty list should be allowed.

### Advantages

- Returns `true` only when every element is a boolean and the input is a non-empty array.
- Prevents false positives by rejecting empty arrays (returns `false`).
- Works well as a runtime guard before boolean-only operations (e.g., `every`, `some`, logical reductions).

## Usage

### Syntax

Function:

- `areBooleans(array)`

Parameters:

- `array`: The array to be checked for boolean elements.

### Local function import

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areBooleans(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>The file was generated on 30 January 2026 at 14:38:59 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>