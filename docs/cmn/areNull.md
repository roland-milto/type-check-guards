# areNull

## 说明

检查给定 `array` 中的所有元素是否都是 `null`。

### 使用场景

在应用假设所有条目都是有意为空的逻辑之前，验证数据集列、API 字段列表或占位数组仅包含 `null` 值。

> **给 TypeScript 用户的提示：**
>
> 当你需要严格检查输入是一个非空数组，并且每个元素都恰好是 `null`（不是 `undefined`，也不是假值）时，使用 `areNull`。

### 优势

- 仅当每个元素都是 `null` 时才返回 `true`，使其成为严格的“全部匹配”守卫。
- 通过返回 `false` 来拒绝非数组和空数组，防止在无效输入上意外得到真值结果。
- 非常适合作为处理必须完全为 `null` 的数据之前的前置条件检查。

## 用法

### 语法

函数：

- `areNull(array)`

参数：

- `array`: 要检查其元素是否为 `null` 的输入数组。

### 本地函数导入

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // 真
const allNullB = areNull(b); // 假

const notAnArray = areNull(123 as unknown as unknown[]); // 假
const empty = areNull([]); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNull(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNull](../_analysis/areNull.md)

<br>

---

<small>该文件于 31 January 2026 at 15:42:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>