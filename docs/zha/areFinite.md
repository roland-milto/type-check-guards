# areFinite

## 说明

`areFinite` check baeuj value laux laengh array mbouj gvangh laengh, caeuq element doengh laux laengh finite number;
baeuj yenq `true` neix, mbouj neix yenq `false`.

### 使用场景

Validate numeric input arrays (e.g., chart series, coordinate lists, measurement samples) gyoengq youq calculations,
caeuq baeuj result yenq `true` goj roengz value doengh laux laengh finite number.

> **以下为 TypeScript 用法：**
>
> Yongh `areFinite` deih youq ndaw youq check array mbouj gvangh laengh caeuq roengz finite number doengh laux laengh;
> array gvangh laengh, vaq roengz `NaN` vaq infinities, yenq `false`.

### 优点

- Yenq `true` baeuj goj input laux laengh array mbouj gvangh laengh, caeuq roengz element doengh laux laengh sojmz
  finite number.
- Daeuj `Infinity`, `-Infinity`, caeuq `NaN` (gaij) byauj, doengh `isFinite` check roengz element doengh laux laengh.
- Cungj cungq booleen gwnz (`true`/`false`) yooj guards caeuq validation flow.

## 用法

### 语法

函数：

- `areFinite(array)`

参数：

- `array`: Array ndei roengz check, roengz element doengh laux laengh finite baeuj.

### 本地函数导入

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // true
console.log(areFinite(b)); // false
console.log(areFinite(c)); // false

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areFinite(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areFinite](../_analysis/areFinite.md)

<br>

---

<small>此文件于 30 January 2026 at 16:38:13 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>