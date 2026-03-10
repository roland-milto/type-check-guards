# areStrings

## 說明

`areStrings` 會檢查一個陣列係咪非空，而且所有元素都係字串；只有喺呢種情況先會回傳 `true`。

### 使用場景

驗證外部或者用戶提供嘅資料（例如 query params、JSON payloads、CSV 欄位），確保你喺處理之前攞到一個非空嘅字串清單。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areStrings` 去驗證未知陣列，先至套用只適用於字串嘅邏輯；對於空陣列佢會回傳 `false`。

### 優勢

- 確保每個元素都係字串，並且透過回傳 `false` 去拒絕混合型別嘅陣列。
- 拒絕空陣列，所以 `true` 只代表一個非空嘅字串清單。
- 作為快速嘅執行期防護好有用，喺做只適用於字串嘅操作之前（例如 `trim`、`toLowerCase`）。

## 用法

### 語法

函數：

- `areStrings(value)`

參數：

- `value`: Expected type `string[]`.

### 本地函數匯入

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input 喺 runtime 係一個非空嘅 string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areStrings(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areStrings](../_analysis/areStrings.md)

<br>

---

<small>此檔案於 30 January 2026 at 13:21:14 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>