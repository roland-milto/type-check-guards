# areDates

## 說明

`areDates` 用嚟判斷指定陣列係咪有內容，而且只包含 `Date` 物件；只有當所有元素都係有效日期先會回傳 `true`。

### 使用場景

用 `areDates` 去驗證未知輸入（例如：解析後嘅 JSON、表單資料、API payload）之後，先再執行日期相關邏輯，例如按時間排序、格式化，或者計算範圍。

> **俾 TypeScript 用戶嘅提示：**
>
> 只會對非空陣列而且每個元素都係 `Date` 嘅情況回傳 `true`；空陣列會回傳 `false`。

### 優勢

- 喺驗證內容之前先確保陣列唔係空，避免對空輸入回傳 `true`。
- 確認每個元素都係 `Date` 實例，一遇到第一個唔匹配就即刻回傳 `false`。
- 適合作為守衛式檢查，用喺對陣列項目做日期相關操作之前。

## 用法

### 語法

函數：

- `areDates(array)`

參數：

- `array`: 要檢查入面係咪有 `Date` 物件嘅陣列。

### 本地函數匯入

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // 係
console.log(areDates(b)); // 唔係
console.log(areDates(c)); // 唔係

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areDates(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areDates](../_analysis/areDates.md)

<br>

---

<small>此檔案於 31 January 2026 at 15:33:05 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>