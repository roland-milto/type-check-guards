# isBuffer

## 说明

检查某个值是否为 Node.js 的 `Buffer`，并返回 `true` 或 `false`。

### 使用场景

在运行时校验输入（例如 API 载荷、文件数据或消息缓冲区），以确保在处理之前该值是一个 `Buffer`；并且在 Node.js 之外运行、可能不存在
`Buffer` 的情况下，可靠地得到 `false`。

> **给 TypeScript 用户的提示：**
>
> 在调用 `Buffer` 专用方法之前，使用 `isBuffer` 将 `unknown` 值收窄为 `Buffer`。

### 优势

- 使用 `Buffer.isBuffer` 安全地检测 Node.js 的 `Buffer` 实例。
- 在 `Buffer` 不可用的环境中返回 `false`，避免运行时错误。
- 适用于 `unknown` 输入，使其适合用于运行时校验与类型收窄。

## 用法

### 语法

函数：

- `isBuffer(value)`

参数：

- `value`: 要测试的值。

### 本地函数导入

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // 此处的 a 是一个 Buffer
  console.log(a.toString("utf8"));
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBuffer(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>该文件于 2026年1月31日 16:34:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>