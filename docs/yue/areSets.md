# areSets

## 說明

檢查指定嘅非空陣列係咪只包含 `Set` 實例；如果係就回傳 `true`，否則回傳 `false`。

### 使用場景

喺處理每個 set 之前，驗證某個值（例如嚟自用戶輸入、JSON 解析、或者外部 API）係一個非空、由 `Set` 物件組成嘅陣列。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areSets` 喺迭代之前驗證未知輸入，先至對每個元素呼叫 `Set` API（例如 `.size`、`.has`、`.add`）。

### 優勢

- 只會喺輸入係非空陣列，而且每個元素都係 `Set` 實例嘅時候先回傳 `true`。
- 透過喺陣列冇任何元素時回傳 `false`，避免空陣列出現誤判為真。
- 喺對每個元素做 `Set` 專用操作之前，作為執行期守衛好有用。

## 用法

### 語法

函數：

- `areSets(array)`

參數：

- `array`: 要檢查入面係咪有 `Set` 實例嘅陣列。

### 本地函數匯入

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a 喺 runtime 係一個由 Set 實例組成嘅陣列
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areSets(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areSets](../_analysis/areSets.md)

<br>

---

<small>此檔案於 30 January 2026 at 23:16:09 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>