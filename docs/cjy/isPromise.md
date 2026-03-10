# isPromise

## 说明

判断给定个值是不是 `Promise`。

### 使用场景

用 `isPromise` 在把未知输入当作 `Promise` 之前先验证一遍，比如处理插件返回个值、动态 import 返回个值，或者类型比较松个 API。

> **给 TypeScript 用户的提示：**
>
> `isPromise` 通过 `instanceof Promise` 来检查，所以只会对真个 `Promise` 实例返回 `true`（不是一般个 thenable）。

### 优势

- 提供一个简单个运行时检查，用来判断一个值是不是 `Promise`。
- 帮你守住需要真个 `Promise` 实例个代码路径，能可预测个返回 `true` 或 `false`。
- 通过要求必须是真个 `Promise` 实例，避免对“thenable”对象（比如 `{ then() {} }`）个误判。

## 用法

### 语法

函数：

- `isPromise(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // 真
console.log(isPromise(b)); // 假
console.log(isPromise(123)); // 假
console.log(isPromise(null)); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isPromise(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isPromise](../_analysis/isPromise.md)

<br>

---

<small>该文件于 30 January 2026 at 23:52:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>