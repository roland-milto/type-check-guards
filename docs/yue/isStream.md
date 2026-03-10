# isStream

## 說明

`isStream` 會檢查指定嘅值係咪 stream 物件（Node.js 類 stream、`ReadableStream` 或 `WritableStream`）。

### 使用場景

驗證可能係普通物件或者 stream 嘅輸入（例如檔案上載、HTTP body、或者處理 pipeline），並根據個值係咪 stream 去分支處理邏輯。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `isStream` 喺呼叫 stream 方法之前收窄 `unknown`；佢會識別 Node.js 類 stream 物件（透過 `pipe`/`on`）同 Web Streams（
`ReadableStream`/`WritableStream`，當呢啲全域存在時）。

### 優勢

- 透過檢查 `pipe` 同 `on` 函數，安全噉偵測常見嘅 Node.js 類 stream 物件。
- 亦支援 Web Streams：喺可用嘅情況下，會識別 `ReadableStream` 同 `WritableStream`。
- 回傳簡單嘅布林結果（`true`/`false`），適合用作 guard 同分支邏輯。

## 用法

### 語法

函數：

- `isStream(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream 係類似 stream；你可以安全噉用常見嘅 stream API
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isStream(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isStream](../_analysis/isStream.md)

<br>

---

<small>此檔案於 30 January 2026 at 23:43:45 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>