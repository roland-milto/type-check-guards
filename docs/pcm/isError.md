# isError

## Description

E check whether di given `value` na instance of `Error`.

### Use case

Use `isError` when you receive an `unknown` value (like from a `catch` block, a callback, or an external library) and
you need to safely know whether e be `Error` before you read `message`, `name`, or `stack`.

> **Note for TypeScript users:**
>
> Use `isError` to guard `unknown` values (e.g., from `catch`) before you treat dem like `Error`.

### Advantages

- E give you simple runtime check to know if one value na `Error` instance.
- E help you narrow unknown inputs before you access `Error` properties like `message` or `stack`.
- E reduce chance of runtime exceptions when you dey handle values wey come from `catch`, external APIs, or sources wey
  no get type.

## Usage

### Syntax

Function:

- `isError(value)`

Parameters:

- `value`: Di value wey you wan check against di `Error` type.

### Local function import

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isError(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isError](../_analysis/isError.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 12:46:40 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>