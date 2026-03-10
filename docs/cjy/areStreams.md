# areStreams

## 说明

`areStreams` 用来判断一个值系唔系装满咧个数组，并且里向每个元素都系 `Stream`。

### 使用场景

喺把用户提供个或者动态构建个集合（比如多个文件读取 stream）拿来 pipe、resume，或者当作一组来操作之前，先做校验。

> **给 TypeScript 用户的提示：**
>
> 用 `areStreams` 来校验未知输入，再把伊当作 `Stream[]` 来用；只有当值系非空数组并且每个元素都系 `Stream` 个辰光，伊才会返回
`true`。

### 优势

- 确保输入系一个装满咧个数组，里向每个元素都系 `Stream`。
- 提供简单个 `true`/`false` 守卫，用来喺处理之前校验 stream 集合。
- 快速失败：一旦发现有元素唔系 `Stream`，立刻返回 `false`。
- 帮手避免运行时错误，尤其系代码假设所有项目都系 `Stream` 实例个辰光。

## 用法

### 语法

函数：

- `areStreams(array)`

参数：

- `array`: 要检查个数组，用来判断里向有冇 `Stream` 对象。

### 本地函数导入

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input 系装满咧 Stream 对象个数组
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

<small>该文件于 30 January 2026 at 23:33:16 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>