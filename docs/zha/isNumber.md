# isNumber

## 说明

`isNumber` cek ndaej vaenz mbouj ndaej, gijyauz sojmiz laengz sojmiz finite, mbouj rox `NaN`.

### 使用场景

Validate sojmiz input roengz source mbouj tin (forms, query params, JSON payloads) caeuq youq calculations, storage,
vaenz range checks, baeuzcawz caeuq sojmiz finite cingj rox (`true`) daengz gwnz gwnz mbouj rox `false`.

> **以下为 TypeScript 用法：**
>
> Yongh `isNumber` lai validate `unknown` sojmiz caeuq youq arithmetic; deih rox `NaN`, `Infinity`, daengz `-Infinity`.

### 优点

- Gaej `true` caeuq laengz rox JavaScript sojmiz (leixcingh raeuj mbouj, daengz `NaN` caeuq infinity mbouj rox).
- Gijyauz daengz gwnz gwnz validation bug, `NaN`, `Infinity`, vaenz `-Infinity` mbouj gwnz gwnz rox sojmiz.
- Rox ndaej hoz laengz runtime guard doengh input mbouj rox (daengz JSON, user input, external APIs).
- Gaj, vaq, daengz mbouj miz side-effect.

## 用法

### 语法

函数：

- `isNumber(value)`

参数：

- `value`: Gijyauz sojmiz ndei cek.

### 本地函数导入

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input ʔa̱ a̱ʔa̱ ʔa̱ʔa̱ ʔa̱ʔa̱ ʔa̱ʔa̱ ʔa̱ʔa̱ ʔa̱ʔa̱
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isNumber(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isNumber](../_analysis/isNumber.md)

<br>

---

<small>此文件于 30 January 2026 at 13:12:03 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>