# isBuffer

## 說明

檢查一個值係咪 Node.js `Buffer`，並回傳 `true` 或 `false`。

### 使用場景

喺執行期驗證輸入（例如 API payload、檔案數據、或者訊息緩衝區），確保處理之前個值係 `Buffer`；同時喺 Node.js 以外、可能冇
`Buffer` 嘅環境運行時，都可以可靠噉得到 `false`。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺呼叫 Buffer 專用方法之前，用 `isBuffer` 將 `unknown` 值收窄做 `Buffer`。

### 優勢

- 用 `Buffer.isBuffer` 安全噉偵測 Node.js `Buffer` 實例。
- 喺冇 `Buffer` 嘅環境會回傳 `false`，避免執行期錯誤。
- 支援 `unknown` 輸入，適合用嚟做執行期驗證同類型收窄。

## 用法

### 語法

函數：

- `isBuffer(value)`

參數：

- `value`: 要測試嘅值。

### 本地函數匯入

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // 呢度 a 係 Buffer
  console.log(a.toString("utf8"));
}
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isBuffer(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>此檔案於 31 January 2026 at 16:33:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>