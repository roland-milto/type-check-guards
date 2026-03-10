# isInteger

## 說明

判斷指定嘅 `value` 係咪安全整數數字。

### 使用場景

喺將唔可信輸入（例如 query params、JSON payloads、environment variables）用作整數之前先驗證，例如用喺陣列索引、分頁、計數器或者資料庫
ID。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `isInteger` 喺將未知輸入當作數值整數之前做驗證；只有當 `typeof value === "number"` 同 `Number.isSafeInteger(value)`
> 成立先會回傳 `true`。

### 優勢

- 同時檢查型別同數值安全性：只有當輸入係數字而且係安全整數先會回傳 `true`。
- 避免數值強制轉型嘅常見陷阱：例如字串 "5" 會正確回傳 `false`。
- 拒絕非整數同唔安全整數，適合用喺 ID、計數器同陣列索引。

## 用法

### 語法

函數：

- `isInteger(value)`

參數：

- `value`: 要檢查係咪整數狀態嘅值。

### 本地函數匯入

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // 係
const b = isInteger(-100);   // 係
const c = isInteger("5");    // 唔係
const d = isInteger(5.5);    // 唔係
const e = isInteger(null);   // 唔係

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isInteger(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isInteger](../_analysis/isInteger.md)

<br>

---

<small>此檔案於 31 January 2026 at 00:52:03 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>