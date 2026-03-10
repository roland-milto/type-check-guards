# isIndexFound

## 说明

`isIndexFound` 判断给定个值是不是非负整数，用来表示索引寻着咧。

### 使用场景

在用数组或字符串下标访问之前，验证搜索结果是不是可用个索引（整数 `>= 0`），防止不小心用上 `-1` 或者非数字值。

> **给 TypeScript 用户的提示：**
>
> 在 `indexOf`、`findIndex` 或者自定义搜索之后用 `isIndexFound`，因为 `-1`（或者别个无效值）可能表示“没寻着”。当它返回 `true`
> 时，这个值就是 number，拿来当数组/字符串索引用是安全个。

### 优势

- 提供一个简单个类型守卫，通过检查是不是非负整数来判断索引是不是寻着咧。
- 只对有效个索引样值（整数 `>= 0`）返回 `true`，拒绝负数、非整数同非数字。
- 帮你避免同返回“没寻着”用 `-1` 个 API 打交道时出现 off-by-one 同哨兵值错误。

## 用法

### 语法

函数：

- `isIndexFound(value)`

参数：

- `value`: 要检查个值：看它是不是非负整数。

### 本地函数导入

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // 这咧 idx 是个数字，并且 >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// 用 indexOf 个典型用法
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

<small>该文件于 31 January 2026 at 00:45:14 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>