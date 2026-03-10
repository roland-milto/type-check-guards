# arePrimitives

## 说明

`arePrimitives` cawz ndaej gwnz raeuj gwnz gwnz elements doengh aen array ndeu gwnz mbouj empty laux, raeuj primitive
types rox.

### 使用场景

Cawz ndaej incoming data (daengz query parameters, CSV row values, rox aen list of IDs/tags) ndaej raeuj gwnz laux
primitive values mbouj aeuq gwnz laux, daengz gwnz ndaej serialize, hash, log, rox gwnz ndaej songh gwnz daengz APIs
ndeu gwnz mbouj aeuq objects.

> **以下为 TypeScript 用法：**
>
> Yongh `arePrimitives` ndeu gwnz ndaej gwnz cingq `unknown[]` ndaej raeuj gwnz laux primitive values (string, number,
> bigint, boolean, symbol, undefined, rox null) mbouj aeuq gwnz laux, daengz gwnz ndaej gwnz cingq gwnz gyaeuj gwnz
> processing.

### 优点

- Gaejgoj `true` ndeu gwnz ndaej rox, daengz gwnz gyaeuj raeuj gwnz laux (primitive) haenq, daengz gwnz gyaeuj gwnz
  “mbouj objects/functions” aen arrays.
- Faiq cawz: rox gwnz gyaeuj `false` ndeu gwnz ndaej raeuj gwnz laux (non-primitive) haenq.
- Aeu rox gwnz gyaeuj `false` daengz non-arrays caeuq empty arrays (doengh filled-array check), daengz gwnz gyaeuj mbouj
  aeuq gwnz input mbouj hoz.

## 用法

### 语法

函数：

- `arePrimitives(array)`

参数：

- `array`: Array ndeu gwnz ndaej cawz gwnz raeuj gwnz laux (primitive) haenq.

### 本地函数导入

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // true
const r2 = arePrimitives(b); // true
const r3 = arePrimitives(c); // false
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.arePrimitives(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>此文件于 31 January 2026 at 00:07:22 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>