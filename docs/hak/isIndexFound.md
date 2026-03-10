# isIndexFound

## 说明

`isIndexFound` 判斷指定个值係毋係非負整數，用來表示索引有尋著。

### 使用场景

佇用陣列或字串做索引之前，先驗證搜尋結果係毋係可用个索引（整數 `>= 0`），避免不小心用著 `-1` 或毋係數字个值。

> **给 TypeScript 用户的提示：**
>
> 佇 `indexOf`、`findIndex` 或自訂搜尋這兜操作後使用 `isIndexFound`，因為 `-1`（或其他無效值）可能表示「尋毋著」。當佢回傳
`true` 時，該值就係數字，做陣列/字串索引使用係安全个。

### 优势

- 提供一個簡單个型別守衛，透過檢查係毋係非負整數來判斷有無尋著索引。
- 淨會對有效个索引樣值（整數 `>= 0`）回傳 `true`，會拒絕負數、毋係整數、還有毋係數字个值。
- 佇處理會用 `-1` 表示「尋毋著」个 API 時，幫助避免 off-by-one 同哨兵值（sentinel-value）个錯誤。

## 用法

### 语法

函数：

- `isIndexFound(value)`

参数：

- `value`: 愛檢查个值：看佢係毋係非負整數。

### 本地函数导入

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx 係數字，這下而且係 >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// 一般用法：配合 indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isIndexFound(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>该文件于 31 January 2026 at 00:46:04 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>