# areMaps

## 说明

`areMaps` gwnz raemx daengz aen, caeuq gwnz lauxh raemx mbouj roengz laengz lauxh ndei mbouj gij gwnz ndei mbouj gij
gwnz `Map` swci.

### 使用场景

Cek unknown input (daengz aen from JSON parsing, external APIs, or dynamic sources) gwnz mbouj gij raemx, caeuq gwnz
lauxh raemx mbouj roengz gwnz list `Map` objects.

> **以下为 TypeScript 用法：**
>
> Gwnz raemx roengz (empty array) haenh ra `false`; caeuq gwnz lauxh raemx mbouj roengz laengz lauxh ndei mbouj gij gwnz
> ndei mbouj gij gwnz `Map` caeuq haenh ra `true`.

### 优点

- Baujq lauxh ndei mbouj gij gwnz `Map` swci, daengz haenh ra `true` caeuq gwnz ndei mbouj gij gwnz lauxh daengz doengh
  gwnz cek.
- Gijq raemx lauxh roengz (empty arrays) daengz aen daengz, youq raemx mbouj daengz “mbouj gij data” goengq raemx gwnz
  input bouxj.
- Yiengh ndei gwnz aen guard gwnz mbouj gij raemx `Map`-specific operations (daengz aen `.get()`, `.set()`, iteration)
  youq gwnz collection.

## 用法

### 语法

函数：

- `areMaps(array)`

参数：

- `array`: Lauxh raemx ndei gwnz cek.

### 本地函数导入

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items laengz gwnzdoengh mbouj dwg array mbouj roengz Map instances haenq haenq haenq haenq
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // mbouj dwg: array mbouj roengz, hoz array daengz roengz mbouj Map value
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areMaps(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areMaps](../_analysis/areMaps.md)

<br>

---

<small>此文件于 31 January 2026 at 16:15:28 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>