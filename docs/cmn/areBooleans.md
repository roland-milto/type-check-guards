# areBooleans

## 说明

`areBooleans` 用于检查给定的非空数组是否只包含布尔值；若是则返回 `true`，否则返回 `false`。

### 使用场景

验证用户提供或外部数据（例如 JSON 负载、查询参数、配置数组），以确保一个非空列表仅包含布尔值，然后再应用布尔逻辑或将其传递给期望
`boolean[]` 的 API。

> **给 TypeScript 用户的提示：**
>
> 在将 `unknown[]` 当作 `boolean[]` 使用之前，用 `areBooleans` 进行验证；它对空数组会返回 `false`，因此如果应允许空列表，请显式处理该情况。

### 优势

- 仅当每个元素都是布尔值且输入为非空数组时才返回 `true`。
- 通过拒绝空数组（返回 `false`）来防止误判为真。
- 非常适合作为仅布尔运算之前的运行时守卫（例如 `every`、`some`、逻辑归约）。

## 用法

### 语法

函数：

- `areBooleans(array)`

参数：

- `array`: 要检查其元素是否为布尔值的数组。

### 本地函数导入

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBooleans(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>该文件于 30 January 2026 at 14:39:43 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>