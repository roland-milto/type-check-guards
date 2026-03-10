# areArrays

## 说明

`areArrays` 判斷一個值係毋係有內容个二維陣列，而且其中个項目全部都係陣列。

### 使用场景

用 `areArrays` 來驗證表格或矩陣式个輸入（例如 CSV 列、格網資料、或者分組清單），再去做列/欄操作；若輸入毋係陣列、係空个、或者包含任何毋係陣列个元素，就會回傳
`false`。

> **给 TypeScript 用户的提示：**
>
> 當你需要確保一個值係毋會空个 2D 陣列，並且每一列都係陣列，才去迭代或者用索引存取巢狀陣列時，就用 `areArrays`。

### 优势

- 驗證輸入係一個毋會空个二維陣列，且每一個元素都係陣列。
- 回傳簡單个布林結果（`true`/`false`），適合用做守衛同提早退出。
- 幫助避免後續程式假設有巢狀陣列操作（例如對每一列做 mapping）時發生執行期錯誤。

## 用法

### 语法

函数：

- `areArrays(array)`

参数：

- `array`: 愛檢查个輸入。

### 本地函数导入

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value係一個2D陣列，元素係陣列
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areArrays(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areArrays](../_analysis/areArrays.md)

<br>

---

<small>该文件于 6 February 2026 at 13:39:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>