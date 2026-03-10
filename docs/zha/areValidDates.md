# areValidDates

## 说明

Caeuq gyoengq array miz mbouj gwnz gyaeuj laux daengz gwnz `Date` objects ndei hoz.

### 使用场景

Yongh `areValidDates` ndei validate array user-provided hoz API-provided, caeuq gyoengq ndei doengh daeuj operations (
sorting, range checks, formatting) mbouj gwnz lo, gyoengq daengz gwnz entry gwnz `Date` objects ndei hoz laux list mbouj
gwnz gyaeuj.

> **以下为 TypeScript 用法：**
>
> `areValidDates` gwnz `false` gyoengq array gyaeuj; gyoengq ndei gwnz array gwnz miz mbouj gwnz gyaeuj ndei, caeuq
> gyoengq ndei yongh haenx validation step.

### 优点

- `true` laux gwnz miz gyoengq daeuj gyoengq mbouj gwnz `Date` instance (mbouj gwnz daeuj gyoengq mbouj hoz laux
  `new Date('invalid')`).
- Mboq rox input gwnz gyaeuj laux `false`, gyoengq miz gwnz ndei rox gwnz daeuj gyoengq miz yiengh, mbouj gwnz gyaeuj.
- Cungj miz gwnz check booleans guard-style, yooj gwnz caeuq gyoengq ndei gaij gyoengq validation daengz.

## 用法

### 语法

函数：

- `areValidDates(array)`

参数：

- `array`: Array ndei check, daengz miz gwnz `Date` objects.

### 本地函数导入

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // true
console.log(areValidDates(b)); // false
console.log(areValidDates(c)); // false
console.log(areValidDates(d)); // false

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areValidDates(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>此文件于 30 January 2026 at 14:34:51 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>