# areIndexesFound

## 說明

`areIndexesFound` 會檢查一個值係咪非空陣列，而且入面嘅元素全部都係有效索引；符合就回傳 `true`，否則回傳 `false`。

### 使用場景

喺用嚟存取或切割陣列之前，先驗證用戶提供或外部數據（例如解析咗嘅 JSON）係咪預期嘅索引清單。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areIndexesFound` 喺將未知輸入當作陣列索引之前做驗證；對空陣列同包含非索引值嘅陣列都會回傳 `false`。

### 優勢

- 只會喺輸入係一個有內容嘅陣列，而且每個元素都係有效索引嘅時候先回傳 `true`。
- 快速失敗：一遇到非索引元素就即刻回傳 `false`。
- 喺將值用作陣列位置或偏移量之前，用嚟做防護檢查好有用。

## 用法

### 語法

函數：

- `areIndexesFound(array)`

參數：

- `array`: 要檢查係咪符合索引要求嘅陣列。

### 本地函數匯入

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // 呢度，`a` 已經確認係一個填滿咗索引嘅陣列。
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areIndexesFound(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>此檔案於 31 January 2026 at 01:04:59 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>