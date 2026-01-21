# isBinary

Checks whether a value is a valid binary number in string form.

A binary string consists of `0` and `1` and may optionally start with `0b` or `0B` (e.g. `0b1010`). Leading or trailing
whitespace is rejected.

## Use Case

This function is useful when inputs (e.g. from forms, config files, CLI arguments, or JSON) come as strings and you want
to ensure they represent **binary notation** before further processing (e.g. parsing, validation, converting to decimal
numbers, or building bitmasks).

**Advantage of this function:**

- It explicitly validates a binary representation as a **string**, including an optional `0b`/`0B` prefix.
- It rejects leading/trailing whitespace (without allocating via `trim()`).

> Note for TypeScript developers:
> `isBinary(value)` is a type guard (`value is string`). Inside `if (isBinary(value)) { ... }`, TypeScript treats
`value` as `string`.
> Also note: Numeric literals like `0b1010` are valid JavaScript binary literals, but they are **not strings**, so the
> function returns `false`.

## Usage

### Standard Import

```ts
import {isBinary} from "@type-check/guards";

isBinary("0b1010");  // true
isBinary("1010");    // true
isBinary("0B0011");  // true

isBinary("0b1020");  // false (invalid digits)
isBinary(" 1010");   // false (leading whitespace)
isBinary("1010 ");   // false (trailing whitespace)
isBinary(0b1010);    // false (not a string)
```

### TypeScript Examples

```ts
import {isBinary} from "@type-check/guards";

function parseBinaryToNumber(value: unknown): number | null {
  if (!isBinary(value)) {
    return null;
  }

  // value is now of type string (type guard).
  // Prefix is optional, so explicitly parse base 2:
  return Number.parseInt(
    value.startsWith("0b") || value.startsWith("0B") ? value.slice(2) : value,
    2
  );
}

const input: unknown = "0b1010";
const result = parseBinaryToNumber(input);
// result: number | null
```

### Global Registration

With global registration, the function is available via the `type` object:

```ts
import {type} from "@type-check/guards";

type.isBinary("0b1010"); // true
```

## Behavior

| Input (value) | isBinary | Explanation                        |
|---------------|:--------:|------------------------------------|
| `"0b1010"`    |   true   | Valid with prefix                  |
| `"1010"`      |   true   | Valid without prefix               |
| `"0B0011"`    |   true   | Prefix is case-insensitive         |
| `"0b"`        |  false   | No bits present                    |
| `""`          |  false   | Empty string                       |
| `"0b1020"`    |  false   | Contains invalid digit `2`         |
| `"10_10"`     |  false   | Underscores are not allowed        |
| `" 1010"`     |  false   | Leading whitespace is not allowed  |
| `"1010 "`     |  false   | Trailing whitespace is not allowed |
| `0b1010`      |  false   | Not a string (lenient behavior)    |