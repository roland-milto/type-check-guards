# areSymbols

## 说明

检查输入是不是一个装满个数组，且元素全是 symbol，返回 `true` 或 `false`。

### 使用场景

校验某个配置字段（比方讲：用 symbol 表示个唯一 key 列表）是不是一个非空数组，且只包含 symbol，然后再用到要求 `symbol[]` 个
API 里向。

> **给 TypeScript 用户的提示：**
>
> 用 `areSymbols` 来校验未知输入，再当作 `symbol[]` 来用；对非数组搭空数组会返回 `false`。

### 优势

- 只有当输入是非空数组，且每个元素都是 symbol 个辰光，才会返回 `true`。
- 通过内部个 filled-array 检查，拒绝非数组搭空数组，防止误判。
- 适合作为运行时类型守卫，用来校验只包含 symbol 个列表，方便后续处理。

## 用法

### 语法

函数：

- `areSymbols(array)`

参数：

- `array`: 要检查个数组，看看里向元素是不是 symbol。

### 本地函数导入

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a 在运行辰光是只包含 symbol 个数组
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areSymbols(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>该文件于 30 January 2026 at 14:24:44 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>