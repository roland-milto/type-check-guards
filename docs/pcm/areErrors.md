# areErrors

## Description

E check whether array no empty and e get only `Error` objects, e go return `true` or `false`.

### Use case

Make sure say runtime-provided `unknown[]` (like joined failures, validation results, or data wey dem deserialize) na
non-empty list of `Error` objects before you start to iterate, log, or throw am again.

> **Note for TypeScript users:**
>
> `areErrors` go return `true` only if array full and every item na `Error`; e go return `false` if array empty or if
> any element no be `Error`.

### Advantages

- E make sure say every element na `Error` instance, so you fit handle error and log am well-well.
- E no gree empty array, so e go stop mistake wey make “no errors” state look like correct error list.
- E dey work well as runtime guard when you dey handle `unknown[]` inputs (like from APIs or `catch` blocks).

## Usage

### Syntax

Function:

- `areErrors(array)`

Parameters:

- `array`: Di array wey you wan check for `Error` objects.

### Local function import

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value na non-empty array of Error objects
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areErrors(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 12:35:08 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>