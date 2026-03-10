# areBigInts

## 說明

`areBigInts` 用嚟判斷一個值係咪非空陣列，而且只包含 `bigint` 值。

### 使用場景

驗證未知輸入（例如解析後嘅類 JSON 數據、API payload，或者型別標註為 `unknown` 嘅函數參數），確保佢係一個非空、由 `bigint`
值組成嘅陣列先再處理；只有當所有元素都係 `bigint` 先回傳 `true`，否則回傳 `false`。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺對未知輸入做只限 `bigint` 嘅操作（例如算術、比較）之前，用 `areBigInts` 做 runtime guard。

### 優勢

- 確保每個元素都係 `bigint`，只會喺成個陣列完全符合時先回傳 `true`。
- 設計上會拒絕非陣列同空陣列（透過 `isFilledArray`），避免意外接受無效輸入。
- 快速失敗：一搵到有元素唔係 `bigint` 就即刻回傳 `false`。

## 用法

### 語法

函數：

- `areBigInts(array)`

參數：

- `array`: 要檢查嘅值。

### 本地函數匯入

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // 真
console.log(areBigInts(b)); // 假
console.log(areBigInts(c)); // 假
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areBigInts(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>此檔案於 31 January 2026 at 23:27:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>