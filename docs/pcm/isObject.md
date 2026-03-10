# isObject

## Description

E dey determine whether one given `value` be `object` (no include `null`).

### Use case

Use `isObject` to validate unknown inputs (e.g., parsed JSON, API responses, event payloads) before you access
properties, make sure say di value na object and e no be `null`.

> **Note for TypeScript users:**
>
> `isObject` na runtime guard wey dey return boolean; e no dey narrow go one specific object shape. Join am with extra
> checks (e.g., property existence) when you need stronger typing.

### Advantages

- E dey return `true` only for values wey no be `null` and wey `typeof` dem be `"object"`.
- E dey prevent dat common JavaScript wahala wey `null` fit dey treated like object.
- E dey work for plain objects and built-in object instances (e.g., `Date`, `RegExp`).
- Na simple, fast runtime check wey good for defensive programming and input validation.

## Usage

### Syntax

Function:

- `isObject(value)`

Parameters:

- `value`: Di value wey you wan check if e be `object`.

### Local function import

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input na object wey no be null for runtime
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isObject(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isObject](../_analysis/isObject.md)

<br>

---

<small>Dis file bin generate for 31 January 2026 at 00:19:55 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>