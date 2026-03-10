# isDecimal

## 說明

`isDecimal` 會檢查一個值係咪十進制字串表示法：冇前後空白，而且十進制格式有效。

### 使用場景

喺解析或儲存之前，驗證表單欄位、API payload 或設定值：必須以十進制字串（可選擇帶正負號）提供，而且周圍唔可以有任何空白。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺轉換之前用 `isDecimal` 去驗證用戶輸入（例如用 `Number(value)`），特別係需要拒絕空白嘅情況。

### 優勢

- 嚴格驗證輸入係咪字串，並且符合十進制字面量模式。
- 拒絕前後空白（包括控制字元），避免解析含糊不清。
- 喺跑 regex 之前先做快速預檢（型別檢查同首/尾字元檢查）。
- 回傳簡單嘅布林結果（`true`/`false`），適合用作 guard 同輸入驗證。

## 用法

### 語法

函數：

- `isDecimal(value)`

參數：

- `value`: 要檢查係咪符合十進制字串格式嘅值。

### 本地函數匯入

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v 喺呢度係字串（執行時已驗證）
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isDecimal(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>此檔案於 31 January 2026 at 15:55:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>