# arePrimitives

## 說明

`arePrimitives` 會評估一個提供嘅、非空陣列入面嘅所有元素係咪都屬於原始型別。

### 使用場景

喺序列化、雜湊、記錄日誌，或者傳畀必須唔可以接收物件嘅 API 之前，先驗證輸入數據（例如查詢參數、CSV 每行嘅值、或者一個 ID/tag
清單）只包含原始值。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要喺進一步處理之前，確保一個 `unknown[]` 只包含原始值（string、number、bigint、boolean、symbol、undefined 或 null）時，就用
`arePrimitives`。

### 優勢

- 只會喺每個元素都係原始值（primitive value）嗰陣先回傳 `true`，令佢成為對「冇物件/函式」陣列嘅嚴格守衛。
- 快速失敗：一搵到非原始值元素就即刻回傳 `false`。
- 對非陣列同空陣列都會回傳 `false`（透過 filled-array 檢查），避免意外接受無效輸入。

## 用法

### 語法

函數：

- `arePrimitives(array)`

參數：

- `array`: 要檢查入面元素係咪原始型別嘅陣列。

### 本地函數匯入

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // 係真
const r2 = arePrimitives(b); // 係真
const r3 = arePrimitives(c); // 係假
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.arePrimitives(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>此檔案於 31 January 2026 at 00:07:21 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>