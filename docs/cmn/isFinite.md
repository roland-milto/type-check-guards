# isFinite

## 说明

判断给定的 `value` 是否为有限的 `number`。

### 使用场景

在进行数值计算之前，使用 `isFinite` 验证未知输入（例如来自 JSON、表单或 API），确保该值是真实且有限的数字。

> **给 TypeScript 用户的提示：**
>
> `isFinite` 仅对有限数字返回 `true`；对 `NaN`、`Infinity` 以及任何非数字值返回 `false`。

### 优势

- 使用内置的 `Number.isFinite` 进行可靠的有限性检查。
- 仅对有限数字返回 `true`；对 `NaN`、`Infinity` 以及非数字输入返回 `false`。
- 简单、无副作用的谓词，适用于验证与守卫逻辑。

## 用法

### 语法

函数：

- `isFinite(value)`

参数：

- `value`: 要检查其是否为有限值的值。

### 本地函数导入

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers 是：[123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // 这里的 value 是一个有限数
  const doubled = value * 2;
  console.log(doubled);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFinite(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFinite](../_analysis/isFinite.md)

<br>

---

<small>该文件于 30 January 2026 at 16:29:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>