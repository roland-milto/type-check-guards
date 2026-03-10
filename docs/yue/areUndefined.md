# areUndefined

## 說明

`areUndefined` 會檢查傳入嘅陣列入面係咪每個元素都係 `undefined`。

### 使用場景

驗證一個可選結果列表入面冇任何實際值（只係 `undefined`），例如喺做 mapping lookup 之後，搵唔到嘅項目用 `undefined`
表示，而你想確認所有 lookup 都失敗。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要斷言一個 `unknown[]` 只包含 `undefined` 值時就用 `areUndefined`；由於內部會做 `isFilledArray`
> 檢查，對空陣列同非陣列/無效輸入會回傳 `false`。

### 優勢

- 透過 `isFilledArray` 要求陣列必須有內容，對非陣列同空陣列會回傳 `false`。
- 確保每個元素都係 `undefined`，唔係淨係部分係，令意圖更清晰。
- 喺驗證未知輸入集合時，作為 guard 風格嘅 predicate 好有用。

## 用法

### 語法

函數：

- `areUndefined(array)`

參數：

- `array`: 要檢查入面有冇 `undefined` 元素嘅陣列。

### 本地函數匯入

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// 注意：對於空陣列會回傳 false
const r4 = areUndefined([]); // false
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areUndefined(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>此檔案於 30 January 2026 at 13:58:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>