# areFilledArrays

## 说明

`areFilledArrays` gijauq ndaej array song-cengz (2D) mbouj raeuj, laeuj daengz gyoengq subarray doengh mbouj raeuj.

### 使用场景

Yongh `areFilledArrays` daeuj gijauq biaogeih rox matrix yiengh ndei input (dawz: CSV hangz, grid daeta, grouped
ginjgoz), yitdingh hoz ndei ndaej: youq saek yit goek subarray, laeuj mbouj youq subarray raeuj.

> **以下为 TypeScript 用法：**
>
> Yongh `areFilledArrays` goengq neix bae: ndei youq yiuq gyoengq yit goek 2D array youq saek yit hangz, laeuj daengz
> hangz doengh youq saek yit goek yiengh, cingj goengq youq iterating rox indexing.

### 优点

- Gijauq daih rox ndei mbouj raeuj ndaej, laeuj gijauq daih rox ndei mbouj raeuj ndaej, raeuj `true` cingj goengq daengz
  song goek tiaojkienh doengh mbouj.
- Daeuj raeuj yiengh moqnyied ndei ndei subarray (dawz: soj, saek, dox, array ndei array) yawj, yiengh goengq gijauq
  array “mbouj raeuj” bae, mbouj gijauq neixrongz ndei yiengh.
- Cungj raeuj yit goek booleenh ginjgoz (`true`/`false`) yooj guenjgoz (guard) gyoengq youq gvanqhaeuj song-cengz (2D)
  daeta.

## 用法

### 语法

函数：

- `areFilledArrays(array)`

参数：

- `array`: Array song-cengz (2D) daeuj gijauq.

### 本地函数导入

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // 真
console.log(areFilledArrays(b)); // 真
console.log(areFilledArrays(c)); // 真
console.log(areFilledArrays(d)); // 假
console.log(areFilledArrays(e)); // 假
console.log(areFilledArrays(f)); // 假

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areFilledArrays(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>此文件于 6 February 2026 at 12:00:04 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>