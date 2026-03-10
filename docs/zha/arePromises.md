# arePromises

## 说明

`arePromises` gwnz youq youh gwnz sawj mbouj gwnz laengz (array) de youq youh `Promise` instances.

### 使用场景

Gwnz youq youh gwnz sawj mbouj gwnz laengz (list) youq youh gwnz dynamically built rox externally provided, caeuq youq
youh gwnz sawj `Promise` rox youq youh, saed youq youh gwnz aggregation (e.g., with `Promise.all`).

> **以下为 TypeScript 用法：**
>
> Yongh `arePromises` lai youq youh gwnz `unknown[]` mbouj gwnz sawj `Promise.all` rox youq youh gwnz promise-only
> operations; de youq youh laengz (array) mbouj daengz (empty) laengz, daengz `false`.

### 优点

- Dauqnaengz youq youh gyoengq sawj mbouj gwnz laengz, caeuq mbouj gwnz sawj `Promise` rox youq youh, saed youq youh
  gwnz `Promise` gwnz raeuz.
- Dauqnaengz youq mbouj gwnz laengz (array) mbouj daengz (empty) laengz, daengz `false`, caeuq mbouj gwnz gyaeuj gyaeuj
  raeuz youq mbouj daengz youh.
- Gwnz youq runtime guard, youq youh gwnz `unknown[]` rox youq youh gwnz external sources.

## 用法

### 语法

函数：

- `arePromises(array)`

参数：

- `array`: Gwnz laengz (array) youq youh gwnz sawj `Promise` instances.

### 本地函数导入

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values cuj laengz ndei rox Promise instances haenq haenq
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.arePromises(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [arePromises](../_analysis/arePromises.md)

<br>

---

<small>此文件于 30 January 2026 at 23:50:40 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>