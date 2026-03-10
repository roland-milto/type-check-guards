# isObject

## 说明

Cingjdingh `value` mbouj mbouj haenh `object` (mbouj daengz `null`).

### 使用场景

Aeu `isObject` roxnaengz validate unknown input (daengznaeuz parsed JSON, API responses, event payloads) gyoengq youq
access properties, cingjdingh value haenh object laengz mbouj haenh `null`.

> **以下为 TypeScript 用法：**
>
> `isObject` haenh runtime guard, raeuj boolean; mbouj aeu narrowing daengz roengz object shape roxnaengz. Neix ndei aeu
> roengz sawj daengznaeuz (daengz property existence) dwg youq aeu typing gwnz gaj.

### 优点

- `typeof` si "object" laengz, daengz `null` mbouj, ndei roxnaengz `true`.
- Gij boux JavaScript roengz sawj, `null` daengz aen "object" haenh; daengznaeuz roengz sawj aeu.
- Gwnz roengz sawj daengz plain object laengz built-in object instance (daengznaeuz `Date`, `RegExp`).
- Gij roengz sawj yooj, vaenh, raeuj; habdangz aeu haenh defensive programming laengz input validation.

## 用法

### 语法

函数：

- `isObject(value)`

参数：

- `value`: Gij `value` ndei roxnaengz sawj haenh `object`.

### 本地函数导入

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input cuj laengh mwngz ndei raeuj haenq
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isObject(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isObject](../_analysis/isObject.md)

<br>

---

<small>此文件于 31 January 2026 at 00:26:35 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>