# areStreams

## 说明

`areStreams` 用于判断某个值是否为一个已填充的数组，并且其中每个元素都是 `Stream`。

### 使用场景

在对用户提供或动态构建的集合（例如多个文件读取流）进行管道传输、恢复（resume）或以组方式进行其他操作之前，先验证它们。

> **给 TypeScript 用户的提示：**
>
> 在将未知输入当作 `Stream[]` 处理之前使用 `areStreams` 进行验证；只有当该值是非空数组且每个元素都是 `Stream` 时，它才会返回
`true`。

### 优势

- 确保输入是一个已填充的数组，且每个元素都是 `Stream`。
- 在处理之前，为验证流集合提供一个简单的 `true`/`false` 守卫。
- 快速失败：一旦发现非 `Stream` 元素就立即返回 `false`。
- 当代码假定所有项都是 `Stream` 实例时，有助于防止运行时错误。

## 用法

### 语法

函数：

- `areStreams(array)`

参数：

- `array`: 要检查是否为 Stream 对象的数组。

### 本地函数导入

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input 是一个已填充的 Stream 对象数组
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areStreams(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areStreams](../_analysis/areStreams.md)

<br>

---

<small>该文件于 2026年1月30日 23:36:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>