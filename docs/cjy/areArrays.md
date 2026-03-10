# areArrays

## 说明

`areArrays` 判断一个值系唔系一个已填充嘅二维数组，而且其中嘅项目全部都系数组。

### 使用场景

用 `areArrays` 去验证表格或矩阵类输入（例如 CSV 行、网格数据、或者分组列表），再进行行/列操作；如果输入唔系数组、系空嘅，或者包含任何非数组元素，就会返回
`false`。

> **给 TypeScript 用户的提示：**
>
> 当你需要确保一个值系非空二维数组，并且每一行都系数组，先至去遍历或者用索引访问嵌套数组时，就用 `areArrays`。

### 优势

- 验证输入系一个非空嘅二维数组，而且每个元素都系数组。
- 返回一个简单嘅布尔结果（`true`/`false`），适合用来做守卫同早退。
- 帮助防止后续代码假设有嵌套数组操作（例如映射每行）时出现运行时错误。

## 用法

### 语法

函数：

- `areArrays(array)`

参数：

- `array`: 要检查嘅输入。

### 本地函数导入

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value 係一个二维数组，元素都係数组
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

<small>该文件于 6 February 2026 at 13:39:00 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>