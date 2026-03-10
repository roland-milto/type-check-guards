# isWeakMap

## 說明

判斷指定嘅 `value` 係咪一個 `WeakMap` 實例。

### 使用場景

當你接受一個 `unknown` 值（例如：嚟自公開 API、插件系統、或者動態設定），而你需要喺使用 `WeakMap` 專用行為之前確認佢係
`WeakMap`，就用 `isWeakMap`。

> **俾 TypeScript 用戶嘅提示：**
>
> `isWeakMap` 會做一次 `instanceof WeakMap` 檢查；佢係一個執行期 guard，只會喺真正嘅 `WeakMap` 實例時先回傳 `true`。

### 優勢

- 簡單嘅執行期檢查，用嚟判斷一個值係咪 `WeakMap`。
- 透過回傳 `true`/`false` 而唔係拋出錯誤，幫手避免誤用需要 `WeakMap` 嘅 API。
- 支援 `unknown` 輸入，令佢喺模組邊界（例如：解析、外部數據、或者冇型別嘅程式碼）用起上嚟更方便。

## 用法

### 語法

函數：

- `isWeakMap(value)`

參數：

- `value`: 要檢查嘅值。

### 本地函數匯入

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a 喺執行時係 WeakMap
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.isWeakMap(value)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>此檔案於 30 January 2026 at 13:27:40 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>