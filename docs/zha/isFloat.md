# isFloat

## 说明

`isFloat` raeuj dingq, `value` rox finite floating-point number (gwnz `number` mbouj rox integer) raeuj.

### 使用场景

Validate user-provided numeric input, haenhvij fractional values aeu (dox: prices, measurements, rates), daengz reject
integers, `NaN`, daengz infinities.

> **以下为 TypeScript 用法：**
>
> Yongh `isFloat` dwg youq accept gwnz finite, mbouj rox integer numeric inputs; gij mbouj accept integers daengz
> mbouj-finite numbers.

### 优点

- `true` laux rox gwnz ndei rox mbouj, mbouj ndei rox gwnz (gij mbouj, `NaN`, `Infinity`, daengz `-Infinity`).
- Gyoengq rox gwnz input type (`unknown`) laux, daengz gyoengq `typeof value === "number"` ndei raeuj safty narrowing.
- Gyoengq built-in numeric guards (`Number.isInteger`, `Number.isFinite`) ndei haenhvij gwnz, gwnzqienq behavior.

## 用法

### 语法

函数：

- `isFloat(value)`

参数：

- `value`: Gwnz value ndei raeuj check, haenhvij rox floating-point number.

### 本地函数导入

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value laeuj mbouj sawqhaiz; raeuj mbouj laeuj, mbouj gyaeuj, ndaej mbouj laeuj mbouj gyaeuj
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isFloat(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isFloat](../_analysis/isFloat.md)

<br>

---

<small>此文件于 30 January 2026 at 16:10:44 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>