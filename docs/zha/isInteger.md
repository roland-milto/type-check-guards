# isInteger

## 说明

Cingj rox leih `value` ndaej mbouj laux safe integer number.

### 使用场景

Rox leih input mbouj ndaej cingj (daengz query params, JSON payloads, environment variables) gyaeuj ndaej yongh haenq
integer lai yongh haenq array indices, pagination, counters, wa database IDs.

> **以下为 TypeScript 用法：**
>
> Yongh `isInteger` lai rox leih input mbouj rox gwnz, caeuq yongh laux numeric integer; raeuz `true` doengh gij value
> youq haenq `typeof value === "number"` caeuq `Number.isSafeInteger(value)`.

### 优点

- Gij rox leih ndaej mbouj: raeuz `true` doengh gij input laux laux daeuj mbouj daengz laux ndaej mbouj safe integer.
- Cingj gaij bouxgwnz rox leih ndaej mbouj: string daengz "5" raeuz raemx `false`.
- Cingj gaij non-integer caeuq unsafe integer, gaij ndaej yongh haenq ID, counter, caeuq array indexing.

## 用法

### 语法

函数：

- `isInteger(value)`

参数：

- `value`: Gij value youq haenq rox leih ndaej mbouj laux integer.

### 本地函数导入

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // 真
const b = isInteger(-100);   // 真
const c = isInteger("5");    // 假
const d = isInteger(5.5);    // 假
const e = isInteger(null);   // 假

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isInteger(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isInteger](../_analysis/isInteger.md)

<br>

---

<small>此文件于 31 January 2026 at 00:52:05 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>