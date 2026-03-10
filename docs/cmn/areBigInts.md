# areBigInts

## 说明

`areBigInts` 用于判断某个值是否为仅包含 `bigint` 值的非空数组。

### 使用场景

验证未知输入（例如解析后的类 JSON 数据、API 负载，或类型为 `unknown` 的函数参数），以确保在处理前它是一个由 `bigint`
值组成的非空数组；仅当所有元素都是 `bigint` 时返回 `true`，否则返回 `false`。

> **给 TypeScript 用户的提示：**
>
> 在对未知输入执行仅适用于 `bigint` 的操作（例如算术运算、比较）之前，使用 `areBigInts` 作为运行时守卫。

### 优势

- 确保每个元素都是 `bigint`，仅当整个数组都匹配时才返回 `true`。
- 按设计拒绝非数组和空数组（通过 `isFilledArray`），防止意外接受无效输入。
- 快速失败：一旦发现非 `bigint` 元素就立即返回 `false`。

## 用法

### 语法

函数：

- `areBigInts(array)`

参数：

- `array`: 要检查的值。

### 本地函数导入

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // 真
console.log(areBigInts(b)); // 假
console.log(areBigInts(c)); // 假
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

<small>该文件于 31 January 2026 at 23:25:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>