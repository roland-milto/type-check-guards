# areNullOrUndefined

## 说明

检查给定数组里向所有元素是不是侪是 `null` 或 `undefined`。

### 使用场景

在决定跳过处理或者显示“没提供任何值”个状态之前，先验证一组可选字段列表里向没得实际值（只包含 `null`/`undefined`）。

> **给 TypeScript 用户的提示：**
>
> 当侬需要确认一个数组里向只包含缺失值（`null`/`undefined`）个辰光，用 `areNullOrUndefined`。注意：对空数组它会返回 `false`。

### 优势

- 只有当每个元素侪是 `null` 或 `undefined` 个辰光才会返回 `true`。
- 对空数组会返回 `false`，帮侬区分“没数据”同“全是缺失值”。
- 支持 `unknown[]`，所以在收窄类型之前用起来也安全。

## 用法

### 语法

函数：

- `areNullOrUndefined(array)`

参数：

- `array`: 要检查个数组。

### 本地函数导入

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNullOrUndefined(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>该文件于 31 January 2026 at 00:31:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>