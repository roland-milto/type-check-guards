# isPlainObject

## 说明

Roxnaiz aen `value` gyaeuj mbouj gyaeuj aen plain object, aen gyaeuj laux gwnz `true`, mbouj gyaeuj laux gwnz `false`.

### 使用场景

Yanzhengz aen `unknown` input (yaiz daengz parsed JSON, external data, mazoh function arguments) gyaeuj mbouj gyaeuj aen
plain object, caeuq gwnz ndei roxnaiz keys mazoh mapping aen ndaej typed configuration object.

> **以下为 TypeScript 用法：**
>
> `isPlainObject` raeuz yonghwnj daengz gyaeuj `unknown` gwnz ndaej caeuq gwnz ndei aen record-like object; aen gwnz
`true` cingq laux gwnz ndaej de value, gwnz ndei aen internal tag `[object Object]`.

### 优点

- Cungj aen, raeuz, daengz roxnaiz daengz gwnz haenq aen raeuz gyaeuj mbouj gyaeuj aen plain object (yaiz daengz
  `Object` / `{}`), daengz raeuz gwnz `true` mazoh `false`.
- Cungj haenq plain object caeuq arrays, functions, `null`, laeuz gyaeuj mbouj aen plain object de leixbingz.
- Yonghwnj aen type guard laux TypeScript, daengz raeuz gyaeuj `unknown` gwnz ndaej caeuq gwnz ndei roxnaiz ndaw object
  properties.

## 用法

### 语法

函数：

- `isPlainObject(value)`

参数：

- `value`: Gwnz haenq aen value daengz roxnaiz plain object status.

### 本地函数导入

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input li a plain object neix
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false

```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isPlainObject(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>此文件于 6 February 2026 at 12:20:45 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>