# isWeakMap

## 说明

Cingjdingh aen aen `value` gaij mbouj mbouj aen `WeakMap` instance.

### 使用场景

Yongh `isWeakMap` ndei ndangz mwngz aen `unknown` value (dawz, from public API, plugin system, rox dynamic
configuration) laux, raeuj cingjdingh aen aen `WeakMap` gwnz, ndei yongh `WeakMap`-specific behavior.

> **以下为 TypeScript 用法：**
>
> `isWeakMap` cingj yongh `instanceof WeakMap` daengz aen daengz raeuj; aen run time guard, cingj byauj `true` ndei aen
> cingj `WeakMap` instance.

### 优点

- Yongh gij run time laux daengz aen aen gaij mbouj mbouj aen `WeakMap`.
- Bouxcoz API daengz aen `WeakMap` raeuj, daengz aen gaij mbouj miz yongh; byauj `true`/`false` raeuj, mbouj daengz aen
  daengz raeuj (throw).
- Gyoengq `unknown` input, daengz aen mbouj gwnz; aen ndei module boundary (dawz, parsing, external data, rox untyped
  code) laux yongh.

## 用法

### 语法

函数：

- `isWeakMap(value)`

参数：

- `value`: Aen gaij daengz aen daengz raeuj.

### 本地函数导入

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a laeuj goj WeakMap haenq daengz haenq
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isWeakMap(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>此文件于 30 January 2026 at 13:27:46 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>