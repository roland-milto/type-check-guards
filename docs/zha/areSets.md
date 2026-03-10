# areSets

## 说明

Caeuqhaeuj aen non-empty array mwngz, haenh daengz `Set` instance doengh; yowj laengz gwnz `true`, mbouj yowj laengz
gwnz `false`.

### 使用场景

Gwnz haenh aen value (e.g., laeuj user input, JSON parsing, waij external API) aen non-empty array daengz `Set` object,
caeuqhaeuj ndawj process goengq set.

> **以下为 TypeScript 用法：**
>
> Yongh `areSets` lai gwnz unknown input, caeuqhaeuj ndawj mbouj doengh iterating raeuj goengq element hoiq call `Set`
> API (e.g., `.size`, `.has`, `.add`).

### 优点

- Yenqjiz `true` gwnz daengz ndawj input laengz mwngz aen non-empty array laengz, raeuj goengq element doengh aen `Set`
  instance.
- Cingj empty array daengz false positive: mboujgoj array mwngz element, gwnz `false`.
- Aenq youqloengh gwnz runtime guard, caeuqhaeuj ndawj mbouj doengh `Set`-specific operation daengz goengq element.

## 用法

### 语法

函数：

- `areSets(array)`

参数：

- `array`: Array daengz caeuqhaeuj gwnz haenh `Set` instance.

### 本地函数导入

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a li laengz raemx Set instances haenq haenqlaeng
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // mbouj
console.log(areSets(c)); // mbouj
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areSets(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areSets](../_analysis/areSets.md)

<br>

---

<small>此文件于 30 January 2026 at 23:16:16 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>