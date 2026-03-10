# arePrimitives

## 说明

`arePrimitives` जाँच करै छै जे देल गेल, खाली नहि होएबला array मे सभ तत्व primitive प्रकारक अछि कि नहि।

### 使用场景

आबैत data (जइसे query parameters, CSV row values, वा IDs/tags क सूची) के serialize, hash, log करबाक, वा ओहि APIs क देबाक
पहिने जाँच करू जे objects स्वीकार नहि करै छै, ताकि ई सुनिश्चित भ’ जाए जे ओहि मे खाली primitive मान सभ अछि।

> **给 TypeScript 用户的提示：**
>
> जखन अहाँ केँ ई सुनिश्चित करबाक हो जे `unknown[]` मे खाली primitive मान (string, number, bigint, boolean, symbol,
> undefined, वा null) अछि, तखन आगू प्रक्रिया करबाक पहिने `arePrimitives` उपयोग करू।

### 优势

- `true` तखनै लौटाबै छै जखन हर तत्व एकटा primitive मान होइ छै, जेकरा सँ ई “कोनो objects/functions नहि” array लेल कड़गर
  guard बनि जाइ छै।
- जल्दी fail करै छै: जइने कोनो non-primitive तत्व भेटैत छै, तइने `false` लौटाबै छै।
- Non-arrays आ खाली arrays लेल सेहो `false` लौटाबै छै (filled-array check द्वारा), जेकरा सँ गलत input के अनजाने स्वीकार
  होएब सँ बचाव होइ छै।

## 用法

### 语法

函数：

- `arePrimitives(array)`

参数：

- `array`: ओ array जेकरा मे primitive प्रकारक तत्व सभक जाँच करबाक अछि।

### 本地函数导入

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // सहीं
const r2 = arePrimitives(b); // सहीं
const r3 = arePrimitives(c); // गलत
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.arePrimitives(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>该文件于 31 January 2026 at 00:04:55 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>