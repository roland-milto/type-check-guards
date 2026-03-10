# areBooleans

## Description

`areBooleans` dey check whether one given non-empty array get only boolean values, e go return `true` if na so, and
`false` if no be so.

### Use case

Validate data wey user provide or external data (e.g., JSON payloads, query params, config arrays) to make sure say
non-empty list get only booleans before you apply boolean logic or pass am give APIs wey expect `boolean[]`.

> **Note for TypeScript users:**
>
> Use `areBooleans` to validate `unknown[]` before you treat am as `boolean[]`; e dey return `false` for empty arrays,
> so handle dat case well-well if empty list suppose dey allowed.

### Advantages

- E dey return `true` only when every element na boolean and di input na non-empty array.
- E dey prevent false positives by reject empty arrays (e dey return `false`).
- E dey work well as runtime guard before boolean-only operations (e.g., `every`, `some`, logical reductions).

## Usage

### Syntax

Function:

- `areBooleans(array)`

Parameters:

- `array`: Di array wey dem wan check say e get boolean elements.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areBooleans(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 14:41:47 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>