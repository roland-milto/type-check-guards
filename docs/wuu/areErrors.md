# areErrors

## 说明

检查一个数组是不是非空，而且只包含 `Error` 对象，返回 `true` 或 `false`。

### 使用场景

在迭代、记录日志或者重新抛出之前，先验证运行时提供个 `unknown[]`（比方讲汇总个失败、校验结果、或者反序列化数据）是不是一个非空个
`Error` 对象列表。

> **给 TypeScript 用户的提示：**
>
> `areErrors` 只有在数组里向有内容、而且每一项侪是 `Error` 辰光才会返回 `true`；空数组，或者有任何一个元素勿是 `Error`，侪会返回
`false`。

### 优势

- 确保每个元素侪是 `Error` 实例，方便安全个错误处理搭日志记录。
- 拒绝空数组，防止意外个“没错误”状态当成功能正常个错误列表来用。
- 处理 `unknown[]` 输入（比方讲来自 API 或 `catch` 代码块）辰光，作为运行时守卫蛮好用。

## 用法

### 语法

函数：

- `areErrors(array)`

参数：

- `array`: 要检查里向有无 `Error` 对象个数组。

### 本地函数导入

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value 是一只非空个 Error 对象数组
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

<small>该文件于 6 February 2026 at 12:36:15 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>