# isIndexFound

## Description

`isIndexFound` dey determine whether one value na non-negative integer, meaning say dem don find index.

### Use case

Validate say search result represent index wey you fit use (integer `>= 0`) before you use am take index array or
string, so you no go mistakenly use `-1` or values wey no be number.

> **Note for TypeScript users:**
>
> Use `isIndexFound` after operations like `indexOf`, `findIndex`, or custom searches wey `-1` (or other invalid values)
> fit mean “not found”. When e return `true`, di value na number and e safe to use as array/string index.

### Advantages

- E give simple type guard wey go detect if dem find index by checking say e be non-negative integer.
- E dey return `true` only for correct index-like values (integers `>= 0`), e dey reject negative values, values wey no
  be integer, and values wey no be number.
- E dey help you avoid off-by-one and sentinel-value mistake when you dey work with APIs wey dey return `-1` for “not
  found”.

## Usage

### Syntax

Function:

- `isIndexFound(value)`

Parameters:

- `value`: Di value wey you wan check if e be non-negative integer.

### Local function import

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx na number for here and e >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Normal way to use with indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isIndexFound(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 00:47:23 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>