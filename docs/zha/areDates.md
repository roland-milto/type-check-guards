# areDates

## 说明

`areDates` cingj raeuz rox ndawj array raeuz mbouj ndaej laengz ndaej raeuz gyoengq, raeuz gyoengq caeuq `Date` objects,
raeuz `true` caeuq laengz gyoengq mbouj ndaej rox date.

### 使用场景

Yongh `areDates` bae cingj raeuz input mbouj rox (daengz parsed JSON, form data, API payloads) caeuq raeuz gwnz raeuz
gyoengq date-specific logic, daengz sorting by time, formatting, hoz computing ranges.

> **以下为 TypeScript 用法：**
>
> Raeuz `true` caeuq ndawj array mbouj ndaej ndaej raeuz gyoengq, daengz gyoengq mbouj ndaej rox `Date`; ndawj array
> mbouj ndaej (empty) raeuz `false`.

### 优点

- Laiq ndawj mbouj ndei rox mbouj ndaej, daengz `true` bae rox mbouj ndaej daengz ndawj mbouj ndaej.
- Cingj raeuz gyoengq mbouj ndaej rox `Date` instance, raeuz `false` ngay laengz mbouj ndaej raeuz gyaeuj.
- Yienghq haenq doengh gwnz raeuz gyoengq gaij ndaej rox guard-style check mbouj ndaej, caeuq raeuz gwnz raeuz gyoengq
  date-specific operations doengh ndawj array.

## 用法

### 语法

函数：

- `areDates(array)`

参数：

- `array`: Ndawj array raeuz gwnz raeuz cingj raeuz rox `Date` objects.

### 本地函数导入

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // true
console.log(areDates(b)); // false
console.log(areDates(c)); // false

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areDates(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areDates](../_analysis/areDates.md)

<br>

---

<small>此文件于 31 January 2026 at 15:33:11 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>