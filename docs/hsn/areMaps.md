# areMaps

## 说明

`areMaps` eh tay kare hai ki ditti gayi array khaali nahi hai te ohde saare elements `Map` instances han.

### 使用场景

Unknown input (jaiven JSON parsing, external APIs, ya dynamic sources ton) nu validate karo, is ton pehlan ki ohnu `Map`
objects di non-empty list samajh ke vartya jaave.

> **给 TypeScript 用户的提示：**
>
> Khaali array layi `false` wapas kare hai; eh `true` sirf ohdon wapas kare hai jadon array bhari hoye te har element ik
`Map` hove.

### 优势

- Yih sunischit kare hai ki har element ik `Map` instance hai, te `true` sirf ohdon wapas kare hai jadon poori array
  check paas kar jaave.
- Design anusaar khaali arrays nu reject kare hai, jis naal “koi data nahi” nu galti naal valid input mannan ton bachav
  hunda hai.
- Collection vich `Map`-specific operations (jaiven `.get()`, `.set()`, iteration) karan ton pehlan guard vajoṅ
  laabhdayak hai.

## 用法

### 语法

函数：

- `areMaps(array)`

参数：

- `array`: Check karan layi array.

### 本地函数导入

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items के runtime में Map instance के non-empty array होवे के गारंटी बा
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // ई false होखेला: खाली array खातिर, भा अइसन array खातिर जेकरा में कवनो non-Map value होखे
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areMaps(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areMaps](../_analysis/areMaps.md)

<br>

---

<small>该文件于 31 January 2026 at 16:12:52 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>