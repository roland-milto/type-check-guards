# areEqual

## Description

`areEqual` dey check whether all elements for array dey equal to one expected value, e go return `true` only for
non-empty arrays wey every item match.

### Use case

Validate say list get only one allowed value (e.g., all status flags na `true`, all roles na `"admin"`, or all numeric
entries dey equal to required constant) while you dey treat empty input as invalid (`false`).

> **Note for TypeScript users:**
>
> Use `areEqual` when you need strict all-items check; e go return `false` for empty arrays and for any non-array or
> non-filled input.

### Advantages

- E go return `true` only when every element match di expected value; if no be so, e go return `false`.
- E dey fail fast: e go stop to check as soon as e see element wey no match.
- E dey protect against invalid input by returning `false` when di input no be filled array.

## Usage

### Syntax

Function:

- `areEqual(value, expected)`

Parameters:

- `value`: Di array wey dem wan check.
- `expected`: Di element wey you wan compare each array item with.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areEqual(value, expected)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 23:51:46 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>