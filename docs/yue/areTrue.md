# areTrue

## 說明

檢查一個非空陣列係咪只包含布林值 `true`。

### 使用場景

用 `areTrue` 去驗證一組前置條件或者功能旗標係咪全部都已經啟用（所有值都係 `true`）先繼續，同時將空嘅或者格式錯誤嘅輸入視為未滿足（
`false`）。

> **俾 TypeScript 用戶嘅提示：**
>
> `areTrue` 對空陣列同埋包含任何唔係嚴格等於 `true` 嘅值嘅陣列都會回傳 `false`。

### 優勢

- 只會喺每個元素都嚴格等於 `true` 而且陣列唔係空嘅情況下先回傳 `true`。
- 快速失敗：一搵到唔係 `true` 嘅值就即刻回傳 `false`。
- 對無效輸入（唔係陣列或者空陣列）會回傳 `false`。

## 用法

### 語法

函數：

- `areTrue(array)`

參數：

- `array`: 要檢查係咪全部都係 `true` 值嘅陣列。

### 本地函數匯入

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areTrue(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areTrue](../_analysis/areTrue.md)

<br>

---

<small>此檔案於 30 January 2026 at 13:53:27 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>