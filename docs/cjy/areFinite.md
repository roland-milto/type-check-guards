# areFinite

## 说明

`areFinite` 用来检查一个值系咪非空数组，而且数组元素全部都系有限数字；符合就返回 `true`，唔符合就返回 `false`。

### 使用场景

喺做计算之前先校验数字输入数组（比如图表序列、坐标列表、测量样本），确保只有当全部值都系有限数字嗰阵结果先会系 `true`。

> **给 TypeScript 用户的提示：**
>
> 当你需要确保一个数组系非空并且只包含有限数字嗰阵，用 `areFinite`；对空数组同包含 `NaN` 或无穷大嘅数组，佢都会返回
`false`。

### 优势

- 只有输入系非空数组，而且每个元素都系有限数字嗰阵先会返回 `true`。
- 靠对每个元素做 `isFinite` 检查，拒绝 `Infinity`、`-Infinity` 同 `NaN`。
- 提供简单嘅布尔结果（`true`/`false`），适合用喺守卫同校验流程。

## 用法

### 语法

函数：

- `areFinite(array)`

参数：

- `array`: 要检查嘅数组，用来判断佢所有元素系咪都系有限数。

### 本地函数导入

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // true
console.log(areFinite(b)); // false
console.log(areFinite(c)); // false

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

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

<small>该文件于 30 January 2026 at 16:33:58 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>