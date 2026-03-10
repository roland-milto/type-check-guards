# areObjects

## 说明

`areObjects` 检查提供个填满数组里向是不是只包含对象。

### 使用场景

当侬收到一个未知数组（比如从 JSON 解析或者外部 API 来个）个辰光，用 `areObjects` 来确保它非空，并且每个元素都系对象，然后再去遍历并访问对象属性。

> **给 TypeScript 用户的提示：**
>
> 用 `areObjects` 来校验 `unknown[]`，再把里向个项当作对象来用；空数组会返回 `false`。

### 优势

- 只有当输入系一个填满个数组并且每个元素都系对象个辰光，才返回 `true`。
- 一旦发现有非对象个元素，就会提前停止并返回 `false`。
- 帮侬在做对象专用操作之前，先校验未知输入。

## 用法

### 语法

函数：

- `areObjects(array)`

参数：

- `array`: 要检查里向元素是不是对象个数组。

### 本地函数导入

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value 系装满对象个数组
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areObjects(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areObjects](../_analysis/areObjects.md)

<br>

---

<small>该文件于 31 January 2026 at 00:08:12 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>