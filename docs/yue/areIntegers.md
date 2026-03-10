# areIntegers

## 說明

`areIntegers` 用嚟判斷指定陣列入面嘅所有元素係咪都係整數；如果係就回傳 `true`，否則回傳 `false`。

### 使用場景

當你嘅邏輯需要一個有內容、由整數值組成嘅清單（例如：ID、計數器、分頁 offset、或者陣列索引）時，用 `areIntegers`
去驗證用戶提供或者外部來源嘅資料（例如：query parameters、JSON payloads、CSV rows）。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺將 `unknown[]` 輸入當成只包含整數嘅 `number[]` 之前，用 `areIntegers` 做 runtime guard。如果佢回傳 `false`
> ，輸入要唔係唔係一個有內容嘅陣列，就係至少包含一個非整數值。

### 優勢

- 只會喺每個元素都係整數嘅時候先回傳 `true`；否則回傳 `false`。
- 幫你喺做只接受整數嘅操作之前（例如：索引、計數、ID）驗證未知輸入。
- 快速失敗：一搵到有非整數元素就即刻停止檢查。

## 用法

### 語法

函數：

- `areIntegers(array)`

參數：

- `array`: 要檢查入面係咪全部都係整數元素嘅陣列。

### 本地函數匯入

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // 係
console.log(areIntegers(b)); // 係
console.log(areIntegers(c)); // 唔係

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areIntegers(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>此檔案於 31 January 2026 at 01:08:21 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>