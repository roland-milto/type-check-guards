# isOctal

## Description

E dey determine whether value be valid octal literal string (e.g. `0o755`).

### Use case

Validate user input or configuration values wey must show as octal literal string (for example, file permission modes
like `0o644`) before you parse or convert dem.

> **Note for TypeScript users:**
>
> `isOctal` na type guard (`value is string`). After result show `true`, TypeScript go narrow di variable wey dem check
> to `string`.

### Advantages

- E give strong type guard: e go return `true` only when di input be string wey match octal literal format.
- E no gree empty string and string wey get leading/trailing whitespace (ASCII control/space), so e dey reduce mistake
  match.
- E support optional sign and e no dey mind letter case for di `0o`/`0O` prefix.
- E dey lenient for non-string inputs by returning `false` instead of to throw error.

## Usage

### Syntax

Function:

- `isOctal(value)`

Parameters:

- `value`: Di value wey dem wan check.

### Local function import

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // true
console.log(isOctal(b)); // true
console.log(isOctal(c)); // false
console.log(isOctal(d)); // false

if (isOctal(a)) {
  // a na string for here
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isOctal(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 15:42:47 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>