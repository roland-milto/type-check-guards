# areNumbers

## 说明

`areNumbers` cek ndaej mbouj rox: value hai aen non-empty array, caeuq caeuq element daengz hai number.

### 使用场景

Validate data ndei rox user-provided rux API-provided, raeuz gyaeuj ndaej mbouj rox non-empty array of numbers, gwnz
mbouj rox computing totals, averages, rux gwnz numeric aggregations.

> **以下为 TypeScript 用法：**
>
> Yongh `areNumbers` raeuz validate unknown arrays gwnz mbouj rox numeric calculations; deij gyaeuj `false` daengz haenh
> empty arrays, laengh aeu arrays ndei rox aen ndaej mbouj rox non-number value.

### 优点

- Gyaeuj `true` daengz haenh ndaej mbouj rox, daengz haenh ndaej mbouj rox, daengz haenh ndaej mbouj rox: input laengh
  aeu aen ndaej mbouj rox array mbouj gwnz, laengh aeu aen ndaej mbouj rox, caeuq caeuq element daengz laengh aeu aen
  ndaej mbouj rox number.
- Cingqjiz false positive: mbouj aeu empty array, mbouj aeu input mbouj hai array.
- Yongh daengz guard gwnz numeric operation (e.g., summing, averaging) raeuz mbouj aeu runtime error.

## 用法

### 语法

函数：

- `areNumbers(array)`

参数：

- `array`: Array ndei rox caeuq, aeu raeuz cek number element.

### 本地函数导入

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areNumbers(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>此文件于 30 January 2026 at 13:06:42 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>