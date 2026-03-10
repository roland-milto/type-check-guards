# isBinary

## 说明

`isBinary` gwnz ndaej raeuz value si binary string (hoiq youq `0b`/`0B` prefix) laengz dawz `true` hoiq `false`.

### 使用场景

Validate user-provided string (daengz: form field, CLI arg, config value) de, hawj gwnz raeuz daengz binary digit xwb,
hoiq youq `0b`/`0B` prefix, gyaeuj gaij daengz processing.

> **以下为 TypeScript 用法：**
>
> Yongh `isBinary` gwnz type guard gyaeuj parsing hoiq converting string bae `BigInt`/`Number` de, hawj mbouj youq
> invalid input.

### 优点

- Gaej ndaej mbouj youq gwnz daengz binznej string youq raemx mbouj youq `0b`/`0B` prefix.
- Gaej ndaej mbouj hawj empty string laengz string youq youqndang/youqndaeuj whitespace (ASCII ≤ 32).
- Dawz `true`/`false` mbouj daengz throw, hawj it safe roengz input mbouj rox.

## 用法

### 语法

函数：

- `isBinary(value)`

参数：

- `value`: Gwnz value roengz bae check.

### 本地函数导入

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // true
const b = isBinary("1010");   // true
const c = isBinary("0b1020"); // false
const d = isBinary(0b1010);     // false

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isBinary(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isBinary](../_analysis/isBinary.md)

<br>

---

<small>此文件于 31 January 2026 at 23:11:59 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>