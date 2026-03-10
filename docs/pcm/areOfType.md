# areOfType

## Description

E dey check whether all elements for di given `array` na di specified `type`.

### Use case

Use `areOfType` to validate unknown input (e.g., parsed JSON, API payloads, user input) before you do type-specific
operations for every element of an array.

> **Note for TypeScript users:**
>
> Because `areOfType` na type guard, TypeScript go narrow di array inside `if (areOfType(...)) {}` block to
`Array<DataTypeOf<T>>`.

### Advantages

- E give TypeScript type guard: when e return `true`, e go narrow di input to `Array<DataTypeOf<T>>`.
- E dey validate every element against di runtime type wey you request, so mixed-type arrays no go pass.
- E dey fail sharp: e return `false` immediately as soon as e see element wey no match.
- E dey reject non-arrays and empty arrays by design (e depend on `isFilledArray`).

## Usage

### Syntax

Function:

- `areOfType(array, type)`

Parameters:

- `array`: Di array wey you wan check.
- `type`: Di type wey you wan check each element for inside di array.

### Local function import

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values don turn to number[] now
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areOfType(array, type)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 17:10:52 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>