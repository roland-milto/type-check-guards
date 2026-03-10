# areStreams

## 說明

`areStreams` 用嚟判斷一個值係咪一個有內容嘅陣列，而且入面每個元素都係 `Stream`。

### 使用場景

喺 piping、resume 或者以群組方式操作之前，先驗證用戶提供或者動態建立嘅集合（例如多個檔案讀取 stream）。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areStreams` 喺將未知輸入當成 `Stream[]` 之前做驗證；只有當個值係非空陣列，而且每個元素都係 `Stream`，先會回傳 `true`。

### 優勢

- 確保輸入係一個有內容嘅陣列，而且每個元素都係 `Stream`。
- 提供簡單嘅 `true`/`false` 守衛，用嚟喺處理之前驗證 stream 集合。
- 快速失敗：一發現有非 `Stream` 元素就即刻回傳 `false`。
- 幫助避免當程式碼假設所有項目都係 `Stream` 實例時出現執行期錯誤。

## 用法

### 語法

函數：

- `areStreams(array)`

參數：

- `array`: 要檢查係咪包含 Stream 物件嘅陣列。

### 本地函數匯入

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input 係一個裝滿咗 Stream 物件嘅陣列
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areStreams(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areStreams](../_analysis/areStreams.md)

<br>

---

<small>此檔案於 30 January 2026 at 23:36:24 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>