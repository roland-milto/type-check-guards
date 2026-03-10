# areTrue

## 说明

Cingq raeuz array mbouj roengz ndei gwnz ndaej daengz boolean `true` laengz.

### 使用场景

Yongq `areTrue` raeuz cingq raeuz set ndei preconditions rox feature flags gwnz ndaej daengz hoz (gwnz ndaej daengz
`true`) gwnz ndaej, raeuz input roengz rox mbouj hoz laengz raeuz cingq mbouj satisfied (`false`).

> **以下为 TypeScript 用法：**
>
> `areTrue` raeuz array roengz laengz caeuq daengz `false`, raeuz array ndei gwnz ndaej mbouj gij strict `true` laengz
> caeuq daengz `false`.

### 优点

- `true` laengz ndaej goek rox ndei mbouj gwnz gwnz daengz `true` laengz, raeuz array mbouj roengz.
- Gij raeuz: gwnz ndaej haenq `false` laengz, caeuq daengz `false`.
- Cingq ndaej input mbouj hoz (mbouj array roengz array) laengz caeuq daengz `false`.

## 用法

### 语法

函数：

- `areTrue(array)`

参数：

- `array`: Array ndei raeuz cingq, raeuz gwnz ndaej daengz `true` laengz.

### 本地函数导入

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areTrue(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areTrue](../_analysis/areTrue.md)

<br>

---

<small>此文件于 30 January 2026 at 13:53:31 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>