# areObjects

## 说明

`areObjects` 检查传进来个填满个数组里向是不是只包含对象。

### 使用场景

当侬收到一个未知个数组（比方讲从 JSON 解析或者外部 API 来个），而且需要保证伊非空、并且每个元素都是对象，然后再去遍历并访问对象属性个辰光，用
`areObjects`。

> **给 TypeScript 用户的提示：**
>
> 用 `areObjects` 来验证 `unknown[]`，再把里向个项当作对象来用；空数组会返回 `false`。

### 优势

- 只有当输入是个填满个数组，而且每个元素都是对象个辰光，才会返回 `true`。
- 一旦发现有非对象个元素，就会立刻停止并返回 `false`。
- 帮侬在做对象相关操作之前，先验证未知输入。

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
  // value 是装满个对象个数组
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

<small>该文件于 31 January 2026 at 00:11:01 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>