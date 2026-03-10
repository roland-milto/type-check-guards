# isDate

## 說明

`isDate` 用嚟判斷提供嘅值係咪 `Date`；如果係 `Date` 實例就回傳 `true`，否則回傳 `false`。

### 使用場景

喺進行 `Date` 操作（例如格式化、比較，或者呼叫 `toISOString()`）之前，先驗證同收窄未知值（例如 request data、config
values、或者解析後嘅 JSON）。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `isDate` 喺 runtime 將 `unknown` 收窄到 `Date`；佢只會喺真正嘅 `Date` 實例時回傳 `true`（唔包括日期字串）。

### 優勢

- 佢提供一個簡單嘅 runtime guard，用嚟驗證一個值係咪 `Date`。
- 佢透過確保只有 `Date` 實例可以通過驗證，幫助防止型別錯誤。
- 喺使用日期相關方法之前，用嚟驗證未知輸入（例如 API payloads）好有用。

## 用法

### 語法

函數：

- `isDate(value)`

參數：

- `value`: 要檢查係咪 `Date` 型別嘅值。

### 本地函數匯入

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // 呢度 input 係 Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isDate(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isDate](../_analysis/isDate.md)

<br>

---

<small>此檔案於 31 January 2026 at 15:48:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>