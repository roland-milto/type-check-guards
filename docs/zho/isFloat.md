# isFloat

## 说明

`isFloat` 用于判断给定的 `value` 是否为有限的浮点数（即不是整数的 `number`）。

### 使用场景

在需要小数值的场景中验证用户提供的数值输入（例如价格、测量值、费率），并拒绝整数、`NaN` 和无穷大。

> **给 TypeScript 用户的提示：**
>
> 当你只需要接受有限的非整数数值输入时使用 `isFloat`；它会拒绝整数和非有限数字。

### 优势

- 仅对有限的非整数数字返回 `true`（排除整数、`NaN`、`Infinity` 和 `-Infinity`）。
- 适用于任何输入类型（`unknown`），并通过检查 `typeof value === "number"` 安全地缩小类型范围。
- 使用内置的数值守卫（`Number.isInteger`、`Number.isFinite`）以获得可预测的行为。

## 用法

### 语法

函数：

- `isFloat(value)`

参数：

- `value`: 要检查其是否为浮点数的值。

### 本地函数导入

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value 在运行时是一个数字；它是有限的且不是整数
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFloat(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFloat](../_analysis/isFloat.md)

<br>

---

<small>该文件于 2026年1月30日 16:10:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>