# areBuffers

## 说明

`areBuffers` cingjlaengh gwnz ndaej cungj youq raemx mbouj miz (non-empty), miz raemx gyaeuj, raemx raemx mizcinj laengh
`Buffer`; daengzqij `true` gyaeuj gwnzdaengz, daengzqij `false` gyaeuj mbouj gwnzdaengz.

### 使用场景

Validate incoming chunk arrays (daengzqij, from streams, file uploads, rox network packets) gyaeuj baenzj ndaej
cingjlaengh gwnz gwnzdaengz raemx raemx laengh `Buffer` instances gwnzdaengz youq concatenating, decoding, rox aeuq
ndaej raemx raemx bae cryptographic rox binary-processing functions.

> **以下为 TypeScript 用法：**
>
> Yongh `areBuffers` gyaeuj validate `unknown[]` gwnzdaengz youq call Buffer-specific APIs laengh `Buffer.concat`,
> baenzj ndaej cingjlaengh gwnz function daengzqij `true` gyaeuj gwnzdaengz raemx raemx mizcinj laengh `Buffer`.

### 优点

- Gvangj mizcinj raeuj ndawz raemx inndaej laengh Node.js `Buffer` instance, daengzqij `true` gyaeuj gwnzdaengz raemx
  gyoengq ndaej mizcinj.
- Cingjlaengh daengzqij ndawz raemx laengh mbouj miz, miz raemx gyaeuj; daengzqij `false` gyaeuj raemx mbouj miz (empty)
  rox mbouj laengh raemx.
- Yienghhwnj gyaeuj laengh guard gwnzdaengz youq gwnz buffer-only operations (daengzqij, concatenation, hashing, binary
  protocols).

## 用法

### 语法

函数：

- `areBuffers(array)`

参数：

- `array`: Raemx gyaeuj ndaej cingjlaengh gwnz buffer instances.

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

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areBuffers(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>此文件于 31 January 2026 at 16:28:14 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>