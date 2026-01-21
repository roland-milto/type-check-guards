# isHexadecimal

Checks whether a value is a valid hexadecimal number in string form.

A hexadecimal string must start with `0x` or `0X` (the prefix is required), may include an optional sign (`+`/`-`), and
may contain only digits `0-9` and letters `a-f`/`A-F` afterwards. Leading or trailing whitespace is rejected.

## Use Case

This function is useful when inputs (e.g. from forms, config files, CLI arguments, or JSON) are provided as strings and
you want to ensure they represent **hexadecimal notation** before further processing (e.g. parsing, converting to
decimal numbers, validating color values, working with bitmasks).

**Advantage of this function:**

- Validates hexadecimal notation as a **string** with a required `0x`/`0X` prefix.
- Supports an optional sign and is case-insensitive for the prefix.
- Rejects leading/trailing whitespace (without allocating via `trim()`).

> Note for TypeScript developers:
> `isHexadecimal(value)` is a type guard (`value is string`). Inside `if (isHexadecimal(value)) { ... }`, TypeScript
> treats `value` as `string`.
> Note: Numeric literals like `0x1A2B` are valid JavaScript hexadecimal literals, but they are **not strings**, so the
> function returns `false`.

## Usage

### Standard Import

```ts
import {isHexadecimal} from "@type-check/guards";

isHexadecimal("0x1A2B");  // true
isHexadecimal("-0Xff");   // true (case-insensitive prefix, with sign)
isHexadecimal("+0x0");    // true

isHexadecimal("1A2B");    // false (prefix '0x'/'0X' is required)
isHexadecimal("0xG1");    // false (invalid character 'G')
isHexadecimal(" 0x1A");   // false (leading whitespace)
isHexadecimal("0x1A ");   // false (trailing whitespace)
isHexadecimal(0x1A2B);    // false (not a string)
```

### TypeScript Examples

```ts
import {isHexadecimal} from "@type-check/guards";

function parseHexToNumber(value: unknown): number | null {
  if (!isHexadecimal(value)) {
    return null;
  }

  // value is now string (type guard)
  const sign = value.startsWith("-") ? -1 : 1;

  // remove optional sign
  const withoutSign = value.startsWith("+") || value.startsWith("-") ? value.slice(1) : value;

  // remove "0x"/"0X" prefix and parse base 16
  const parsed = Number.parseInt(withoutSign.slice(2), 16);

  return Number.isFinite(parsed) ? sign * parsed : null;
}

const input: unknown = "-0Xff";
const result = parseHexToNumber(input);
// result: number | null
```

### Global Registration

With global registration, the function is available via the `type` object:

```ts
import {type} from "@type-check/guards";

type.isHexadecimal("0x1A2B"); // true
```

## Behavior

| Input (value) | isHexadecimal | Explanation                        |
|---------------|:-------------:|------------------------------------|
| `"0x1A2B"`    |     true      | Valid with required prefix         |
| `"-0Xff"`     |     true      | Case-insensitive prefix, with sign |
| `"+0x0"`      |     true      | Valid, `0` is allowed              |
| `"0x"`        |     false     | No digits present                  |
| `"1A2B"`      |     false     | Prefix is required                 |
| `"0xG1"`      |     false     | Invalid hex digit `G`              |
| `""`          |     false     | Empty string                       |
| `" 0x1A"`     |     false     | Leading whitespace is not allowed  |
| `"0x1A "`     |     false     | Trailing whitespace is not allowed |
| `0x1A2B`      |     false     | Not a string (lenient behavior)    |