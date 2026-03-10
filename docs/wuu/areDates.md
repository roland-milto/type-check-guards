# areDates

## 说明

`areDates` 用来判断给定个数组是不是填满（弗是空）而且只包含 `Date` 对象；只有当所有元素侪是有效日期辰光才返回 `true`。

### 使用场景

用 `areDates` 来校验未知输入（比方讲解析出来个 JSON、表单数据、API payload），再去跑日期相关逻辑，譬如按时间排序、格式化、或者算时间范围。

> **给 TypeScript 用户的提示：**
>
> 只有对非空数组、而且每个元素侪是 `Date` 辰光才返回 `true`；空数组会返回 `false`。

### 优势

- 先保证数组弗是空个，再去校验里向内容，避免对空输入返回 `true`。
- 核对每个元素侪是 `Date` 实例，碰着第一个弗匹配就立刻返回 `false`。
- 适合作为守卫式检查，用来在对数组项做日期相关操作之前先把关。

## 用法

### 语法

函数：

- `areDates(array)`

参数：

- `array`: 要检查里向是不是 `Date` 对象个数组。

### 本地函数导入

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // 对
console.log(areDates(b)); // 勿对
console.log(areDates(c)); // 勿对

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areDates(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areDates](../_analysis/areDates.md)

<br>

---

<small>该文件于 31 January 2026 at 15:33:01 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>