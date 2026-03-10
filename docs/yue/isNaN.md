# isNaN

## 說明

判斷提供嘅 `value` 係咪 `number` 類型嘅 `NaN`，而唔會轉換字串。

### 使用場景

驗證唔可信或者類型鬆散嘅輸入（例如 API payload、表單值、解析後嘅 JSON），用嚟偵測特殊嘅 `NaN` 值並明確處理，同時將非數字輸入視為唔係
`NaN`。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要偵測特殊數值 `NaN`，同時要確保輸入真係 `number`（唔做字串轉數字）嘅時候，就用 `isNaN`。

### 優勢

- 檢查一個值係咪 `NaN`，而唔會將非數字（例如字串）強制轉做數字。
- 只會喺值同時係 `number` 類型同埋 `NaN` 嘅情況下先回傳 `true`。
- 對 `unknown` 輸入安全，並避免因隱式轉換而出現誤判。

## 用法

### 語法

函數：

- `isNaN(value)`

參數：

- `value`: 要檢查嘅值，用嚟判斷佢係咪 `number` 類型嘅 `NaN`。

### 本地函數匯入

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // 係
console.log(isNaN(b)); // 唔係
console.log(isNaN(c)); // 唔係

if (isNaN(a)) {
  // a 係一個數字，而且特別係 NaN
}
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isNaN(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isNaN](../_analysis/isNaN.md)

<br>

---

<small>此檔案於 30 January 2026 at 15:48:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>