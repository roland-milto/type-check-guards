# areEqual

## 说明

`areEqual` 检查数组里所有元素是否都等于给定的预期值；只有在非空数组且每一项都匹配时才返回 `true`。

### 使用场景

验证一个列表只包含单一允许的值（例如：所有状态标志都是 `true`、所有角色都是 `"admin"`、或者所有数字项都等于某个必需常量），同时把空输入当作无效（
`false`）。

> **给 TypeScript 用户的提示：**
>
> 当你需要严格检查所有项时用 `areEqual`；对空数组、以及任何非数组或非已填充的输入，它都会返回 `false`。

### 优势

- 只有当每个元素都匹配预期值时才返回 `true`；否则返回 `false`。
- 快速失败：一旦发现不匹配的元素就停止检查。
- 通过在输入不是已填充数组时返回 `false` 来防止无效输入。

## 用法

### 语法

函数：

- `areEqual(value, expected)`

参数：

- `value`: 要检查的数组。
- `expected`: 用来同数组里每一项比较的元素。

### 本地函数导入

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areEqual(value, expected)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areEqual](../_analysis/areEqual.md)

<br>

---

<small>该文件于 31 January 2026 at 23:49:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>