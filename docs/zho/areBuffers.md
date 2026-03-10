# areBuffers

## 说明

`areBuffers` 用于检查所提供的值是否为一个非空、已填充的数组，且其中每个元素都是 `Buffer`；若是则返回 `true`，否则返回
`false`。

### 使用场景

验证传入的分块数组（例如来自流、文件上传或网络数据包），以确保所有部分都是 `Buffer` 实例，然后再进行拼接、解码，或将其传递给加密或二进制处理函数。

> **给 TypeScript 用户的提示：**
>
> 在调用 `Buffer.concat` 等 Buffer 专用 API 之前，使用 `areBuffers` 来验证 `unknown[]`，确保仅当每个元素都是 `Buffer`
> 时函数才返回 `true`。

### 优势

- 确保输入中的每个元素都是 Node.js `Buffer` 实例，仅当整个数组都匹配时才返回 `true`。
- 通过要求为非空且已填充的数组来尽早拒绝无效输入；对空数组或非数组返回 `false`。
- 适合作为执行仅适用于缓冲区的操作（例如拼接、哈希、二进制协议）之前的守卫。

## 用法

### 语法

函数：

- `areBuffers(array)`

参数：

- `array`: 要检查其元素是否为缓冲区实例的数组。

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

<small>该文件于 2026年1月31日 16:28:09 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>