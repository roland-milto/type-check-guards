# isObject

## 说明

Dekhawa ki diya gail `value` `object` aahe ki na ( `null` ke chhoṛ ke ).

### 使用场景

Unknown input (jaise parsed JSON, API response, event payload) ke validate kare khatir `isObject` use kara, property
access kare se pahile; ee ensure kare ki value object aahe aur `null` na.

> **给 TypeScript 用户的提示：**
>
> `isObject` ek runtime guard aahe je boolean return kare; ee kisi specific object shape me narrow na kare. Jab strong
> typing chahi, tab aur check (jaise property existence) ke saath mila ke use kara.

### 优势

- `typeof` jiska `"object"` aahe, aise non-`null` value khali `true` return kare.
- JavaScript me aam galti te bachawe jithe `null` ke bhi object samjhi lewa jata.
- Plain object aur built-in object instance (jaise `Date`, `RegExp`) khatir bhi kaam kare.
- Simple, fast runtime check; defensive programming aur input validation khatir theek.

## 用法

### 语法

函数：

- `isObject(value)`

参数：

- `value`: `object` hone khatir check kare wala value.

### 本地函数导入

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input runtime me non-null object hai
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isObject(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isObject](../_analysis/isObject.md)

<br>

---

<small>该文件于 31 January 2026 at 00:18:47 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>