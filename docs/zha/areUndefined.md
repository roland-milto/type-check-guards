# areUndefined

## 说明

`areUndefined` check bae every element ndei doengh array ndei cungj `undefined`.

### 使用场景

Validate bae list ndei optional results mbouj raemx actual values (cungj bae `undefined`), daengz aeuq, mapping lookups
hauj missing entries bae represent bae `undefined`, raemx ndei aeu confirm bae all lookups failed.

> **以下为 TypeScript 用法：**
>
> Yongh `areUndefined` duz ndei aeu assert bae `unknown[]` cungj bae `undefined` values; gij return `false` bae array
> mbouj raemx laeuz raemx non-array/invalid inputs, caeuq bae internal `isFilledArray` check.

### 优点

- `isFilledArray` ꞉zawngz laeuz raemx array mbouj raemx laeuz raemx array gwnz ndaej, non-array raemx array mbouj raemx
  laeuz raemx array gwnz ndaej laengz `false`.
- Gij ndaej bae every element doengh `undefined`, mbouj raemx bae gyoengq gwnz ndaej, raemx yienghz ndaej gwnz raemx
  yienghz.
- Daeuj ndaej bae guard-style predicate, yongh bae validate unknown input collections.

## 用法

### 语法

函数：

- `areUndefined(array)`

参数：

- `array`: Array ndei bae check bae `undefined` elements.

### 本地函数导入

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Gij: baenzh laengz raemx faenh
const r4 = areUndefined([]); // false
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areUndefined(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>此文件于 30 January 2026 at 13:58:56 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>