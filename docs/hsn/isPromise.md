# isPromise

## 说明

Nirdharit kare hai ki dewal value `Promise` hai ki nai.

### 使用场景

`isPromise` ke use karo unknown inputs ke validate kare khatir, `Promise` jaisan treat kare se pahile—jaise plugins se
aayal values, dynamic imports, ya loosely-typed APIs se handle karte waqt.

> **给 TypeScript 用户的提示：**
>
> `isPromise` `instanceof Promise` se check kare hai, isliye eh sirf asli `Promise` instances khatir `true` return kare
> hai (generic thenables khatir nai).

### 优势

- Eh check kare khatir ek saral runtime jaanch dewe hai ki koi value `Promise` hai ki nai.
- Code path jekar ek asli `Promise` instance ke jarurat hai, okra guard kare me madad kare hai, aur predictably `true`
  ya `false` return kare hai.
- “thenable” objects (jaise, `{ then() {} }`) se false positives se bachawe hai, kyunki eh ek actual `Promise` instance
  ke requirement rakhe hai.

## 用法

### 语法

函数：

- `isPromise(value)`

参数：

- `value`: Jekar value ke check kare ke hai.

### 本地函数导入

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // साँच
console.log(isPromise(b)); // झूठ
console.log(isPromise(123)); // झूठ
console.log(isPromise(null)); // झूठ

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

<small>该文件于 30 January 2026 at 23:53:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>