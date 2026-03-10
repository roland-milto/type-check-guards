# areOctals

## 說明

`areOctals` 用嚟判斷提供嘅值係唔係由有效八進制字串組成嘅非空陣列。

### 使用場景

當你要驗證用戶輸入、設定值或者 API payload，而佢哋必須包含八進制字面量（例如檔案權限模式 `0o755`），並且你想拒絕空陣列或者任何無效項目（回傳
`false`）嗰陣，就用 `areOctals`。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areOctals` 去確保你有一個非空嘅 `unknown[]`，而且每個項目都係有效八進制字串，先再做轉換（例如用 `Number(...)` 或自訂解析）。

### 優勢

- 驗證一個值係唔係非空陣列，而且每個元素都係八進制字串；只有當所有項目都通過先會回傳 `true`。
- 快速失敗：一發現有非八進制元素就即刻回傳 `false`。
- 用作解析或轉換八進制字串之前嘅防護檢查好有用，可以避免執行期錯誤同輸入處理唔一致。

## 用法

### 語法

函數：

- `areOctals(array)`

參數：

- `array`: 要檢查嘅值。

### 本地函數匯入

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value 係一個非空嘅八進制字串陣列
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areOctals(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areOctals](../_analysis/areOctals.md)

<br>

---

<small>此檔案於 30 January 2026 at 14:59:11 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>