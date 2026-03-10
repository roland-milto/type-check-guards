# areNumerics

## 说明

`areNumerics` check karda hai ke koi value ik non-empty array hai jithe saare elements numeric ne.

### 使用场景

`areNumerics` nu external ya untyped data (jiven JSON payloads, query parameters, form input) nu validate karan layi use
karo, sums, averages, ya hor numeric operations calculate karan ton pehlan, eh yakeeni banaunda hai ke input ik
non-empty numeric array hai, nahin taan `false` wapas karda hai.

> **给 TypeScript 用户的提示：**
>
> `areNumerics` nu `unknown` input nu guard karan layi use karo, is nu numeric array samajhan ton pehlan; eh non-arrays
> te empty arrays layi `false` wapas karda hai.

### 优势

- `true` sirf ohdon wapas karda hai jadon input ik non-empty array hove te har element numeric hove.
- Jaldi fail karda hai: jiven hi koi non-numeric element labh jave, check rok dinda hai te `false` wapas karda hai.
- Numeric operations karan ton pehlan unknown input nu safely validate karan vich madad karda hai.

## 用法

### 语法

函数：

- `areNumerics(array)`

参数：

- `array`: Numeric elements layi check karan wala array.

### 本地函数导入

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // true
console.log(areNumerics(b)); // true
console.log(areNumerics(c)); // false
console.log(areNumerics(d)); // false
console.log(areNumerics(e)); // false

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areNumerics(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>该文件于 6 February 2026 at 16:05:28 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>