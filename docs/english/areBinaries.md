# areBinaries

Checks whether a value is a non-empty array of valid binary strings.

A binary string consists of `0` and `1` and may optionally start with `0b` or `0B` (e.g. `0b1010`). Leading or trailing
whitespace within individual elements is rejected.

## Use Case

This function is useful when you receive collections of inputs (e.g. from forms, config files, CLI arguments, or JSON)
as an array and want to ensure that **every** element represents a valid **binary notation as a string** before further
processing (e.g. parsing, validation, converting to decimal, or building bitmasks).

**Advantage of this function:**

- Ensures the input is a **non-empty array** and that **all elements** are valid binary strings.
- A convenient companion to `isBinary` when validating multiple values at once.

> Note for TypeScript developers:
> `areBinaries(array)` is a type guard (`array is string[]`). Inside `if (areBinaries(value)) { ... }`, TypeScript
> treats `value` as `string[]`.
> Note: Numeric literals like `0b1010` are **not strings** and therefore make the function return `false` when used as
> array elements.

## Usage

### Standard Import

```ts
import {areBinaries} from "@type-check/guards";

areBinaries(["0b1010", "1101"]); // true
areBinaries(["0B0011", "0b0"]);  // true

areBinaries(["1010", "1020"]);   // false (invalid element)
areBinaries([]);                 // false (empty)
areBinaries("1010");             // false (not an array)
```

### TypeScript Examples

```ts
import {areBinaries} from "@type-check/guards";

function parseBinariesToNumbers(values: unknown): number[] | null {
  if (!areBinaries(values)) {
    return null;
  }

  // values is now string[] (type guard)
  return values.map((value) =>
    Number.parseInt(
      value.startsWith("0b") || value.startsWith("0B") ? value.slice(2) : value,
      2
    )
  );
}

const input: unknown = ["0b1010", "1111"];
const result = parseBinariesToNumbers(input);
// result: number[] | null
```

### Global Registration

With global registration, the functions are available via the `type` object:

```ts
import {type} from "@type-check/guards";

type.areBinaries(["0b1010", "1101"]); // true
```

## Behavior

| Input (array)        | areBinaries | Explanation                             |
|----------------------|:-----------:|-----------------------------------------|
| `["0b1010", "1101"]` |    true     | All elements are valid binary strings   |
| `["1010", "0B0011"]` |    true     | Prefix is optional and case-insensitive |
| `["0b", "1010"]`     |    false    | `"0b"` has no bits                      |
| `["1010", "1020"]`   |    false    | Contains invalid digit `2`              |
| `[" 1010"]`          |    false    | Leading whitespace in an element        |
| `["1010 "]`          |    false    | Trailing whitespace in an element       |
| `[]`                 |    false    | Empty array is rejected                 |
| `"1010"`             |    false    | Not an array (lenient behavior)         |
| `[0b1010]`           |    false    | Element is not a string                 |