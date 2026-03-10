# isValidDate

## 說明

`isValidDate` 會檢查指定嘅值係咪有效嘅 `Date` 物件，只有真正、非無效嘅日期先會回傳 `true`。

### 使用場景

驗證用戶輸入或者 API 數據入面可能包含嘅日期；喺做日期計算、格式化或者比較之前，確保個值係真正嘅 `Date` 實例，而唔係無效日期。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺對型別係 `unknown` 嘅值呼叫 `Date` 方法（例如：`toISOString`、`getTime`）之前，先用 `isValidDate`，確保佢哋係有效嘅 `Date`
> 物件。

### 優勢

- 確保個值係一個 `Date` 實例，而唔係淨係似日期嘅字串或者數字。
- 透過檢查時間值係咪 `NaN`，拒絕無效日期（例如：`new Date("invalid")`）。
- 簡單嘅布林守衛，喺條件判斷同驗證流程入面好易用。
- 先驗證輸入，幫你避免喺呼叫日期方法時出現 runtime 錯誤。

## 用法

### 語法

函數：

- `isValidDate(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input 係一個有效嘅 Date 實例
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isValidDate(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>此檔案於 30 January 2026 at 16:53:45 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>