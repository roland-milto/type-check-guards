# isError

## 说明

检查给定个 `value` 是不是 `Error` 个实例。

### 使用场景

当你收到一个 `unknown` 值（比如从 `catch` 块、回调，或者外部库来个），你需要安全个判断它是不是 `Error`，在读取 `message`、
`name` 或 `stack` 之前，就用 `isError`。

> **给 TypeScript 用户的提示：**
>
> 用 `isError` 来守住 `unknown` 值（比如从 `catch` 来个），再把它当作 `Error` 来用。

### 优势

- 提供一个简单个运行时检查，用来判断一个值是不是 `Error` 实例。
- 帮你在访问 `message` 或 `stack` 这类 `Error` 属性之前，先把未知输入缩小范围。
- 处理来自 `catch`、外部 API 或者无类型来源个值时，降低运行时异常个风险。

## 用法

### 语法

函数：

- `isError(value)`

参数：

- `value`: 要拿来同 `Error` 类型对照检查个值。

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

<small>该文件于 6 February 2026 at 12:44:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>