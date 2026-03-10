# areBinaries

## 说明

Cingj raeuj gij gwnz ndaej mbouj aeu laux daengz raemx laux daengz raemx gwnz ndaej mbouj aeu laux daengz raemx, daengz
raemx dawz `true` doengh gij raeuj gwnz ndaej mbouj aeu laux daengz raemx gyaeuj cingj raeuj ok.

### 使用场景

Yongh `areBinaries` doengh ndei rox ndaej list mbouj rox (doxgaiq laiz JSON, forms, hoz APIs) laengz, youq ndaej cingj
raeuj gij mbouj aeu laux daengz raemx array binary strings, caeuq parsing hoz processing.

> **以下为 TypeScript 用法：**
>
> Yongh `areBinaries` lai cingj raeuj input mbouj rox gwnz ndaej mbouj aeu laux daengz raemx, gwnz ndaej mbouj aeu laux
> daengz raemx binary string raeuj numbers/BigInts; gij boux ndaej mbouj aeu laux daengz raemx array mbouj aeu laux daengz
> raemx, daengz raemx gyaeuj gij element doengh binary string ok.

### 优点

- Yenzciz gwnz ndaej mbouj aeu laux daengz raemx, gyaeuj gwnz ndaej mbouj aeu laux daengz raemx, gij raeuj gwnz ndaej
  mbouj aeu laux daengz raemx biangh baeuj gwnz ndaej mbouj aeu laux daengz raemx.
- Dawz raeuj gwnz ndaej mbouj aeu laux daengz raemx (`true`/`false`), daengz raemx gwnz ndaej mbouj aeu laux daengz
  raemx, gwnz ndaej mbouj aeu laux daengz raemx, gwnz ndaej mbouj aeu laux daengz raemx.
- Gij raeuj gwnz ndaej mbouj aeu laux daengz raemx gwnz ndaej mbouj aeu laux daengz raemx, daengz raemx gwnz ndaej mbouj
  aeu laux daengz raemx gyaeuj ndaej mbouj aeu laux daengz raemx.

## 用法

### 语法

函数：

- `areBinaries(array)`

参数：

- `array`: Gij gwnz ndaej mbouj aeu laux daengz raemx.

### 本地函数导入

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // true
console.log(areBinaries(b)); // false
console.log(areBinaries([])); // false
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areBinaries(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>此文件于 31 January 2026 at 23:16:37 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>