# areWeakSets

## 说明

检查输入是否为非空数组且每个元素都是 `WeakSet`，仅在这种情况下返回 `true`。

### 使用场景

验证运行时输入（例如来自 API、配置或用户提供的数据），以确保在继续依赖 `WeakSet` 行为的逻辑之前，你拥有一个非空的 `WeakSet`
实例列表。

> **给 TypeScript 用户的提示：**
>
> 在将未知输入当作 `WeakSet[]` 使用之前，使用 `areWeakSets` 进行验证。它对空数组和非数组返回 `false`。

### 优势

- 确保输入数组中的每个元素都是 `WeakSet`。
- 对空数组返回 `false`，防止在缺失数据时意外得到“全部有效”的结果。
- 当输入不是非空数组时（包括 `null`）通过返回 `false` 来安全失败。
- 在执行需要 `WeakSet` 实例的操作之前，可用作守卫。

## 用法

### 语法

函数：

- `areWeakSets(array)`

参数：

- `array`: 要检查其是否为 `WeakSet` 对象的数组。

### 本地函数导入

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a 是一个非空的 WeakSet 实例数组
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areWeakSets(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>该文件于 2026年1月30日 14:13:16 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>