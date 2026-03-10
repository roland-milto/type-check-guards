# areNaNs

## 说明

`areNaNs` 用于检查数组中的所有元素是否都是 `NaN`，并且仅当每个元素都是 `NaN` 时才返回 `true`。

### 使用场景

验证传入数据，其中 `NaN` 被用作哨兵值，并且你必须确保整个数组完全由 `NaN` 组成（例如，检测一个全部缺失的数值序列）。

> **给 TypeScript 用户的提示：**
>
> 当你需要验证一个数组只包含数值 `NaN`（不进行字符串到数字的强制转换）时，使用 `areNaNs`。

### 优势

- 仅当每个元素都是 `NaN` 时才返回 `true`（严格的全元素检查）。
- 不会将字符串强制转换为数字；像 "NaN" 这样的值仍然是非 `NaN`，并使结果为 `false`。
- 对未填充的数组返回 `false`，防止在空输入上意外得到 `true`。

## 用法

### 语法

函数：

- `areNaNs(array)`

参数：

- `array`: 要检查其是否包含 `NaN` 值的数组。

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

<small>该文件于 2026年1月30日 15:54:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>