# areDates

## 说明

`areDates` nirdhārit kare hai ki diyā gayā array bhara huā hai aur sirf `Date` objects rakhe hai, aur `true` tabhī
return kare hai jab sabhī elements valid dates hon.

### 使用场景

Unknown input (jaise parsed JSON, form data, API payloads) ko validate karne ke liye `areDates` kā upyog karo,
date-specific logic chalāne se pahle—jaise time ke hisāb se sorting, formatting, yā ranges compute karnā.

> **给 TypeScript 用户的提示：**
>
> Sirf non-empty arrays ke liye `true` return kare hai jisme har element `Date` ho; khālī arrays par `false` miltā hai.

### 优势

- Array ke non-empty honā sunischit kare hai, iske contents validate karne se pahle, khālī input par `true` aane se
  bachātā hai.
- Har element ke `Date` instance hone kī jānch kare hai, pahle mismatch par turant `false` return kare hai.
- Array items par date-specific operations karne se pahle guard-style check ke rūp me upyogī hai.

## 用法

### 语法

函数：

- `areDates(array)`

参数：

- `array`: `Date` objects ke liye jānchā jāne wālā array.

### 本地函数导入

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // साँचो
console.log(areDates(b)); // झूठो
console.log(areDates(c)); // झूठो

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areDates(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areDates](../_analysis/areDates.md)

<br>

---

<small>该文件于 31 January 2026 at 15:30:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>