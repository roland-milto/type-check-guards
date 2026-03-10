# isOneOfType

## Description

`isOneOfType` dey check whether given `value` match at least one of di type strings wey you provide, e go return `true`
if any match show, and `false` if no match.

### Use case

Validate data wey no too get strong type or wey come from outside (e.g., parsed JSON, query parameters) by allowing
plenty acceptable runtime types (like `number` or `string`) before you continue with other logic.

> **Note for TypeScript users:**
>
> Use `isOneOfType` when you want runtime check say value fit match any of several allowed types; e go return `true` if
> at least one type match, if not na `false`.

### Advantages

- E check value against plenty allowed types for one call, e go return `true` as e see first match.
- E dey work with `unknown` inputs, so e dey useful for runtime boundaries (e.g., external data, user input).
- E dey give simple boolean result (`true`/`false`) wey dey blend well with conditional logic and early returns.

## Usage

### Syntax

Function:

- `isOneOfType(value, types)`

Parameters:

- `value`: Di value wey you wan check against di types wey you specify.
- `types`: Array of type strings wey represent di possible types for di value.

### Local function import

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input na object for runtime
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isOneOfType(value, types)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 13:53:46 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>