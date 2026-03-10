# areEqual

## 说明

`areEqual` 用于检查数组中的所有元素是否都等于给定的预期值；仅在数组非空且每一项都匹配时返回 `true`。

### 使用场景

验证一个列表只包含单一允许的值（例如，所有状态标志都是 `true`、所有角色都是 `"admin"`，或所有数值条目都等于某个必需常量），同时将空输入视为无效（
`false`）。

> **给 TypeScript 用户的提示：**
>
> 当你需要对所有项进行严格检查时使用 `areEqual`；对于空数组以及任何非数组或非非空输入，它都会返回 `false`。

### 优势

- 仅当每个元素都匹配预期值时才返回 `true`；否则返回 `false`。
- 快速失败：一旦发现不匹配的元素就停止检查。
- 通过在输入不是非空数组时返回 `false` 来防止无效输入。

## 用法

### 语法

函数：

- `areEqual(value, expected)`

参数：

- `value`: 要检查的数组。
- `expected`: 用于与数组中每个元素进行比较的元素。

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

<small>该文件于 2026年1月31日 23:52:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>