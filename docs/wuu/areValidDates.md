# areValidDates

## 说明

判断一个数组是不是非空，而且全部由有效个 `Date` 对象组成。

### 使用场景

用 `areValidDates` 来校验用户提供或者 API 提供个数组，然后再做基于日期个操作（排序、范围检查、格式化），保证所有条目侪是真个、有效个
`Date` 对象，而且列表勿是空个。

> **给 TypeScript 用户的提示：**
>
> `areValidDates` 对空数组会返回 `false`；用伊当校验步骤之前，要先保证数组本来就应该是非空个。

### 优势

- 只有当每个元素侪是有效个 `Date` 实例辰会返回 `true`（勿会包含像 `new Date('invalid')` 这种无效日期）。
- 对空输入会返回 `false` 来拒绝，保证侬只会接受有意义、勿为空个日期列表。
- 提供一种简单个布尔值守卫式检查，容易同其他校验组合使用。

## 用法

### 语法

函数：

- `areValidDates(array)`

参数：

- `array`: 要检查个数组，里向可能包含 `Date` 对象。

### 本地函数导入

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // 对
console.log(areValidDates(b)); // 弗对
console.log(areValidDates(c)); // 弗对
console.log(areValidDates(d)); // 弗对

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

<small>该文件于 30 January 2026 at 14:34:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>