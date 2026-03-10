# areNullOrUndefined

## 说明

检查给定数组中的所有元素是否都是 `null` 或 `undefined`。

### 使用场景

在决定跳过处理或显示“未提供任何值”的状态之前，验证一组可选字段列表不包含任何实际值（仅有 `null`/`undefined`）。

> **给 TypeScript 用户的提示：**
>
> 当你需要验证一个数组只包含缺失值（`null`/`undefined`）时，使用 `areNullOrUndefined`。注意：对空数组它会返回 `false`。

### 优势

- 仅当每个元素都是 `null` 或 `undefined` 时才返回 `true`。
- 对空数组返回 `false`，有助于区分“没有数据”和“全部缺失值”。
- 可用于 `unknown[]`，因此在收窄类型之前使用也很安全。

## 用法

### 语法

函数：

- `areNullOrUndefined(array)`

参数：

- `array`: 要检查的数组。

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

<small>该文件于 31 January 2026 at 00:29:20 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>