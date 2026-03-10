# arePromises

## 说明

`arePromises` 用于判断数组中的所有元素是否都是 `Promise` 实例。

### 使用场景

在聚合（例如使用 `Promise.all`）之前，验证动态构建或外部提供的列表仅包含 promises。

> **给 TypeScript 用户的提示：**
>
> 在调用 `Promise.all` 或其他仅适用于 Promise 的操作之前，使用 `arePromises` 来验证 `unknown[]`；对于空数组它会返回
`false`。

### 优势

- 确保在继续执行特定于 Promise 的逻辑之前，每个元素都是 `Promise`。
- 对未填充的数组返回 `false`，避免对空输入产生模棱两可的结果。
- 在处理来自外部来源的 `unknown[]` 时，可用作运行时守卫。

## 用法

### 语法

函数：

- `arePromises(array)`

参数：

- `array`: 要检查是否为 Promise 实例的数组。

### 本地函数导入

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values 在运行时是 Promise 实例的数组
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

<small>该文件于 2026年1月30日 23:50:37 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>