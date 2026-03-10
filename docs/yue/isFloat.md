# isFloat

## 說明

`isFloat` 用嚟判斷指定嘅 `value` 係咪有限嘅浮點數（即係唔係整數嘅 `number`）。

### 使用場景

驗證用戶提供嘅數值輸入，當需要小數值（例如價格、量度、比率）時使用，並拒絕整數、`NaN` 同無限大。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你只需要接受有限、非整數嘅數值輸入時就用 `isFloat`；佢會拒絕整數同非有限數值。

### 優勢

- 只會喺有限、非整數嘅數值先回傳 `true`（排除整數、`NaN`、`Infinity` 同 `-Infinity`）。
- 適用於任何輸入類型（`unknown`），並透過檢查 `typeof value === "number"` 安全咁收窄類型。
- 使用內建數值守衛（`Number.isInteger`、`Number.isFinite`）以獲得可預期嘅行為。

## 用法

### 語法

函數：

- `isFloat(value)`

參數：

- `value`: 要檢查嘅值，用嚟判斷佢係咪浮點數。

### 本地函數匯入

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value 係執行時係一個 number；佢係有限而且唔係整數
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isFloat(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isFloat](../_analysis/isFloat.md)

<br>

---

<small>此檔案於 30 January 2026 at 16:10:33 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>