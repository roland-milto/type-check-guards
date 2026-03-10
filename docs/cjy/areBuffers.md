# areBuffers

## 说明

`areBuffers` 检查提供个值是不是一个非空、填满个数组，并且每个元素都是 `Buffer`；符合就返回 `true`，否则返回 `false`。

### 使用场景

验证传入个 chunk 数组（比如来自 stream、文件上传、或者网络包），确保所有部分都是 `Buffer` 实例，再去拼接、解码，或者传给加密/二进制处理函数。

> **给 TypeScript 用户的提示：**
>
> 用 `areBuffers` 来验证 `unknown[]`，再去调用像 `Buffer.concat` 这种 Buffer 专用 API，确保只有当每个元素都是 `Buffer`
> 个时候函数才返回 `true`。

### 优势

- 确保输入里头每一个元素都是 Node.js `Buffer` 实例，只有整个数组都符合才返回 `true`。
- 通过要求一个非空、填满个数组来尽早拒绝无效输入；对空数组或者非数组返回 `false`。
- 适合作为执行只针对 buffer 个操作之前个守卫（比如：拼接、哈希、二进制协议）。

## 用法

### 语法

函数：

- `areBuffers(array)`

参数：

- `array`: 要检查是不是 buffer 实例个数组。

### 本地函数导入

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBuffers(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>该文件于 31 January 2026 at 16:24:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>