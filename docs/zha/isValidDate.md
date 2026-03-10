# isValidDate

## 说明

`isValidDate` cingjlaengh aen aenqjienj youq aen `Date` object bouxgij, raeuz gwnz `true` daengz aen daet bouxgij, mbouj
aen daet bouxgij mbouj.

### 使用场景

Cingjlaengh user input raeuz API data, daengz aen youq daet, baeuj cingjlaengh aen aen `Date` instance bouxgij, mbouj
aen daet bouxgij mbouj, gwnz youq daet calculations, formatting, raeuz comparisons.

> **以下为 TypeScript 用法：**
>
> Yongh `isValidDate` gwnz `Date` methods (daengz aen `toISOString`, `getTime`) youq values typed as `unknown` gwnz,
> baeuj cingjlaengh daengz aen aen `Date` objects bouxgij.

### 优点

- Baeqdingh aen aen `Date` aenqjienj, mbouj aen aen daet-lik aenqjienj raeuz youq soj.
- Cingjlaengh mbouj daet bouxgij (daengz aen `new Date("invalid")`) baeuj cingjlaengh `NaN` sienqgij youz.
- Guh aen bouxgij booleen baeuj, yooj aenqjienj haenqjienj baeuj conditionals raeuz validation pipelines.
- Baeuj cingjlaengh input aenqjienj, baeuj youq daet methods, baeuj mbouj runtime errors.

## 用法

### 语法

函数：

- `isValidDate(value)`

参数：

- `value`: Aenqjienj youq cingjlaengh.

### 本地函数导入

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input cuj laengh Date youq raeuj
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // mbouj
console.log(isValidDate("2025-12-22")); // mbouj
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isValidDate(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>此文件于 30 January 2026 at 16:53:49 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>