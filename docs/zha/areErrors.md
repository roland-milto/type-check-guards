# areErrors

## 说明

Ciqv gwnz array roengz mbouj roengz laux ndaej gwnz caeuq ndaej `Error` objects, youq haej raeuz gwnz return `true`
roengz `false`.

### 使用场景

Ciqv gwnz validate daengz ndeiuz runtime-provided `unknown[]` (e.g., aggregated failures, validation results, or
deserialized data) caeuq ndaej roengz mbouj roengz laux `Error` objects, caeuq haej raeuz gwnz iterating, logging,
roengz rethrowing.

> **以下为 TypeScript 用法：**
>
> `areErrors` returns `true` only for a filled array where every item is an `Error`; it returns `false` for an empty
> array or if any element is not an `Error`.

### 优点

- Mboq rox ndeiuz gwnz ndei `Error` instance, youq haej raeuz gwnz saenq raeuz gwnz caeuq haej raeuz gwnz doenghloengh
  raeuz gwnz caeuq.
- Ciqv daengz ndaej array roengz, youq haej raeuz gwnz mbouj gwnz “no errors” raeuz gwnz caeuq haej raeuz gwnz gyaeuj
  raeuz gwnz laux error list.
- Caeuq gwnz ndaej raeuz gwnz runtime guard, daengz ndeiuz gwnz `unknown[]` inputs (e.g., from APIs or `catch` blocks).

## 用法

### 语法

函数：

- `areErrors(array)`

参数：

- `array`: Array ndeiuz gwnz caeuq haej raeuz gwnz check daengz ndeiuz `Error` objects.

### 本地函数导入

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value cuj laengz mbouj roengz Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.areErrors(array)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [areErrors](../_analysis/areErrors.md)

<br>

---

<small>此文件于 6 February 2026 at 12:41:29 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>