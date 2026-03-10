# isBinary

## 说明

`isBinary` ایہ طے کردا اے کہ کوئی value بائنری سٹرنگ اے (اختیاری طور تے `0b`/`0B` prefix دے نال) تے `true` یا `false`
واپس کردا اے۔

### 使用场景

یوزر ولوں دتیاں سٹرنگاں (مثلاً فارم فیلڈز، CLI args، config values) دی تصدیق کرو کہ اوہ صرف بائنری digits نوں ظاہر
کردیاں نیں، اختیاری طور تے `0b`/`0B` prefix دے نال، اگّے پروسیسنگ توں پہلاں۔

> **给 TypeScript 用户的提示：**
>
> `isBinary` نوں type guard وجوں parsing یا سٹرنگ نوں `BigInt`/`Number` وچ تبدیل کرن توں پہلاں استعمال کرو تاں جو غلط
> input توں بچیا جا سکے۔

### 优势

- `0b`/`0B` prefix دے نال یا بغیر بائنری سٹرنگاں قبول کردا اے۔
- خالی سٹرنگاں تے اگّے/پچھّے والی whitespace (ASCII ≤ 32) دے نال سٹرنگاں نوں ردّ کردا اے۔
- بغیر throw کیتے `true`/`false` واپس کردا اے، ایس لئی نامعلوم input لئی محفوظ اے۔

## 用法

### 语法

函数：

- `isBinary(value)`

参数：

- `value`: چیک کرن لئی قدر۔

### 本地函数导入

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // सही
const b = isBinary("1010");   // सही
const c = isBinary("0b1020"); // गलत
const d = isBinary(0b1010);     // गलत

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isBinary(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isBinary](../_analysis/isBinary.md)

<br>

---

<small>该文件于 31 January 2026 at 23:10:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>