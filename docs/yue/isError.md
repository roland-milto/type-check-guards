# isError

## 說明

檢查指定嘅 `value` 係咪 `Error` 嘅實例。

### 使用場景

當你收到一個 `unknown` 值（例如嚟自 `catch` 區塊、callback，或者外部 library），而你需要喺讀取 `message`、`name` 或 `stack`
之前安全噉判斷佢係咪 `Error`，就用 `isError`。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺將 `unknown` 值（例如嚟自 `catch`）當成 `Error` 去處理之前，用 `isError` 做守衛。

### 優勢

- 提供一個簡單嘅執行時檢查，用嚟判斷某個值係咪 `Error` 嘅實例。
- 喺存取 `message` 或 `stack` 呢啲 `Error` 屬性之前，幫你先收窄未知輸入嘅型別。
- 處理嚟自 `catch`、外部 API 或冇型別來源嘅值時，降低執行時例外嘅風險。

## 用法

### 語法

函數：

- `isError(value)`

參數：

- `value`: 要用嚟同 `Error` 型別作檢查嘅值。

### 本地函數匯入

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isError(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isError](../_analysis/isError.md)

<br>

---

<small>此檔案於 6 February 2026 at 12:47:45 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>