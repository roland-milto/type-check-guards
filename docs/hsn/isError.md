# isError

## 说明

Check karta hai ki dewal `value` `Error` ke instance hai ki nai.

### 使用场景

`isError` ke use tab karo jab tohra paas ek `unknown` value aave (jaise `catch` block, callback, ya external library se)
aur tohra ke safely decide kare ke jarurat ho ki ee `Error` hai ki nai, `message`, `name`, ya `stack` padhe se pahile.

> **给 TypeScript 用户的提示：**
>
> `unknown` values (jaise `catch` se) ke `Error` samajhe se pahile guard kare khatir `isError` ke use karo.

### 优势

- Ih `Error` instance hai ki nai, iske waste ek sadharan runtime check deta hai.
- `message` ya `stack` jaisan `Error` properties access kare se pahile unknown inputs ke narrow kare me madad karta hai.
- `catch`, external APIs, ya untyped sources se aayel values handle karte waqt runtime exceptions ke risk ke kam karta
  hai.

## 用法

### 语法

函数：

- `isError(value)`

参数：

- `value`: `Error` type ke against check kare khatir value.

### 本地函数导入

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isError(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isError](../_analysis/isError.md)

<br>

---

<small>该文件于 6 February 2026 at 12:45:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>