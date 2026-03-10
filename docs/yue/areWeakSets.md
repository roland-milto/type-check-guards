# areWeakSets

## 說明

檢查輸入係咪一個非空陣列，而且入面每個元素都係 `WeakSet`；只會喺呢種情況先回傳 `true`。

### 使用場景

驗證執行時輸入（例如嚟自 API、設定、或者用戶提供嘅資料），確保你有一個非空嘅 `WeakSet` 實例清單，先繼續做依賴 `WeakSet` 行為嘅邏輯。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areWeakSets` 喺將未知輸入當成 `WeakSet[]` 之前先做驗證。佢對空陣列同非陣列都會回傳 `false`。

### 優勢

- 確保輸入陣列入面每個元素都係 `WeakSet`。
- 對空陣列會回傳 `false`，避免喺缺少資料時意外得到「全部有效」嘅結果。
- 當輸入唔係一個有內容嘅陣列（包括 `null`）時，會安全噉回傳 `false`。
- 喺執行需要 `WeakSet` 實例嘅操作之前，用嚟做 guard 好有用。

## 用法

### 語法

函數：

- `areWeakSets(array)`

參數：

- `array`: 要檢查係咪包含 `WeakSet` 物件嘅陣列。

### 本地函數匯入

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a 係一個非空嘅 WeakSet 實例陣列
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areWeakSets(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>此檔案於 30 January 2026 at 14:11:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>