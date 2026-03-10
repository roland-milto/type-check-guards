# isString

## Description

`isString` dey check whether value wey you give am na string.

### Use case

Validate user input, API payload fields, or configuration values for runtime make sure say value na string before you
apply string operations (e.g., trimming, splitting, case conversion).

> **Note for TypeScript users:**
>
> Use `isString` to validate `unknown` or values wey no too get clear type before you call string methods; e go return
`true` only when `typeof value === "string"`.

### Advantages

- E easy and fast check with `typeof`.
- E dey return correct boolean result wey you fit expect: `true` for string, if no be so `false`.
- E work for empty string and string wey get content.
- E useful as light runtime guard before you do operations wey na for string.

## Usage

### Syntax

Function:

- `isString(value)`

Parameters:

- `value`: Di value wey dem wan test if na string type.

### Local function import

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input na string for here
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isString(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isString](../_analysis/isString.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 13:15:11 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>