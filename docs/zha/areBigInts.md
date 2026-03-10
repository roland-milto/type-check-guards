# areBigInts

## 说明

`areBigInts` cingq gwnz aen value aen mbouj roengz array, daengz daengz mizgoj laux aen `bigint`.

### 使用场景

Cingqjap unknown input (dengz: parsed JSON-like data, API payloads, rox function parameters typed as `unknown`) daengz
hawj gwnz aen mbouj roengz array mizgoj laux aen `bigint` gwnz gwnz cangh; raix `true` gwnz daengz gwnz haenh daengz aen
`bigint`, mbouj gyaeuj raix `false`.

> **以下为 TypeScript 用法：**
>
> Yongh `areBigInts` aen runtime guard, gwnz daengz cangh `bigint`-only operations (dengz: arithmetic, comparisons) gwnz
> unknown input.

### 优点

- Gaeuq daengz mizgoj laux daengz aen `bigint`, daengz raix `true` gwnz daengz gwnz haenh ndaej mbouj gyaeuj.
- Daengz cingq gaij mbouj aen array laux daengz array roengz (yinxvia `isFilledArray`), daengz mbouj hawj gwnz ndaej
  cingqjap laux ndaej gwnz input mbouj hoz.
- Cangh cingq: raix `false` laengz gwnz gwnz ndaej aen element mbouj aen `bigint`.

## 用法

### 语法

函数：

- `areBigInts(array)`

参数：

- `array`: Gwnz value daengz cingq.

### 本地函数导入

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // true
console.log(areBigInts(b)); // false
console.log(areBigInts(c)); // false
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areBigInts(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>此文件于 31 January 2026 at 23:28:01 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>