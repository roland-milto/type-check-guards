# areHexadecimals

Checks whether a value is a non-empty array of valid hexadecimal strings.

Each element must satisfy `isHexadecimal`: required `0x`/`0X` prefix, optional sign (`+`/`-`), only digits `0-9` and
letters `a-f`/`A-F`, and no leading/trailing whitespace.

## Use Case

This function is useful when you want to validate multiple hexadecimal values as strings at once, e.g. when importing
data, validating batches of inputs, checking configuration values, or pre-validating values before converting to
`number[]`.

**Advantage of this function:**

- Ensures the input is a **non-empty array** and that **all elements** are valid hexadecimal strings.
- Ideal as a pre-check before converting to numbers or further processing.

> Note for TypeScript developers:
> `areHexadecimals(array)` is a type guard (`array is string[]`). Inside `if (areHexadecimals(value)) { ... }`,
> TypeScript treats `value` as `string[]`.

## Usage

### Standard Import

```ts
import {areHexadecimals} from "@type-check/guards";

areHexadecimals(["0x1A2B", "-0Xff"]); // true
areHexadecimals(["+0x0", "0X10"]);    // true

areHexadecimals(["0x1A2B", "0xG1"]);  // false (contains invalid element)
areHexadecimals(["1A2B"]);            // false (missing required prefix)
areHexadecimals([]);                  // false (empty)
areHexadecimals("0x1A2B");            // false (not an array)
```

### TypeScript Examples

```ts
import {areHexadecimals} from "@type-check/guards";

function parseHexadecimals(values: unknown): number[] | null {
  if (!areHexadecimals(values)) {
    return null;
  }

  // values is now string[] (type guard)
  return values.map((value) => {
    const sign = value.startsWith("-") ? -1 : 1;
    const withoutSign = value.startsWith("+") || value.startsWith("-") ? value.slice(1) : value;
    const parsed = Number.parseInt(withoutSign.slice(2), 16);
    return sign * parsed;
  });
}

const input: unknown = ["0x10", "0Xff", "-0x1"];
const result = parseHexadecimals(input);
// result: number[] | null
```

### Global Registration

With global registration, the function is available via the `type` object:

```ts
import {type} from "@type-check/guards";

type.areHexadecimals(["0x1A2B", "-0Xff"]); // true
```

## Behavior

| Input (array)         | areHexadecimals | Explanation                                |
|-----------------------|:---------------:|--------------------------------------------|
| `["0x1A2B", "-0Xff"]` |      true       | All elements are valid hexadecimal strings |
| `["+0x0", "0X10"]`    |      true       | Sign supported, prefix is case-insensitive |
| `["0x"]`              |      false      | Element has no digits                      |
| `["0x1A2B", "0xG1"]`  |      false      | Contains invalid hex digit `G`             |
| `["1A2B"]`            |      false      | Prefix is required                         |
| `[" 0x1A"]`           |      false      | Leading whitespace in an element           |
| `["0x1A "]`           |      false      | Trailing whitespace in an element          |
| `[]`                  |      false      | Empty array is rejected                    |
| `"0x1A2B"`            |      false      | Not an array (lenient behavior)            |
| `[0x1A2B]`            |      false      | Element is not a string                    |