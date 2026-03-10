# arePromises

## 說明

`arePromises` 用嚟判斷一個陣列入面嘅所有元素係咪都係 `Promise` 實例。

### 使用場景

喺聚合之前（例如用 `Promise.all`），驗證一個動態建立或者由外部提供嘅清單入面只包含 promises。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `arePromises` 喺呼叫 `Promise.all` 或其他只適用於 promise 嘅操作之前驗證 `unknown[]`；對於空陣列佢會回傳 `false`。

### 優勢

- 確保你喺繼續處理同 Promise 相關嘅邏輯之前，每個元素都係 `Promise`。
- 對於冇填滿嘅陣列會回傳 `false`，避免空輸入造成結果含糊。
- 當你處理由外部來源拎到嘅 `unknown[]` 時，作為執行期守衛好有用。

## 用法

### 語法

函數：

- `arePromises(array)`

參數：

- `array`: 要檢查入面係咪有 Promise 實例嘅陣列。

### 本地函數匯入

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values 喺執行時係一個由 Promise 實例組成嘅陣列
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.arePromises(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [arePromises](../_analysis/arePromises.md)

<br>

---

<small>此檔案於 30 January 2026 at 23:50:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>