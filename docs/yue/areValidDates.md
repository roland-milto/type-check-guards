# areValidDates

## 說明

判斷一個陣列係咪非空，而且完全由有效嘅 `Date` 物件組成。

### 使用場景

用 `areValidDates` 去驗證用戶提供或者 API 提供嘅陣列，喺做同日期相關嘅操作（排序、範圍檢查、格式化）之前，確保所有項目都係真實、有效嘅
`Date` 物件，而且個清單唔係空。

> **俾 TypeScript 用戶嘅提示：**
>
> `areValidDates` 對空陣列會回傳 `false`；喺將佢當做驗證步驟之前，請確保個陣列本身係預期要非空。

### 優勢

- 只會喺每個元素都係有效嘅 `Date` 實例嗰陣先回傳 `true`（唔包括無效日期，例如 `new Date('invalid')`）。
- 透過回傳 `false` 去拒絕空輸入，確保你只會接受有意義、非空嘅日期清單。
- 提供一個簡單嘅布林值 guard 風格檢查，容易同其他驗證一齊組合使用。

## 用法

### 語法

函數：

- `areValidDates(array)`

參數：

- `array`: 要檢查嘅陣列，可能包含 `Date` 物件。

### 本地函數匯入

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // 係
console.log(areValidDates(b)); // 唔係
console.log(areValidDates(c)); // 唔係
console.log(areValidDates(d)); // 唔係

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areValidDates(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>此檔案於 30 January 2026 at 14:34:48 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>