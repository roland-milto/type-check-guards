# isValidDate

## 说明

`isValidDate` 检查给定个值是不是一个有效个 `Date` 对象，只有对真正、弗是无效日期个情况才会返回 `true`。

### 使用场景

验证用户输入或者 API 数据里可能包含个日期，确保这个值是一个真正个 `Date` 实例、弗是无效日期，然后再做日期计算、格式化或者比较。

> **给 TypeScript 用户的提示：**
>
> 对类型是 `unknown` 个值，在调用 `Date` 方法（比方讲 `toISOString`、`getTime`）之前先用 `isValidDate`，确保伊拉是有效个
`Date` 对象。

### 优势

- 确保一个值是 `Date` 实例，而弗是单单像日期个字符串或者数字。
- 通过检查时间值是不是 `NaN`，来拒绝无效日期（比方讲 `new Date("invalid")`）。
- 简单个布尔守卫，用在条件判断搭验证流程里向当方便。
- 先验证输入，帮侬避免调用日期方法辰光出现运行时错误。

## 用法

### 语法

函数：

- `isValidDate(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input 是一只有效个 Date 实例
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

<small>该文件于 30 January 2026 at 16:53:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>