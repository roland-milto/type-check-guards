# isFilledArray

## 说明

檢查 `value` 敢是有至少一個元素个陣列，回傳 `true` 或 `false`。

### 使用场景

用 `isFilledArray` 來驗證傳入个資料（例：API payload、表單值、設定），才來迭代、存取頭一個元素，抑是套用需要至少一項个邏輯。

> **给 TypeScript 用户的提示：**
>
> `isFilledArray` 是一個執行期 guard，會回傳布林值；伊無會縮窄元素型別，除非確認陣列是無空。

### 优势

- 簡單、快速用 `Array.isArray` kap 長度檢查來確認是無空个陣列。
- 會當避免程式假設陣列內底至少有一個元素時發生執行期錯誤。
- 清楚个布林結果：無空陣列回傳 `true`，其他情形回傳 `false`。

## 用法

### 语法

函数：

- `isFilledArray(value)`

参数：

- `value`: 欲檢查个值，看伊敢是無空个陣列。

### 本地函数导入

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input 是一个运行时的无空数组
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFilledArray(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>该文件于 6 February 2026 at 11:48:05 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>