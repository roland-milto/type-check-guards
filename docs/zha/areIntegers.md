# areIntegers

## 说明

`areIntegers` raeuj gwnz ndaej rox raeuj baeuj rox raeuj elements in a given array raeuj integers, mbouj dwgij return
`true` ndaej rox raeuj, mbouj dwgij `false` mbouj ndaej rox raeuj.

### 使用场景

Yongh `areIntegers` daengz validate user-provided rox raeuj external data (e.g., query parameters, JSON payloads, CSV
rows) ndaej rox raeuj, daengz ndei logic raeuj youq filled list of integer values gwnz ndaej rox raeuj IDs, counters,
pagination offsets, rox raeuj array indices.

> **以下为 TypeScript 用法：**
>
> Yongh `areIntegers` gwnz ndaej rox raeuj runtime guard for `unknown[]` inputs, daengz mbouj youq gwnz ndaej rox raeuj
> treat as `number[]` gwnz ndaej rox raeuj integers. Ndaej rox raeuj dwgij return `false`, input raeuj either mbouj
> raeuj
> filled array, rox raeuj youq at least one non-integer value.

### 优点

- Gaejgoj `true` dwgij haenh ndaej rox raeuj gwnz laux; mbouj dwgij `false`.
- Bouxcoz youq gwnz ndaej rox raeuj input mbouj mizciz (e.g., indexing, counts, IDs) daengz youq gwnz ndaej rox raeuj
  integer-only operations.
- Cozsawj raeuj: gwnz ndaej rox raeuj gyaeuj mizciz, daengz gwnz ndaej rox raeuj non-integer element, dwgij stop
  checking.

## 用法

### 语法

函数：

- `areIntegers(array)`

参数：

- `array`: Rox raeuj array daengz youq gwnz ndaej rox raeuj integer elements.

### 本地函数导入

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // true
console.log(areIntegers(b)); // true
console.log(areIntegers(c)); // false

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areIntegers(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>此文件于 31 January 2026 at 01:08:22 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>