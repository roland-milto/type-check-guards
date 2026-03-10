# isFilledArray

## 说明

检查 `value` 是否为至少包含一个元素的数组，并返回 `true` 或 `false`。

### 使用场景

在迭代、访问第一个元素或应用需要至少一个条目的逻辑之前，使用 `isFilledArray` 验证传入数据（例如 API 负载、表单值、配置）。

> **给 TypeScript 用户的提示：**
>
> `isFilledArray` 是一个运行时守卫，返回布尔值；它不会在确认数组非空之外进一步缩小元素类型。

### 优势

- 使用 `Array.isArray` 和长度检查对非空数组进行简单、快速的检查。
- 有助于避免当代码假设数组至少包含一个元素时出现运行时错误。
- 清晰的布尔结果：对非空数组返回 `true`，否则返回 `false`。

## 用法

### 语法

函数：

- `isFilledArray(value)`

参数：

- `value`: 要检查其是否为非空数组的值。

### 本地函数导入

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input 在运行时是一个非空数组
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFilledArray(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>该文件于 2026年2月6日 11:49:34 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>