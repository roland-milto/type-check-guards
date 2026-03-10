# areDecimals

## تفصیل

چیک کرتا ہے کہ آیا ایک array کے تمام عناصر اعشاری اعداد ہیں اور array بھرا ہوا ہے، اور `true` یا `false` واپس کرتا ہے۔

### استعمال کا معاملہ

صارف کی فراہم کردہ فہرستوں (مثلاً CSV کالمز یا فارم اِن پٹس) کی توثیق کریں تاکہ parsing یا calculations سے پہلے یہ یقینی
ہو کہ array خالی نہیں ہے اور ہر اندراج ایک اعشاری قدر ہے۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areDecimals` اس وقت استعمال کریں جب آپ کو فوری boolean چیک درکار ہو کہ ایک `unknown[]` خالی نہیں ہے اور ہر عنصر
> اعشاری نمائندگی ہے۔

### فوائد

- آئٹمز کی توثیق سے پہلے یہ یقینی بناتا ہے کہ ان پٹ ایک بھرا ہوا array ہے، جس سے خالی فہرستوں کی غلطی سے قبولیت روکی
  جاتی ہے۔
- ہر عنصر کی `isDecimal` کے ذریعے توثیق کرتا ہے، اس لیے ملے جلے یا غیر درست اقدار فوراً `false` نتیجہ دیتی ہیں۔
- ایک سادہ boolean نتیجہ (`true`/`false`) فراہم کرتا ہے جو guards اور early-return والی validation flows کے لیے موزوں
  ہے۔

## استعمال

### نحو

فنکشن:

- `areDecimals(array)`

پیرامیٹرز:

- `array`: چیک کیے جانے والا array۔

### لوکل فنکشن امپورٹ

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); //‎ درست
console.log(areDecimals(b)); //‎ غلط
console.log(areDecimals(c)); //‎ غلط
```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areDecimals(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areDecimals](‎../_analysis/areDecimals.md‎)

<br>

---

<small>فائل 31 January 2026 at 15:59:41 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>