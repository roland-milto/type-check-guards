# areValidDates

## 说明

判斷一個陣列係毋係非空，而且全部都係有效个 `Date` 物件。

### 使用场景

用 `areValidDates` 來驗證使用者提供或 API 提供个陣列，喺做同日期有關个操作（排序、範圍檢查、格式化）之前，確保所有項目都係真實、有效个
`Date` 物件，而且清單毋係空个。

> **给 TypeScript 用户的提示：**
>
> `areValidDates` 對空陣列會回傳 `false`；用佢做驗證步驟之前，愛確定該陣列本來就係打算非空个。

### 优势

- 淨係當每一個元素都係有效个 `Date` 實例（無無效日期，像 `new Date('invalid')` 這兜）先會回傳 `true`。
- 透過回傳 `false` 來拒絕空輸入，確保你淨係接受有意義、非空个日期清單。
- 提供一個簡單个布林守衛式檢查，容易同其他驗證一齊組合使用。

## 用法

### 语法

函数：

- `areValidDates(array)`

参数：

- `array`: 愛檢查个陣列，可能包含 `Date` 物件。

### 本地函数导入

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // chhîn-chhîn
console.log(areValidDates(b)); // m̄-sī
console.log(areValidDates(c)); // m̄-sī
console.log(areValidDates(d)); // m̄-sī

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areValidDates(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>该文件于 30 January 2026 at 14:31:50 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>