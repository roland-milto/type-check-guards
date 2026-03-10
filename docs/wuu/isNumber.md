# isNumber

## 说明

`isNumber` 检查一个值是不是有限、非 `NaN` 个数字。

### 使用场景

对不可信来源（表单、query 参数、JSON payload）个数字输入先做校验，再做计算、存储或者范围检查，保证只有有限数字会通过（返回
`true`），其他一概返回 `false`。

> **给 TypeScript 用户的提示：**
>
> 做算术之前，用 `isNumber` 来校验 `unknown` 值；伊会拒绝 `NaN`、`Infinity` 跟 `-Infinity`。

### 优势

- 只对真正个 JavaScript 数字返回 `true`（类型检查再加上拒绝 `NaN` 跟无穷大）。
- 防止常见个校验 bug：`NaN`、`Infinity` 或 `-Infinity` 误打误撞当作数字通过。
- 当作未知输入个运行时守卫蛮好用（比如 JSON、用户输入、外部 API）。
- 简单、快、无副作用。

## 用法

### 语法

函数：

- `isNumber(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input 是一只有效个有限个数目
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

<small>该文件于 30 January 2026 at 13:11:52 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>