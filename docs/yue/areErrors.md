# areErrors

## 說明

檢查一個陣列係咪非空，而且只包含 `Error` 物件，並回傳 `true` 或 `false`。

### 使用場景

喺迭代、記錄日誌或者重新拋出之前，驗證執行期提供嘅 `unknown[]`（例如彙總失敗、驗證結果、或者反序列化後嘅資料）係一個非空嘅
`Error` 物件清單。

> **俾 TypeScript 用戶嘅提示：**
>
> `areErrors` 只會喺陣列有內容而且每一項都係 `Error` 時先回傳 `true`；如果係空陣列，或者有任何元素唔係 `Error`，就會回傳
`false`。

### 優勢

- 確保每個元素都係一個 `Error` 實例，令錯誤處理同記錄日誌更安全。
- 拒絕空陣列，避免意外將「冇錯誤」狀態當成有效嘅錯誤清單。
- 處理 `unknown[]` 輸入（例如嚟自 API 或 `catch` 區塊）時，作為執行期守衛好好用。

## 用法

### 語法

函數：

- `areErrors(array)`

參數：

- `array`: 要檢查入面係咪有 `Error` 物件嘅陣列。

### 本地函數匯入

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value 係一個非空嘅 Error 物件陣列
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areErrors(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areErrors](../_analysis/areErrors.md)

<br>

---

<small>此檔案於 6 February 2026 at 12:36:19 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>