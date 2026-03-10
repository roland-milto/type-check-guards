# areBuffers

## 說明

`areBuffers` 會檢查提供嘅值係咪一個非空、已填滿嘅陣列，而且每個元素都係 `Buffer`；符合就回傳 `true`，否則回傳 `false`。

### 使用場景

驗證傳入嘅 chunk 陣列（例如：嚟自 streams、檔案上載、或者網絡封包），確保所有部分都係 `Buffer` 實例，先至去做串接、解碼，或者傳畀加密／二進制處理函數。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areBuffers` 喺呼叫 `Buffer.concat` 呢類 Buffer 專用 API 之前驗證 `unknown[]`，確保個函數只會喺每個元素都係 `Buffer`
> 嘅情況下先回傳 `true`。

### 優勢

- 確保輸入入面每個元素都係 Node.js `Buffer` 實例，只有成個陣列完全符合先會回傳 `true`。
- 透過要求一個非空、已填滿嘅陣列去及早拒絕無效輸入；對空陣列或者非陣列會回傳 `false`。
- 適合作為執行只接受 buffer 嘅操作之前嘅守衛（例如：串接、雜湊、二進制協議）。

## 用法

### 語法

函數：

- `areBuffers(array)`

參數：

- `array`: 要檢查入面元素係咪 buffer 實例嘅陣列。

### 本地函數匯入

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

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areBuffers(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>此檔案於 31 January 2026 at 16:28:09 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>