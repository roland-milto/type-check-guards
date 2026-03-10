# areDecimals

## 說明

檢查陣列入面所有元素係咪十進制數字，而且陣列係已填充，並回傳 `true` 或 `false`。

### 使用場景

驗證用戶提供嘅清單（例如 CSV 欄位或表單輸入），確保陣列唔係空，而且每個項目都係十進制值，先至進行解析或計算。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要快速用布林值檢查一個 `unknown[]` 係非空，而且每個元素都係十進制表示法時，就用 `areDecimals`。

### 優勢

- 喺驗證項目之前，先確保輸入係一個已填充嘅陣列，避免意外接受空清單。
- 用 `isDecimal` 驗證每個元素，所以一旦出現混合或無效值就會即刻回傳 `false`。
- 提供簡單嘅布林結果（`true`/`false`），適合用作 guard 同提早 return 嘅驗證流程。

## 用法

### 語法

函數：

- `areDecimals(array)`

參數：

- `array`: 要檢查嘅陣列。

### 本地函數匯入

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // 真
console.log(areDecimals(b)); // 假
console.log(areDecimals(c)); // 假
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areDecimals(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>此檔案於 31 January 2026 at 15:59:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>