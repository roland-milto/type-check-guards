# isDecimal

## Description

`isDecimal` dey check whether value na decimal string representation wey no get leading/trailing whitespace and e get
correct decimal format.

### Use case

Validate form fields, API payloads, or configuration values wey dem must provide as decimal string (fit get sign)
without any whitespace for front or back, before you parse am or store am.

> **Note for TypeScript users:**
>
> Use `isDecimal` to validate user input before you convert am (e.g., with `Number(value)`), especially when you must
> reject whitespace.

### Advantages

- E dey validate well-well say di input na string and e match decimal-literal pattern.
- E dey reject whitespace for front and back (including control characters) make parsing no confuse.
- E get fast pre-checks (type check and first/last character) before e run di regex.
- E dey return simple boolean result (`true`/`false`) wey fit for guards and input validation.

## Usage

### Syntax

Function:

- `isDecimal(value)`

Parameters:

- `value`: Di value wey you wan check if e be decimal string format.

### Local function import

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v na string for here (runtime don validate am)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isDecimal(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 15:54:00 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>