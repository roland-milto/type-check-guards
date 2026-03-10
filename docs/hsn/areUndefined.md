# areUndefined

## 说明

`areUndefined` जांचेला कि दिहल array में हर element `undefined` बा कि ना।

### 使用场景

Validate करीं कि optional results के list में कवनो असली value नइखे (खाली `undefined`), जइसे lookups के mapping के बाद
जहवां missing entries के `undefined` से देखावल जाला, आ रउआ चाहत बानी कि सब lookup fail भइल बा कि ना।

> **给 TypeScript 用户的提示：**
>
> `areUndefined` तब इस्तेमाल करीं जब रउआ के ई assert करे के हो कि `unknown[]` में खाली `undefined` value बा; ई खाली
> arrays आ non-array/invalid inputs खातिर `false` लौटावेला, काहेकि भीतर `isFilledArray` check होखेला।

### 优势

- `isFilledArray` के जरिए भरल array के जरूरत रखके non-array आ खाली array खातिर `false` लौटावेला।
- ई पक्का करेला कि हर element `undefined` बा, खाली कुछ ना, एहसे मंशा साफ हो जाला।
- अनजान input collection के validate करत घरी guard-style predicate के रूप में काम के बा।

## 用法

### 语法

函数：

- `areUndefined(array)`

参数：

- `array`: `undefined` elements खातिर जांचे वाला array।

### 本地函数导入

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// नोट: खाली ऐरे खातिर false लौटावेला
const r4 = areUndefined([]); // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areUndefined(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>该文件于 30 January 2026 at 13:56:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>