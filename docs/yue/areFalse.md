# areFalse

## 說明

`areFalse` 會檢查提供嘅陣列入面係咪所有元素都嚴格係布林值 `false`。

### 使用場景

喺繼續下一步之前，驗證一個 feature flags、檢查結果或者 guard 結果嘅清單全部都係 `false`（例如：確認冇任何阻擋條件存在）。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要嚴格驗證一個陣列唔係空，並且只包含布林值 `false` 嘅時候，用 `areFalse`。

### 優勢

- 確保每個元素都嚴格等於 `false`（唔會做 truthy/falsey 強制轉型）。
- 透過 `isFilledArray` 要求陣列必須有內容，所以對於非陣列或者空陣列會回傳 `false`。
- 為咗效率，遇到第一個唔係 `false` 嘅元素就會提早停止。

## 用法

### 語法

函數：

- `areFalse(array)`

參數：

- `array`: 要檢查嘅陣列，入面可以包含任何類型嘅元素。

### 本地函數匯入

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // 係真
const b = areFalse([false, true, false]);  // 係假
const c = areFalse([false, "false", false]); // 係假
const d = areFalse([]); // 係假
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areFalse(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areFalse](../_analysis/areFalse.md)

<br>

---

<small>此檔案於 31 January 2026 at 16:19:15 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>