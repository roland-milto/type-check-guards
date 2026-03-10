# isStream

## 说明

`isStream` 會檢查指定个值係毋係 stream 物件（Node.js 類 stream、`ReadableStream`，抑係 `WritableStream`）。

### 使用场景

驗證輸入值可能係一般物件抑係 streams（例如檔案上傳、HTTP body，抑係處理 pipeline），並根據該值係毋係 stream 來分支處理邏輯。

> **给 TypeScript 用户的提示：**
>
> 用 `isStream` 先縮窄 `unknown` 再去呼叫 stream 方法；佢會認得 Node.js 類 stream 物件（透過 `pipe`/`on`），同埋當有呢兜
> global 時也會認得 Web Streams（`ReadableStream`/`WritableStream`）。

### 优势

- 透過檢查有無 `pipe` 同 `on` 函數，安全偵測常見个 Node.js 類 stream 物件。
- 也支援 Web Streams：若環境有提供，會識別 `ReadableStream` 同 `WritableStream`。
- 回傳簡單个 boolean 結果（`true`/`false`），適合用來做 guard 同分支邏輯。

## 用法

### 语法

函数：

- `isStream(value)`

参数：

- `value`: 欲檢查个值。

### 本地函数导入

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream 係 stream 樣式；你可以放心用常見个 stream API
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

<small>该文件于 30 January 2026 at 23:39:15 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>