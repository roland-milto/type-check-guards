# areNullOrUndefined

## 说明

Gwnz rox ndaej caeuq daengz caeuq raeuz youq ndei `null` hoz `undefined`.

### 使用场景

Rox ndaej caeuq raeuz gwnz aen ndei miz gwnz optional fields mbouj miz gwnz ndaej (gwnz `null`/`undefined` xwb) gwnz
ndei, daengz bae rox ndaej gwnz ndei yiemj gwnz: mbouj yongh gwnz (skip processing) hoz bienq aen ndei “mbouj miz gwnz
ndaej cungj” (no values provided) state.

> **以下为 TypeScript 用法：**
>
> Yongh `areNullOrUndefined` caeuq ndei rox ndaej gwnz raeuz (array) miz gwnz mbouj miz gwnz (missing values) xwb (
`null`/`undefined`). Gwnz ndaej: bae rox raeuz mbouj miz (empty array) laeng, aen ndei gaeuq `false`.

### 优点

- Gaeuq `true` rox ndaej daengz caeuq raeuz gwnz ndei mbouj, gaij `null` hoz `undefined`.
- Gaeuq `false` daengz bae rox raeuz mbouj miz (empty arrays), daengz gwnz ndaej bienq “mbouj miz daengz” caeuq “daengz
  gwnz mbouj miz gwnz”.
- Gwnz ndaej yongh caeuq `unknown[]`, daengz rox ndaej yongh aen ndei mbouj nguyh gwnz ndaej caeuq youq gwnz (narrowing
  types).

## 用法

### 语法

函数：

- `areNullOrUndefined(array)`

参数：

- `array`: Raeuz (array) ndei rox gwnz.

### 本地函数导入

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areNullOrUndefined(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>此文件于 31 January 2026 at 00:32:08 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>