# areFloats

## 说明

`areFloats` gwnz ndaej array mbouj roengz lae gyoengq ndei mbouj dwg float.

### 使用场景

Yongq `areFloats` youq ndaej `unknown[]` (daengz youq JSON, query parameters, roengz external APIs) raeuj gwnz ndaej:
aen ndaej dwg array mbouj roengz, raeuj gyoengq ndei mbouj dwg float, caeuq youq ndaej numeric logic daengz averaging,
interpolation, roengz statistical calculations.

> **以下为 TypeScript 用法：**
>
> `areFloats` yongq laiz gwnz `unknown[]` caeuq youq gwnz ndaej `number[]` (gyoengq ndei dwg float); array mbouj roengz
> lae gwnz ndaej gyoengq ndei mbouj dwg float, laiz gwnz `false`.

### 优点

- `true` laiz gwnz ndaej input mbouj dwg array daengz mbouj roengz, raeuj gyoengq ndei mbouj dwg float.
- Raeuj gwnz: gwnz ndaej gyoengq ndei mbouj dwg float, laiz gwnz `false` ngay.
- Bouxcoz youq youq input mbouj roengz gwnz ndaej, caeuq youq float gwnz ndaej gijsaeuj suanfa.

## 用法

### 语法

函数：

- `areFloats(array)`

参数：

- `array`: Array ndei raeuj gwnz ndaej gyoengq ndei dwg float.

### 本地函数导入

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // ꯇ꯭ꯔꯨ
console.log(areFloats(b)); // ꯐꯥꯜꯁ
console.log(areFloats(c)); // ꯐꯥꯜꯁ

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // ꯅꯨꯜꯂ

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areFloats(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areFloats](../_analysis/areFloats.md)

<br>

---

<small>此文件于 30 January 2026 at 16:05:44 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>