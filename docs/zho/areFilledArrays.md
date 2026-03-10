# areFilledArrays

## 说明

`areFilledArrays` 用于检查二维数组是否非空，并且其所有子数组都非空。

### 使用场景

使用 `areFilledArrays` 来验证表格或矩阵类输入（例如 CSV 行、网格数据、分组结果），从而可以安全地假设至少存在一个子数组，并且没有任何子数组为空。

> **给 TypeScript 用户的提示：**
>
> 当你需要在遍历或按索引访问之前，确保二维数组至少有一行且每一行至少有一个元素时，请使用 `areFilledArrays`。

### 优势

- 验证外层数组非空，并且每个内层数组也都非空；仅当两个条件都满足时才返回 `true`。
- 适用于子数组中的任何元素类型（例如数字、字符串、对象、嵌套数组），因为它只检查数组是否“有元素”，而不检查元素内容。
- 提供简单的布尔结果（`true`/`false`），适合作为处理二维数据前的守卫条件。

## 用法

### 语法

函数：

- `areFilledArrays(array)`

参数：

- `array`: 要检查的二维数组。

### 本地函数导入

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // 真
console.log(areFilledArrays(b)); // 真
console.log(areFilledArrays(c)); // 真
console.log(areFilledArrays(d)); // 假
console.log(areFilledArrays(e)); // 假
console.log(areFilledArrays(f)); // 假

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

<small>该文件于 2026年2月6日 11:59:58 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>