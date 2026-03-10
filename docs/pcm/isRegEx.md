# isRegEx

## Description

E dey determine if value wey dem provide na `RegExp` instance.

### Use case

Validate values wey user provide or dynamic values (e.g., configuration, API payloads, plugin inputs) before you treat
am like regular expression.

> **Note for TypeScript users:**
>
> Use `isRegEx` to narrow `unknown` (or union) values before you use RegExp-specific properties or methods; e go return
`true` only for values wey be instances of `RegExp`.

### Advantages

- E give simple runtime type guard wey go check if value na `RegExp`.
- E dey help prevent error when code dey expect regular expression (e.g., before you call `test`, `exec`, or read
  `source`).
- E dey work with both regex literals and instances wey dem create with `new RegExp(...)`.
- E dey return clear boolean result (`true`/`false`) without throw error for inputs wey no be regex.

## Usage

### Syntax

Function:

- `isRegEx(value)`

Parameters:

- `value`: Di value wey you wan check.

### Local function import

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input na RegExp for here
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isRegEx(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 23:30:34 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>