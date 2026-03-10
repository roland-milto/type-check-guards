# isBoolean

## 說明

判斷指定嘅值係咪 `boolean`。

### 使用場景

驗證外部或者冇型別嘅資料（例如：環境變數、JSON payload、query 參數），確保喺用喺條件邏輯之前，個值係 `boolean`。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `isBoolean` 將 `unknown` 收窄到 `boolean`，再套用布林值運算。

### 優勢

- 用 `typeof` 做簡單又快速嘅執行期檢查。
- 喺套用布林值相關邏輯之前，幫手驗證未知輸入。
- 回傳可預期嘅 `boolean` 結果（`true`/`false`）。

## 用法

### 語法

函數：

- `isBoolean(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // 呢度 input 係 boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isBoolean(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>此檔案於 30 January 2026 at 14:38:30 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>