# areDecimals

## 说明

检查数组中的所有元素是否为十进制数字且数组已填充，并返回 `true` 或 `false`。

### 使用场景

验证用户提供的列表（例如 CSV 列或表单输入），以确保数组不为空且每个条目都是十进制值，然后再进行解析或计算。

> **给 TypeScript 用户的提示：**
>
> 当你需要快速进行布尔检查，以确认某个 `unknown[]` 非空且每个元素都是十进制表示时，使用 `areDecimals`。

### 优势

- 在验证各项之前确保输入是一个已填充的数组，防止意外接受空列表。
- 使用 `isDecimal` 验证每个元素，因此混合或无效值会立即得到 `false` 结果。
- 提供简单的布尔结果（`true`/`false`），适用于守卫与提前返回的验证流程。

## 用法

### 语法

函数：

- `areDecimals(array)`

参数：

- `array`: 要检查的数组。

### 本地函数导入

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // 真
console.log(areDecimals(b)); // 假
console.log(areDecimals(c)); // 假
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areDecimals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>该文件于 2026年1月31日 15:59:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>