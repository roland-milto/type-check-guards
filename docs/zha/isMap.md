# isMap

## 说明

Caeuq haenq gwnz `value` miz `Map` baeuj, baeuj laengz `true` neix gwnz `Map`, mbouj neix laengz `false`.

### 使用场景

Yongh `isMap` duz raeuz ndaej `unknown` value (daengz daengz rox JSON parsing, external APIs, va user input) laengz,
raeuz yiuq caeuq haenq gwnz neix `Map` ndaej, caeuq gwnz `Map` operations.

> **以下为 TypeScript 用法：**
>
> `isMap` gwnz raeuz yiengh runtime guard, baeuj laengz `true` neix gwnz `Map` laengz, mbouj neix laengz `false`; yongh
> gwnz raeuz yiengh gyaeuj `unknown` daengz daengz, caeuq gwnz `Map` APIs.

### 优点

- Tig cungj raeuz lauxnyenj caeuq haenq, baeuj mbouj mbouj daengz daengz haenq gwnz `Map`.
- Caeuq raeuz mbouj gwnz loengh leih, daengz daengz gyaeuj gwnz rox raeuz yiengh `Map` miz gwnzfaenh `get`, `set`,
  `has`.
- Gwnz gyaeuj raeuz yiengh gyaeuj gwnz, daengz daengz haenq caeuq lauxnyenj, daengz daengz yiengh `unknown` inputs.

## 用法

### 语法

函数：

- `isMap(value)`

参数：

- `value`: Gwnz yiengh baeuj caeuq.

### 本地函数导入

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isMap(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isMap](../_analysis/isMap.md)

<br>

---

<small>此文件于 31 January 2026 at 16:42:48 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>