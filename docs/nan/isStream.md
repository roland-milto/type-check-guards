# isStream

## 说明

`isStream` kiám-cha chi̍t ê gí-bēng ê chhi̍t sī-m̄-sī stream object (Node.js stream-lêng-kiānn, `ReadableStream`, á-sī
`WritableStream`).

### 使用场景

Kiám-giām input, iáu-khó-lū i kiám-chhái sī phó͘-thong object á-sī stream (chhin-chhiūⁿ file upload, HTTP body, á-sī
processing pipeline), jî-chhiáⁿ chiàu chhi̍t sī-m̄-sī stream lâi chò branch ê logic.

> **给 TypeScript 用户的提示：**
>
> Iōng `isStream` lâi hō͘ `unknown` chò type narrowing, chiah thang kiò stream method; i ē jīn-chhut Node.js
> stream-lêng-kiānn object (thóng-kòe `pipe`/`on`) kap Web Streams (`ReadableStream`/`WritableStream`), tī hit-sî chiah ū
> hit-ê global ê sî-chūn.

### 优势

- Tio̍h-sit tēng-kak chhâ-khì chòe-sò͘ Node.js stream-lêng-kiānn ê mi̍h-kiānn, thóng-kòe kiám-cha ū `pipe` kap `on` chit
  ê function.
- Iáu ū chi-sî Web Streams, tī ū `ReadableStream` kap `WritableStream` ê sî-chūn, ē thóng-kòe jīn-chhut in lâi chi-sî.
- Hôe-sîng chi̍t ê kán-tan ê boolean kiat-kó (`true`/`false`), si̍t-iōng tī guard kap branch ê logic.

## 用法

### 语法

函数：

- `isStream(value)`

参数：

- `value`: Beh kiám-cha ê chhi̍t.

### 本地函数导入

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream 是流款；汝會使通用个流 API，安全
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

<small>该文件于 30 January 2026 at 23:42:14 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>