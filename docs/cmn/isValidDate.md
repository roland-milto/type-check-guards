# isValidDate

## 说明

`isValidDate` 用于检查给定值是否为有效的 `Date` 对象，并且仅对真实且非无效的日期返回 `true`。

### 使用场景

验证用户输入或 API 数据中可能包含的日期：在进行日期计算、格式化或比较之前，确保该值是一个真实的 `Date` 实例，而不是无效日期。

> **给 TypeScript 用户的提示：**
>
> 在对类型为 `unknown` 的值调用 `Date` 方法（例如 `toISOString`、`getTime`）之前使用 `isValidDate`，以确保它们是有效的
`Date` 对象。

### 优势

- 确保值是一个 `Date` 实例，而不仅仅是类似日期的字符串或数字。
- 通过检查时间值是否为 `NaN` 来拒绝无效日期（例如 `new Date("invalid")`）。
- 简单的布尔守卫，易于在条件判断和验证流水线中使用。
- 在调用日期方法前先验证输入，有助于防止运行时错误。

## 用法

### 语法

函数：

- `isValidDate(value)`

参数：

- `value`: 要检查的值。

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

<small>该文件于 30 January 2026 at 16:39:23 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>