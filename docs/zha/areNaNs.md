# areNaNs

## 说明

`areNaNs` raeujndei raemx gwnz gwnz ndei mbouj doengz `NaN` laux ndei array, laux deih rox `true` deih rox gwnz gwnz
ndei mbouj doengz `NaN`.

### 使用场景

Raeujndei raemx incoming data, laux `NaN` yongh daengz sentinel value, raeujndei gwnz gwnz ndei array gwnz doengz
`NaN` (daengz, raeujndei raemx gwnz gwnz missing ndei numeric series).

> **以下为 TypeScript 用法：**
>
> Yongh `areNaNs` laux ndei raeujndei raemx, gwnz ndei array raeujndei gwnz gwnz doengz sojmiz `NaN` ndei value (mboq
> daengz string-to-number coercion).

### 优点

- Gaejndaeuj `true` deih rox, gwnz gwnz ndei mbouj doengz `NaN` (gijngqienq gwnz gwnz ndei mbouj raeujndei).
- Mboq gaijqbiangq string laux daengz sojmiz; "NaN" gwnz daengz ndei mbouj `NaN`, raeujndei deih rox `false`.
- Deih rox `false` laux ndaej mbouj raemx (non-filled) ndei array, mbouj raeujndei gyaeujq `true` laux input mbouj
  ndaej (empty).

## 用法

### 语法

函数：

- `areNaNs(array)`

参数：

- `array`: Ndei array daengz raeujndei raemx `NaN` ndei value.

### 本地函数导入

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // true
const b = areNaNs([NaN, 1, NaN]); // false
const c = areNaNs([NaN, "NaN", NaN]); // false
const d = areNaNs([NaN, null, NaN]); // false
const e = areNaNs([] as unknown[]); // false
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areNaNs(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>此文件于 30 January 2026 at 15:54:28 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>