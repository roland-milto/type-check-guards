# arePlainObjects

## 说明

檢查一個陣列內底个元素敢攏是普通物件，干焦當逐个元素攏符合時才回傳 `true`。

### 使用场景

驗證外部抑是無型別个資料（例如：解析後个 JSON、API payloads、表單送出），確保你收著一個無空个陣列，而且逐筆攏是普通物件，才開始迭代佮讀取屬性。

> **给 TypeScript 用户的提示：**
>
> 佇 TypeScript 內底，使用 `arePlainObjects` 來驗證未知輸入，才通當做 `Record<string, unknown>[]`（抑是較嚴格个物件形狀）來處理。

### 优势

- 確保輸入陣列內底逐个元素攏是普通物件，干焦當所有項目攏符合時才回傳 `true`。
- 提早拒絕無效輸入（毋是陣列抑是空陣列），回傳 `false`。
- 物件字面量建立个物件佮 `Object.create(null)` 建立个物件攏當做有效个普通物件。

## 用法

### 语法

函数：

- `arePlainObjects(array)`

参数：

- `array`: 欲檢查陣列內底敢攏是普通物件元素个陣列。

### 本地函数导入

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // 真
const b = arePlainObjects([{}, Object.create(null)]); // 真
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // 假
const d = arePlainObjects([] as unknown[]); // 假
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

<small>该文件于 30 January 2026 at 16:54:53 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>