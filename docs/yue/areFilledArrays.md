# areFilledArrays

## 說明

`areFilledArrays` 會檢查一個二維陣列係咪非空，並且所有子陣列都係非空。

### 使用場景

用 `areFilledArrays` 去驗證表格或矩陣類型嘅輸入（例如 CSV 行、網格資料、分組結果），咁你就可以安全咁假設至少有一個子陣列，而且冇任何子陣列係空。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要確保一個 2D 陣列至少有一行，而且每一行至少有一個元素，先至去 iterate 或用 index 存取嘅時候，就用
`areFilledArrays`。

### 優勢

- 驗證外層陣列唔係空，同時每個內層陣列都唔係空；只有兩個條件都符合先會回傳 `true`。
- 適用於子陣列入面任何元素類型（例如數字、字串、物件、巢狀陣列），因為佢只係檢查陣列有冇「填滿」（非空）狀態，而唔係檢查元素內容。
- 提供簡單嘅布林結果（`true`/`false`），適合作為處理二維資料之前嘅 guard。

## 用法

### 語法

函數：

- `areFilledArrays(array)`

參數：

- `array`: 要檢查嘅二維陣列。

### 本地函數匯入

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // 係
console.log(areFilledArrays(b)); // 係
console.log(areFilledArrays(c)); // 係
console.log(areFilledArrays(d)); // 唔係
console.log(areFilledArrays(e)); // 唔係
console.log(areFilledArrays(f)); // 唔係

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areFilledArrays(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>此檔案於 6 February 2026 at 11:59:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>