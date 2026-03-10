# areWeakMaps

## 說明

`areWeakMaps` 會檢查一個值係咪非空陣列，而且每個元素都係 `WeakMap`；只會喺呢個情況先回傳 `true`，否則回傳 `false`。

### 使用場景

驗證執行期資料（例如解析後嘅 JSON、plugin 輸入，或者型別較鬆散嘅設定），確保佢係一個非空、由 `WeakMap` 實例組成嘅陣列，先至去迭代同呼叫
`WeakMap` 方法；當任何元素唔係 `WeakMap` 或者陣列係空嘅時候會回傳 `false`。

> **俾 TypeScript 用戶嘅提示：**
>
> 用 `areWeakMaps` 喺將未知輸入當成非空 `WeakMap[]` 之前做驗證；對空陣列會回傳 `false`。

### 優勢

- 確保提供嘅陣列入面每個元素都係 `WeakMap` 實例。
- 對空陣列會回傳 `false`，避免意外將「冇資料」當成有效輸入。
- 喺對所有項目執行 `WeakMap` 專用操作之前，用嚟做 guard 好有用。

## 用法

### 語法

函數：

- `areWeakMaps(array)`

參數：

- `array`: 要檢查係咪包含 `WeakMap` 實例嘅陣列。

### 本地函數匯入

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list 係一個非空嘅 WeakMap 實例陣列
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // 唔係一個非空嘅 WeakMap[]
}

```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areWeakMaps(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>此檔案於 30 January 2026 at 13:40:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>