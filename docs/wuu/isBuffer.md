# isBuffer

## 说明

检查一个值是不是 Node.js 个 `Buffer`，并返回 `true` 或 `false`。

### 使用场景

勒运行时校验输入（比方讲 API payload、文件数据、或者消息 buffer），处理之前先保证个值是 `Buffer`；并且勒 Node.js 以外运行、
`Buffer` 可能勿存在个辰光，也能稳稳当当拿到 `false`。

> **给 TypeScript 用户的提示：**
>
> 用 `isBuffer` 先把 `unknown` 值收窄到 `Buffer`，再去调用 Buffer 专用方法。

### 优势

- 用 `Buffer.isBuffer` 安全咾检测 Node.js 里向个 `Buffer` 实例。
- 勒 `Buffer` 用勿了个环境里返回 `false`，避免运行辰光出错。
- 支持 `unknown` 输入，适合做运行时校验搭类型收窄。

## 用法

### 语法

函数：

- `isBuffer(value)`

参数：

- `value`: 要测试个值。

### 本地函数导入

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a 迭 Buffer
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

<small>该文件于 31 January 2026 at 16:33:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>