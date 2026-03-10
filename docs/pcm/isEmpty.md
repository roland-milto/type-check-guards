# isEmpty

## Description

E dey determine whether value empty, e go return `true` for `null`, `undefined`, empty/whitespace strings, empty arrays,
empty `Map`/`Set`, or objects wey no get any own enumerable properties.

### Use case

Use `isEmpty` to validate inputs and detect values wey miss/blank across plenty data types (e.g., form fields, API
payloads, configuration objects) where `null`, `undefined`, whitespace strings, empty collections, and objects wey no
get properties suppose count as empty.

> **Note for TypeScript users:**
>
> `isEmpty` na utility wey dey return boolean (e no be TypeScript type predicate), so e no dey narrow types by itself;
> use am for validation/branching instead of compile-time narrowing.

### Advantages

- E dey treat `null` and `undefined` as `true` when e dey check emptiness.
- E dey take string wey get only space as empty because e dey trim am before e check length.
- E dey support common container types (arrays, `Map`, `Set`) and plain objects wey no get any own enumerable
  properties.
- E dey avoid to count inherited properties because e dey use `hasOwnProperty` checks.
- E dey return simple boolean result (`true`/`false`) wey fit work well for guards and validation.

## Usage

### Syntax

Function:

- `isEmpty(value)`

Parameters:

- `value`: Di value wey you wan check if e empty.

### Local function import

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.isEmpty(value)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Dis file bin generate for 6 February 2026 at 16:20:15 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>