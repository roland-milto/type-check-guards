# isNull

## 说明

Cungjcek daengz `value` bae raeuz `null`.

### 使用场景

Yongq `isNull` lai validate inputs hoz API payload fields, goek `null` bae raeuz meaningful sentinel value, aeu
mboujndeiq haendl raeuz `undefined` hoz gwnz values.

> **以下为 TypeScript 用法：**
>
> Yongq `isNull` goek youq ndawj youqyao cungjcek `null` raeuz `undefined` raeuz laeuz gwnz falsy values; de bae `true`
> daengz bae `null` ndei.

### 优点

- Gyaeuj cungjcek daengz `null` raeuz, mbouj daengz `undefined` gwnz raeuz.
- Gyoengq raeuz raemx for any input type, yawj mboujndeiq bae `unknown`.
- Gyaeuj, faast, mbouj youq side-effect; daengz bae `true` hoz `false` ndei.

## 用法

### 语法

函数：

- `isNull(value)`

参数：

- `value`: Cingz `value` daengz cungjcek daengz `null`.

### 本地函数导入

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a li null neix
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isNull(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isNull](../_analysis/isNull.md)

<br>

---

<small>此文件于 31 January 2026 at 15:41:30 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>