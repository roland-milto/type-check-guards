# areIntegers

## 说明

`areIntegers` 用嚟判断畀定嘅数组入面系咪所有元素都系整数；如果系就返回 `true`，否则返回 `false`。

### 使用场景

当你嘅逻辑需要一份有内容嘅整数列表（比如 ID、计数器、分页偏移量、数组索引）嗰阵，用 `areIntegers` 去验证用户提供或者外部数据（比如查询参数、JSON
载荷、CSV 行）。

> **给 TypeScript 用户的提示：**
>
> 喺把 `unknown[]` 输入当成只包含整数嘅 `number[]` 之前，用 `areIntegers` 做运行时守卫。如果佢返回 `false`
> ，噉输入要么唔系一个有内容嘅数组，要么至少包含一个非整数值。

### 优势

- 单单当每个元素都系整数嗰阵先会返回 `true`；否则返回 `false`。
- 帮你喺执行只允许整数嘅操作（比如：索引、计数、ID）之前，先验证唔确定嘅输入。
- 快速失败：一发现有非整数元素就即刻停止检查。

## 用法

### 语法

函数：

- `areIntegers(array)`

参数：

- `array`: 要检查系咪全部都系整数元素嘅数组。

### 本地函数导入

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // 真
console.log(areIntegers(b)); // 真
console.log(areIntegers(c)); // 假

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

<small>该文件于 31 January 2026 at 00:57:45 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>