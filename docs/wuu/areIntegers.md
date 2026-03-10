# areIntegers

## 说明

`areIntegers` 用来判断给定数组里向个所有元素是不是整数：是就返回 `true`，勿是就返回 `false`。

### 使用场景

当侬个逻辑需要一串整数值（比如 ID、计数器、分页偏移量、数组索引）辰光，用 `areIntegers` 来校验用户提供个或者外部数据（比如查询参数、JSON
载荷、CSV 行）。

> **给 TypeScript 用户的提示：**
>
> 把 `areIntegers` 当作运行时守卫，用来先检查 `unknown[]` 输入，再当作只包含整数个 `number[]` 来用。要是返回 `false`
> ，说明输入要么勿是个填满个数组，要么至少有一个值勿是整数。

### 优势

- 只有当每个元素侪是整数辰光才会返回 `true`；否则返回 `false`。
- 帮侬在做只允许整数个操作（比如：索引、计数、ID）之前，先校验不明输入。
- 快速失败：一旦发现有非整数元素，就立刻停止检查。

## 用法

### 语法

函数：

- `areIntegers(array)`

参数：

- `array`: 要检查里向是不是全是整数元素个数组。

### 本地函数导入

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // 对
console.log(areIntegers(b)); // 对
console.log(areIntegers(c)); // 勿对

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areIntegers(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>该文件于 31 January 2026 at 01:01:15 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>