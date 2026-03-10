# isPromise

## 说明

判断给定值是否为 `Promise`。

### 使用场景

在将未知输入当作 `Promise` 处理之前，使用 `isPromise` 进行验证，例如在处理来自插件、动态导入或类型较宽松的 API 的返回值时。

> **给 TypeScript 用户的提示：**
>
> `isPromise` 通过 `instanceof Promise` 进行检查，因此它只会对真实的 `Promise` 实例返回 `true`（而不是通用的 thenable）。

### 优势

- 提供一个简单的运行时检查，用于判断某个值是否为 `Promise`。
- 帮助保护那些需要真实 `Promise` 实例的代码路径，可预测地返回 `true` 或 `false`。
- 通过要求必须是实际的 `Promise` 实例，避免对“thenable”对象（例如 `{ then() {} }`）产生误判。

## 用法

### 语法

函数：

- `isPromise(value)`

参数：

- `value`: 要检查的值。

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

<small>该文件于 2026年1月30日 23:54:57 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>