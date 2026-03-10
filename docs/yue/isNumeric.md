# isNumeric

## 說明

`isNumeric` 會透過將解析出嚟嘅類型同 `NUMERIC_TYPES` 比對，去判斷指定嘅 `value` 係咪被視為數值。

### 使用場景

喺做數值運算之前，用 `isNumeric` 去驗證輸入（例如 API payload、表單值、設定），並且根據 `NUMERIC_TYPES` 一致噉接受類似數值嘅類型（例如
`BigInt`）。

> **俾 TypeScript 用戶嘅提示：**
>
> `isNumeric` 係一個回傳 boolean 嘅 predicate；將佢當成 runtime 檢查，用嚟判斷某個值係咪屬於呢個 library 定義嘅數值類型集合。

### 優勢

- 用 `getTypeOf` 加埋 `NUMERIC_TYPES` 去集中處理數值偵測邏輯，令成個 codebase 入面嘅檢查保持一致。
- 回傳一個簡單嘅 boolean（`true`/`false`），方便做分支判斷同用作 guard-style 用法。
- 支援多種數值表示法（例如 `number`、`BigInt`），以 `NUMERIC_TYPES` 入面定義嘅為準。

## 用法

### 語法

函數：

- `isNumeric(value)`

參數：

- `value`: 要檢查係咪數值類型嘅值。

### 本地函數匯入

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // 根據個 library 嘅型別規則，v 會被視為數值
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isNumeric(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>此檔案於 6 February 2026 at 15:55:21 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>