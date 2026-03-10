# areNullOrUndefined

## 说明

检查给定数组里向所有元素是不是都系 `null` 或者 `undefined`。

### 使用场景

校验一组可选字段列表里向冇实际值（只系 `null`/`undefined`），再决定要勿要跳过处理，或者显示“冇提供任何值”个状态。

> **给 TypeScript 用户的提示：**
>
> 当侬需要确认一个数组里向只包含缺失值（`null`/`undefined`）个辰光，用 `areNullOrUndefined`。注意：对空数组它会返回 `false`。

### 优势

- 只有当每个元素都系 `null` 或者 `undefined` 个辰光才返回 `true`。
- 对空数组返回 `false`，帮侬区分“没数据”同“全是缺失值”。
- 支持 `unknown[]`，所以喺收窄类型之前用也安全。

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

<small>该文件于 31 January 2026 at 00:29:19 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>