# areDecimals

Checks whether a value is a non-empty array of valid decimal strings.

Each element must satisfy `isDecimal` (optional `+`/`-`, decimal dot `.`, shorthand forms like `.5`, and no
leading/trailing whitespace).

## Use Case

This function is useful when you want to validate multiple decimal values as strings at once, e.g. when reading CSV/JSON
data, batch-validating form fields, or validating configuration values.

**Advantage of this function:**

- Ensures the input is a **non-empty array** and that **all elements** are valid decimal strings.
- Ideal as a pre-check before converting to `number[]`.

> Note for TypeScript developers:
> `areDecimals(array)` is a type guard (`array is string[]`). Inside `if (areDecimals(value)) { ... }`, TypeScript
> treats `value` as `string[]`.

## Usage

### Standard Import

```ts
import {areDecimals} from "@type-check/guards";

areDecimals(["123.45", "-0.5", ".123"]); // true
areDecimals(["123.", "+0.5"]);           // true

areDecimals(["123.45", "12a.5"]);        // false (invalid element)
areDecimals([" 1.23"]);                  // false (whitespace in element)
areDecimals([]);                         // false (empty)
areDecimals("123.45");                   // false (not an array)
```

### TypeScript Examples

```ts
import {areDecimals} from "@type-check/guards";

function parseDecimals(values: unknown): number[] | null {
  if (!areDecimals(values)) {
    return null;
  }

  // values is now string[] (type guard)
  const parsed = values.map((value) => Number.parseFloat(value));

  // Optional: all results must be finite
  if (!parsed.every(Number.isFinite)) {
    return null;
  }

  return parsed;
}

const input: unknown = ["1.5", "-0.25", ".75"];
const result = parseDecimals(input);
// result: number[] | null
```

### Global Registration

With global registration, the function is available via the `type` object:

```ts
import {type} from "@type-check/guards";

type.areDecimals(["123.45", "-0.5", ".123"]); // true
```

## Behavior

| Input (array)                | areDecimals | Explanation                            |
|------------------------------|:-----------:|----------------------------------------|
| `["123.45", "-0.5", ".123"]` |    true     | All elements are valid decimal strings |
| `["123.", "+0.5"]`           |    true     | Allowed variants                       |
| `["1,23"]`                   |    false    | Comma is not supported                 |
| `["123.45", "12a.5"]`        |    false    | Contains an invalid element            |
| `[" 1.23"]`                  |    false    | Leading whitespace in an element       |
| `["1.23 "]`                  |    false    | Trailing whitespace in an element      |
| `[]`                         |    false    | Empty array is rejected                |
| `"123.45"`                   |    false    | Not an array (lenient behavior)        |
| `[123.45]`                   |    false    | Element is not a string                |