# isBinary

## 說明

`isBinary` 用嚟判斷一個值係咪二進制字串（可選擇性帶 `0b`/`0B` 前綴），並回傳 `true` 或 `false`。

### 使用場景

驗證用戶提供嘅字串（例如表單欄位、CLI 參數、設定值），確保佢哋只包含二進制數字，並且可選擇性帶 `0b`/`0B` 前綴，先再做後續處理。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺解析或者將字串轉做 `BigInt`/`Number` 之前，先用 `isBinary` 做 type guard，避免無效輸入。

### 優勢

- 接受帶或者唔帶 `0b`/`0B` 前綴嘅二進制字串。
- 拒絕空字串同埋前後有空白字元（ASCII ≤ 32）嘅字串。
- 回傳 `true`/`false` 而唔會拋出錯誤，對未知輸入更安全。

## 用法

### 語法

函數：

- `isBinary(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // 係
const b = isBinary("1010");   // 係
const c = isBinary("0b1020"); // 唔係
const d = isBinary(0b1010);     // 唔係

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isBinary(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isBinary](../_analysis/isBinary.md)

<br>

---

<small>此檔案於 31 January 2026 at 23:11:55 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>