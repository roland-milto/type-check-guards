# areOctals

## Description

`areOctals` dey check whether di value wey you provide na non-empty array of correct octal strings.

### Use case

Use `areOctals` when you dey validate user input, configuration values, or API payloads wey must contain octal
literals (e.g., file permission modes like `0o755`) and you wan reject empty arrays or any invalid entries by returning
`false`.

> **Note for TypeScript users:**
>
> Use `areOctals` make you sure say you get non-empty `unknown[]` wey each entry na correct octal string before you
> convert am (e.g., with `Number(...)` or your own parsing).

### Advantages

- E dey validate say value na non-empty array wey every element na octal string, e go return `true` only when all items
  pass.
- E dey fail sharp: e go return `false` as soon as e see any element wey no be octal.
- E useful as guard before you parse or convert octal strings, so you no go get runtime errors and input handling no go
  scatter.

## Usage

### Syntax

Function:

- `areOctals(array)`

Parameters:

- `array`: Di value wey dem wan check.

### Local function import

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value na array wey no empty, e get octal string dem
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areOctals(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 14:57:44 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>