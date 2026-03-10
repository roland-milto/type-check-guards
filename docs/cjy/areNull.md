# areNull

## 说明

检查给定个 `array` 里向是不是所有元素都系 `null`。

### 使用场景

在应用假设所有条目都系有意留空个逻辑之前，先验证数据集列、API 字段列表，或者占位数组里向只包含 `null` 值。

> **给 TypeScript 用户的提示：**
>
> 当侬需要严格检查输入系一个非空数组，而且每个元素都正好系 `null`（勿是 `undefined`，也勿是其他假值）个辰光，用 `areNull`。

### 优势

- 只有当每个元素都系 `null` 个辰光才会返回 `true`，做得来严格个“全部匹配”保护判断。
- 通过返回 `false` 来拒绝非数组同空数组，防止对无效输入意外得到真值结果。
- 蛮适合作为前置条件检查，用来处理必须完全系 `null` 个数据之前先验一遍。

## 用法

### 语法

函数：

- `areNull(array)`

参数：

- `array`: 要检查里向有无全是 `null` 元素个输入数组。

### 本地函数导入

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // true
const allNullB = areNull(b); // false

const notAnArray = areNull(123 as unknown as unknown[]); // false
const empty = areNull([]); // false

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

<small>该文件于 31 January 2026 at 15:42:45 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>