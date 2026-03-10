# isFilledArray

## 說明

檢查 `value` 係咪一個最少有一個元素嘅陣列，並回傳 `true` 或 `false`。

### 使用場景

喺迭代、存取第一個元素，或者套用需要最少一個項目嘅邏輯之前，用 `isFilledArray` 去驗證輸入資料（例如 API payload、表單值、設定）。

> **俾 TypeScript 用戶嘅提示：**
>
> `isFilledArray` 係一個 runtime guard，會回傳布林值；除咗確認陣列係非空之外，唔會進一步收窄元素類型。

### 優勢

- 用 `Array.isArray` 加埋長度檢查，簡單又快咁檢查係咪非空陣列。
- 幫你避免當程式碼假設陣列最少有一個元素時出現 runtime 錯誤。
- 布林結果清晰：非空陣列回傳 `true`，否則回傳 `false`。

## 用法

### 語法

函數：

- `isFilledArray(value)`

參數：

- `value`: 要檢查嘅值，用嚟判斷佢係咪非空陣列。

### 本地函數匯入

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input 喺執行時係一個非空陣列
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isFilledArray(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>此檔案於 6 February 2026 at 11:49:30 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>