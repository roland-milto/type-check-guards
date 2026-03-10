# isOctal

## 说明

ایہ طے کرے ہے کہ کوئی ویلیو درست اوکٹل لِٹرل سٹرنگ اے (مثال: `0o755`)۔

### 使用场景

یوزر اِن پُٹ یا کنفیگریشن ویلیوز نوں ویلیڈیٹ کرو جیہڑیاں لازمی طور تے اوکٹل لِٹرل سٹرنگ وچ ہون (مثال دے طور تے فائل
پرمیشن موڈز جیویں `0o644`) پارس یا کنورٹ کرن توں پہلاں۔

> **给 TypeScript 用户的提示：**
>
> `isOctal` اک ٹائپ گارڈ اے (`value is string`)۔ `true` نتیجے توں بعد، TypeScript چیک کیتی گئی ویری ایبل نوں `string` تک
> نیرَو کرے ہے۔

### 优势

- سخت ٹائپ گارڈ فراہم کرے ہے: صرف اوہدے ویلے `true` واپس کرے ہے جدوں اِن پُٹ اک سٹرنگ ہووے جیہڑی اک اوکٹل لِٹرل فارمیٹ
  نال میچ کرے۔
- خالی سٹرنگاں تے اگّے/پچھّے وائٹ اسپیس (ASCII کنٹرول/اسپیس) والی سٹرنگاں نوں ردّ کرے ہے، جس نال غلطی نال میچ ہون دے
  امکان گھٹدا اے۔
- اختیاری سائن نوں سپورٹ کرے ہے تے `0o`/`0O` پریفکس لئی کیس اِن سینسِٹو اے۔
- نان-سٹرنگ اِن پُٹس لئی نرمی رکھدا اے: ایرر تھرون کرن دی بجائے `false` واپس کرے ہے۔

## 用法

### 语法

函数：

- `isOctal(value)`

参数：

- `value`: چیک کرن لئی ویلیو۔

### 本地函数导入

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // true
console.log(isOctal(b)); // true
console.log(isOctal(c)); // false
console.log(isOctal(d)); // false

if (isOctal(a)) {
  // a इहाँ स्ट्रिंग अछि
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isOctal(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isOctal](../_analysis/isOctal.md)

<br>

---

<small>该文件于 30 January 2026 at 15:41:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>