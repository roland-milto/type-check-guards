# areIndexesFound

## 说明

`areIndexesFound` 用来检查一个值系咪非空数组，并且数组里嘅元素全部都系有效索引；符合就返回 `true`，否则返回 `false`。

### 使用场景

喺用用户提供或者外部数据（比如解析出来嘅 JSON）去访问或者切片数组之前，先验证佢系咪一串索引列表。

> **给 TypeScript 用户的提示：**
>
> 用 `areIndexesFound` 喺把未知输入当作数组索引之前先做校验；空数组同包含非索引值嘅数组都会返回 `false`。

### 优势

- 只有当输入系一个装满嘅数组，并且每个元素都系有效索引嗰阵，先会返回 `true`。
- 快速失败：一遇到唔系索引嘅元素就立刻返回 `false`。
- 喺把值当作数组位置或者偏移量之前，用来做守卫好有用。

## 用法

### 语法

函数：

- `areIndexesFound(array)`

参数：

- `array`: 要检查系咪符合索引要求嘅数组。

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
  // 这搭里，`a` 叫认定是一个装满索引个数组。
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

<small>该文件于 31 January 2026 at 00:41:17 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>