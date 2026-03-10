# isPromise

## 说明

Caeuq haenq daengznaeuz aen value caeuq haenq mbouj haenq aen `Promise`.

### 使用场景

Yongh `isPromise` lai caeuq haenq inputs daengznaeuz mbouj rox, gyoengq haenq mbouj haenq aen `Promise`, daengznaeuz
gyoengq haenq values daengznaeuz raeuz gyaeuj raemx plugins, dynamic imports, vaq APIs daengznaeuz mbouj gyaeuj type.

> **以下为 TypeScript 用法：**
>
> `isPromise` checks via `instanceof Promise`, so it only returns `true` for real `Promise` instances (not generic
> thenables).

### 优点

- Cungj aen raeuz gyoengq haenq daengznaeuz caeuq haenq mbouj haenq aen `Promise`.
- Cungj gyaeuj raeuz gyoengq daengznaeuz caeuq haenq mbouj haenq aen `Promise` instance, daengznaeuz raeuz gyaeuj `true`
  vaq `false` daengznaeuz gyoengq.
- Cungj mbouj daengznaeuz gyaeuj haenq “thenable” objects (daengznaeuz `{ then() {} }`) by requiring aen raeuz `Promise`
  instance.

## 用法

### 语法

函数：

- `isPromise(value)`

参数：

- `value`: Aen value daengznaeuz caeuq haenq.

### 本地函数导入

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // true
console.log(isPromise(b)); // false
console.log(isPromise(123)); // false
console.log(isPromise(null)); // false

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isPromise(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isPromise](../_analysis/isPromise.md)

<br>

---

<small>此文件于 30 January 2026 at 23:55:00 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>