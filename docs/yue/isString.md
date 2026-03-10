# isString

## 說明

`isString` 用嚟判斷畀定嘅值係咪字串。

### 使用場景

喺 runtime 驗證用戶輸入、API payload 欄位或者設定值，確保個值係字串先套用字串操作（例如：trim、split、大小寫轉換）。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺呼叫字串方法之前，用 `isString` 去驗證 `unknown` 或者型別比較鬆散嘅值；只有當 `typeof value === "string"` 嘅時候先會回傳
`true`。

### 優勢

- 用 `typeof` 做簡單又快速嘅檢查。
- 回傳可預期嘅布林結果：字串就係 `true`，否則係 `false`。
- 空字串同非空字串都適用。
- 喺做字串專用操作之前，作為輕量級嘅 runtime guard 好有用。

## 用法

### 語法

函數：

- `isString(value)`

參數：

- `value`: 要測試係咪字串型別嘅值。

### 本地函數匯入

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // 呢度 input 係字串
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isString(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isString](../_analysis/isString.md)

<br>

---

<small>此檔案於 30 January 2026 at 13:16:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>