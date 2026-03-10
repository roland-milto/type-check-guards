# arePrimitives

## 说明

`arePrimitives` 用来判断提供个、非空数组里向所有元素是不是侪是原始类型。

### 使用场景

在序列化、哈希、记录日志，或者传给绝对勿能收到对象个 API 之前，先验证传入数据（比方讲 query 参数、CSV 行值，或者一组
IDs/tags）只包含原始值。

> **给 TypeScript 用户的提示：**
>
> 当侬需要确保一个 `unknown[]` 里向只包含原始值（string、number、bigint、boolean、symbol、undefined，或者 null），再做后续处理个辰光，用
`arePrimitives`。

### 优势

- 只有当每个元素侪是原始值个辰光才会返回 `true`，作为“无对象/函数”数组个严格守卫。
- 快速失败：一旦发现非原始元素，立刻返回 `false`。
- 对非数组同空数组（通过 filled-array 检查）也会返回 `false`，防止勿当心接受无效输入。

## 用法

### 语法

函数：

- `arePrimitives(array)`

参数：

- `array`: 要检查个数组，用来判断里向元素是不是原始类型。

### 本地函数导入

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // 对
const r2 = arePrimitives(b); // 对
const r3 = arePrimitives(c); // 勿对
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.arePrimitives(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>该文件于 31 January 2026 at 00:07:17 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>