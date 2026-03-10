# areArrays

## 說明

`areArrays` 用嚟判斷一個值係咪一個已填充嘅二維陣列，而且入面嘅項目全部都係陣列。

### 使用場景

喺做行/列操作之前，用 `areArrays` 去驗證表格或矩陣類型嘅輸入（例如 CSV 行、網格資料、或者分組清單）；如果輸入唔係陣列、係空嘅、或者包含任何非陣列元素，就會回傳
`false`。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要確保一個值係非空嘅 2D 陣列，而且每一行都係陣列，先至去迭代或者用索引存取巢狀陣列時，就用 `areArrays`。

### 優勢

- 驗證輸入係一個非空嘅二維陣列，而且每個元素都係陣列。
- 回傳一個簡單嘅布林結果（`true`/`false`），適合用作 guard 同提早退出。
- 幫手避免之後程式碼假設可以做巢狀陣列操作（例如對每行做 map）時出現執行期錯誤。

## 用法

### 語法

函數：

- `areArrays(array)`

參數：

- `array`: 要檢查嘅輸入。

### 本地函數匯入

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value 係一個二維陣列，元素係陣列
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areArrays(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areArrays](../_analysis/areArrays.md)

<br>

---

<small>此檔案於 6 February 2026 at 13:42:15 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>