# areJson

## 說明

檢查一個陣列嘅所有元素係咪 JSON 字串；只有喺陣列有內容而且每一項都係有效 JSON 時先回傳 `true`，否則回傳 `false`。

### 使用場景

驗證傳入數據（例如嚟自 query params、環境變數、或者外部 API），當你預期收到一個由 JSON 編碼字串組成嘅陣列，並且想拒絕空陣列或者任何非
JSON 項目。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要喺解析（例如用 `JSON.parse`）之前，先驗證一個 `unknown[]` 入面只包含 JSON 字串時，就用 `areJson`。

### 優勢

- 只會喺每個元素都係有效嘅 JSON 字串時先回傳 `true`；否則回傳 `false`。
- 快速失敗：一搵到非 JSON 元素就即刻停止檢查。
- 設計上會拒絕空陣列，對於冇填入內容嘅輸入會回傳 `false`。

## 用法

### 語法

函數：

- `areJson(array)`

參數：

- `array`: 要檢查入面元素係咪 JSON 字串嘅陣列。

### 本地函數匯入

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // 係真
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // 係假
const empty = areJson([]); // 係假

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areJson(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areJson](../_analysis/areJson.md)

<br>

---

<small>此檔案於 30 January 2026 at 16:18:14 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>