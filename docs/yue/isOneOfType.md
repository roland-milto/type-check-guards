# isOneOfType

## 說明

`isOneOfType` 用嚟判斷指定嘅 `value` 係咪至少符合其中一個提供嘅型別字串；如果搵到任何符合就回傳 `true`，否則回傳 `false`。

### 使用場景

喺繼續做後續邏輯之前，透過允許多個可接受嘅執行期型別（例如 `number` 或 `string`），去驗證鬆散型別或者外部資料（例如解析後嘅
JSON、查詢參數）。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你想喺執行期檢查一個值係咪符合幾個允許型別其中之一，就用 `isOneOfType`；只要至少有一個型別符合就會回傳 `true`，否則回傳
`false`。

### 優勢

- 一次呼叫就可以檢查一個值係咪符合多個允許嘅型別，喺第一個符合時就會回傳 `true`。
- 佢提供一個簡單嘅布林結果，容易同條件邏輯同提早返回（early returns）一齊用。
- 佢可以處理 `unknown` 輸入，令佢喺執行期邊界（例如外部資料、用戶輸入）特別有用。

## 用法

### 語法

函數：

- `isOneOfType(value, types)`

參數：

- `value`: 要用指定型別去檢查嘅值。
- `types`: 一個型別字串陣列，用嚟表示該值可能屬於嘅型別。

### 本地函數匯入

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input 喺執行時係一個物件
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isOneOfType(value, types)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>此檔案於 6 February 2026 at 13:59:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>