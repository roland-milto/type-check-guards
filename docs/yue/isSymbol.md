# isSymbol

## 說明

`isSymbol` 用嚟判斷指定值係咪 `symbol` 類型；如果係 symbol 就回傳 `true`，否則回傳 `false`。

### 使用場景

喺將一個 `unknown` 值用作唯一識別碼、registry key，或者用作物件同 map 入面嘅計算屬性 key 之前，先驗證佢係咪 `symbol`。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺呼叫同 symbol 相關嘅函式，或者將佢用作計算屬性 key 之前，用 `isSymbol` 將 `unknown` 收窄到 `symbol`。

### 優勢

- 為 JavaScript `symbol` 原始類型提供一個簡單、可靠嘅執行期檢查。
- 喺使用 symbol 專用 API 或將佢用作 key 儲存之前，幫你先收窄 `unknown` 值。
- 透過使用 `typeof`（偵測 `symbol` 值嘅標準方法）避免誤判。

## 用法

### 語法

函數：

- `isSymbol(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // 呢度嘅 input 係一個 symbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isSymbol(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>此檔案於 30 January 2026 at 14:29:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>