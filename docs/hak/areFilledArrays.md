# areFilledArrays

## 说明

`areFilledArrays` 檢查一個二維陣列係毋係空个，並且佢个所有子陣列也都毋係空个。

### 使用场景

用 `areFilledArrays` 來驗證表格／矩陣式个輸入（比方講 CSV 列、格仔資料、分組結果），恁樣你就做得安全地假設至少有一個子陣列，而且無任何子陣列係空个。

> **给 TypeScript 用户的提示：**
>
> 當你需要確保一個 2D 陣列至少有一列，而且每一列至少有一個元素，正好去迭代或者用索引存取之前，就用 `areFilledArrays`。

### 优势

- 驗證外層陣列係毋係空个，還有每一個內層陣列也都毋係空个；淨係兩個條件都符合个時節正會回傳 `true`。
- 內層子陣列裡肚个元素類型無限制（比方講數字、字串、物件、巢狀陣列），因為佢淨係檢查陣列有無「有填滿／有內容」，毋會去檢查元素內容。
- 提供簡單个布林結果（`true`/`false`），適合用做處理二維資料前个 guard。

## 用法

### 语法

函数：

- `areFilledArrays(array)`

参数：

- `array`: 愛檢查个二維陣列。

### 本地函数导入

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // chin
console.log(areFilledArrays(b)); // chin
console.log(areFilledArrays(c)); // chin
console.log(areFilledArrays(d)); // m̄-chin
console.log(areFilledArrays(e)); // m̄-chin
console.log(areFilledArrays(f)); // m̄-chin

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

<small>该文件于 6 February 2026 at 11:56:44 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>