# areNullOrUndefined

## 說明

檢查指定陣列入面係咪所有元素都係 `null` 或 `undefined`。

### 使用場景

喺決定跳過處理或者顯示「未提供任何值」狀態之前，先驗證一個可選欄位清單入面冇任何實際值（只係 `null`/`undefined`）。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要確認一個陣列只包含缺失值（`null`/`undefined`）嘅時候，用 `areNullOrUndefined`。留意：對空陣列佢會回傳 `false`。

### 優勢

- 只會喺每個元素都係 `null` 或 `undefined` 嘅時候先回傳 `true`。
- 對空陣列會回傳 `false`，有助分辨「冇資料」同「全部都係缺失值」。
- 支援 `unknown[]`，令你喺收窄型別之前用都安全。

## 用法

### 語法

函數：

- `areNullOrUndefined(array)`

參數：

- `array`: 要檢查嘅陣列。

### 本地函數匯入

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areNullOrUndefined(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>此檔案於 31 January 2026 at 00:32:01 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>