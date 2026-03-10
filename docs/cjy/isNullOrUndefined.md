# isNullOrUndefined

## 说明

检查给定个值系唔系 `null` 或者 `undefined`。

### 使用场景

当你需要把 `null` 跟 `undefined` 都当作“冇值”来处理个时候，用 `isNullOrUndefined`，比如校验可选输入、规范化 API
payload，或者喺解引用一个可能缺失个值之前守住相关代码路径。

> **给 TypeScript 用户的提示：**
>
> 用 `isNullOrUndefined` 喺访问属性或者调用方法之前防住缺失值；佢只会对 `null` 跟 `undefined` 返回 `true`。

### 优势

- 提供一个清楚、可重复用个守卫，集中检测 `null` 跟 `undefined`。
- 返回一个简单个布尔值（`true`/`false`），容易喺条件判断同校验里头组合使用。
- 喺访问属性或者调用方法之前先检查缺失值，帮你避免常见个运行时错误。

## 用法

### 语法

函数：

- `isNullOrUndefined(value)`

参数：

- `value`: 要检查个值，看佢系唔系 `null` 或者 `undefined`。

### 本地函数导入

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // 处理缺失值
}

console.log(isNullOrUndefined(b)); // 真
console.log(isNullOrUndefined(c)); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNullOrUndefined(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>该文件于 31 January 2026 at 00:33:16 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>