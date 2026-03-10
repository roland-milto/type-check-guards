# isError

## 说明

检查给定的 `value` 是否为 `Error` 的实例。

### 使用场景

当你收到一个 `unknown` 值（例如来自 `catch` 块、回调或外部库），并且需要在读取 `message`、`name` 或 `stack` 之前安全地判断它是否为
`Error` 时，使用 `isError`。

> **给 TypeScript 用户的提示：**
>
> 在将 `unknown` 值（例如来自 `catch`）当作 `Error` 处理之前，使用 `isError` 进行守卫。

### 优势

- 提供一种简单的运行时检查，用于判断某个值是否为 `Error` 实例。
- 在访问 `message` 或 `stack` 等 `Error` 属性之前，帮助对未知输入进行类型收窄。
- 在处理来自 `catch`、外部 API 或无类型来源的值时，降低运行时异常的风险。

## 用法

### 语法

函数：

- `isError(value)`

参数：

- `value`: 要与 `Error` 类型进行检查的值。

### 本地函数导入

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isError(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isError](../_analysis/isError.md)

<br>

---

<small>该文件于 6 February 2026 at 12:45:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>