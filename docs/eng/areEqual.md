# areEqual

## Description

`areEqual` checks whether all elements in an array are equal to a given expected value, returning `true` only for
non-empty arrays where every item matches.

### Use case

Validate that a list contains only a single allowed value (e.g., all status flags are `true`, all roles are `"admin"`,
or all numeric entries equal a required constant) while treating empty input as invalid (`false`).

> **Note for TypeScript users:**
>
> Use `areEqual` when you need a strict all-items check; it returns `false` for empty arrays and for any non-array or
> non-filled input.

### Advantages

- Returns `true` only when every element matches the expected value; otherwise returns `false`.
- Fails fast: stops checking as soon as a non-matching element is found.
- Guards against invalid input by returning `false` when the input is not a filled array.

## Usage

### Syntax

Function:

- `areEqual(value, expected)`

Parameters:

- `value`: The array to be checked.
- `expected`: The element to compare each array item against.

### Local function import

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areEqual(value, expected)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>The file was generated on 31 January 2026 at 23:49:26 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>