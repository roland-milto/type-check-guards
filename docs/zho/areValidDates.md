# areValidDates

## 说明

判断一个数组是否为非空，并且完全由有效的 `Date` 对象组成。

### 使用场景

在执行基于日期的操作（排序、范围检查、格式化）之前，使用 `areValidDates` 来校验用户提供或 API 提供的数组，确保所有条目都是真实且有效的
`Date` 对象，并且列表不为空。

> **给 TypeScript 用户的提示：**
>
> `areValidDates` 对空数组会返回 `false`；在将其作为校验步骤依赖之前，请确保该数组本就应当是非空的。

### 优势

- 仅当每个元素都是有效的 `Date` 实例时才返回 `true`（不会把 `new Date('invalid')` 之类的无效日期算作有效）。
- 通过返回 `false` 来拒绝空输入，确保你只接受有意义的、非空的日期列表。
- 提供一种简单的布尔值守卫式检查，便于与其他校验组合使用。

## 用法

### 语法

函数：

- `areValidDates(array)`

参数：

- `array`: 要检查的数组，可能包含 `Date` 对象。

### 本地函数导入

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // 真
console.log(areValidDates(b)); // 假
console.log(areValidDates(c)); // 假
console.log(areValidDates(d)); // 假

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

<small>该文件于 2026年1月30日 14:34:52 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>