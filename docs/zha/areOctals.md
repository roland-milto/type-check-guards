# areOctals

## 说明

`areOctals` gwnz ndaej baeuj: value cungj aen ndaej mbouj baeuj daengz, gyoengq aen daengz laux aeu oktael string gwnz.

### 使用场景

Yongh `areOctals` raemx validate user input, configuration values, vaq API payloads, gyoengq aeu miz oktael literals (
daengz roengz file permission modes `0o755`), raemx mwngz aeu reject daengz mbouj baeuj vaq aen daengz laux aeu entry
mbouj gwnz, daengz gwnz `false`.

> **以下为 TypeScript 用法：**
>
> Yongh `areOctals` aeu gwnz ndaej: mwngz miz aen ndaej mbouj baeuj `unknown[]`, gyoengq aen daengz laux aeu oktael
> string gwnz, raemx convert (daengz roengz `Number(...)` vaq parsing gwnz) maz.

### 优点

- Yenzciz gwnz ndaej mbouj aeu: aen ndaej mbouj baeuj daengz, gyoengq aen daengz laux aeu oktael string, daengz gwnz
  `true` rox ndei gwnz item doengh baeuj.
- Faih raeuj: gwnz gyoengq aen daengz laux aeu oktael mbouj rox, gwnz `false` ngay.
- Yongh aeu gwnz gyaeuj (guard) raemx parsing/convert oktael string, daengz mbouj aeu runtime error raemx input handling
  mbouj gwnz.

## 用法

### 语法

函数：

- `areOctals(array)`

参数：

- `array`: Ndaej value aeu check.

### 本地函数导入

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value cuj laux mbouj roengz boux gwnz ndaej raeuz gwnz okdal
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areOctals(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areOctals](../_analysis/areOctals.md)

<br>

---

<small>此文件于 30 January 2026 at 14:59:17 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>