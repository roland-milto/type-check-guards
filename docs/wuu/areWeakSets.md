# areWeakSets

## 说明

检查输入是不是一个非空数组，并且里向每个元素侪是 `WeakSet`；只有符合辰光才返回 `true`。

### 使用场景

验证运行时输入（比如来自 API、配置、或者用户提供个数据），确保侬拿到个是一份非空个 `WeakSet` 实例列表，然后再继续执行依赖
`WeakSet` 行为个逻辑。

> **给 TypeScript 用户的提示：**
>
> 用 `areWeakSets` 来验证未知输入，再把伊当作 `WeakSet[]` 来用。对空数组同非数组输入，伊会返回 `false`。

### 优势

- 确保输入数组里向每个元素侪是一个 `WeakSet`。
- 对空数组返回 `false`，防止数据缺失辰光意外得到“全部有效”个结果。
- 当输入勿是一个填满个数组（包括 `null`）辰光，安全失败并返回 `false`。
- 适合作为守卫：在执行需要 `WeakSet` 实例个操作之前先做检查。

## 用法

### 语法

函数：

- `areWeakSets(array)`

参数：

- `array`: 要检查个数组，看看里向个元素是不是 `WeakSet` 对象。

### 本地函数导入

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a 是一只非空个 WeakSet 实例数组
}

console.log(areWeakSets(a)); // 真
console.log(areWeakSets(b)); // 假
console.log(areWeakSets(c)); // 假
console.log(areWeakSets(null as unknown)); // 假
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

<small>该文件于 30 January 2026 at 14:11:42 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>