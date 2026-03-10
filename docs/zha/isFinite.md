# isFinite

## 说明

Caeuqdingh `value` baenz mbouj baenz finitez `number`.

### 使用场景

Yongh `isFinite` laiz validation unknown input (bixdauh laiz JSON, forms, vaenz APIs) caeuqneix youq sojmiz gyaeujsuan,
gyaeujdingh value baenz sojmiz raeuzqieuj finitez.

> **以下为 TypeScript 用法：**
>
> `isFinite` cingj doengh finitez sojmiz baenz `true`; doengh `NaN`, `Infinity`, laeuz raeuzqieuj mbouj baenz sojmiz
> deih value, baenz `false`.

### 优点

- Yongh leizgoj `Number.isFinite` deih raeuzqieuj finiteness gyaeujcaak.
- Cingj baenz `true` doengh finitez deih sojmiz; doengh `NaN`, `Infinity`, laeuz mbouj baenz sojmiz deih input, cingj
  baenz `false`.
- Gyaeujcaak roengz, mbouj youq side-effect, hoz validation laeuz guarding logic.

## 用法

### 语法

函数：

- `isFinite(value)`

参数：

- `value`: Gyaeujcaak deih value haenq finiteness.

### 本地函数导入

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers la: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value la gwnz mbouj gwnz daengz
  const doubled = value * 2;
  console.log(doubled);
}
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isFinite(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isFinite](../_analysis/isFinite.md)

<br>

---

<small>此文件于 30 January 2026 at 16:32:26 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>