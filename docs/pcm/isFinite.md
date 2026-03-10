# isFinite

## Description

E dey determine whether given `value` be finite `number`.

### Use case

Use `isFinite` to validate unknown input (e.g., from JSON, forms, or APIs) before you do numeric calculations, make sure
say di value na real, finite number.

> **Note for TypeScript users:**
>
> `isFinite` dey return `true` only for finite numbers; e dey return `false` for `NaN`, `Infinity`, and any value wey no
> be number.

### Advantages

- E dey use `Number.isFinite` wey dey inside JavaScript for correct check if number dey finite.
- E dey return `true` only for finite numbers; e dey return `false` for `NaN`, `Infinity`, and inputs wey no be number.
- Simple predicate wey no get side effect, e good for validation and guard logic.

## Usage

### Syntax

Function:

- `isFinite(value)`

Parameters:

- `value`: Di value wey you wan check if e dey finite.

### Local function import

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers na: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value na finite number for here
  const doubled = value * 2;
  console.log(doubled);
}
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isFinite(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 16:31:13 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>