# arePrimitives

## 说明

`arePrimitives` 用于评估在提供的非空数组中，是否所有元素都是原始类型。

### 使用场景

在序列化、哈希、记录日志或将数据传递给不得接收对象的 API 之前，验证传入数据（例如查询参数、CSV 行值或 ID/标签列表）仅包含原始值。

> **给 TypeScript 用户的提示：**
>
> 当你需要在进一步处理之前确保 `unknown[]` 仅包含原始值（string、number、bigint、boolean、symbol、undefined 或 null）时，使用
`arePrimitives`。

### 优势

- 仅当每个元素都是原始值时才返回 `true`，使其成为对“无对象/函数”数组的严格守卫。
- 快速失败：一旦发现非原始元素就立即返回 `false`。
- 对非数组和空数组也返回 `false`（通过已填充数组检查），防止意外接受无效输入。

## 用法

### 语法

函数：

- `arePrimitives(array)`

参数：

- `array`: 要检查其元素是否为原始类型的数组。

### 本地函数导入

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // 真
const r2 = arePrimitives(b); // 真
const r3 = arePrimitives(c); // 假
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

<small>该文件于 31 January 2026 at 00:00:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>