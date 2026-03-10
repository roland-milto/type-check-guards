# isValidDate

## 说明

`isValidDate` 检查畀定嘅值系咪一个有效嘅 `Date` 对象，只有真实、唔无效嘅日期先返回 `true`。

### 使用场景

验证用户输入或者 API 数据入面可能包含嘅日期：确保个值系真实嘅 `Date` 实例，而且唔系无效日期，然后先进行日期计算、格式化或者比较。

> **给 TypeScript 用户的提示：**
>
> 喺对 `unknown` 类型嘅值调用 `Date` 方法（比如 `toISOString`、`getTime`）之前，先用 `isValidDate`，确保佢系有效嘅 `Date` 对象。

### 优势

- 确保一个值系 `Date` 实例，而唔系单单似日期嘅字符串或者数字。
- 通过检查时间值系咪 `NaN`，拒绝无效日期（比如 `new Date("invalid")`）。
- 简单嘅布尔守卫，喺条件判断同验证流水线入面好易用。
- 先验证输入，帮你避免调用日期方法时出现运行时错误。

## 用法

### 语法

函数：

- `isValidDate(value)`

参数：

- `value`: 要检查嘅值。

### 本地函数导入

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input 是一个有效个 Date 实例
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

<small>该文件于 30 January 2026 at 16:39:15 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>