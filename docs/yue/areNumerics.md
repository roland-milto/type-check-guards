# areNumerics

## 說明

`areNumerics` 會檢查一個值係咪非空陣列，而且所有元素都係數值。

### 使用場景

用 `areNumerics` 喺計算總和、平均數或者其他數值運算之前，驗證外部或者冇型別嘅資料（例如 JSON payload、query
parameters、表單輸入）；確保輸入係非空嘅數值陣列，否則回傳 `false`。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areNumerics` 喺將 `unknown` 輸入當做數值陣列之前做 guard；對於非陣列同空陣列都會回傳 `false`。

### 優勢

- 只會喺輸入係非空陣列而且每個元素都係數值嗰陣先回傳 `true`。
- 快速失敗：一搵到非數值元素就即刻停止檢查並回傳 `false`。
- 喺做數值運算之前，幫你安全噉驗證未知輸入。

## 用法

### 語法

函數：

- `areNumerics(array)`

參數：

- `array`: 要檢查入面元素係咪數值嘅陣列。

### 本地函數匯入

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // 真
console.log(areNumerics(b)); // 真
console.log(areNumerics(c)); // 假
console.log(areNumerics(d)); // 假
console.log(areNumerics(e)); // 假

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areNumerics(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>此檔案於 6 February 2026 at 16:08:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>