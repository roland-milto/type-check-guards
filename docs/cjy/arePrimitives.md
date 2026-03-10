# arePrimitives

## 说明

`arePrimitives` 用来判断提供嗰个非空数组入面，系唔系所有元素都系原始类型。

### 使用场景

喺序列化、哈希、记录日志，或者传畀绝对唔能接收对象嗰类 API 之前，先验证传入数据（比如 query 参数、CSV 行值，或者 ID/tag
列表）只包含原始值。

> **给 TypeScript 用户的提示：**
>
> 当你需要确保一个 `unknown[]` 只包含原始值（string、number、bigint、boolean、symbol、undefined 或 null），再继续处理嗰阵，就用
`arePrimitives`。

### 优势

- 只有当每个元素都系原始值嗰阵才返回 `true`，做得“冇对象/函数”数组嗰种严格守卫。
- 快速失败：一发现有非原始元素就立刻返回 `false`。
- 对非数组同空数组（通过已填充数组检查）也会返回 `false`，防止唔小心接受无效输入。

## 用法

### 语法

函数：

- `arePrimitives(array)`

参数：

- `array`: 要检查嗰个数组，用来判断入面元素系唔系原始类型。

### 本地函数导入

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // true
const r2 = arePrimitives(b); // true
const r3 = arePrimitives(c); // false
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

<small>该文件于 31 January 2026 at 00:00:40 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>