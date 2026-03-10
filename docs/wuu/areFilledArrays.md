# areFilledArrays

## 说明

`areFilledArrays` 用来检查一个二维数组是不是弗空，并且伊个所有子数组是不是都弗空。

### 使用场景

用 `areFilledArrays` 来校验表格/矩阵类输入（比方讲 CSV 行、网格数据、分组结果），从而可以放心假设至少有一个子数组，并且所有子数组都弗会空。

> **给 TypeScript 用户的提示：**
>
> 当侬需要确保一个二维数组至少有一行，并且每一行至少有一个元素，才好迭代或者按索引访问个辰光，用 `areFilledArrays`。

### 优势

- 校验外层数组弗空，并且每个内层数组也弗空；只有两只条件都满足辰，才会返回 `true`。
- 适用子数组里向任何元素类型（比方讲数字、字符串、对象、嵌套数组），因为伊只检查数组“有内容”个状态，弗检查元素内容。
- 提供简单个布尔结果（`true`/`false`），适合作为处理二维数据前个守卫判断。

## 用法

### 语法

函数：

- `areFilledArrays(array)`

参数：

- `array`: 要检查个二维数组。

### 本地函数导入

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // 对
console.log(areFilledArrays(b)); // 对
console.log(areFilledArrays(c)); // 对
console.log(areFilledArrays(d)); // 勿对
console.log(areFilledArrays(e)); // 勿对
console.log(areFilledArrays(f)); // 勿对

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFilledArrays(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>该文件于 6 February 2026 at 11:59:50 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>