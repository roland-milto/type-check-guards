# areDecimals

## 说明

Check kare hai ki array me sabhi elements decimal numbers hai aur array bhara hua hai, aur `true` ya `false` return kare
hai.

### 使用场景

User-provided lists (jaise, CSV columns ya form inputs) validate karo taaki array khali na ho aur har entry decimal
value ho, parsing ya calculations se pahile.

> **给 TypeScript 用户的提示：**
>
> `areDecimals` ke use karo jab tumhe ek jaldi boolean check chahi ki `unknown[]` non-empty hai aur har element decimal
> representation hai.

### 优势

- Yeh sunischit kare hai ki input ek bhara hua array hai items validate karne se pahile, jisse khali lists ke galti se
  accept hone se bachav hota hai.
- Har element ke `isDecimal` se validation kare hai, isliye mixed ya galat values turant `false` result deti hai.
- Ek saral boolean outcome (`true`/`false`) deta hai jo guards aur early-return validation flows ke laayak hai.

## 用法

### 语法

函数：

- `areDecimals(array)`

参数：

- `array`: Check kare khatir array.

### 本地函数导入

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // सही
console.log(areDecimals(b)); // गलत
console.log(areDecimals(c)); // गलत
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areDecimals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>该文件于 31 January 2026 at 15:57:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>