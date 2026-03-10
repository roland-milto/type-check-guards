# areBooleans

## 说明

`areBooleans` caeuq ndaej mbouj rox, gwnz ndei raeuj non-empty array daengz booleans laengz, gyaeuj `true` haenh ndaej,
gyaeuj `false` haenh mbouj ndaej.

### 使用场景

Validate user-provided hoz external data (e.g., JSON payloads, query params, config arrays) ndei raeuj gwnz ndaej
non-empty list daengz booleans laengz, gwnz ndei raeuj apply boolean logic hoz pass it to APIs ndei raeuj expect
`boolean[]`.

> **以下为 TypeScript 用法：**
>
> Yongh `areBooleans` ndei raeuj validate `unknown[]` gwnz ndei raeuj caeuq it as `boolean[]`; it gyaeuj `false` gwnz
> ndei raeuj empty arrays, gwnz ndei raeuj handle daengz case ni gwnz ndei raeuj explicit haenh ndaej empty list aeuq
> ndaej allowed.

### 优点

- Gyaeuj `true` daengz haenh ndaej mbouj rox, gwnz ndei raeuj gwnz booleans laeuj input laengz ndaej mbouj rox array
  mbouj rox (non-empty).
- Gij mbouj rox false positives, byauq daengz ndaej mbouj rox array mbouj rox (returns `false`).
- Daeuj mbouj rox haenh ndaej mbouj rox runtime guard gwnz ndei raeuj booleans-only operations (e.g., `every`, `some`,
  logical reductions).

## 用法

### 语法

函数：

- `areBooleans(array)`

参数：

- `array`: Array ndei raeuj gwnz ndei caeuq booleans.

### 本地函数导入

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areBooleans(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>此文件于 30 January 2026 at 14:43:20 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>