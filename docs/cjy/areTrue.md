# areTrue

## 说明

检查一个唔空嘅数组系咪只包含布尔值 `true`。

### 使用场景

用 `areTrue` 来验证一组前置条件或者功能开关系咪全部都启用（全部值都系 `true`）之后先继续；同时把空嘅或者格式唔啱嘅输入当作未满足（
`false`）。

> **给 TypeScript 用户的提示：**
>
> `areTrue` 对空数组同埋包含任何唔严格系 `true` 嘅值嘅数组都会返回 `false`。

### 优势

- 只有当每个元素都严格系 `true`，而且数组唔系空嘅时候，先会返回 `true`。
- 快啲失败：一发现有唔系 `true` 嘅值，就即刻返回 `false`。
- 对无效输入（唔系数组或者空数组）会返回 `false`。

## 用法

### 语法

函数：

- `areTrue(array)`

参数：

- `array`: 要检查系咪全部都系 `true` 值嘅数组。

### 本地函数导入

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areTrue(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areTrue](../_analysis/areTrue.md)

<br>

---

<small>该文件于 30 January 2026 at 13:50:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>