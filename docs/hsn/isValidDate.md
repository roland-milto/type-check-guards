# isValidDate

## 说明

`isValidDate` check kare hai ki dehal value ek valid `Date` object hai ki nai, aur `true` sirf asli, non-invalid dates
khatir return kare hai.

### 使用场景

User input ya API data validate kara je me dates ho sakela, taaki value ek asli `Date` instance ho aur invalid date na
ho, date calculations, formatting, ya comparisons kare se pahile.

> **给 TypeScript 用户的提示：**
>
> `unknown` type ke values par `Date` methods (jaise, `toISOString`, `getTime`) call kare se pahile `isValidDate` use
> kara, taaki sunischit ho jae ki u valid `Date` objects hai.

### 优势

- Ih sunischit kare hai ki ek value `Date` instance hai, sirf date-jaisan string ya number nai.
- Galat dates (jaise, `new Date("invalid")`) ke reject kare hai `NaN` time values ke check karke.
- Sadharan boolean guard, je conditionals aur validation pipelines me asani se use ho sakela.
- Date methods call karte samay runtime errors se bachave me madad kare hai, input ke pahile verify karke.

## 用法

### 语法

函数：

- `isValidDate(value)`

参数：

- `value`: Check kare khatir value.

### 本地函数导入

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input ek valid Date instance hai
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isValidDate(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>该文件于 30 January 2026 at 16:40:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>