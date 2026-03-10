# areStrings

## 说明

`areStrings` roxnaengz gyoengq daih gwnz raeuz mbouj empty laengz gyoengq daih roengz ndei mbouj string, laengz ndaej
`true` gwnz raeuz ndei mbouj gwnz daengz.

### 使用场景

Roxnaengz external wa user-provided data (e.g., query params, JSON payloads, CSV fields) haej gwnz raeuz ndaej mbouj
empty list roengz ndei mbouj string gwnz raeuz doengh processing.

> **以下为 TypeScript 用法：**
>
> Yongh `areStrings` roxnaengz unknown arrays gwnz raeuz doengh string-only logic; deih ndaej `false` gwnz raeuz gyoengq
> daih empty arrays.

### 优点

- Bauq roxnaengz gyoengq daih roengz ndei mbouj, laengz ndaej `false` daengz gaij raeuz gyoengq daih roengz ndei mbouj (
  mixed-type arrays).
- Bauq roxnaengz gyoengq daih roengz ndei mbouj (empty arrays), so `true` gwnz raeuz gyoengq daih roengz ndei mbouj (
  non-empty) laengz roengz ndei mbouj string.
- Yongh haej gwnz raeuz runtime guard roxnaengz, ndei mbouj gwnz raeuz doengh string-only operations (e.g., `trim`,
  `toLowerCase`).

## 用法

### 语法

函数：

- `areStrings(value)`

参数：

- `value`: Expected type `string[]`.

### 本地函数导入

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input zai runtime la string[] maemj non-empty
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areStrings(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areStrings](../_analysis/areStrings.md)

<br>

---

<small>此文件于 30 January 2026 at 13:21:15 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>