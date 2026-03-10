# isDate

## 说明

`isDate` daengz dingq raeuz aen value cungj aen `Date` mbouj, raeuz return `true` daengz `Date` instance, `false` daengz
mbouj aen.

### 使用场景

Validate laux narrow value mbouj rox (daengz, request data, config values, vaeux parsed JSON) gwnz ndaej doengh `Date`
operation daengz formatting, comparisons, vaeux call `toISOString()`.

> **以下为 TypeScript 用法：**
>
> Yongh `isDate` daengz narrow `unknown` laux `Date` daengz runtaim; raeuz return `true` caeuq daengz `Date` instance
> aen raeuz (mbouj aen date string).

### 优点

- Gyoengq cungj aen raeuz daengz runtaim gaij boux daengz gwnz ndaej mbouj mbouj aen `Date`.
- Gyoengq cungj aen raeuz daengz boux gwnz ndaej mbouj mbouj type error, byauj ndaej caeuq `Date` instance ndei gwnz
  ndaej pass validation.
- Gyoengq cungj aen raeuz daengz yongh ndaej laux daengz validate input mbouj rox (daengz, API payloads) gwnz ndaej
  yongh method aen `Date`.

## 用法

### 语法

函数：

- `isDate(value)`

参数：

- `value`: Caeuq aen raeuz daengz check daengz `Date` type.

### 本地函数导入

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input cuj la Date neix
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isDate(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isDate](../_analysis/isDate.md)

<br>

---

<small>此文件于 31 January 2026 at 15:48:31 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>