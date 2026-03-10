# areBinaries

## Description

Checks whether the provided value is a non-empty array of valid binary strings and returns `true` only if all items pass
validation.

### Use case

Use `areBinaries` when you receive an unknown list (e.g., from JSON, forms, or APIs) and need to ensure it is a
non-empty array of binary strings before parsing or processing it.

> **Note for TypeScript users:**
>
> Use `areBinaries` to validate unknown input before converting binary strings to numbers/BigInts; it ensures the array
> is non-empty and every element is a valid binary string.

### Advantages

- Validates that a value is a non-empty array where every element is a valid binary string.
- Returns a simple boolean result (`true`/`false`) suitable for guards, early returns, and input validation.
- Prevents downstream parsing errors by rejecting arrays that contain any non-binary entry.

## Usage

### Syntax

Function:

- `areBinaries(array)`

Parameters:

- `array`: The value to be checked.

### Local function import

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // true
console.log(areBinaries(b)); // false
console.log(areBinaries([])); // false
```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areBinaries(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>The file was generated on 31 January 2026 at 23:13:39 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>