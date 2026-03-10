# areHexadecimals

## 說明

檢查陣列入面所有元素係咪十六進制字串；只有喺非空陣列而且每個項目都有效嘅情況下先會回傳 `true`。

### 使用場景

用 `areHexadecimals` 去驗證用戶輸入或者外部資料（例如 ID、checksum、冇帶前置 '#' 嘅色碼），再進行十六進制解析或者後續處理。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺解析或轉換數值之前用 `areHexadecimals` 去驗證未知輸入（例如喺 `parseInt(value, 16)` 或 BigInt 轉換之前）。

### 優勢

- 驗證每個元素都係十六進制字串，只有當全部項目都符合先會回傳 `true`。
- 設計上會拒絕空陣列，對於缺少輸入資料會回傳 `false`。
- 提供簡單嘅布林結果（`true`/`false`），適合用作 guard 同提早 return 嘅驗證。

## 用法

### 語法

函數：

- `areHexadecimals(array)`

參數：

- `array`: 要檢查嘅陣列，用嚟確認入面嘅元素係咪十六進制字串。

### 本地函數匯入

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areHexadecimals(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>此檔案於 31 January 2026 at 23:08:34 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>