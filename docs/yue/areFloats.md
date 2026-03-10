# areFloats

## 說明

`areFloats` 會檢查指定陣列係咪有內容，而且所有元素都係浮點數。

### 使用場景

當你收到一個 `unknown[]`（例如嚟自 JSON、查詢參數、或者外部 API），而你需要確保佢係一個有內容嘅陣列，並且每一項都係浮點數，先至去跑數值邏輯（例如平均值、插值、或者統計計算）嗰陣，就用
`areFloats`。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areFloats` 去守衛 `unknown[]`，先好當佢係只包含浮點數嘅 `number[]`；對空陣列同任何非浮點數元素都會回傳 `false`。

### 優勢

- 只會喺輸入係非空陣列，而且每個元素都係浮點數嗰陣先回傳 `true`。
- 快速失敗：一搵到有非浮點數元素就即刻回傳 `false`。
- 喺做只適用於浮點數嘅計算之前，幫你驗證未知輸入。

## 用法

### 語法

函數：

- `areFloats(array)`

參數：

- `array`: 要檢查入面係咪全部都係浮點數元素嘅陣列。

### 本地函數匯入

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // 係
console.log(areFloats(b)); // 唔係
console.log(areFloats(c)); // 唔係

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areFloats(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areFloats](../_analysis/areFloats.md)

<br>

---

<small>此檔案於 30 January 2026 at 16:00:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>