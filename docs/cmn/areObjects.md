# areObjects

## 说明

`areObjects` 检查所提供的已填充数组是否只包含对象。

### 使用场景

当你收到一个未知数组（例如来自 JSON 解析或外部 API）并且需要确保它非空且每个元素都是对象，然后再进行遍历并访问对象属性时，使用
`areObjects`。

> **给 TypeScript 用户的提示：**
>
> 在将条目当作对象处理之前，使用 `areObjects` 来验证 `unknown[]`；它对空数组返回 `false`。

### 优势

- 仅当输入是已填充的数组且每个元素都是对象时才返回 `true`。
- 一旦发现非对象元素就会提前停止并返回 `false`。
- 在执行特定于对象的操作之前，有助于验证未知输入。

## 用法

### 语法

函数：

- `areObjects(array)`

参数：

- `array`: 要检查其元素是否为对象的数组。

### 本地函数导入

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value 是一个包含对象的非空数组
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

<small>该文件于 31 January 2026 at 00:08:17 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>