# isUndefined

## 说明

जांचेला कि दिहल मान `undefined` बा कि ना।

### 使用场景

Optional input सभ के guard करे, missing property सभ के पकड़े, भा “ना दिहल गइल” (`undefined`) आ “जान-बूझ के खाली” (
`null`) के बीच फर्क करे खातिर `isUndefined` के इस्तेमाल करीं।

> **给 TypeScript 用户的提示：**
>
> `isUndefined` तब इस्तेमाल करीं जब रउआ के खास तौर पर `undefined` (ना कि `null`) पकड़े के जरूरत होखे। ई सुरक्षित बा काहे
> कि ई `typeof value === "undefined"` पर निर्भर बा।

### 优势

- `typeof` के इस्तेमाल से `undefined` खातिर साफ, खुल्लम-खुल्ला जांच देला, आ बिना घोषित (undeclared) variable सभ में होखे
  वाला edge case से बचावेला।
- एक ठो सरल boolean नतीजा (`true`/`false`) लौटावेला, जे guard, branching, आ validation logic खातिर ठीक बा।
- `undefined` के अउरी “खाली” मान जइसे `null`, `0`, `""`, भा `NaN` से अलग पहचान करे में मदद करेला।

## 用法

### 语法

函数：

- `isUndefined(value)`

参数：

- `value`: जवन मान के जांचल जाई।

### 本地函数导入

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x इहाँ undefined अछि
} else {
  // x इहाँ undefined नहि अछि
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isUndefined(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>该文件于 30 January 2026 at 14:03:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>