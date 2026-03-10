# areBooleans

## 說明

`areBooleans` 會檢查指定嘅非空陣列係咪只包含 boolean 值；如果係就回傳 `true`，否則回傳 `false`。

### 使用場景

驗證用戶提供或者外部數據（例如：JSON payload、query params、config arrays），確保一個非空清單只包含 booleans，先至套用 boolean
邏輯或者傳畀期望 `boolean[]` 嘅 API。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areBooleans` 喺將 `unknown[]` 當做 `boolean[]` 之前做驗證；佢對空陣列會回傳 `false`，所以如果應該容許空清單，就要明確處理呢個情況。

### 優勢

- 只會喺每個元素都係 boolean，而且輸入係非空陣列嘅情況下先回傳 `true`。
- 透過拒絕空陣列（回傳 `false`）嚟避免誤判。
- 好適合作為只接受 boolean 操作之前嘅 runtime guard（例如：`every`、`some`、邏輯歸約）。

## 用法

### 語法

函數：

- `areBooleans(array)`

參數：

- `array`: 要檢查入面係咪全部都係 boolean 元素嘅陣列。

### 本地函數匯入

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areBooleans(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>此檔案於 30 January 2026 at 14:43:17 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>