# isBoolean

## Description

E dey determine whether value wey you give na `boolean`.

### Use case

Validate external or data wey no get type (e.g., environment variables, JSON payloads, query parameters) make you sure
say value na `boolean` before you use am for conditional logic.

> **Note for TypeScript users:**
>
> Use `isBoolean` to narrow `unknown` to `boolean` before you apply boolean operations.

### Advantages

- Simple an fast runtime check wey dey use `typeof`.
- E dey help validate unknown input before you use boolean-specific logic.
- E dey return predictable `boolean` result (`true`/`false`).

## Usage

### Syntax

Function:

- `isBoolean(value)`

Parameters:

- `value`: Di value wey dem wan check.

### Local function import

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input na boolean for here
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isBoolean(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 14:37:30 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>