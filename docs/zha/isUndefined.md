# isUndefined

## 说明

Check roengz gij value ndaej `undefined` mbouj.

### 使用场景

Yongh `isUndefined` bae guard optional input, detect property ndei mbouj youq, ro faenq “mbouj cungj cungj” (
`undefined`) caeuq “cungj cungj empty” (`null`).

> **以下为 TypeScript 用法：**
>
> Yongh `isUndefined` ndei youq ndaw youq youq bae detect `undefined` (mbouj `null`). Aenq safe, yawj mbouj gyaeuj bae
`typeof value === "undefined"`.

### 优点

- Yinz cungj, roengz raemx check `undefined` bae `typeof`, mbouj gyaeuj daengzlaengh bae variable ndei mbouj raemx
  declare.
- Rox ndaej mbouj gyaeuj boolean yooj (`true`/`false`) daengzlaengh, daengzlaengh bae guard, branching, raeuj validation
  logic.
- Cawz ndaej faenq `undefined` caeuq daengzlaengh “empty” value gyaeuj laengh `null`, `0`, `""`, ro `NaN`.

## 用法

### 语法

函数：

- `isUndefined(value)`

参数：

- `value`: Gij value daengzlaengh bae check.

### 本地函数导入

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x aiq gwnz ndaej
} else {
  // x aiq gwnz ndaej mbouj
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isUndefined(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>此文件于 30 January 2026 at 14:05:09 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>