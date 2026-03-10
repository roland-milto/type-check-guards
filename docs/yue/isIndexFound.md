# isIndexFound

## 說明

`isIndexFound` 用嚟判斷指定值係咪非負整數，表示已經搵到一個索引。

### 使用場景

喺用嚟索引陣列或字串之前，驗證搜尋結果係咪一個可用嘅索引（整數 `>= 0`），避免唔小心用咗 `-1` 或非數值。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺 `indexOf`、`findIndex` 或自訂搜尋之後用 `isIndexFound`，因為 `-1`（或者其他無效值）可以表示「搵唔到」。當佢回傳 `true`
> ，個值就係數字，而且可以安全噉用做陣列／字串索引。

### 優勢

- 提供一個簡單嘅型別守衛，透過檢查係咪非負整數去判斷有冇搵到索引。
- 只會對有效嘅索引式值（整數 `>= 0`）回傳 `true`，會拒絕負數、非整數同非數字。
- 幫你避免處理會用 `-1` 表示「搵唔到」嘅 API 時出現 off-by-one 同哨兵值（sentinel-value）錯誤。

## 用法

### 語法

函數：

- `isIndexFound(value)`

參數：

- `value`: 要檢查嘅值，判斷佢係咪非負整數。

### 本地函數匯入

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // 呢度 idx 係數字，而且 >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// 用 indexOf 嘅典型用法
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isIndexFound(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>此檔案於 31 January 2026 at 00:48:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>