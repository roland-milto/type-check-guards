# isOfType

## 说明

Cingqdingh gwnz `value` daengz gwnz maek gwnz type string, yongh `typeof` laux gwnz primitive, caeuq yongh fallback hoz
type fuzap.

### 使用场景

Yongh laux gwnz validate caeuq narrow `unknown` input (dengz: API response, user input, parsed JSON), gwnz value daengz
gwnz expected type string laux gwnz, ndei gwnz type-specific operation.

> **以下为 TypeScript 用法：**
>
> Yongh `isOfType` hoz `unknown` value gwnz runtime type laux gwnz branching; rox ndaej `true`/`false` caeuq daengz
`null` caeuq `undefined` cingqcoz laux gwnz.

### 优点

- Yongh `typeof` laux gwnz daengz primitive, daengz gyoengq laeuz raeuj.
- Cingqcoz daengz `null` caeuq `undefined`, `typeof` doengz rox ndaej bienh daengz gwnz.
- Daengz mbouj gyaeuj type string fuzap hoz custom, yongh `getTypeOf` laux gwnz fallback bijauz.
- Rox ndaej gwnz boolean yooj (`true`/`false`), hoz guard caeuq branching yongh ndaej.

## 用法

### 语法

函数：

- `isOfType(value, type)`

参数：

- `value`: Gwnz value daengz gwnz doengz `type` laux gwnz.
- `type`: Type string gwnz baujqhaeuj, yongh laux gwnz type daengz gwnz.

### 本地函数导入

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input li aenq ndaej aeu
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input li aenq ndaej aeu
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isOfType(value, type)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isOfType](../_analysis/isOfType.md)

<br>

---

<small>此文件于 30 January 2026 at 17:07:29 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>