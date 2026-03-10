# isOfType

## Description

E dey determine whether given `value` match specified type string, e dey use `typeof` for primitive dem and fallback for
complex type dem.

### Use case

Validate and narrow `unknown` input dem (like API response, user input, parsed JSON) by checking whether value dey be
expected type string before you do operation wey depend on dat type.

> **Note for TypeScript users:**
>
> Use `isOfType` to branch on runtime type when you dey work with `unknown` value dem; e dey return `true`/`false` and e
> dey treat `null` and `undefined` explicit.

### Advantages

- E dey check primitive dem with direct `typeof` make e fast and clear.
- E dey handle `null` and `undefined` correct, wey `typeof` alone no fit separate as e suppose.
- E dey support complex or custom type string dem with fallback comparison wey dey use `getTypeOf`.
- E dey return simple boolean result (`true`/`false`) wey good for guard and branching.

## Usage

### Syntax

Function:

- `isOfType(value, type)`

Parameters:

- `value`: Di value wey you wan test against di `type`.
- `type`: Di string representation of di type wey you wan check against.

### Local function import

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input na number for here
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input na string for here
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isOfType(value, type)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 17:05:39 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>