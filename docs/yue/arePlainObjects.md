# arePlainObjects

## 說明

檢查一個陣列嘅所有元素係咪純物件，只有當每個元素都符合先會回傳 `true`。

### 使用場景

驗證外部或者冇型別嘅資料（例如：解析後嘅 JSON、API payload、表單提交），確保你收到嘅係一個非空陣列，而且每個項目都係純物件，先至去迭代同讀取屬性。

> **俾 TypeScript 用戶嘅提示：**
>
> 喺 TypeScript 入面，用 `arePlainObjects` 去驗證未知輸入，先至當佢係 `Record<string, unknown>[]`（或者更嚴格嘅物件形狀）咁樣處理。

### 優勢

- 確保輸入陣列入面每個元素都係純物件，只有當所有項目都符合先會回傳 `true`。
- 透過回傳 `false` 及早拒絕無效輸入（非陣列或空陣列）。
- 將物件字面量物件同 `Object.create(null)` 建立嘅物件都視為有效嘅純物件。

## 用法

### 語法

函數：

- `arePlainObjects(array)`

參數：

- `array`: 要檢查入面元素係咪純物件嘅陣列。

### 本地函數匯入

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // 係
const b = arePlainObjects([{}, Object.create(null)]); // 係
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // 唔係
const d = arePlainObjects([] as unknown[]); // 唔係
```

### 全域物件匯入

如需將函數作為全域物件方法匯入，請使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

之後以下方法可全域使用：

- `Type.arePlainObjects(array)`

## 函數分析

此處記錄了當向函數輸入不同參數時產生的輸出的表格分析： [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>此檔案於 30 January 2026 at 16:56:40 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>