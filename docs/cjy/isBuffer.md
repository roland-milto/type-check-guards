# isBuffer

## 说明

检查一个值系咪 Node.js `Buffer`，并返回 `true` 或 `false`。

### 使用场景

喺运行时校验输入（比如 API payload、文件数据、或者消息缓冲区），确保处理之前个值系 `Buffer`；并且喺 Node.js 之外运行、可能冇
`Buffer` 嘅情况下，都可以可靠噉得到 `false`。

> **给 TypeScript 用户的提示：**
>
> 用 `isBuffer` 喺调用 Buffer 专用方法之前，将 `unknown` 值收窄到 `Buffer`。

### 优势

- 用 `Buffer.isBuffer` 安全检测 Node.js `Buffer` 实例。
- 喺冇 `Buffer` 嘅环境会返回 `false`，避免运行时错误。
- 支持 `unknown` 输入，适合做运行时校验同类型收窄。

## 用法

### 语法

函数：

- `isBuffer(value)`

参数：

- `value`: 要测试嘅值。

### 本地函数导入

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // 这块儿 a 是 Buffer
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

<small>该文件于 31 January 2026 at 16:31:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>