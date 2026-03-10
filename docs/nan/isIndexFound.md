# isIndexFound

## 说明

`isIndexFound` 判断一个指定的值敢是非负整数，表示一个索引有揣着。

### 使用场景

在用索引去取 array 抑是 string 以前，先验证搜寻结果敢是一个会当用的索引（整数 `>= 0`），避免无意间使用 `-1` 抑是非数字的值。

> **给 TypeScript 用户的提示：**
>
> 做 `indexOf`、`findIndex` 抑是自订搜寻这款操作了后，建议使用 `isIndexFound`，因为 `-1`（抑是其他无效值）可能表示「揣无」。当伊回传
`true` 的时，彼个值就是数字，而且用做 array/string 的索引是安全的。

### 优势

- 提供一个简单的类型守卫，通过检查一个非负整数来侦测一个索引有揣着。
- 只有对有效的索引款值（整数 `>= 0`）才会回传 `true`，会拒绝负数、非整数、佮非数字。
- 佮会回传 `-1` 表示「揣无」的 API 配合使用时，帮助避免 off-by-one 佮哨兵值（sentinel-value）的错误。

## 用法

### 语法

函数：

- `isIndexFound(value)`

参数：

- `value`: 欲检查的值，看伊敢是一个非负整数。

### 本地函数导入

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx tīng-sî sī chi̍t ê sù-jī, koh chhiūⁿ >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Thong-siông ê iōng-hoat kap indexOf
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

<small>该文件于 31 January 2026 at 00:46:59 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>