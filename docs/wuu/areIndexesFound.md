# areIndexesFound

## 说明

`areIndexesFound` 用来检查一个值是不是非空数组，而且里向个元素全是有效索引；符合就返回 `true`，勿符合就返回 `false`。

### 使用场景

在用用户提供个或者外部数据（比方讲解析出来个 JSON）之前，先验证伊是不是一串索引列表，再用伊来访问数组或者对数组做 slice。

> **给 TypeScript 用户的提示：**
>
> 用 `areIndexesFound` 来验证未知输入，再把里向个元素当作数组索引来用；空数组、或者包含非索引值个数组，伊都会返回 `false`。

### 优势

- 伊只会在输入是个填满个数组、而且每个元素都是有效索引个辰光才会返回 `true`。
- 快速失败：一碰着非索引元素就立刻返回 `false`。
- 适合作为防护：在把值当作数组位置或者偏移量之前先做检查。

## 用法

### 语法

函数：

- `areIndexesFound(array)`

参数：

- `array`: 要检查索引合规性个数组。

### 本地函数导入

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // 对
console.log(areIndexesFound(b)); // 勿对
console.log(areIndexesFound(c)); // 勿对

if (areIndexesFound(a)) {
  // 迭搭里，`a` 已经确认是装满索引个数组。
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

<small>该文件于 31 January 2026 at 01:04:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>