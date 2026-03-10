# areTrue

## 说明

检查一个非空数组里向是不是只包含布尔值 `true`。

### 使用场景

用 `areTrue` 来验证一组前置条件或者功能开关是不是全部都启用（所有值都是 `true`）再继续；同时把空的或者格式不对个输入当作未满足（
`false`）。

> **给 TypeScript 用户的提示：**
>
> `areTrue` 对空数组，还有包含任何一个不严格等于 `true` 个值个数组，都会返回 `false`。

### 优势

- 只有当每个元素都严格是 `true` 而且数组非空个辰光，才会返回 `true`。
- 快速失败：一旦寻着一个非 `true` 个值，马上返回 `false`。
- 通过返回 `false` 来拒绝无效输入（非数组或者空数组）。

## 用法

### 语法

函数：

- `areTrue(array)`

参数：

- `array`: 要检查里向是不是全部都是 `true` 值个数组。

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

<small>该文件于 30 January 2026 at 13:53:23 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>