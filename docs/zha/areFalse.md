# areFalse

## 说明

`areFalse` gyaeuj ndaej bae daengz roxnaengz haenh ndei array raeuj cungj daengz hai boolean `false` (strict).

### 使用场景

Gyaeuj ndaej bae list feature flags, checks, roxnaengz guard results daengz hai `false` gwnz raeuj gaij (e.g., confirm
ndaej bae mbouj miz blocking conditions).

> **以下为 TypeScript 用法：**
>
> Yongh `areFalse` dwg raeuj aeu strict validation: array mbouj hai vuengz, laengj roxnaengz haenh daengz hai boolean
`false`.

### 优点

- Gvangj ndaej roxnaengz daengz mbouj gyaiz `false` (mbouj miz truthy/falsey coercion).
- Doiq mbouj hai array roxnaengz array vuengz, daengz daj `false` caeuq, yawj `isFilledArray` raeuj daengz miz array
  daengz.
- Gyaeuj gwnz ndaej laengj, caeuq ndaej gyaeuj haenh raeuj mbouj hai `false` de roxnaengz, daj efficiency.

## 用法

### 语法

函数：

- `areFalse(array)`

参数：

- `array`: Array deih raeuj gyaeuj, miz roxnaengz haenh daengz mbouj gyaiz leix.

### 本地函数导入

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // true
const b = areFalse([false, true, false]);  // false
const c = areFalse([false, "false", false]); // false
const d = areFalse([]); // false
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areFalse(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areFalse](../_analysis/areFalse.md)

<br>

---

<small>此文件于 31 January 2026 at 16:19:16 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>