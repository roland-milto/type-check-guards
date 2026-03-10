# areStreams

## 说明

`areStreams` 用来判断一个值是不是已填充个数组，并且里向每个元素侪是 `Stream`。

### 使用场景

在对用户提供个或者动态构建个集合（比方讲多个文件读取 stream）做 pipe、resume 或者其他成组操作之前，先验证一记。

> **给 TypeScript 用户的提示：**
>
> 用 `areStreams` 来在把未知输入当作 `Stream[]` 之前先做校验；只有当该值是非空数组，并且每个元素侪是 `Stream` 时，才会返回
`true`。

### 优势

- 确保输入是一个已填充个数组，里向每个元素侪是 `Stream`。
- 提供简单个 `true`/`false` 守卫，用来在处理之前校验 stream 集合。
- 快速失败：一旦发现有元素勿是 `Stream`，立刻返回 `false`。
- 帮忙防止运行时错误，避免代码假定所有项目侪是 `Stream` 实例。

## 用法

### 语法

函数：

- `areStreams(array)`

参数：

- `array`: 要检查个数组，用来判断里向元素是不是 Stream 对象。

### 本地函数导入

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input 是装满个 Stream 对象个数组
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

<small>该文件于 30 January 2026 at 23:36:19 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>