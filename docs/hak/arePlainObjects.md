# arePlainObjects

## 说明

檢查陣列內底所有元素係毋係普通物件，淨係當每一個元素都符合時正回傳 `true`。

### 使用场景

驗證外部或無型別資料（例如：解析後个 JSON、API payloads、表單提交）來確保你收到个係一個非空陣列，而且每一筆都係普通物件，然後正去迭代同讀取屬性。

> **给 TypeScript 用户的提示：**
>
> 在 TypeScript 內底，使用 `arePlainObjects` 來驗證未知輸入，然後正當佢係 `Record<string, unknown>[]`（或者更嚴格个物件形狀）來處理。

### 优势

- 確保輸入陣列內底每一個元素都係普通物件，淨係當所有項目都符合時正會回傳 `true`。
- 透過回傳 `false` 來提早拒絕無效輸入（非陣列或空陣列）。
- 將物件字面量物件同 `Object.create(null)` 物件都當作有效个普通物件。

## 用法

### 语法

函数：

- `arePlainObjects(array)`

参数：

- `array`: 用來檢查係毋係普通物件元素个陣列。

### 本地函数导入

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // chhîn
const b = arePlainObjects([{}, Object.create(null)]); // chhîn
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // m̄-chhîn
const d = arePlainObjects([] as unknown[]); // m̄-chhîn
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.arePlainObjects(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>该文件于 30 January 2026 at 16:25:16 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>