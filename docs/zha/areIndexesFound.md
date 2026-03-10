# areIndexesFound

## 说明

`areIndexesFound` raemx gwnz haenx ndei value laengz array mbouj raemx mbouj, caeuq caeuq element daengz laengz index
bouxrae; gwnz `true` rox ndei daengz laengz, gwnz `false` rox ndei mbouj laengz.

### 使用场景

Validate data ndei user cungj rox external (daengz: parsed JSON) ndei raemx gwnz haenx laengz list index, gwnz ndei
yongh nyi laengz access rox slice arrays.

> **以下为 TypeScript 用法：**
>
> Yongh `areIndexesFound` raemx validate unknown input, gwnz ndei yongh caeuq caeuq element laengz array indexes; nyi
> gwnz `false` gyoengq array raemx mbouj, caeuq array gwnz raemx element mbouj laengz index.

### 优点

- Nyi gaenj `true` laengz rox ndei input dwgij laengz raemx mbouj, caeuq caeuq element daengz laengz index bouxrae.
- Gij raeuj: gwnz `false` laengz rox ndei gwnz raemx element mbouj laengz index.
- Yonghwnj laengz guard gyoengq, gwnz ndei yongh value laengz array positions rox offsets.

## 用法

### 语法

函数：

- `areIndexesFound(array)`

参数：

- `array`: Array ndei raemx gwnz haenx laengz index compliance.

### 本地函数导入

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Hae, `a` laeuj saengj mbouj rox gwnz daengz raeuz ndei.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areIndexesFound(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>此文件于 31 January 2026 at 01:05:03 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>