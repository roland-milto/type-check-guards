# areNaNs

## 说明

`areNaNs` 检查一个数组里向是不是所有元素都系 `NaN`，只有当每个元素都系 `NaN` 个辰光才返回 `true`。

### 使用场景

验证传进来个数据：当用 `NaN` 当哨兵值个辰光，侬必须保证整个数组完全由 `NaN` 组成（比方讲，用来检测一整段都缺失个数值序列）。

> **给 TypeScript 用户的提示：**
>
> 当侬需要验证一个数组里向只包含数字个 `NaN` 值（勿做字符串转数字个强制转换）个辰光，用 `areNaNs`。

### 优势

- 只有当每个元素都系 `NaN` 个辰光才返回 `true`（严格个全元素检查）。
- 勿会把字符串强制转成数字；像 "NaN" 这种值还是算非 `NaN`，结果就会变成 `false`。
- 对没填满个数组也返回 `false`，防止空输入辰光误判成 `true`。

## 用法

### 语法

函数：

- `areNaNs(array)`

参数：

- `array`: 要检查里向有无 `NaN` 值个数组。

### 本地函数导入

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // 真
const b = areNaNs([NaN, 1, NaN]); // 假
const c = areNaNs([NaN, "NaN", NaN]); // 假
const d = areNaNs([NaN, null, NaN]); // 假
const e = areNaNs([] as unknown[]); // 假
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNaNs(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>该文件于 30 January 2026 at 15:50:50 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>