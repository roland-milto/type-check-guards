# isArray

## 說明

`isArray` 會檢查指定嘅值係咪陣列；如果係就回傳 `true`，否則回傳 `false`。

### 使用場景

驗證未知數據（例如解析後嘅 JSON 或 API 回應），確保某個值係陣列先至去迭代、用索引存取，或者讀取 `.length`。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要喺 runtime 檢查係咪陣列時就用 `isArray`；佢會回傳布林值，而且用 `unknown` 值去呼叫都安全。

### 優勢

- 用內置嘅 `Array.isArray`，可以喺唔同 realm（例如 iframe）之間可靠噉檢測陣列。
- 回傳一個簡單嘅布林結果（`true`/`false`），適合用作 guard 同分支邏輯。
- 因為參數係 `unknown`，所以可以處理任何輸入類型。

## 用法

### 語法

函數：

- `isArray(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input 喺執行時係一個陣列
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isArray(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isArray](../_analysis/isArray.md)

<br>

---

<small>此檔案於 6 February 2026 at 11:32:43 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>