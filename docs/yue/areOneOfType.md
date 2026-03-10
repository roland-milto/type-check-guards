# areOneOfType

## 說明

`areOneOfType` 會檢查一個非空陣列入面嘅所有元素，係咪屬於指定嘅其中一種執行時期型別。

### 使用場景

驗證輸入資料（例如解析後嘅 JSON）：某個欄位必須係一個非空陣列，而且入面嘅項目只可以係一組已知嘅基本型別；當陣列係空或者包含任何唔允許嘅型別時回傳
`false`。

> **俾 TypeScript 用戶嘅提示：**
>
> 呢個函式會回傳 boolean，而且唔會喺編譯時期收窄陣列元素型別；建議當佢係一個執行時期驗證步驟，用咗先再做後續處理。

### 優勢

- 確保陣列入面每個元素都符合最少一種允許嘅執行時期型別；只有成個陣列都通過先會回傳 `true`。
- 及早拒絕無效輸入：當 `array` 或 `types` 係空嘅，或者唔係一個有內容嘅陣列時，會回傳 `false`。
- 適合用一次 `areOneOfType` 呼叫去驗證混合型別集合（例如數字同字串）。

## 用法

### 語法

函數：

- `areOneOfType(array, types)`

參數：

- `array`: 要根據提供嘅型別去驗證嘅元素陣列。
- `types`: 代表要檢查嘅資料型別嘅字串陣列。

### 本地函數匯入

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areOneOfType(array, types)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>此檔案於 31 January 2026 at 23:39:20 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>