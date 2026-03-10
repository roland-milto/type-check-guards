# areDecimals

## 说明

检查一个数组里向个所有元素是不是十进制数字，而且数组是填满个，返回 `true` 或 `false`。

### 使用场景

校验用户提供个列表（比如 CSV 列或者表单输入），确保数组勿是空个，而且每一项全是十进制值，然后再去解析或者做计算。

> **给 TypeScript 用户的提示：**
>
> 当侬需要快速用布尔值检查一个 `unknown[]` 既非空、又每个元素全是十进制表示个辰光，用 `areDecimals`。

### 优势

- 确保输入先是个填满个数组再去校验里向个元素，防止勿当空列表也算通过。
- 用 `isDecimal` 校验每一个元素，所以一旦有混搭或者无效个值，立刻就会返回 `false`。
- 提供简单个布尔结果（`true`/`false`），适合用来做守卫判断搭早返回个校验流程。

## 用法

### 语法

函数：

- `areDecimals(array)`

参数：

- `array`: 要检查个数组。

### 本地函数导入

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // 真
console.log(areDecimals(b)); // 假
console.log(areDecimals(c)); // 假
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areDecimals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>该文件于 31 January 2026 at 15:59:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>