# areRegExes

## Description

`areRegExes` dey check whether value na filled array wey get only `RegExp` objects.

### Use case

Validate say configuration option (e.g., list of allow/deny patterns) na non-empty array of regular expressions before
you use am for matching.

> **Note for TypeScript users:**
>
> Use `areRegExes` to narrow `unknown` to `RegExp[]` before you iterate or join patterns together.

### Advantages

- E make sure say value na non-empty array wey every element na `RegExp` instance.
- E give simple boolean guard (`true`/`false`) to validate user input or configuration.
- E help prevent runtime error when later code dey assume say all items fit do regular-expression operations.

## Usage

### Syntax

Function:

- `areRegExes(array)`

Parameters:

- `array`: Di value wey dem wan check.

### Local function import

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns na array of RegExp for here
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areRegExes(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 23:20:46 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>