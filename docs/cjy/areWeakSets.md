# areWeakSets

## 说明

检查输入是不是一个非空数组，而且每个元素都是 `WeakSet`；只有满足这两条才返回 `true`。

### 使用场景

校验运行时输入（比如来自 API、配置，或者用户提供个数据），确保你拿到个是一个非空个 `WeakSet` 实例列表，然后再继续做依赖
`WeakSet` 行为个逻辑。

> **给 TypeScript 用户的提示：**
>
> 用 `areWeakSets` 来验证未知输入，再把它当作 `WeakSet[]` 来用。空数组跟非数组都会返回 `false`。

### 优势

- 确保输入数组里头每一个元素都是 `WeakSet`。
- 对空数组返回 `false`，防止数据缺失时误判成“全部有效”。
- 当输入不是一个装满元素个数组（包括 `null`）时，会安全地返回 `false`。
- 在执行需要 `WeakSet` 实例个操作之前，作为守卫检查蛮有用。

## 用法

### 语法

函数：

- `areWeakSets(array)`

参数：

- `array`: 要检查个数组，看里头是不是 `WeakSet` 对象。

### 本地函数导入

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a 係一個非空嘅 WeakSet 實例陣列
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

<small>该文件于 30 January 2026 at 14:07:59 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>