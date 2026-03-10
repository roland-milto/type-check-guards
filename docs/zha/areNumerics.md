# areNumerics

## 说明

`areNumerics` gwnz raeuj baeuj value laengh ndaej mbouj gwnz array laengh, laengh gwnz raeuj ndaej numeric.

### 使用场景

Yongh `areNumerics` gwnz raeuj validate external rox mbouj typed data (e.g., JSON payloads, query parameters, form
input) gwnz youz ndawj gwnz calculate sums, averages, rox gwnz raeuj numeric operations, gwnz youz ndawj gwnz input
laengh ndaej mbouj gwnz non-empty numeric array, laengh gwnz raeuj baeuj `false` gwnz mbouj ndaej.

> **以下为 TypeScript 用法：**
>
> Yongh `areNumerics` gwnz raeuj guard `unknown` input, gwnz youz ndawj gwnz numeric array; raeuj baeuj `false` gwnz
> non-arrays laengh empty arrays.

### 优点

- Gyaengq `true` dwg baeuj mbouj ndaej: input laengh ndaej mbouj gwnz array laengh, laengh gwnz raeuj ndaej ndaej
  numeric.
- Raeuj gwnz: gyaengq ndawj gwnz raeuj baeuj mbouj ndaej numeric, dwg baeuj gyaengq `false`.
- Bouxcoq youq youz input mbouj rox (unknown) gwnz ndei, gwnz youz ndawj gwnz numeric operations.

## 用法

### 语法

函数：

- `areNumerics(array)`

参数：

- `array`: Array ndei gwnz raeuj ndaej numeric elements.

### 本地函数导入

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // true
console.log(areNumerics(b)); // true
console.log(areNumerics(c)); // false
console.log(areNumerics(d)); // false
console.log(areNumerics(e)); // false

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areNumerics(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>此文件于 6 February 2026 at 16:08:30 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>