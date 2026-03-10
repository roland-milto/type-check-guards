# arePromises

## 说明

`arePromises` 用来判断一个数组入面嘅所有元素系咪都系 `Promise` 实例。

### 使用场景

喺聚合之前（例如用 `Promise.all`），验证一个动态构建或者外部提供嘅列表入面只包含 promises。

> **给 TypeScript 用户的提示：**
>
> 用 `arePromises` 喺调用 `Promise.all` 或者其他只适用于 promise 嘅操作之前验证 `unknown[]`；对空数组会返回 `false`。

### 优势

- 确保你继续进行同 Promise 相关逻辑之前，每个元素都系一个 `Promise`。
- 对空数组（冇填充嘅数组）返回 `false`，避免对空输入产生含糊嘅结果。
- 处理来自外部来源嘅 `unknown[]` 时，作为运行时守卫好有用。

## 用法

### 语法

函数：

- `arePromises(array)`

参数：

- `array`: 要检查系咪包含 Promise 实例嘅数组。

### 本地函数导入

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values 係运行时 Promise 实例个数组
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.arePromises(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [arePromises](../_analysis/arePromises.md)

<br>

---

<small>该文件于 30 January 2026 at 23:47:48 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>