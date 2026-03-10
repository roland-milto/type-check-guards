# areEqual

## 说明

`areEqual` gwnz gyoengq gij roxnaengz daengz gwnz daengz laux bouxraeuz ndei array daengz gwnz daengz laux gyoengq gij
expected, gveih `true` roxnaengz ndei array mbouj roengz (non-empty) laengz daengz gwnz daengz laux bouxraeuz daengz
gwnz daengz laux.

### 使用场景

Gwnz gyoengq gij roxnaengz ndei list daengz gwnz daengz laux bouxraeuz ndei gij bouxraeuz ok (duz: daengz status flags
daengz `true`, daengz roles daengz `"admin"`, ranz daengz numeric entries daengz gyoengq gij ndei constant ndei aeu),
laengz gwnz gyoengq gij input roengz daengz mbouj hoz (`false`).

> **以下为 TypeScript 用法：**
>
> Yongh `areEqual` ndei mwngz aeu strict all-items check; gwnz gveih `false` ndei array roengz, laengz ndei input mbouj
> roxnaengz array roxnaengz mbouj filled.

### 优点

- Gveih `true` ndei roxnaengz gwnz gyoengq gij bouxraeuz daengz gwnz daengz laux gyoengq gij gwnz; mbouj gwnz gveih
  `false`.
- Raemx raeuz: gwnz gyoengq gij bouxraeuz mbouj daengz gwnz daengz laux, lajmbwn gwnz gyoengq.
- Bouxraeuz gyoengq gij input mbouj hoz: ndei input mbouj roxnaengz array gwnz gyoengq gij (filled), gveih `false`.

## 用法

### 语法

函数：

- `areEqual(value, expected)`

参数：

- `value`: Array ndei gwnz gyoengq gij.
- `expected`: Gij bouxraeuz ndei gwnz gyoengq gij daengz gwnz daengz laux bouxraeuz array.

### 本地函数导入

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areEqual(value, expected)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areEqual](../_analysis/areEqual.md)

<br>

---

<small>此文件于 31 January 2026 at 23:53:01 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>