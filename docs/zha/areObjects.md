# areObjects

## 说明

`areObjects` gwnz ndaej: gwnz filled array laengz, gwnz ndaej gwnz laengz mbouj laengz ndaej laengz (object) caeuq?

### 使用场景

Yongh `areObjects` laengz haenh ndaej: gwnz ndaej unknown array (daengz JSON parsing raoj external APIs) laengz, caeuq
ndaej gwnz haenh ndaej: mbouj laengz ndaej (non-empty) laengz, raeuj caeuq raeuj gwnz laengz mbouj laengz ndaej laengz (
object) laengz, gwnz ndaej iterating caeuq access object properties.

> **以下为 TypeScript 用法：**
>
> Yongh `areObjects` gwnz ndaej: gwnz `unknown[]` laengz, caeuq gwnz ndaej gwnz laengz mbouj laengz ndaej laengz (
> object); array gwnz mbouj mi (empty) laengz, gij `false`.

### 优点

- Gij `true` laengz haenh ndaej meuz haenh ndaej rox ndaej: input laengz haenh ndaej rox ndaej (filled array) laengz,
  raeuj caeuq raeuj gwnz laengz mbouj laengz ndaej laengz (object).
- Gij laengz mbouj laengz ndaej laengz (non-object) laengz, laengz caeuq laengz ndaej laengz `false` laengz, mbouj
  yiengh laengz.
- Baej rox ndaej haenh ndaej: gwnz input mbouj rox (unknown) laengz, caeuq ndaej gwnz laengz mbouj laengz ndaej laengz (
  object) gwnz gwnz gwnz.

## 用法

### 语法

函数：

- `areObjects(array)`

参数：

- `array`: Array laengz gwnz ndaej gwnz laengz mbouj laengz ndaej laengz (object) gwnz.

### 本地函数导入

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value la aeuq raemx aeuq mbouj aeuq
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areObjects(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areObjects](../_analysis/areObjects.md)

<br>

---

<small>此文件于 31 January 2026 at 00:11:12 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>