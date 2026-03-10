# isFloat

## 说明

`isFloat` 用来判断给定个 `value` 是不是有限个浮点数（一个不是整数个 `number`）。

### 使用场景

校验用户提供个数字输入，要求必须有小数部分（比如价钱、测量值、比率），并且拒绝整数、`NaN` 跟无穷大。

> **给 TypeScript 用户的提示：**
>
> 当侬只要接受有限个、非整数个数字输入个辰光，用 `isFloat`；伊会拒绝整数跟非有限个数字。

### 优势

- 只会对有限个、非整数个数字返回 `true`（排除整数、`NaN`、`Infinity` 跟 `-Infinity`）。
- 适用任何输入类型（`unknown`），通过检查 `typeof value === "number"` 来安全缩小类型范围。
- 用内置个数字守卫（`Number.isInteger`、`Number.isFinite`），行为更可预测。

## 用法

### 语法

函数：

- `isFloat(value)`

参数：

- `value`: 要检查个值，看伊是不是浮点数。

### 本地函数导入

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value 实际运行辰光是个 number；伊是有限个，伐是整数
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

<small>该文件于 30 January 2026 at 16:10:31 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>