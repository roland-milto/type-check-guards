# isStream

## 说明

`isStream` roxq raeuz gij aen daengz rox, yaek aen stream object (Node.js stream-like, `ReadableStream`, ro
`WritableStream`).

### 使用场景

Daengz rox inputs aeuq daengz yaek plain objects ro streams (yaek file uploads, HTTP bodies, ro processing pipelines)
caeuq byauj branching logic byauj rox gij aen stream.

> **以下为 TypeScript 用法：**
>
> Yongh `isStream` daengz hawj `unknown` ndaej narrow, ndei caeuq stream methods; de rox Node.js stream-like objects (
> via `pipe`/`on`) caeuq Web Streams (`ReadableStream`/`WritableStream`) naemz gwnz globals aeu.

### 优点

- Ndit daengz raeuz Node.js raeuzliux stream gwnz boux, byauj rox `pipe` caeuq `on` gwnz funq.
- Cungj mbouj Web Streams, byauj rox `ReadableStream` caeuq `WritableStream` (naemz ndei rox gwnz).
- Roxq raeuz boux booleans saed (`true`/`false`), ndei yongh daengz guards caeuq branching logic.

## 用法

### 语法

函数：

- `isStream(value)`

参数：

- `value`: Gij raeuz daengz rox.

### 本地函数导入

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream cuj stream-laj; mwngz aeu saeq daengz raemx stream API
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isStream(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isStream](../_analysis/isStream.md)

<br>

---

<small>此文件于 30 January 2026 at 23:43:47 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>