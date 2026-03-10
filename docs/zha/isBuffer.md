# isBuffer

## 说明

Cingq gij ndaej Node.js `Buffer` mbouj, daengz `true` rux `false` lauxgyaeuj.

### 使用场景

Runtime ndei validate inputs (dox: API payloads, file data, rux message buffers) caeuq cingq gij ndaej `Buffer` mbouj,
ndei processing gwnz, caeuq ndei Node.js mbouj miz `Buffer` lauxgyaeuj daengz `false`.

> **以下为 TypeScript 用法：**
>
> Yongh `isBuffer` caeuq `unknown` ndaej narrowing goek `Buffer` mbouj, ndei call Buffer-specific methods gwnz.

### 优点

- `Buffer.isBuffer` lauxgyaeuj ndei Node.js `Buffer` mbouj gwnz lauxgyaeuj, raeuj gwnz anqnaengz.
- Mwngz ndei `Buffer` mbouj miz, daengz `false` lauxgyaeuj, mbouj daengz runtime error.
- `unknown` input raeuj gwnz, daengz runtime validation caeuq type narrowing lauxgyaeuj.

## 用法

### 语法

函数：

- `isBuffer(value)`

参数：

- `value`: Gij ndaej caeuq lauxgyaeuj.

### 本地函数导入

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a cuj Buffer neix
  console.log(a.toString("utf8"));
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isBuffer(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>此文件于 31 January 2026 at 16:34:01 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>