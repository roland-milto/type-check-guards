# areDates

## 说明

`areDates` 用于判断给定数组是否已填充且仅包含 `Date` 对象，只有当所有元素都是有效日期时才返回 `true`。

### 使用场景

在运行按时间排序、格式化或计算范围等日期特定逻辑之前，使用 `areDates` 来验证未知输入（例如解析后的 JSON、表单数据、API 负载）。

> **给 TypeScript 用户的提示：**
>
> 仅对非空且每个元素都是 `Date` 的数组返回 `true`；空数组会返回 `false`。

### 优势

- 在验证数组内容之前确保数组非空，避免对空输入返回 `true`。
- 验证每个元素都是 `Date` 实例，在首次不匹配时立即返回 `false`。
- 在对数组项执行日期特定操作之前，作为守卫式检查很有用。

## 用法

### 语法

函数：

- `areDates(array)`

参数：

- `array`: 要检查是否包含 `Date` 对象的数组。

### 本地函数导入

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // 真
console.log(areDates(b)); // 假
console.log(areDates(c)); // 假

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

<small>该文件于 31 January 2026 at 15:29:48 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>