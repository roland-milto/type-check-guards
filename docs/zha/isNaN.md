# isNaN

## 说明

Cingjdingh gwnz `value` cungj aen `NaN` de type `number` mbouj gyaeuj strings raeuz.

### 使用场景

Cingjraemx input mbouj daengz rox loosely typed (ndawj rox API payloads, form values, parsed JSON) dwg gyaeuj cingjdingh
laux gwnz suijbingz `NaN` lae gyaeuj haenh raeuz aen, lae gyaeuj non-number inputs raeuz mbouj aen `NaN`.

> **以下为 TypeScript 用法：**
>
> Yongh `isNaN` dwg youq gyaeuj cingjdingh laux gwnz suijbingz numeric `NaN` lae cingjdingh input aen `number` (mbouj
> youq string-to-number conversion).

### 优点

- Gaeuq laux gwnz `NaN` mbouj gyaeuj non-number (ndawj rox strings) raeuz numbers.
- Raeuz `true` gwnz laux gwnz mbouj gyaeuj values daengz aen de type `number` lae `NaN`.
- Anzdaej raemx `unknown` inputs lae mbouj gyaeuj false positives caeuq implicit conversions.

## 用法

### 语法

函数：

- `isNaN(value)`

参数：

- `value`: Laux gwnz raeuz gyaeuj gwnz aen `NaN` de type `number`.

### 本地函数导入

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // true
console.log(isNaN(b)); // false
console.log(isNaN(c)); // false

if (isNaN(a)) {
  // a liuz sih raeuj laux, caeuq daengz laux NaN
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isNaN(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isNaN](../_analysis/isNaN.md)

<br>

---

<small>此文件于 30 January 2026 at 15:48:55 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>