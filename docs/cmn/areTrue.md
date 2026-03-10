# areTrue

## 说明

检查一个非空数组是否只包含布尔值 `true`。

### 使用场景

使用 `areTrue` 来验证一组前置条件或功能开关是否全部启用（所有值都为 `true`）后再继续，同时将空输入或格式错误的输入视为未满足（
`false`）。

> **给 TypeScript 用户的提示：**
>
> `areTrue` 对空数组以及包含任何不严格等于 `true` 的值的数组都会返回 `false`。

### 优势

- 仅当每个元素都严格为 `true` 且数组非空时才返回 `true`。
- 快速失败：一旦发现非 `true` 的值就立即返回 `false`。
- 通过返回 `false` 来拒绝无效输入（非数组或空数组）。

## 用法

### 语法

函数：

- `areTrue(array)`

参数：

- `array`: 要检查是否全部为 `true` 值的数组。

### 本地函数导入

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areTrue(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areTrue](../_analysis/areTrue.md)

<br>

---

<small>该文件于 30 January 2026 at 13:50:44 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>