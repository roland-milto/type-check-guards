# areBigInts

## 说明

`areBigInts` 判断一个值是不是非空数组，而且里向只包含 `bigint` 值。

### 使用场景

验证未知输入（比方讲解析出来个类 JSON 数据、API 载荷、或者类型标成 `unknown` 个函数参数），确保伊是一个非空、只包含 `bigint`
值个数组再处理；只有当所有元素侪是 `bigint` 辰光返回 `true`，否则返回 `false`。

> **给 TypeScript 用户的提示：**
>
> 对未知输入做只支持 `bigint` 个操作（比方讲算术、比较）之前，用 `areBigInts` 当运行时守卫。

### 优势

- 确保每个元素侪是 `bigint`，只有当整个数组完全匹配辰光才返回 `true`。
- 按设计（通过 `isFilledArray`）拒绝非数组同空数组，防止勿小心接受无效输入。
- 快速失败：一旦发现有非 `bigint` 元素，立刻返回 `false`。

## 用法

### 语法

函数：

- `areBigInts(array)`

参数：

- `array`: 要检查个值。

### 本地函数导入

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // 对
console.log(areBigInts(b)); // 勿对
console.log(areBigInts(c)); // 勿对
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBigInts(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>该文件于 31 January 2026 at 23:27:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>