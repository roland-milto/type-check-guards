# areIndexesFound

## 说明

`areIndexesFound` 用于检查某个值是否为非空数组，且其元素全部为有效索引；若是则返回 `true`，否则返回 `false`。

### 使用场景

在使用用户提供或外部数据（例如解析后的 JSON）来访问或切片数组之前，先验证该数据是否为预期的索引列表。

> **给 TypeScript 用户的提示：**
>
> 在将未知输入的元素当作数组索引之前，使用 `areIndexesFound` 进行验证；对于空数组以及包含非索引值的数组，它会返回 `false`。

### 优势

- 仅当输入是一个已填充的数组且每个元素都是有效索引时才返回 `true`。
- 快速失败：一旦遇到非索引元素就立即返回 `false`。
- 在将值用作数组位置或偏移量之前，作为守卫非常有用。

## 用法

### 语法

函数：

- `areIndexesFound(array)`

参数：

- `array`: 要检查其是否符合索引要求的数组。

### 本地函数导入

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // 在这里，`a` 被确认是一个已填充的索引数组。
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areIndexesFound(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>该文件于 2026年1月31日 01:05:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>