# areRegExes

## Description

`areRegExes` checks whether a value is a filled array containing only `RegExp` objects.

### Use case

Validate that a configuration option (e.g., a list of allow/deny patterns) is a non-empty array of regular expressions
before using it for matching.

> **Note for TypeScript users:**
>
> Use `areRegExes` to narrow `unknown` to `RegExp[]` before iterating or composing patterns.

### Advantages

- Ensures a value is a non-empty array where every element is a `RegExp` instance.
- Provides a simple boolean guard (`true`/`false`) for validating user input or configuration.
- Helps prevent runtime errors when later code assumes all items support regular-expression operations.

## Usage

### Syntax

Function:

- `areRegExes(array)`

Parameters:

- `array`: The value to be checked.

### Local function import

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns is an array of RegExp here
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Global object import

Use the following import to import the functions as global object methods:

```ts
import "@type-check/guards/register-global-object.mjs";
```

The following method will then be available globally:

- `Type.areRegExes(array)`

## Function analysis

A tabular analysis of the output produced when inserting different parameters into the functions is documented
here: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>The file was generated on 30 January 2026 at 23:16:37 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>