# areOfType

## 說明

檢查指定 `array` 入面所有元素係咪都屬於指定嘅 `type`。

### 使用場景

用 `areOfType` 去驗證未知輸入（例如：解析咗嘅 JSON、API payload、用戶輸入），再對陣列入面每個元素做特定類型嘅操作。

> **俾 TypeScript 用戶嘅提示：**
>
> 因為 `areOfType` 係一個類型守衛，TypeScript 會喺 `if (areOfType(...)) {}` 區塊入面將陣列收窄做 `Array<DataTypeOf<T>>`。

### 優勢

- 提供 TypeScript 類型守衛：當佢回傳 `true`，輸入會被收窄做 `Array<DataTypeOf<T>>`。
- 會用要求嘅執行時類型去驗證每個元素，防止混合類型陣列通過。
- 快速失敗：一搵到唔匹配嘅元素就即刻回傳 `false`。
- 設計上會拒絕非陣列同空陣列（取決於 `isFilledArray`）。

## 用法

### 語法

函數：

- `areOfType(array, type)`

參數：

- `array`: 要檢查嘅陣列。
- `type`: 用嚟同陣列入面每個元素對照檢查嘅類型。

### 本地函數匯入

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values 而家係 number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areOfType(array, type)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areOfType](../_analysis/areOfType.md)

<br>

---

<small>此檔案於 30 January 2026 at 17:12:10 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>