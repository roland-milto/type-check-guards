# areBinaries

## 說明

檢查提供嘅值係咪一個由有效二進制字串組成嘅非空陣列，並且只會喺所有項目都通過驗證時先回傳 `true`。

### 使用場景

當你收到一個未知清單（例如嚟自 JSON、表單或者 API），而你需要喺解析或處理之前確保佢係一個由二進制字串組成嘅非空陣列，就用
`areBinaries`。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺將二進制字串轉做 numbers/BigInts 之前，用 `areBinaries` 去驗證未知輸入；佢會確保陣列唔係空，而且每個元素都係有效嘅二進制字串。

### 優勢

- 驗證一個值係咪非空陣列，而且每個元素都係有效嘅二進制字串。
- 回傳一個簡單嘅布林結果（`true`/`false`），適合用作 guard、提早 return 同輸入驗證。
- 透過拒絕包含任何非二進制項目嘅陣列，避免後續解析出錯。

## 用法

### 語法

函數：

- `areBinaries(array)`

參數：

- `array`: 要檢查嘅值。

### 本地函數匯入

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // 係
console.log(areBinaries(b)); // 唔係
console.log(areBinaries([])); // 唔係
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areBinaries(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>此檔案於 31 January 2026 at 23:16:33 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>