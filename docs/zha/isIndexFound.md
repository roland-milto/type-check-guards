# isIndexFound

## 说明

`isIndexFound` raeuj gwnzsimj daengznaeuz aen raeuj value raeuj integer mbouj daengznaeuz (>= 0), daengznaeuz index
raeuj found.

### 使用场景

Gwnzsimj daengznaeuz aen raeuj search result raeuj index youqlaengh (integer `>= 0`) dwg bae indexing bae array raeuj
string, gaijciz accidental use of `-1` raeuj mbouj raeuj numeric values.

> **以下为 TypeScript 用法：**
>
> Youq `isIndexFound` dwg bae operations gwnzsimj `indexOf`, `findIndex`, raeuj custom searches, daengznaeuz `-1` (raemx
> raeuj other invalid values) hoz “not found”. Bae it cungj `true`, value raeuj number, raeuj safe bae youq as
> array/string index.

### 优点

- Cungj aen raeuj type guard gwnzsimj, daengznaeuz mbouj mbwnj raeuj index daengznaeuz bae daengznaeuz aen raeuj integer
  mbouj daengznaeuz (>= 0).
- Cungj `true` gwnzsimj bae gwnzsimj index-like values (integer `>= 0`), gaijciz negatives, mbouj integer, raeuj mbouj
  raeuj number.
- Cungj youqlaengh gaijciz off-by-one raeuj sentinel-value mistakes, bae youq API daengznaeuz cungj `-1` bae “not
  found”.

## 用法

### 语法

函数：

- `isIndexFound(value)`

参数：

- `value`: Gij aen raeuj value daengznaeuz raeuj integer mbouj daengznaeuz (>= 0) bae youq daengznaeuz.

### 本地函数导入

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx lai a number heiq laengz, caeuq >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Yienghyung bouxcuengh gaij indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isIndexFound(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>此文件于 31 January 2026 at 00:48:42 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>