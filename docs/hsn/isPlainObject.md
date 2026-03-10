# isPlainObject

## 说明

Check karda ae ke ditta hoya `value` plain object ae te je ae taan `true`, nahin taan `false` wapas karda ae.

### 使用场景

Eh validate karan layi ke `unknown` input (jiven parsed JSON, external data, ya function arguments) plain object ae,
keys read karan ya isnu typed configuration object vich map karan ton pehlan.

> **给 TypeScript 用户的提示：**
>
> `isPlainObject` `unknown` nu record-like object samajh ke use karan ton pehlan narrow karan layi faidemand ae; eh sirf
> ohna values layi `true` dinda ae jinna da internal tag `[object Object]` hove.

### 优势

- Eh saadi, bharosey jog check dinda ae ke koi value plain object (yaani `Object` / `{}`) ae ke nahin, te `true` ya
  `false` wapas karda ae.
- Plain objects nu arrays, functions, `null`, te hor non-plain object types ton vakh karan vich madad karda ae.
- TypeScript vich type guard vajon faidemand ae, taan jo object properties access karan ton pehlan `unknown` values nu
  narrow kita ja sake.

## 用法

### 语法

函数：

- `isPlainObject(value)`

参数：

- `value`: Oh value jinnu plain object status layi test karna ae.

### 本地函数导入

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input इहाँ एक सादा ऑब्जेक्ट है
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // सही
console.log(isPlainObject([])); // गलत
console.log(isPlainObject(null)); // गलत
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isPlainObject(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>该文件于 6 February 2026 at 12:17:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>