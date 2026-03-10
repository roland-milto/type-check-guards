# isValidDate

## 说明

`isValidDate` 會檢查所提供个值敢是有效个 `Date` 物件，只有真正、無無效个日期才會回傳 `true`。

### 使用场景

驗證使用者輸入抑是 API 資料內可能包含日期个欄位，確保該值是真正个 `Date` 實例，毋是無效日期，才來做日期計算、格式化抑是比較。

> **给 TypeScript 用户的提示：**
>
> 佇對型別是 `unknown` 个值呼叫 `Date` 方法（例：`toISOString`, `getTime`）進前，先用 `isValidDate` 來確保佢是有效个 `Date`
> 物件。

### 优势

- 確保一个值是 `Date` 實例，毋是單單一个看起來像日期个字串抑是數字。
- 透過檢查時間值有無 `NaN`，來拒絕無效个日期（例：`new Date("invalid")`）。
- 簡單个 boolean 防衛，佇條件判斷佮驗證流程內真好用。
- 先驗證輸入，才會較袂當佇呼叫日期方法時發生執行期錯誤。

## 用法

### 语法

函数：

- `isValidDate(value)`

参数：

- `value`: 欲檢查个值。

### 本地函数导入

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input 是一个有效的 Date 实例
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isValidDate(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>该文件于 30 January 2026 at 16:51:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>