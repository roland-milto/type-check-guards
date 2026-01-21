# areOctals

Checks whether a value is a non-empty array of valid octal strings.

Each element must satisfy `isOctal`: required `0o`/`0O` prefix, optional sign (`+`/`-`), only digits `0` through `7`,
and no leading/trailing whitespace.

## Use Case

This function is useful when you want to validate multiple octal values as strings at once, e.g. when reading
configuration values (file permissions), batch-validating inputs, or importing data.

**Advantage of this function:**

- Ensures the input is a **non-empty array** and that **all elements** are valid octal strings.
- Ideal as a pre-check before converting to `number[]` or further processing.

> Note for TypeScript developers:
> `areOctals(array)` is a type guard (`array is string[]`). Inside `if (areOctals(value)) { ... }`, TypeScript treats
`value` as `string[]`.

## Usage

### Standard Import

```ts
import {areOctals} from "@type-check/guards";

areOctals(["0o123", "+0O755"]); // true
areOctals(["-0o0", "0o7"]);     // true

areOctals(["0o123", "0o128"]);  // false (contains invalid element)
areOctals(["0755"]);            // false (missing required prefix)
areOctals([]);                  // false (empty)
areOctals("0o123");             // false (not an array)
```

### TypeScript Examples

```ts
import {areOctals} from "@type-check/guards";

function parseOctalsToNumbers(values: unknown): number[] | null {
  if (!areOctals(values)) {
    return null;
  }

  // values is now string[] (type guard)
  return values.map((value) => {
    const sign = value.startsWith("-") ? -1 : 1;
    const withoutSign = value.startsWith("+") || value.startsWith("-") ? value.slice(1) : value;
    const parsed = Number.parseInt(withoutSign.slice(2), 8);
    return sign * parsed;
  });
}

const input: unknown = ["0o10", "0O7", "-0o1"];
const result = parseOctalsToNumbers(input);
// result: number[] | null
```

### Global Registration

With global registration, the function is available via the `type` object:

```ts
import {type} from "@type-check/guards";

type.areOctals(["0o123", "+0O755"]); // true
```

## Behavior

| Input (array)         | areOctals | Explanation                                |
|-----------------------|:---------:|--------------------------------------------|
| `["0o123", "+0O755"]` |   true    | All elements are valid octal strings       |
| `["-0o0", "0o7"]`     |   true    | Sign supported, prefix is case-insensitive |
| `["0o"]`              |   false   | Element has no digits                      |
| `["0o123", "0o128"]`  |   false   | Contains invalid digit `8`                 |
| `["0755"]`            |   false   | Prefix is required                         |
| `[" 0o123"]`          |   false   | Leading whitespace in an element           |
| `["0o123 "]`          |   false   | Trailing whitespace in an element          |
| `[]`                  |   false   | Empty array is rejected                    |
| `"0o123"`             |   false   | Not an array (lenient behavior)            |
| `[0o123]`             |   false   | Element is not a string                    |