# isNumber

## 說明

`isNumber` 會檢查一個值係咪有限、非 `NaN` 嘅數字。

### 使用場景

喺計算、儲存或者做範圍檢查之前，先驗證嚟自唔可信來源（表單、query params、JSON payloads）嘅數值輸入，確保只係有限數字先會通過（
`true`），其他全部都會回傳 `false`。

> **俾 TypeScript 用戶嘅提示：**
>
> 做算術運算之前，用 `isNumber` 去驗證 `unknown` 值；佢會拒絕 `NaN`、`Infinity` 同 `-Infinity`。

### 優勢

- 只會對真正嘅 JavaScript number 回傳 `true`（型別檢查加上拒絕 `NaN` 同無限大）。
- 避免常見嘅驗證 bug：`NaN`、`Infinity` 或 `-Infinity` 意外當成數字通過。
- 好適合作為未知輸入嘅 runtime guard（例如 JSON、用戶輸入、外部 API）。
- 簡單、快速，而且冇副作用。

## 用法

### 語法

函數：

- `isNumber(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input 係一個有效嘅有限數字
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isNumber(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isNumber](../_analysis/isNumber.md)

<br>

---

<small>此檔案於 30 January 2026 at 13:11:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>