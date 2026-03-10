# areFilledArrays

## 说明

`areFilledArrays` 會檢查一個二維陣列敢是無空，而且伊个逐个子陣列嘛攏無空。

### 使用场景

用 `areFilledArrays` 來驗證表格抑是矩陣款个輸入（親像 CSV 列、格仔資料、分組結果），按呢你就會當安全假設至少有一個子陣列，而且無任何子陣列是空的。

> **给 TypeScript 用户的提示：**
>
> 當你需要確保一個 2D 陣列至少有一列，而且逐列至少有一個元素，才欲開始迭代抑是用索引存取的時陣，會當用 `areFilledArrays`。

### 优势

- 驗證外層陣列無空，閣逐个內層陣列嘛攏無空，干焦兩个條件攏符合才會回傳 `true`。
- 內層陣列內底是啥物元素型態攏會當用（親像數字、字串、物件、巢狀陣列），因為伊干焦檢查陣列有無「有資料」，無去檢查元素內容。
- 提供簡單个布林結果（`true`/`false`），適合佇處理二維資料進前做 guard。

## 用法

### 语法

函数：

- `areFilledArrays(array)`

参数：

- `array`: 欲檢查个二維陣列。

### 本地函数导入

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // 真
console.log(areFilledArrays(b)); // 真
console.log(areFilledArrays(c)); // 真
console.log(areFilledArrays(d)); // 假
console.log(areFilledArrays(e)); // 假
console.log(areFilledArrays(f)); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFilledArrays(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>该文件于 6 February 2026 at 11:57:59 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>