# isNumber

## 说明

`isNumber` 用于检查一个值是否为有限且非 `NaN` 的数字。

### 使用场景

在计算、存储或范围检查之前，验证来自不可信来源（表单、查询参数、JSON 负载）的数值输入，确保只有有限数字会通过（返回 `true`
），其他所有情况都返回 `false`。

> **给 TypeScript 用户的提示：**
>
> 在进行算术运算之前，使用 `isNumber` 来验证 `unknown` 值；它会拒绝 `NaN`、`Infinity` 和 `-Infinity`。

### 优势

- 仅对真正的 JavaScript 数字返回 `true`（类型检查并拒绝 `NaN` 和无穷大）。
- 防止常见的校验漏洞：`NaN`、`Infinity` 或 `-Infinity` 被误判为数字而通过。
- 非常适合作为未知输入（例如 JSON、用户输入、外部 API）的运行时守卫。
- 简单、快速且无副作用。

## 用法

### 语法

函数：

- `isNumber(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input 是一个有效的有限数字
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNumber(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNumber](../_analysis/isNumber.md)

<br>

---

<small>该文件于 2026年1月30日 13:12:00 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>