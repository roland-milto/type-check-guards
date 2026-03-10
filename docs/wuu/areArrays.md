# areArrays

## 说明

`areArrays` 判断一个值是不是装满个二维数组，并且里向个每项侪系数组。

### 使用场景

用 `areArrays` 来验证表格或矩阵样式个输入（比方讲 CSV 行、网格数据、或者分组列表），再去做行/列操作；要是输入弗是数组、是空个、或者里向包含任何非数组元素，就会返回
`false`。

> **给 TypeScript 用户的提示：**
>
> 当侬需要确保一个值系非空个二维数组，并且每一行侪系数组，然后再去遍历或者对嵌套数组做索引访问个辰光，用 `areArrays`。

### 优势

- 验证输入系一只非空个二维数组，并且里向每只元素侪系数组。
- 返回简单个布尔结果（`true`/`false`），适合用来做守卫判断搭早点退出。
- 帮侬防止后头代码假设要做嵌套数组操作（比方讲映射行）时出现运行时错误。

## 用法

### 语法

函数：

- `areArrays(array)`

参数：

- `array`: 要检查个输入值。

### 本地函数导入

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value 是一只二维数组，里向个元素侪是数组
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

<small>该文件于 6 February 2026 at 13:42:16 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>