# isOctal

Checks whether a value is a valid octal number in string form.

An octal string must start with `0o` or `0O` (the prefix is required), may include an optional sign (`+`/`-`), and may
contain only digits `0` through `7` afterwards. Leading or trailing whitespace is rejected.

## Use Case

This function is useful when inputs (e.g., from forms, config files, CLI arguments, or JSON) are provided as strings and
you want to ensure they represent **octal notation** before further processing (e.g. parsing, converting to decimal
numbers, working with file permission strings like `0o755`).

**Advantage of this function:**

- Validates octal notation as a **string** with a required `0o`/`0O` prefix.
- Supports an optional sign and is case-insensitive for the prefix.
- Rejects leading/trailing whitespace (without allocating via `trim()`).

> Note for TypeScript developers:
> `isOctal(value)` is a type guard (`value is string`). Inside `if (isOctal(value)) { ... }`, TypeScript treats `value`
> as `string`.
> Note: Numeric literals like `0o123` are valid JavaScript octal literals, but they are **not strings**, so the function
> returns `false`.

## Usage

### Standard Import

```ts
import {isOctal} from "@type-check/guards";

isOctal("0o123");   // true
isOctal("+0O755");  // true (case-insensitive prefix, with sign)
isOctal("-0o0");    // true

isOctal("0o128");   // false (contains invalid digit '8')
isOctal("0755");    // false (prefix '0o'/'0O' is required)
isOctal(" 0o123");  // false (leading whitespace)
isOctal("0o123 ");  // false (trailing whitespace)
isOctal(0o123);     // false (not a string)
```

### TypeScript Examples

```ts
import {isOctal} from "@type-check/guards";

function parseOctalToNumber(value: unknown): number | null {
  if (!isOctal(value)) {
    return null;
  }

  // value is now string (type guard)
  const sign = value.startsWith("-") ? -1 : 1;

  // remove optional sign
  const withoutSign = value.startsWith("+") || value.startsWith("-") ? value.slice(1) : value;

  // remove "0o"/"0O" prefix and parse base 8
  const parsed = Number.parseInt(withoutSign.slice(2), 8);

  return Number.isFinite(parsed) ? sign * parsed : null;
}

const input: unknown = "+0O755";
const result = parseOctalToNumber(input);
// result: number | null
```

### Global Registration

With global registration, the function is available via the `type` object:

```ts
import {type} from "@type-check/guards";

type.isOctal("0o123"); // true
```

## Behavior

| Input (value) | isOctal | Explanation                        |
|---------------|:-------:|------------------------------------|
| `"0o123"`     |  true   | Valid with required prefix         |
| `"+0O755"`    |  true   | Case-insensitive prefix, with sign |
| `"-0o0"`      |  true   | Valid, `0` is allowed              |
| `"0o128"`     |  false  | Contains invalid digit `8`         |
| `"0o"`        |  false  | No digits present                  |
| `"0755"`      |  false  | Prefix is required                 |
| `""`          |  false  | Empty string                       |
| `" 0o123"`    |  false  | Leading whitespace is not allowed  |
| `"0o123 "`    |  false  | Trailing whitespace is not allowed |
| `0o123`       |  false  | Not a string (lenient behavior)    |