# areWeakSets

## Description

E dey check whether input na non-empty array wey every element inside am na `WeakSet`, and e go return `true` only for
dat case.

### Use case

Validate runtime input (e.g., from APIs, configuration, or user-provided data) to make sure say you get non-empty list
of `WeakSet` instances before you continue with logic wey depend on `WeakSet` behavior.

> **Note for TypeScript users:**
>
> Use `areWeakSets` to validate unknown input before you treat am as `WeakSet[]`. E dey return `false` for empty arrays
> and things wey no be arrays.

### Advantages

- E make sure say every element wey dey inside di input array na `WeakSet`.
- E dey return `false` for empty arrays, so e no go mistakenly talk say “all valid” when data no dey.
- E dey fail safely by returning `false` when di input no be filled array (including `null`).
- E useful as guard before you run operations wey need `WeakSet` instances.

## Usage

### Syntax

Function:

- `areWeakSets(array)`

Parameters:

- `array`: Di array wey you wan check whether e get `WeakSet` objects.

### Local function import

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a na array wey no empty, e get WeakSet instances inside
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Global object import

To import di functions as global object methods, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Di following method go dey available globally:

- `Type.areWeakSets(array)`

## Function analysis

We don document a table analysis of di output wey go happen when you put different parameters into di functions
here: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Dis file bin generate for 30 January 2026 at 14:10:23 (UTC) with di use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>