# isNaN

## 说明

判断提供个 `value` 是弗是 `number` 类型个 `NaN`，并且弗会去转换字符串。

### 使用场景

校验弗可信或者类型松散个输入（比方讲 API payload、表单值、解析出来个 JSON），用来识别特殊个 `NaN` 值并显式处理；同时把非数字输入当作弗是
`NaN`。

> **给 TypeScript 用户的提示：**
>
> 当侬需要识别特殊个数值 `NaN`，同时要保证输入确实是 `number`（弗做字符串转数字）个辰光，用 `isNaN`。

### 优势

- 检查一个值是不是 `NaN`，弗会把非数字（比方讲字符串）强制转换成数字。
- 只有当值既是 `number` 类型、又是 `NaN` 个辰光才会返回 `true`。
- 对 `unknown` 输入也安全，避免因为隐式转换造成个误判。

## 用法

### 语法

函数：

- `isNaN(value)`

参数：

- `value`: 要检查个值：看伊是不是 `number` 类型个 `NaN`。

### 本地函数导入

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // 对
console.log(isNaN(b)); // 勿对
console.log(isNaN(c)); // 勿对

if (isNaN(a)) {
  // a 是一个数字，特别是 NaN
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNaN(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNaN](../_analysis/isNaN.md)

<br>

---

<small>该文件于 30 January 2026 at 15:48:45 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>