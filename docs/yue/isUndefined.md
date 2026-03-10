# isUndefined

## 說明

檢查指定值係咪 `undefined`。

### 使用場景

用 `isUndefined` 去 guard 可選輸入、偵測缺少嘅屬性，或者分辨「冇提供」（`undefined`）同「明確為空」（`null`）。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要特別偵測 `undefined`（唔係 `null`）嗰陣，用 `isUndefined`。佢係安全嘅，因為佢依賴 `typeof value === "undefined"`。

### 優勢

- 用 `typeof` 對 `undefined` 做清晰、明確嘅檢查，避免遇到未宣告變數嘅邊緣情況。
- 回傳簡單嘅布林結果（`true`/`false`），適合用喺 guard、分支同驗證邏輯。
- 幫你分辨 `undefined` 同其他「空」值，例如 `null`、`0`、`""` 或 `NaN`。

## 用法

### 語法

函數：

- `isUndefined(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // 呢度 x 係 undefined
} else {
  // 呢度 x 唔係 undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isUndefined(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>此檔案於 30 January 2026 at 14:05:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>