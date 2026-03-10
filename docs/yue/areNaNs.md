# areNaNs

## 說明

`areNaNs` 會檢查陣列入面係咪所有元素都係 `NaN`，只有喺每個元素都係 `NaN` 嘅情況下先回傳 `true`。

### 使用場景

驗證輸入資料：當 `NaN` 用作哨兵值，而你必須確保成個陣列完全只由 `NaN` 組成（例如：偵測一條全部缺失嘅數值序列）。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要驗證一個陣列只包含數值 `NaN`（唔做字串轉數字嘅強制轉換）時，就用 `areNaNs`。

### 優勢

- 只會喺每個元素都係 `NaN` 嘅時候先回傳 `true`（嚴格嘅全元素檢查）。
- 唔會將字串強制轉做數字；例如 "NaN" 呢啲值會保持為非 `NaN`，令結果變成 `false`。
- 對於未填滿嘅陣列會回傳 `false`，避免喺空輸入時意外得到 `true`。

## 用法

### 語法

函數：

- `areNaNs(array)`

參數：

- `array`: 要檢查入面係咪有 `NaN` 值嘅陣列。

### 本地函數匯入

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // 係
const b = areNaNs([NaN, 1, NaN]); // 唔係
const c = areNaNs([NaN, "NaN", NaN]); // 唔係
const d = areNaNs([NaN, null, NaN]); // 唔係
const e = areNaNs([] as unknown[]); // 唔係
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areNaNs(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>此檔案於 30 January 2026 at 15:54:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>