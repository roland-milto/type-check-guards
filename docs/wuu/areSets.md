# areSets

## 说明

检查给定个非空数组里向是不是全是 `Set` 实例；是个辰光返回 `true`，勿是个辰光返回 `false`。

### 使用场景

处理每个 set 之前，先验证一个值（比方讲来自用户输入、JSON 解析、或者外部 API）是不是一个非空数组，而且里向全是 `Set` 对象。

> **给 TypeScript 用户的提示：**
>
> 用 `areSets` 来验证未知输入，再去遍历并对每个元素调用 `Set` API（比方讲 `.size`、`.has`、`.add`）。

### 优势

- 只有当输入是一个非空数组，而且每个元素都是 `Set` 实例个辰光，才会返回 `true`。
- 通过当数组里向没得元素辰光返回 `false`，防止对空数组产生假阳性。
- 适合作为运行时守卫：在对每个元素执行 `Set` 专用操作之前先做检查。

## 用法

### 语法

函数：

- `areSets(array)`

参数：

- `array`: 要检查里数组，看看里向个元素是不是 `Set` 实例。

### 本地函数导入

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a 是运行辰光一组 Set 实例组成个数组
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // 伐对
console.log(areSets(c)); // 伐对
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

<small>该文件于 30 January 2026 at 23:16:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>