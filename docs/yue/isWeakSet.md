# isWeakSet

## 說明

判斷畀定嘅 `value` 係咪一個裝住物件嘅 `WeakSet`。

### 使用場景

當你要接收冇型別嘅輸入（例如：嚟自外部 API、動態設定，或者 `unknown` 值），而你需要喺使用 `WeakSet` 專用操作之前先驗證佢係
`WeakSet`，就用 `isWeakSet`。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `isWeakSet` 喺執行時將一個 `unknown` 值收窄到 `WeakSet<object>`；留意 `WeakSet` 只可以包含物件引用。

### 優勢

- 提供一個簡單嘅執行時檢查，用嚟判斷某個值係咪 `WeakSet`。
- 透過確保只有 `WeakSet` 實例先會當作 `WeakSet` 處理，幫助避免型別錯誤。
- 適用於任何 `unknown` 輸入，並返回清晰嘅布林結果（`true`/`false`）。

## 用法

### 語法

函數：

- `isWeakSet(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a 喺 runtime 係一個 WeakSet
}
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isWeakSet(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>此檔案於 30 January 2026 at 14:19:55 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>