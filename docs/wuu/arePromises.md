# arePromises

## 说明

`arePromises` 用来判断一个数组里向个所有元素是不是侪是 `Promise` 实例。

### 使用场景

在汇总（比方讲用 `Promise.all`）之前，先验证一个动态构建或者外部提供个列表里向只包含 promises。

> **给 TypeScript 用户的提示：**
>
> 用 `arePromises` 来验证 `unknown[]`，再去调用 `Promise.all` 或者其他只对 promise 适用个操作；对空数组会返回 `false`。

### 优势

- 确保侬继续做同 Promise 相关逻辑之前，每个元素侪是一个 `Promise`。
- 对空数组会返回 `false`，避免对空输入产生含糊结果。
- 当侬处理来自外部来源个 `unknown[]` 时，作为运行时守卫蛮有用。

## 用法

### 语法

函数：

- `arePromises(array)`

参数：

- `array`: 要检查里向是不是有 `Promise` 实例个数组。

### 本地函数导入

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values 是运行辰光 Promise 实例个数组
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

<small>该文件于 30 January 2026 at 23:50:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>