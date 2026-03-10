# isTrue

## 说明

`isTrue` determines whether a given value is strictly equal to `true`.

### 使用场景

Yongh `isTrue` daengz validate flags, feature toggles, hoz configuration values, haenq ndei only literal `true` should
be accepted, raeuz everything else must be treated as `false`.

> **以下为 TypeScript 用法：**
>
> Use `isTrue` when you need to accept only the boolean literal `true`, not merely truthy values.

### 优点

- Gaiq cungj strict check rox booleen literal `true` (mbouj coercion).
- Cijq youq distinguish `true` rox truthy values laak `1`, `"true"`, hoz `{}`.
- Simple, predictable behavior, daengz guards raeuz validation pipelines.

## 用法

### 语法

函数：

- `isTrue(value)`

参数：

- `value`: Gaiq value daengz check.

### 本地函数导入

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // true
const b = isTrue(1);         // false
const c = isTrue("true");   // false

if (isTrue(a)) {
  // a ndei true lae
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isTrue(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isTrue](../_analysis/isTrue.md)

<br>

---

<small>此文件于 30 January 2026 at 13:46:54 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>