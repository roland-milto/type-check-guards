# areDates

## 说明

`areDates` 用来判断畀定嘅数组系咪有内容而且只包含 `Date` 对象；只有当所有元素都系有效日期时先返回 `true`。

### 使用场景

用 `areDates` 来验证未知输入（比如解析嘅 JSON、表单数据、API 载荷），喺运行日期相关逻辑之前，例如按时间排序、格式化，或者计算时间范围。

> **给 TypeScript 用户的提示：**
>
> 只有对唔空数组而且每个元素都系 `Date` 时先返回 `true`；空数组会返回 `false`。

### 优势

- 确保数组喺验证内容之前唔系空嘅，避免对空输入返回 `true`。
- 验证每个元素都系 `Date` 实例，遇到第一个唔匹配就即刻返回 `false`。
- 喺对数组项执行日期相关操作之前，作为守卫式检查好有用。

## 用法

### 语法

函数：

- `areDates(array)`

参数：

- `array`: 要检查系咪包含 `Date` 对象嘅数组。

### 本地函数导入

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // true
console.log(areDates(b)); // false
console.log(areDates(c)); // false

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

<small>该文件于 31 January 2026 at 15:29:49 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>