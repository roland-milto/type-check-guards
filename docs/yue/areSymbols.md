# areSymbols

## 說明

檢查輸入係咪一個已填充（非空）嘅陣列，而且元素全部都係 symbol，並回傳 `true` 或 `false`。

### 使用場景

喺使用之前，驗證某個設定欄位（例如：用 symbol 表示嘅唯一 key 清單）係一個非空陣列，而且只包含 symbol，先至拎去用喺需要
`symbol[]` 嘅 API。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areSymbols` 去驗證未知輸入，先至當佢係 `symbol[]`；對於非陣列同空陣列會回傳 `false`。

### 優勢

- 只會喺輸入係非空陣列，而且每個元素都係 symbol 嘅時候先回傳 `true`。
- 透過內部嘅 filled-array 檢查，拒絕非陣列同空陣列，避免誤判（false positives）。
- 作為執行期型別守衛好有用，可以喺進一步處理之前驗證只包含 symbol 嘅清單。

## 用法

### 語法

函數：

- `areSymbols(array)`

參數：

- `array`: 要檢查入面元素係咪 symbol 嘅陣列。

### 本地函數匯入

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a 喺 runtime 係淨係 symbol 嘅陣列
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areSymbols(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>此檔案於 30 January 2026 at 14:24:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>