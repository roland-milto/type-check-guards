# areMaps

## 說明

`areMaps` 用嚟判斷一個指定陣列係咪非空，而且入面所有元素都係 `Map` 實例。

### 使用場景

喺將未知輸入（例如由 JSON 解析、外部 API、或者動態來源）當成一個非空嘅 `Map` 物件清單之前，先做驗證。

> **俾 TypeScript 用戶嘅提示：**
>
> 對空陣列會回傳 `false`；只有當陣列有內容，而且每個元素都係 `Map`，先會回傳 `true`。

### 優勢

- 確保每個元素都係一個 `Map` 實例，只有當成個陣列都通過檢查先會回傳 `true`。
- 設計上會拒絕空陣列，避免意外將「冇資料」當成有效輸入而接受。
- 喺對一個集合進行 `Map` 專用操作（例如 `.get()`、`.set()`、迭代）之前，用嚟做 guard 好有用。

## 用法

### 語法

函數：

- `areMaps(array)`

參數：

- `array`: 要檢查嘅陣列。

### 本地函數匯入

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items 喺執行時保證係一個非空嘅 Map 實例陣列
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // 對於：空陣列，或者包含任何非 Map 值嘅陣列，會係 false
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areMaps(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areMaps](../_analysis/areMaps.md)

<br>

---

<small>此檔案於 31 January 2026 at 16:15:23 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>