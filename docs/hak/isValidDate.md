# isValidDate

## 说明

`isValidDate` 檢查指定个值係毋係有效个 `Date` 物件，淨對真正、無無效个日期回傳 `true`。

### 使用场景

驗證使用者輸入抑係 API 資料可能包含日期个情況，確保該值係真正个 `Date` 實例，毋係無效日期，正來做日期計算、格式化抑係比較。

> **给 TypeScript 用户的提示：**
>
> 對型別係 `unknown` 个值，喺呼叫 `Date` 方法（例如：`toISOString`, `getTime`）之前先用 `isValidDate`，確保佢兜係有效个
`Date` 物件。

### 优势

- 確保一隻值係 `Date` 實例，毋係單淨像日期个字串抑係數字。
- 透過檢查時間值係毋係 `NaN`，來拒絕無效日期（例如：`new Date("invalid")`）。
- 簡單个布林守衛，條件判斷同驗證流程當好用。
- 先驗證輸入，幫助避免呼叫日期方法時發生執行期錯誤。

## 用法

### 语法

函数：

- `isValidDate(value)`

参数：

- `value`: 愛檢查个值。

### 本地函数导入

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input si̍t ê ū hāu ê Date instance
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // bô
console.log(isValidDate("2025-12-22")); // bô

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

<small>该文件于 30 January 2026 at 16:40:10 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>