# areArrays

## 说明

`areArrays` 判斷一个值敢是有內容的二維陣列，而且內底的項目攏是陣列。

### 使用场景

用 `areArrays` 來驗證表格抑是矩陣型的輸入（例如 CSV rows、grid data、抑是分組的
lists），才來做列/欄操作；若輸入毋是陣列、是空的、抑是包含任何毋是陣列的元素，就會回傳 `false`。

> **给 TypeScript 用户的提示：**
>
> 當你需要確定一个值是無空的 2D 陣列，而且每一列攏是陣列，才欲開始迭代抑是用索引存取巢狀陣列時，請用 `areArrays`。

### 优势

- 驗證輸入是一个無空的二維陣列，而且逐个元素攏是陣列。
- 回傳一个簡單的布林結果（`true`/`false`），適合做 guard 佮提早結束。
- 幫助避免後續程式假設有巢狀陣列操作（例如 mapping rows）時發生 runtime 錯誤。

## 用法

### 语法

函数：

- `areArrays(array)`

参数：

- `array`: 欲檢查的輸入。

### 本地函数导入

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value 是一个二維陣列，內底个元素是陣列
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

<small>该文件于 6 February 2026 at 13:40:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>