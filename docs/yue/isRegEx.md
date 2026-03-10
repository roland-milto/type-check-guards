# isRegEx

## 說明

判斷提供嘅值係咪一個 `RegExp` 實例。

### 使用場景

喺將使用者提供或動態值（例如設定、API payload、plugin 輸入）當成正則表達式處理之前先做驗證。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `isRegEx` 喺使用 RegExp 專用屬性或方法之前，先將 `unknown`（或者 union）值收窄；佢只會喺值係 `RegExp` 實例時先回傳
`true`。

### 優勢

- 提供一個簡單嘅執行期型別守衛，用嚟檢查一個值係咪 `RegExp`。
- 幫你避免當程式碼預期係正則表達式時出錯（例如喺呼叫 `test`、`exec`，或者讀取 `source` 之前）。
- 同時支援 regex 字面量同用 `new RegExp(...)` 建立嘅實例。
- 對於非 regex 輸入唔會拋錯，會直接回傳清晰嘅布林結果（`true`/`false`）。

## 用法

### 語法

函數：

- `isRegEx(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // 呢度嘅 input 係一個 RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isRegEx(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>此檔案於 30 January 2026 at 23:31:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>