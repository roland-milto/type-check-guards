# isDecimal

## Description

`isDecimal` checks whether a value is a decimal string representation with no leading/trailing whitespace and a valid
decimal format.

### Use case

Validate form fields, API payloads, or configuration values that must be provided as a decimal string (optionally
signed) without any surrounding whitespace, before parsing or storing them.

> **Note for TypeScript users:**
>
> Use `isDecimal` to validate user input before converting it (e.g., with `Number(value)`), especially when whitespace
> must be rejected.

### Advantages

- Strictly validates that the input is a string and matches a decimal-literal pattern.
- Rejects leading and trailing whitespace (including control characters) to avoid ambiguous parsing.
- Fast pre-checks (type check and first/last character) before running the regex.
- Returns a simple boolean result (`true`/`false`) suitable for guards and input validation.

## Usage

### Syntax

Function:

- `isDecimal(value)`

Parameters:

- `value`: The value to check for a decimal string format.

### Local function import

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v is a string here (runtime-validated)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.isDecimal(value)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>The file was generated on 31 January 2026 at 15:51:04 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>