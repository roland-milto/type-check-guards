# isUndefined

## 说明

检查给定值是否为 `undefined`。

### 使用场景

使用 `isUndefined` 来守卫可选输入、检测缺失的属性，或区分“未提供”（`undefined`）与“显式为空”（`null`）。

> **给 TypeScript 用户的提示：**
>
> 当你需要专门检测 `undefined`（而不是 `null`）时使用 `isUndefined`。它是安全的，因为它依赖于
`typeof value === "undefined"`。

### 优势

- 使用 `typeof` 对 `undefined` 进行清晰、显式的检查，避免未声明变量带来的边缘情况。
- 返回简单的布尔结果（`true`/`false`），适用于守卫、分支以及校验逻辑。
- 有助于将 `undefined` 与其他“空”值（如 `null`、`0`、`""` 或 `NaN`）区分开来。

## 用法

### 语法

函数：

- `isUndefined(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // 此处 x 为 undefined
} else {
  // 此处 x 不为 undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isUndefined(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>该文件于 30 January 2026 at 14:02:16 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>