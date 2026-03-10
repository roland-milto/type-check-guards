# areNumbers

## 说明

`areNumbers` 用来检查一个值是不是非空数组，而且里向所有元素都是数字。

### 使用场景

验证用户提供或者 API 提供个数据，确保伊是一个非空数字数组，再去计算总和、平均数或者别个数字聚合。

> **给 TypeScript 用户的提示：**
>
> 用 `areNumbers` 来验证未知数组，再去做数字计算；对空数组、或者包含任何非数字值个数组，都会返回 `false`。

### 优势

- 只会当输入是非空数组，且每个元素都是数字个辰光，才会返回 `true`。
- 通过拒绝空数组搭非数组输入，防止误判（false positives）。
- 适合作为做数字运算（比方讲求和、求平均）之前个守卫，避免运行时错误。

## 用法

### 语法

函数：

- `areNumbers(array)`

参数：

- `array`: 要检查个数组，看看里向个元素是不是数字。

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

<small>该文件于 30 January 2026 at 13:06:31 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>