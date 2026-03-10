# areSets

## Description

E dey check whether one given non-empty array get only `Set` instances, e go return `true` if na so, and `false` if no
be so.

### Use case

Validate say one value (e.g., from user input, JSON parsing, or external APIs) na non-empty array of `Set` objects
before you process each set.

> **Note for TypeScript users:**
>
> Use `areSets` to validate unknown input before you iterate and call `Set` APIs (e.g., `.size`, `.has`, `.add`) for
> each element.

### Advantages

- E dey return `true` only when di input na array wey no empty and every element na `Set` instance.
- E dey stop false positive for empty arrays by returning `false` when di array no get any element.
- E useful as runtime guard before you do `Set`-specific operations for each element.

## Usage

### Syntax

Function:

- `areSets(array)`

Parameters:

- `array`: Di array wey dem wan check if e get `Set` instances.

### Local function import

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a na array of Set instances for runtime
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areSets(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areSets](../_analysis/areSets.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 23:14:52 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>