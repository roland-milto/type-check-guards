# areRegExes

## 說明

`areRegExes` 會檢查一個值係咪一個已填滿嘅陣列，而且只包含 `RegExp` 物件。

### 使用場景

喺用嚟做比對之前，驗證一個設定選項（例如：允許/拒絕 patterns 清單）係非空嘅正則表達式陣列。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areRegExes` 喺迭代或者組合 patterns 之前，將 `unknown` 收窄做 `RegExp[]`。

### 優勢

- 確保一個值係非空陣列，而且每個元素都係 `RegExp` 實例。
- 提供一個簡單嘅布林防護（`true`/`false`），用嚟驗證用戶輸入或者設定。
- 幫助避免之後嘅程式碼假設所有項目都支援正則表達式操作時出現執行期錯誤。

## 用法

### 語法

函數：

- `areRegExes(array)`

參數：

- `array`: 要檢查嘅值。

### 本地函數匯入

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // 呢度 patterns 係一個 RegExp 陣列
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areRegExes(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>此檔案於 30 January 2026 at 23:22:37 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>