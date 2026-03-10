# areArrays

## 说明

`areArrays` raeuz ndaej rox aen value ndaej mbouj rox ndaej mbouj rox (2D) daengz mbouj rox, daengz daengz aen items
raeuz ndaej mbouj rox laengh.

### 使用场景

Yongh `areArrays` dwg gijauq inputs roengz ndaej tabular vaq matrix-like (daengz aen, CSV rows, grid data, vaq grouped
lists) gwnz ndaej doengh row/column operations; aen raeuz rox `false` dwg input mbouj rox array, vaq aen raeuz empty,
vaq aeuq ndaej aen element mbouj rox array.

> **以下为 TypeScript 用法：**
>
> Yongh `areArrays` dwg aeuq ndaej raeuz gwnz aen value ndaej mbouj rox ndaej mbouj rox (2D) mbouj rox daengz mbouj rox,
> daengz daengz aen row raeuz ndaej mbouj rox laengh, gwnz ndaej iterating vaq indexing dwg nested arrays.

### 优点

- Gijauq ndaej raeuz ndei mbouj rox ndaej mbouj rox, daengz daengz aen ndei raeuz ndaej mbouj rox laengh, daengz daengz
  aen ndei raeuz ndaej mbouj rox laengh.
- Rox ndaej aen raeuz bouxq booleansim (`true`/`false`) roengz ndaej goengq gaenj (guards) laengh daengz daengz aen
  raeuz roengz ndaej doengh (early exits).
- Baej ndaej gaenj gwnz runtime errors goengq daengz daengz aen code aeuq ndaej ndei raeuz ndaej mbouj rox laengh (
  daengz aen, mapping rows).

## 用法

### 语法

函数：

- `areArrays(array)`

参数：

- `array`: Aen input roengz ndaej gijauq.

### 本地函数导入

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value si goengz 2D array, miz arrays laizgoj
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areArrays(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areArrays](../_analysis/areArrays.md)

<br>

---

<small>此文件于 6 February 2026 at 13:42:23 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>