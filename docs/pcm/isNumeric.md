# isNumeric

## Description

`isNumeric` dey determine whether one given `value` dem go consider am numeric by checking im resolved type against
`NUMERIC_TYPES`.

### Use case

Use `isNumeric` to validate inputs (e.g., API payloads, form values, configuration) before you do numeric operations,
and to consistently accept numeric-like types (like `BigInt`) according to `NUMERIC_TYPES`.

> **Note for TypeScript users:**
>
> `isNumeric` na predicate wey dey return boolean; make you treat am like runtime check to know whether one value belong
> to di numeric type set wey library define.

### Advantages

- E dey use `getTypeOf` plus `NUMERIC_TYPES` to put numeric detection logic for one place and make checks dey consistent
  for the whole codebase.
- E dey return simple boolean (`true`/`false`) so e easy for branching and guard-style usage.
- E dey support plenty numeric representations (e.g., `number`, `BigInt`) as `NUMERIC_TYPES` define am.

## Usage

### Syntax

Function:

- `isNumeric(value)`

Parameters:

- `value`: Di value wey you wan check if e be numeric type.

### Local function import

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // di library type rule dem, dem dey see v as numeric
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isNumeric(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 15:54:05 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>