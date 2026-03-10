# areSets

## 说明

检查给定的非空数组是否仅包含 `Set` 实例；若是则返回 `true`，否则返回 `false`。

### 使用场景

在处理每个集合之前，验证某个值（例如来自用户输入、JSON 解析或外部 API）是否为由 `Set` 对象组成的非空数组。

> **给 TypeScript 用户的提示：**
>
> 在迭代并对每个元素调用 `Set` API（例如 `.size`、`.has`、`.add`）之前，使用 `areSets` 来验证未知输入。

### 优势

- 仅当输入为非空数组且每个元素都是 `Set` 实例时才返回 `true`。
- 当数组没有任何元素时返回 `false`，从而避免对空数组产生误判（false positive）。
- 在对每个元素执行 `Set` 特有操作之前，作为运行时守卫非常有用。

## 用法

### 语法

函数：

- `areSets(array)`

参数：

- `array`: 要检查其元素是否为 `Set` 实例的数组。

### 本地函数导入

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a 在运行时是一个由 Set 实例组成的数组
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areSets(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areSets](../_analysis/areSets.md)

<br>

---

<small>该文件于 2026年1月30日 23:16:09 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>