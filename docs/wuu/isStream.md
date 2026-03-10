# isStream

## 说明

`isStream` 用来检查给定个值是不是 stream 对象（Node.js 类 stream、`ReadableStream` 或 `WritableStream`）。

### 使用场景

校验输入：伊可能是普通对象也可能是 stream（比方讲文件上传、HTTP body、或者处理流水线），然后根据值到底是不是 stream 来分支处理逻辑。

> **给 TypeScript 用户的提示：**
>
> 用 `isStream` 先把 `unknown` 缩窄了再去调用 stream 方法；伊会识别 Node.js 类 stream 对象（通过 `pipe`/`on`）以及 Web
> Streams（`ReadableStream`/`WritableStream`，当这些全局对象存在个辰光）。

### 优势

- 通过检查有无 `pipe` 跟 `on` 函数，安全识别常见 Node.js 类 stream 对象。
- 也支持 Web Streams：当环境里有 `ReadableStream` 跟 `WritableStream` 时会识别出来。
- 返回简单个布尔结果（`true`/`false`），适合用来做类型守卫跟分支逻辑。

## 用法

### 语法

函数：

- `isStream(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream 像是流；侬好放心用常用个流 API
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isStream(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isStream](../_analysis/isStream.md)

<br>

---

<small>该文件于 30 January 2026 at 23:43:37 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>