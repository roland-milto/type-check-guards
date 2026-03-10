# areArrays

## 说明

`areArrays` 用于判断某个值是否为已填充的二维数组，且其所有项都是数组。

### 使用场景

在执行行/列操作之前，使用 `areArrays` 来验证表格或矩阵类输入（例如 CSV 行、网格数据或分组列表）；如果输入不是数组、为空，或包含任何非数组元素，则返回
`false`。

> **给 TypeScript 用户的提示：**
>
> 当你需要确保某个值是非空二维数组，并且在遍历或对嵌套数组进行索引之前确认每一行都是数组时，使用 `areArrays`。

### 优势

- 验证输入是否为非空的二维数组，并且每个元素都是数组。
- 返回简单的布尔结果（`true`/`false`），适用于守卫条件与提前退出。
- 当后续代码假定进行嵌套数组操作（例如对行进行映射）时，有助于防止运行时错误。

## 用法

### 语法

函数：

- `areArrays(array)`

参数：

- `array`: 要检查的输入值。

### 本地函数导入

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value 是一个二维数组，其元素为数组
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areArrays(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areArrays](../_analysis/areArrays.md)

<br>

---

<small>该文件于 2026年2月6日 13:42:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>