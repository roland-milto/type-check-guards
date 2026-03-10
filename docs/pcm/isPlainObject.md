# isPlainObject

## Description

E check whether di given `value` na plain object and e go return `true` if e be so, if no be so e go return `false`.

### Use case

Validate say one `unknown` input (like parsed JSON, external data, or function arguments) na plain object before you
read keys or map am enter typed configuration object.

> **Note for TypeScript users:**
>
> `isPlainObject` dey useful to narrow `unknown` before you treat am like record-like object; e go return `true` only
> for values wey dia internal tag na `[object Object]`.

### Advantages

- E give simple, reliable check to know if one value na plain object (i.e., `Object` / `{}`), e go return `true` or
  `false`.
- E help you tell plain objects apart from arrays, functions, `null`, and oda types wey no be plain object.
- E dey useful as type guard for TypeScript to narrow `unknown` values before you access object properties.

## Usage

### Syntax

Function:

- `isPlainObject(value)`

Parameters:

- `value`: Di value wey you wan test to know if e be plain object.

### Local function import

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input na plain object for here
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isPlainObject(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 12:19:11 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>