# areNumbers

## 说明

`areNumbers` 用于检查某个值是否为非空数组，且所有元素都是数字。

### 使用场景

验证用户提供或 API 提供的数据，确保其为非空数字数组，然后再计算总和、平均值或其他数值聚合。

> **给 TypeScript 用户的提示：**
>
> 在执行数值计算之前使用 `areNumbers` 来验证未知数组；对于空数组以及包含任何非数字值的数组，它都会返回 `false`。

### 优势

- 仅当输入是非空数组且每个元素都是数字时才返回 `true`。
- 通过拒绝空数组和非数组输入来防止误判。
- 在进行数值运算（例如求和、求平均）之前作为守卫很有用，可避免运行时错误。

## 用法

### 语法

函数：

- `areNumbers(array)`

参数：

- `array`: 要检查其元素是否为数字的数组。

### 本地函数导入

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNumbers(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>该文件于 2026年1月30日 13:06:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>