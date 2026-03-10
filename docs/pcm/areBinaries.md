# areBinaries

## Description

E check whether di value wey you provide na non-empty array of correct binary strings, and e go return `true` only if
all items pass validation.

### Use case

Use `areBinaries` when you receive unknown list (e.g., from JSON, forms, or APIs) and you need make sure say e be
non-empty array of binary strings before you parse or process am.

> **Note for TypeScript users:**
>
> Use `areBinaries` to validate unknown input before you convert binary strings to numbers/BigInts; e make sure say di
> array no empty and every element na correct binary string.

### Advantages

- E validate say value na non-empty array wey every element na correct binary string.
- E dey return simple boolean result (`true`/`false`) wey good for guards, early returns, and input validation.
- E dey prevent parsing errors later by reject arrays wey get any entry wey no be binary.

## Usage

### Syntax

Function:

- `areBinaries(array)`

Parameters:

- `array`: Di value wey dem wan check.

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

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areBinaries(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 23:15:33 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>