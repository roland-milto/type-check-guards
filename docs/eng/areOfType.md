# areOfType

## Description

Checks whether all elements in the given `array` are of the specified `type`.

### Use case

Use `areOfType` to validate unknown input (e.g., parsed JSON, API payloads, user input) before performing type-specific
operations on every element of an array.

> **Note for TypeScript users:**
>
> Because `areOfType` is a type guard, TypeScript narrows the array inside an `if (areOfType(...)) {}` block to
`Array<DataTypeOf<T>>`.

### Advantages

- Provides a TypeScript type guard: when it returns `true`, the input is narrowed to `Array<DataTypeOf<T>>`.
- Validates every element against the requested runtime type, preventing mixed-type arrays from passing.
- Fails fast: returns `false` as soon as a non-matching element is found.
- Rejects non-arrays and empty arrays by design (depends on `isFilledArray`).

## Usage

### Syntax

Function:

- `areOfType(array, type)`

Parameters:

- `array`: The array to check.
- `type`: The type to check against each element in the array.

### Local function import

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values is now number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areOfType(array, type)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>The file was generated on 6 February 2026 at 12:15:54 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>