# areDecimals

## 说明

Gyoengq mbouj raeuz gyoengq mbouj: gyoengq mbouj rox ndawq ndawq aen daengz raeuz gyoengq mbouj (filled) raeuz gyoengq
mbouj rox ndawq ndawq aen daengz raeuz decimal numbers, cungj youq `true` raeuz `false`.

### 使用场景

Gyoengq mbouj raeuz gyoengq mbouj: gyoengq mbouj user-provided lists (e.g., CSV columns or form inputs) daengz raeuz rox
ndawq ndawq mbouj rox empty raeuz gyoengq mbouj rox ndawq ndawq aen daengz raeuz decimal value, daengz raeuz ndei
parsing raeuz calculations.

> **以下为 TypeScript 用法：**
>
> Yongh `areDecimals` dwg youq gwnz raeuz gyoengq mbouj boolean rox `unknown[]` mbouj rox empty raeuz gyoengq mbouj rox
> ndawq ndawq aen daengz raeuz decimal representation.

### 优点

- Mboq rox ndawq ndawq: gyoengq mbouj ndaej rox ndawq ndawq aen daengz raeuz mbouj, daengz raeuz mbouj ndaej raemx rox
  ndawq ndawq aen daengz raeuz mbouj (empty lists).
- Gyoengq mbouj raeuz gyoengq mbouj daengz raeuz `isDecimal`, so gyoengq mbouj raeuz gyoengq mbouj (mixed) raeuz mbouj
  daengz raeuz (invalid) caeuq daengz raeuz gwnz `false`.
- Cungj youq mbouj raeuz gyoengq mbouj: cungj youq mbouj raeuz boolean (`true`/`false`) daengz raeuz ndaej yongh haenq (
  guards) raeuz gwnz raeuz (early-return) gyoengq mbouj raeuz gyoengq mbouj.

## 用法

### 语法

函数：

- `areDecimals(array)`

参数：

- `array`: Ndawq ndawq (array) daengz raeuz gyoengq mbouj.

### 本地函数导入

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // 真
console.log(areDecimals(b)); // 假
console.log(areDecimals(c)); // 假
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areDecimals(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>此文件于 31 January 2026 at 15:59:59 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>