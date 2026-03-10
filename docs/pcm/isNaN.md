# isNaN

## Description

E dey determine whether di `value` wey you provide na `NaN` of type `number` without converting strings.

### Use case

Validate input wey you no trust or wey no get strong type (like API payloads, form values, parsed JSON) to detect di
special `NaN` value and handle am directly, while you go treat non-number inputs as no be `NaN`.

> **Note for TypeScript users:**
>
> Use `isNaN` when you need detect di special numeric value `NaN` while you dey make sure say di input na really
`number` (no string-to-number conversion).

### Advantages

- E dey check whether value na `NaN` without e go force non-number (like string) turn to number.
- E dey return `true` only for values wey both be type `number` and `NaN`.
- E safe for `unknown` inputs and e dey avoid false positive wey fit come from implicit conversion.

## Usage

### Syntax

Function:

- `isNaN(value)`

Parameters:

- `value`: Di value wey dem wan check if e be `NaN` of type `number`.

### Local function import

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // true
console.log(isNaN(b)); // false
console.log(isNaN(c)); // false

if (isNaN(a)) {
  // a na number, and e be NaN sef
}
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isNaN(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 15:47:34 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>