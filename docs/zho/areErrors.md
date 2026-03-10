# areErrors

## 说明

检查一个数组是否非空且仅包含 `Error` 对象，并返回 `true` 或 `false`。

### 使用场景

在迭代、记录日志或重新抛出之前，验证运行时提供的 `unknown[]`（例如聚合的失败、校验结果或反序列化的数据）是否为非空的 `Error`
对象列表。

> **给 TypeScript 用户的提示：**
>
> `areErrors` 仅在数组已填充且每一项都是 `Error` 时返回 `true`；对于空数组或任一元素不是 `Error` 的情况返回 `false`。

### 优势

- 确保每个元素都是 `Error` 实例，从而实现安全的错误处理与日志记录。
- 拒绝空数组，防止将意外的“没有错误”状态当作有效的错误列表。
- 在处理 `unknown[]` 输入（例如来自 API 或 `catch` 块）时，可作为运行时守卫很好地工作。

## 用法

### 语法

函数：

- `areErrors(array)`

参数：

- `array`: 要检查是否包含 `Error` 对象的数组。

### 本地函数导入

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value 是一个非空的 Error 对象数组
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areErrors(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areErrors](../_analysis/areErrors.md)

<br>

---

<small>该文件于 2026年2月6日 12:36:21 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>