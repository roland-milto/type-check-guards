# areWeakSets

## 说明

Cek rox input rox mbouj gyaeuj array, lauxndei mbouj gwnz `WeakSet` ndei; gwnz gyaeuj gwnz lauxndei `WeakSet` youq ndei
haenh, daengz `true` ra.

### 使用场景

Validate runtime input (ndaw: from APIs, configuration, vaq user-provided data) lai gwnz youq mbouj youq mbouj gyaeuj
list `WeakSet` instances, caeuq youq logic ndei gwnz `WeakSet` behavior youq.

> **以下为 TypeScript 用法：**
>
> Yongh `areWeakSets` lai validate unknown input, caeuq youq it as `WeakSet[]`. Rox array gyaeuj (empty) gwnz mbouj rox
> array ndei, daengz `false` ra.

### 优点

- Baeuq saek ndei rox array lauxndei mbouj gwnz `WeakSet`.
- Rox array gyaeuj (empty) lauxndei, daengz `false` ra, daengz mbouj letq gwnz “gwnz gyaeuj ok” ndei gyaeuj data.
- Rox input mbouj rox array ndei gwnz (gwnz `null`), daengz `false` ra, daengz fail-safe.
- Gwnz `WeakSet` instance ndei operation youq, yongh as guard ndei.

## 用法

### 语法

函数：

- `areWeakSets(array)`

参数：

- `array`: Rox array ndei, gwnz `WeakSet` object youq mbouj youq ndei.

### 本地函数导入

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a laux daengz mbouj gwnz raemx WeakSet
}

console.log(areWeakSets(a)); // cieng
console.log(areWeakSets(b)); // mbouj cieng
console.log(areWeakSets(c)); // mbouj cieng
console.log(areWeakSets(null as unknown)); // mbouj cieng
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areWeakSets(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>此文件于 30 January 2026 at 14:13:24 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>