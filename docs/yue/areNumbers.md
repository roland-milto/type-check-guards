# areNumbers

## 說明

`areNumbers` 會檢查一個值係咪非空陣列，而且所有元素都係數字。

### 使用場景

驗證用戶提供或者 API 提供嘅資料，確保佢係非空嘅數字陣列，先去計算總和、平均值或者其他數值聚合。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areNumbers` 喺做數值計算之前驗證未知陣列；對空陣列同包含任何非數字值嘅陣列都會回傳 `false`。

### 優勢

- 只會喺輸入係非空陣列而且每個元素都係數字嘅時候先回傳 `true`。
- 透過拒絕空陣列同非陣列輸入，避免誤判為真（false positives）。
- 作為做數值運算（例如：求和、平均）之前嘅守衛好有用，可以避免執行期錯誤。

## 用法

### 語法

函數：

- `areNumbers(array)`

參數：

- `array`: 要檢查入面元素係咪數字嘅陣列。

### 本地函數匯入

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areNumbers(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>此檔案於 30 January 2026 at 13:06:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>