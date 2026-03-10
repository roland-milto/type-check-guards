# isStream

## 说明

`isStream` 用于检查给定值是否为流对象（Node.js 类流、`ReadableStream` 或 `WritableStream`）。

### 使用场景

验证可能是普通对象或流的输入（例如文件上传、HTTP 请求体或处理管道），并根据该值是否为流来进行分支处理。

> **给 TypeScript 用户的提示：**
>
> 在调用流方法之前，使用 `isStream` 来收窄 `unknown`；它会识别 Node.js 类流对象（通过 `pipe`/`on`）以及在这些全局对象存在时的
> Web Streams（`ReadableStream`/`WritableStream`）。

### 优势

- 通过检查 `pipe` 和 `on` 函数，安全地检测常见的 Node.js 类流对象。
- 在可用时，也通过识别 `ReadableStream` 和 `WritableStream` 来支持 Web Streams。
- 返回一个简单的布尔结果（`true`/`false`），适用于类型守卫和分支逻辑。

## 用法

### 语法

函数：

- `isStream(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream 是类似流的；你可以安全地使用常见的流 API
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

<small>该文件于 2026年1月30日 23:43:45 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>