# isFilledArray

## 说明

Cek `value` aenqsaeuj array goekdaengz at least itembouj ndei, laebz daengz `true` vaenz `false`.

### 使用场景

Yongh `isFilledArray` raeuj validate incoming data (e.g., API payloads, form values, configuration) mbouj gwnz, gyoengq
youq iterating, aeuq daeuj itembouj ndei, vaenz apply logic goekdaengz at least itembouj ndei.

> **以下为 TypeScript 用法：**
>
> `isFilledArray` aenqsaeuj runtime guard, laebz daengz booleen; it mbouj narrow element types, cingj raeuj ok daengz
> array mbouj vunz.

### 优点

- `Array.isArray` laebz laengh daengz, aenqsaeuj, faast cek daengz aenqsaeuj mbouj vunz array.
- Bouxcoz runtime error, goekdaengz code raeuj array aeuq at least itembouj ndei.
- Booleen gyaeuj: array mbouj vunz laebz daengz `true`, daengz mbouj aenqsaeuj laebz daengz `false`.

## 用法

### 语法

函数：

- `isFilledArray(value)`

参数：

- `value`: Ciengz value raeuj cek, raeuj gwnz it aenqsaeuj array mbouj vunz.

### 本地函数导入

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input laengz saek aen mbouj raeuz daengz aen mbouj raeuz haenq
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isFilledArray(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>此文件于 6 February 2026 at 11:49:35 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>