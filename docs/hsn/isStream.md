# isStream

## 说明

`isStream` चेक करथे के दिहे गे value एक stream ऑब्जेक्ट आय का (Node.js stream-जइसन, `ReadableStream`, या
`WritableStream`)।

### 使用场景

इनपुट मन ला validate करव जऊन plain objects या streams हो सकथें (जइसे file uploads, HTTP bodies, या processing pipelines)
अऊ value stream आय के नई, ए आधार म logic ला branch करव।

> **给 TypeScript 用户的提示：**
>
> `isStream` ला `unknown` ला narrow करे बर उपयोग करव; stream methods कॉल करे के पहिली। ये Node.js stream-जइसन ऑब्जेक्ट
> मन ला (`pipe`/`on` के जरिए) अऊ Web Streams (`ReadableStream`/`WritableStream`) ला, जब वो global मौजूद होवय, पहिचानथे।

### 优势

- `pipe` अऊ `on` फंक्शन चेक करिके आम Node.js stream-जइसन ऑब्जेक्ट मन ला सुरक्षित ढंग ले चिन्हारी करथे।
- जब उपलब्ध होथे त Web Streams ला घलो सपोर्ट करथे, `ReadableStream` अऊ `WritableStream` ला पहिचान के।
- एक सादा boolean नतीजा (`true`/`false`) देवथे, जे guard अऊ branching logic बर ठीक रहिथे।

## 用法

### 语法

函数：

- `isStream(value)`

参数：

- `value`: जऊन value ला चेक करे बर हे।

### 本地函数导入

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream stream-jaisan baa; aap common stream APIs ke surakshit roop se istemaal kar sakat hain
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

<small>该文件于 30 January 2026 at 23:40:03 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>