# areValidDates

## 说明

判斷一个陣列敢是無空，閣全部攏是有效个 `Date` 物件。

### 使用场景

用 `areValidDates` 來驗證使用者提供抑是 API 提供个陣列，才來做日期相關操作（排序、範圍檢查、格式化），確保每一筆攏是真正有效个
`Date` 物件，而且清單無空。

> **给 TypeScript 用户的提示：**
>
> `areValidDates` 對空陣列會回傳 `false`；做驗證步驟以前，請先確定這个陣列本來就應該是無空。

### 优势

- 干焦會回傳 `true`，只當逐个元素攏是有效个 `Date` 實例（無效日期親像 `new Date('invalid')` 這款袂算）。
- 若是空个輸入會回傳 `false`，確保你只接受有意義、無空个日期清單。
- 提供簡單个 boolean 守衛式檢查，真好佮其他驗證組合。

## 用法

### 语法

函数：

- `areValidDates(array)`

参数：

- `array`: 欲檢查个陣列，可能包含 `Date` 物件。

### 本地函数导入

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // chin
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

<small>该文件于 30 January 2026 at 14:32:59 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>