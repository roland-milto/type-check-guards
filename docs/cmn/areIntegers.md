# areIntegers

## 说明

`areIntegers` 用于判断给定数组中的所有元素是否都是整数；如果是则返回 `true`，否则返回 `false`。

### 使用场景

当你的逻辑需要一个已填充的整数值列表（例如 ID、计数器、分页偏移量或数组索引）时，使用 `areIntegers` 来验证用户提供或外部数据（例如查询参数、JSON
负载、CSV 行）。

> **给 TypeScript 用户的提示：**
>
> 在将 `unknown[]` 输入当作仅包含整数的 `number[]` 处理之前，使用 `areIntegers` 作为运行时守卫。如果它返回 `false`
> ，则该输入要么不是一个已填充的数组，要么至少包含一个非整数值。

### 优势

- 仅当每个元素都是整数时返回 `true`；否则返回 `false`。
- 在执行仅适用于整数的操作（例如索引、计数、ID）之前，帮助验证未知输入。
- 快速失败：一旦发现非整数元素就停止检查。

## 用法

### 语法

函数：

- `areIntegers(array)`

参数：

- `array`: 要检查其元素是否为整数的数组。

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

<small>该文件于 31 January 2026 at 00:57:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>