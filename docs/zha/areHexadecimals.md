# areHexadecimals

## 说明

Cek ndaej boux element doengh array laux laengz haenh hex string, laengz daengz `true` gwnz daengz array mbouj roengz
laengz boux item doengh.

### 使用场景

Yongh `areHexadecimals` bae validate user input hoz external data (e.g., IDs, checksums, color codes mbouj mi
leading '#') gwnz youq hexadecimal parsing hoz further processing.

> **以下为 TypeScript 用法：**
>
> Yongh `areHexadecimals` bae validate unknown input gwnz parsing hoz converting values (daengz haenh, gwnz
`parseInt(value, 16)` hoz BigInt conversions).

### 优点

- Gijyenz raeuj mbouj ndaej bae every element laux laengz haenh hex string, laengz daengz `true` gwnz daengz boux item
  doengh.
- Gijyenz raeuj mbouj ndaej bae array roengz, daengz `false` daengz boux input data mbouj mi.
- Cungj youq boux boolean result yooj (`true`/`false`) daengz boux guards raeuj early-return validation.

## 用法

### 语法

函数：

- `areHexadecimals(array)`

参数：

- `array`: Array raeuj bae cek daengz haenh hex string elements.

### 本地函数导入

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areHexadecimals(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>此文件于 31 January 2026 at 23:08:41 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>