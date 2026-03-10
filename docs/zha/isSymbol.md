# isSymbol

## 说明

`isSymbol` raeuj gwnz ndei gwnz value aen type `symbol` rox, symbol de return `true`, mbouj aen de return `false`.

### 使用场景

Raeuj gwnz `unknown` value aen `symbol` rox mbouj, ndei youq gwnz aen unique identifier, registry key, rox mbouj
computed property key ndei objects daengzq maps.

> **以下为 TypeScript 用法：**
>
> Yongh `isSymbol` raeuj gwnz `unknown` ndei narrow daengzq `symbol` rox, ndei call symbol-gyangh function rox mbouj
> ndei raeuj gwnz computed property key.

### 优点

- Tig cungj youq gwnz laux, hozqcaiz raeuj gwnz JavaScript `symbol` primitive type.
- Bouxcoz youq gwnz `unknown` gyoengq ndei rox, daengzq youq symbol-gyangh API rox mbouj gwnz daengzq raeuj gwnz key.
- Yongh `typeof` (gwnz laux canonical fangfap raeuj gwnz `symbol`) daengzq, mbouj daengzq raeuj false positive.

## 用法

### 语法

函数：

- `isSymbol(value)`

参数：

- `value`: Gwnz youq gwnz ndei raeuj gwnz.

### 本地函数导入

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input cuj laux ndawz mbouj
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isSymbol(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>此文件于 30 January 2026 at 14:29:31 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>