# isNumber

## 说明

`isNumber` 用来检查一个值是不是有限、非 `NaN` 嘞数字。

### 使用场景

在计算、存储或者做范围检查之前，先校验来自不可信来源（表单、query 参数、JSON payload）嘞数字输入，保证只有有限数字才会通过（
`true`），别嘞一概返回 `false`。

> **给 TypeScript 用户的提示：**
>
> 用 `isNumber` 先把 `unknown` 值校验一遍再做算术；它会拒绝 `NaN`、`Infinity` 跟 `-Infinity`。

### 优势

- 只会对真正嘞 JavaScript 数字返回 `true`（类型检查，再加上拒绝 `NaN` 跟无穷大）。
- 防止常见嘞校验 bug：`NaN`、`Infinity` 或 `-Infinity` 不小心当成数字通过。
- 当作未知输入嘞运行时守卫挺好使（比如 JSON、用户输入、外部 API）。
- 简单、快、无副作用。

## 用法

### 语法

函数：

- `isNumber(value)`

参数：

- `value`: 要检查嘞值。

### 本地函数导入

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input 係一个有效个有限数
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

<small>该文件于 30 January 2026 at 13:08:27 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>