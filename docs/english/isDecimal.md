# isDecimal

Checks whether a value is a valid decimal number in string form.

Supports optional signs (`+`/`-`) and decimals with a dot (`.`). Shorthand forms like `.5` or `123.` are allowed as
well. Leading or trailing whitespace is rejected.

## Use Case

This function is useful when inputs (e.g. from forms, config files, CLI arguments, or JSON) are provided as strings and
you want to ensure they represent a **decimal number** before converting to `number`, storing, or further processing.

**Advantage of this function:**

- Validates decimal numbers as **strings** (including sign and `.` as decimal separator).
- Rejects leading/trailing whitespace without allocating via `trim()`.

> Note for TypeScript developers:
> `isDecimal(value)` is a type guard (`value is string`). Inside `if (isDecimal(value)) { ... }`, TypeScript treats
`value` as `string`.
> Note: Numeric values like `123.45` are **not strings**, therefore the function returns `false`.

## Usage

### Standard Import

```ts
import {isDecimal} from "@type-check/guards";

isDecimal("123.45");   // true
isDecimal("-123.45");  // true
isDecimal(".5");       // true
isDecimal("123.");     // true

isDecimal("12a.5");    // false (invalid characters)
isDecimal("1,23");     // false (comma is not supported)
isDecimal(" 1.23");    // false (leading whitespace)
isDecimal("1.23 ");    // false (trailing whitespace)
isDecimal(123.45);     // false (not a string)
```

### TypeScript Examples

```ts
import {isDecimal} from "@type-check/guards";

function parseDecimal(value: unknown): number | null {
  if (!isDecimal(value)) {
    return null;
  }

  // value is now string (type guard)
  const parsed = Number.parseFloat(value);

  // Optional: extra safety check (e.g. Infinity / NaN)
  return Number.isFinite(parsed) ? parsed : null;
}

const input: unknown = "-0.5";
const result = parseDecimal(input);
// result: number | null
```

### Global Registration

With global registration, the function is available via the `type` object:

```ts
import {type} from "@type-check/guards";

type.isDecimal("123.45"); // true
```

## Behavior

| Input (value) | isDecimal | Explanation                        |
|---------------|:---------:|------------------------------------|
| `"123.45"`    |   true    | Standard decimal                   |
| `"-123.45"`   |   true    | Negative with sign                 |
| `"+0.5"`      |   true    | Positive with sign                 |
| `".5"`        |   true    | Shorthand                          |
| `"123."`      |   true    | Dot without fractional digits      |
| `"1,23"`      |   false   | Comma is not supported             |
| `""`          |   false   | Empty string                       |
| `" 1.23"`     |   false   | Leading whitespace is not allowed  |
| `"1.23 "`     |   false   | Trailing whitespace is not allowed |
| `123.45`      |   false   | Not a string (lenient behavior)    |