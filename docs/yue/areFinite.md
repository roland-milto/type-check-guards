# areFinite

## 說明

`areFinite` 會檢查一個值係咪非空陣列，而且元素全部都係有限數字；符合就回傳 `true`，否則回傳 `false`。

### 使用場景

喺做計算之前驗證數字輸入陣列（例如：圖表數據序列、座標列表、量度樣本），確保只有喺所有值都係有限數字嗰陣先得到 `true`。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要確保一個陣列係非空，而且只包含有限數字嗰陣用 `areFinite`；對空陣列同包含 `NaN` 或無限大嘅陣列，佢都會回傳
`false`。

### 優勢

- 只會喺輸入係非空陣列，而且每個元素都係有限數字嗰陣先回傳 `true`。
- 透過對每個元素做 `isFinite` 檢查，拒絕 `Infinity`、`-Infinity` 同 `NaN`。
- 提供簡單嘅布林結果（`true`/`false`），適合用喺 guard 同驗證流程。

## 用法

### 語法

函數：

- `areFinite(array)`

參數：

- `array`: 要檢查嘅陣列，用嚟判斷入面所有元素係咪都係有限數。

### 本地函數匯入

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // 真
console.log(areFinite(b)); // 假
console.log(areFinite(c)); // 假

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areFinite(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areFinite](../_analysis/areFinite.md)

<br>

---

<small>此檔案於 30 January 2026 at 16:38:10 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>