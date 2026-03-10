# areEqual

## 說明

`areEqual` 會檢查陣列入面所有元素係咪都等於指定嘅預期值；只會喺非空陣列而且每個項目都匹配時回傳 `true`。

### 使用場景

驗證一個清單只包含單一允許值（例如：所有狀態旗標都係 `true`、所有角色都係 `"admin"`、或者所有數值項目都等於指定常數），同時將空輸入視為無效（
`false`）。

> **俾 TypeScript 用戶嘅提示：**
>
> 當你需要嚴格檢查所有項目都一致時用 `areEqual`；對空陣列同任何非陣列或未填充嘅輸入都會回傳 `false`。

### 優勢

- 只會喺每個元素都符合預期值嗰陣先回傳 `true`；否則回傳 `false`。
- 快速失敗：一搵到唔匹配嘅元素就即刻停止檢查。
- 透過喺輸入唔係已填充嘅陣列時回傳 `false`，防止無效輸入。

## 用法

### 語法

函數：

- `areEqual(value, expected)`

參數：

- `value`: 要檢查嘅陣列。
- `expected`: 用嚟同陣列入面每個項目比較嘅元素。

### 本地函數匯入

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.areEqual(value, expected)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [areEqual](../_analysis/areEqual.md)

<br>

---

<small>此檔案於 31 January 2026 at 23:52:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>