# areFinite

## 说明

`areFinite` 用来检查一个值是不是非空数组，而且里向元素侪是有限数字；符合就返回 `true`，勿符合就返回 `false`。

### 使用场景

做计算之前先校验数字输入数组（比方讲：图表序列、坐标列表、测量采样），保证只有当所有值侪是有限数字个辰光结果才是 `true`。

> **给 TypeScript 用户的提示：**
>
> 当侬需要保证一个数组是非空、而且只包含有限数字个辰光，用 `areFinite`；对空数组、或者包含 `NaN` 或无穷大个数组，伊会返回
`false`。

### 优势

- 只有当输入是非空数组，且每个元素侪是有限数字个辰光，才会返回 `true`。
- 靠对每个元素做 `isFinite` 检查，拒绝 `Infinity`、`-Infinity` 搭 `NaN`。
- 提供简单个布尔结果（`true`/`false`），适合用来做类型守卫搭校验流程。

## 用法

### 语法

函数：

- `areFinite(array)`

参数：

- `array`: 要检查个数组，用来判断里向所有元素是不是侪是有限数。

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
console.log(sumIfFinite([10, NaN, 30])); // 空

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

<small>该文件于 30 January 2026 at 16:38:06 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>