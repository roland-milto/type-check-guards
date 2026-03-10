# isNumber

## Description

`isNumber` dey check whether value na finite number wey no be `NaN`.

### Use case

Validate numeric input from sources wey you no trust (forms, query params, JSON payloads) before calculations, storage,
or range checks, make sure say only finite numbers go pass (`true`) and everything else go return `false`.

> **Note for TypeScript users:**
>
> Use `isNumber` to validate `unknown` values before you do arithmetic; e dey reject `NaN`, `Infinity`, and `-Infinity`.

### Advantages

- E dey return `true` only for real JavaScript numbers (type check plus e dey reject `NaN` and infinity).
- E dey prevent common validation bugs wey make `NaN`, `Infinity`, or `-Infinity` mistakenly pass as numbers.
- E dey work well as runtime guard for unknown input (e.g., JSON, user input, external APIs).
- E simple, e fast, and e no get side effect.

## Usage

### Syntax

Function:

- `isNumber(value)`

Parameters:

- `value`: Di value wey you wan check.

### Local function import

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input na correct finite number
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isNumber(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 13:10:36 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>