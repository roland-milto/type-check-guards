# areOneOfType

## 说明

`areOneOfType` cingj check ndaej baeuj mbouj gwnz ndaej array laengz, rox baeuj gwnz ndaej runtime type ndaej baeuj
cingj specify.

### 使用场景

Validate incoming data (ciz: parsed JSON) baeuj field aenq mbouj gwnz ndaej array laengz, ndaej item rox gwnz ndaej set
ndaej primitive type; `false` daengz dwg baeuj array aenq mbouj gwnz ndaej hoz rox ndaej item gwnz ndaej type mbouj
allow.

> **以下为 TypeScript 用法：**
>
> Ndiuz function neix daengz boolean, mbouj ndaej narrow ndaej array element type laengz compile time; baeuj it gwnz
> ndaej runtime validation step, cingj daengz doengh processing daengz.

### 优点

- Baeqvwnz mbouj ndaej rox raeuj gwnz ndaej mbouj ndaej gwnz ndaej gij ndaej gwnz ndaej runtime type, daengz `true`
  cingj dwg baeuj mbouj gwnz ndaej rox.
- Cingj cangh ndaej mbouj gwnz ndaej input: `false` daengz dwg baeuj `array` hoz `types` aenq mbouj gwnz ndaej, hoz
  mbouj aenq array rox, hoz mbouj aenq array gwnz ndaej.
- Gwnz ndaej mixed-type collection (ciz: number raeuj string) gwnz ndaej, baeuj cingj call `areOneOfType`.

## 用法

### 语法

函数：

- `areOneOfType(array, types)`

参数：

- `array`: Mboq array ndaej element, baeuj cingj verify doengh types cungj baeuj.
- `types`: Mboq array ndaej string, daengz data type ndaej baeuj cingj check doengh.

### 本地函数导入

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areOneOfType(array, types)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>此文件于 31 January 2026 at 23:39:22 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>