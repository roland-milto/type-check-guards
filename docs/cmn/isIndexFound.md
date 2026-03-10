# isIndexFound

## 说明

`isIndexFound` 用于判断给定值是否为非负整数，从而表示已找到索引。

### 使用场景

在对数组或字符串进行索引之前，验证搜索结果是否为可用索引（整数 `>= 0`），防止意外使用 `-1` 或非数值。

> **给 TypeScript 用户的提示：**
>
> 在执行如 `indexOf`、`findIndex` 或自定义搜索等操作后使用 `isIndexFound`，这些操作可能用 `-1`（或其他无效值）表示“未找到”。当它返回
`true` 时，该值是数字，并且可以安全地用作数组/字符串索引。

### 优势

- 提供一个简单的类型守卫，通过检查是否为非负整数来判断是否找到了索引。
- 仅对有效的类索引值（整数 `>= 0`）返回 `true`，拒绝负数、非整数以及非数字。
- 在处理那些用 `-1` 表示“未找到”的 API 时，帮助避免 off-by-one 和哨兵值错误。

## 用法

### 语法

函数：

- `isIndexFound(value)`

参数：

- `value`: 要检查其是否为非负整数的值。

### 本地函数导入

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // 此处 idx 是一个数字，并且 >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// 使用 indexOf 的典型用法
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

<small>该文件于 31 January 2026 at 00:45:20 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>