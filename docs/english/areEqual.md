# areEqual

Checks if all values within an array are strictly identical to a comparison value.

## Use Case

This function validates a list to ensure every single element exactly matches the provided comparison value.
It is helpful for verifying that, for example, all status flags in a list are set uniformly.

> **Note for TypeScript users:**
> This function acts as a Type Guard and narrows the type of the array to the type of the comparison value.

## Behavior

`areEqual` returns `true` if every element in the array is strictly identical (`===`) to the second parameter.
An empty array returns `false`.
If even a single element differs, the result is `false`.

| Array              | Comp. Value | Output  |
|--------------------|-------------|---------|
| `[1, 1, 1]`        | `1`         | `true`  |
| `["A", "A"]`       | `"A"`       | `true`  |
| `[1, 2, 1]`        | `1`         | `false` |
| `[1, "1"]`         | `1`         | `false` |
| `[]` (empty array) | `1`         | `false` |

## Usage

```ts
import {areEqual} from "@type-check/guards";

areEqual([10, 10, 10], 10); // true
areEqual([10, 20, 10], 10); // false

// TypeScript Example
const responses: unknown[] = ["YES", "YES"];

if (areEqual(responses, "YES")) {
  // responses is narrowed to "YES"[] here
  const count = responses.length;
  console.log(`Received ${count} positive responses.`);
}
```