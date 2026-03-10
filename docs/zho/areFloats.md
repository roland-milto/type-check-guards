# areFloats

## 说明

`areFloats` 用于检查给定数组是否已填充且其所有元素都是浮点数。

### 使用场景

当你接收到一个 `unknown[]`（例如来自 JSON、查询参数或外部 API），并且需要在运行诸如求平均、插值或统计计算等数值逻辑之前，确保它是一个已填充且每一项都是浮点数的数组时，使用
`areFloats`。

> **给 TypeScript 用户的提示：**
>
> 在将 `unknown[]` 当作仅包含浮点数的 `number[]` 使用之前，使用 `areFloats` 进行守卫；对于空数组以及任何包含非浮点元素的数组，它都会返回
`false`。

### 优势

- 仅当输入是非空数组且每个元素都是浮点数时才返回 `true`。
- 快速失败：一旦发现非浮点元素就立即返回 `false`。
- 在执行特定于浮点数的计算之前，有助于验证未知输入。

## 用法

### 语法

函数：

- `areFloats(array)`

参数：

- `array`: 要检查其元素是否为浮点数的数组。

### 本地函数导入

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // 真
console.log(areFloats(b)); // 假
console.log(areFloats(c)); // 假

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // 空

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFloats(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFloats](../_analysis/areFloats.md)

<br>

---

<small>该文件于 2026年1月30日 16:00:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>