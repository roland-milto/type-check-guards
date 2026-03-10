# areFinite

## 说明

`areFinite` 用于检查某个值是否为非空数组，且其元素全部为有限数字；若是则返回 `true`，否则返回 `false`。

### 使用场景

在执行计算之前验证数值输入数组（例如图表序列、坐标列表、测量样本），确保仅当所有值都是有限数字时结果才为 `true`。

> **给 TypeScript 用户的提示：**
>
> 当你需要确保一个数组非空且只包含有限数字时使用 `areFinite`；对于空数组以及包含 `NaN` 或无穷大的数组，它会返回 `false`。

### 优势

- 仅当输入是非空数组且每个元素都是有限数字时才返回 `true`。
- 通过对每个元素进行 `isFinite` 检查来拒绝 `Infinity`、`-Infinity` 和 `NaN`。
- 提供简单的布尔结果（`true`/`false`），适用于守卫与校验流程。

## 用法

### 语法

函数：

- `areFinite(array)`

参数：

- `array`: 要检查其所有元素是否为有限数的数组。

### 本地函数导入

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // 真
console.log(areFinite(b)); // 假
console.log(areFinite(c)); // 假

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // 空值
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFinite(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFinite](../_analysis/areFinite.md)

<br>

---

<small>该文件于 30 January 2026 at 16:34:04 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>