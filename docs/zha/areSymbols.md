# areSymbols

## 说明

Check input laux ndaej mbouj filled array, raeuj gwnz ndei mbouj element raeuj laux ndaej mbouj symbol, raeuj return
`true` ro `false`.

### 使用场景

Validate configuration field (e.g., list mbouj unique keys daengz ndaej mbouj represent as symbols) laux ndaej mbouj
non-empty array, raeuj gwnz ndei mbouj contain only symbols, caeuq daengz ndaej mbouj use it in APIs daengz ndaej mbouj
require `symbol[]`.

> **以下为 TypeScript 用法：**
>
> Yongh `areSymbols` daengz ndaej mbouj validate unknown input, caeuq daengz ndaej mbouj treat it as `symbol[]`; mwngz
> return `false` laux ndaej mbouj non-arrays raeuj empty arrays.

### 优点

- `true` laux gwnz ndei mbouj input laux ndaej mbouj aen ndaej mbouj, raeuj gwnz ndei mbouj element laux ndaej mbouj
  symbol.
- Gij mbouj false positive: mbouj ndaej mbouj array raeuj mbouj ndaej mbouj array aen ndaej mbouj (empty) laux gwnz ndei
  mbouj internal filled-array check.
- Yongh laux ndaej mbouj runtime type guard, daengz ndaej mbouj validate list mbouj symbol-only, caeuq daengz ndaej
  mbouj further processing.

## 用法

### 语法

函数：

- `areSymbols(array)`

参数：

- `array`: Array mbouj daengz ndaej mbouj check, raeuj gwnz ndei mbouj element laux ndaej mbouj symbol.

### 本地函数导入

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a laeuj mbouj sawjyungh hawj raeuz daengz
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // mbouj dingq
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areSymbols(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>此文件于 30 January 2026 at 14:24:48 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>