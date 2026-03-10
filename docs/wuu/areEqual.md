# areEqual

## 说明

`areEqual` 用来检查数组里所有元素是不是都等于指定个预期值；只有对非空数组而且每一项都匹配个情况才会返回 `true`。

### 使用场景

校验一个列表里只包含单一允许值（比方讲：所有状态标记都是 `true`、所有角色都是 `"admin"`、或者所有数字项都等于某个必须个常量），同时把空输入当作无效（
`false`）。

> **给 TypeScript 用户的提示：**
>
> 当侬需要严格检查“所有项都一样”个辰光用 `areEqual`；对空数组、还有任何勿是数组或者勿是填满个输入，它都会返回 `false`。

### 优势

- 只有当每个元素都符合预期值个辰光才会返回 `true`；否则返回 `false`。
- 快速失败：一旦发现有勿匹配个元素就立刻停止检查。
- 防止无效输入：当输入勿是填满个数组辰光返回 `false`。

## 用法

### 语法

函数：

- `areEqual(value, expected)`

参数：

- `value`: 要检查个数组。
- `expected`: 用来同数组里每一项作比较个元素。

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

<small>该文件于 31 January 2026 at 23:52:47 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>