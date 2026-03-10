# areStreams

## 说明

`areStreams` gyaeuj raeuz gvangj, aen value ndei mbouj rox filled array, caeuq daengz aen element caeuq `Stream`.

### 使用场景

Gyaeuj raeuz gvangj collection ndei mbouj rox user cungj, rox dynamically built (dawz: multiple file read streams) gwnz
ndaej piping, resuming, rox gwnz ndaej gwnz aen group.

> **以下为 TypeScript 用法：**
>
> Yongh `areStreams` gyaeuj raeuz gvangj unknown input, caeuq gwnz ndaej gwnz aen `Stream[]`; raeuz `true` duz daengz
> value aen non-empty array caeuq daengz aen element caeuq `Stream`.

### 优点

- Gvangj mwngz ndei mbouj daengz aen daengz mbouj rox, ndei mbouj daengz aen daengz mbouj rox, caeuq daengz aen daengz
  mbouj rox `Stream`.
- Cungj aen `true`/`false` gyaeuj raeuz gvangj, yongh laux gyaeuj raeuz gvangj stream collection ndei mbouj rox, caeuq
  gwnz ndaej gwnz.
- Faiq raeuz: raeuz `false` ngay, daengz aen daengz mbouj rox `Stream` ndei mbouj rox.
- Bouxcoz gwnz runtime error, daengz code gyaeuj raeuz gvangj ndei mbouj rox item caeuq `Stream` instance.

## 用法

### 语法

函数：

- `areStreams(array)`

参数：

- `array`: Daengz array ndei mbouj rox, gyaeuj raeuz gvangj `Stream` object.

### 本地函数导入

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input cuj laux raeuj mbouj Stream objects
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areStreams(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areStreams](../_analysis/areStreams.md)

<br>

---

<small>此文件于 30 January 2026 at 23:36:32 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>